import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import type { NavigationProp } from "@react-navigation/native";
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { AccessibilityInfo, Animated, Easing, Platform, Pressable, StyleSheet, Text, View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";

import { PortfolioImage } from "@/components/PortfolioImage";
import { useAppTheme } from "@/hooks/useAppTheme";
import { openExternal, parseProjectLink } from "@/lib/links";
import type { SiteStackParamList } from "@/navigation/types";

const SCROLL_MS_PER_SLIDE = 8000;
const SLIDE_MS = 4000;
const PAUSE_AFTER_ARROW_MS = 1500;
const DRAG_THRESHOLD = 8;
const SLIDE_PERCENT = 0.44;
const GAP_PX = 8;
const EASE_OUT = Easing.bezier(0, 0, 0.2, 1);

/** "continuous" keeps the track moving. "step" advances one project at a time. */
type CarouselMode = "continuous" | "step";

export type ShowcaseSlide = {
  title: string;
  description?: string;
  imageKey?: string;
  link?: string;
};

type Layout = {
  width: number;
  slideWidth: number;
  stride: number;
  centerPad: number;
};

function wrapOffset(offset: number, count: number) {
  if (count <= 1) return offset;
  let next = offset;
  while (next >= count * 2) next -= count;
  while (next < count) next += count;
  return next;
}

function normalizeOffset(offset: number, count: number) {
  if (count <= 1) return offset;
  return (((offset % count) + count) % count) + count;
}

function shortestDelta(target: number, active: number, count: number) {
  const delta = target - active;
  if (delta > count / 2) return delta - count;
  if (delta < -count / 2) return delta + count;
  return delta;
}

export function ShowcaseCarousel({ slides }: { slides: ShowcaseSlide[] }) {
  const { colors } = useAppTheme();
  const navigation = useNavigation<NavigationProp<SiteStackParamList>>();
  const count = slides.length;
  const loop = count > 1 ? [...slides, ...slides, ...slides] : slides;

  const [mode, setMode] = useState<CarouselMode>("continuous");
  const [width, setWidth] = useState(0);
  const [roundedOffset, setRoundedOffset] = useState(count);
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [systemReduceMotion, setSystemReduceMotion] = useState(false);
  const [webReduceMotion, setWebReduceMotion] = useState(false);
  const reduceMotion = systemReduceMotion || webReduceMotion;

  const offsetRef = useRef(count);
  const roundedRef = useRef(count);
  const modeRef = useRef(mode);
  const countRef = useRef(count);
  const heldRef = useRef(false);
  const draggingRef = useRef(false);
  const dragStart = useRef(count);
  const suppressClick = useRef(false);
  const pauseUntil = useRef(0);
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const suppressHover = useRef(false);
  const animation = useRef<Animated.CompositeAnimation | null>(null);
  const translateX = useRef(new Animated.Value(0)).current;
  const layoutRef = useRef<Layout>({ width: 0, slideWidth: 0, stride: 1, centerPad: 0 });

  modeRef.current = mode;
  countRef.current = count;

  const slideWidth = width * SLIDE_PERCENT;
  const stride = slideWidth + GAP_PX;
  const centerPad = (width - slideWidth) / 2;
  layoutRef.current = { width, slideWidth, stride, centerPad };

  const xFor = (offset: number) => layoutRef.current.centerPad - offset * layoutRef.current.stride;

  const updateActive = (value: number) => {
    const rounded = Math.round(value);
    if (rounded === roundedRef.current) return;
    roundedRef.current = rounded;
    const total = countRef.current;
    setRoundedOffset(rounded);
    setActiveIndex(total === 0 ? 0 : ((rounded % total) + total) % total);
  };

  const stopAnimation = () => {
    animation.current?.stop();
    animation.current = null;
    translateX.stopAnimation();
  };

  const paint = (next: number) => {
    if (animation.current) stopAnimation();
    offsetRef.current = next;
    if (layoutRef.current.width > 0) translateX.setValue(xFor(next));
    updateActive(next);
  };

  const animateTo = (next: number) => {
    offsetRef.current = next;
    updateActive(next);
    if (layoutRef.current.width <= 0) return;
    stopAnimation();
    const anim = Animated.timing(translateX, {
      toValue: xFor(next),
      duration: 500,
      easing: EASE_OUT,
      useNativeDriver: true,
    });
    animation.current = anim;
    anim.start(({ finished }) => {
      if (animation.current === anim) animation.current = null;
      if (!finished) return;
      const normalized = normalizeOffset(offsetRef.current, countRef.current);
      if (normalized === offsetRef.current) return;
      offsetRef.current = normalized;
      translateX.setValue(xFor(normalized));
      updateActive(normalized);
    });
  };

  const paintRef = useRef(paint);
  const animateRef = useRef(animateTo);
  const stopRef = useRef(stopAnimation);
  paintRef.current = paint;
  animateRef.current = animateTo;
  stopRef.current = stopAnimation;

  const holdAfterArrow = () => {
    pauseUntil.current = performance.now() + PAUSE_AFTER_ARROW_MS;
    heldRef.current = true;
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => {
      resumeTimer.current = null;
      heldRef.current = false;
    }, PAUSE_AFTER_ARROW_MS);
  };

  const finishDrag = () => {
    if (!draggingRef.current) return;
    draggingRef.current = false;
    const total = countRef.current;
    const rounded = Math.round(offsetRef.current);
    const wrapped = wrapOffset(rounded, total);
    const jumped = wrapped !== rounded;
    if (modeRef.current === "continuous") holdAfterArrow();
    else heldRef.current = false;
    if (jumped) paintRef.current(wrapped);
    else animateRef.current(wrapped);
  };

  const finishDragRef = useRef(finishDrag);
  finishDragRef.current = finishDrag;

  const moveBy = (delta: number, behavior: "arrow" | "tap") => {
    if (delta === 0) return;
    const stepped = modeRef.current === "step";
    if (behavior === "arrow") {
      // The pointer is already over the carousel to reach an arrow. Drop that
      // hover pause so the short hold can end and scrolling can continue.
      // Hover pauses again the next time the pointer enters.
      suppressHover.current = true;
      setPaused(false);
      if (!stepped) holdAfterArrow();
    }
    const base = stepped ? offsetRef.current : Math.round(offsetRef.current);
    const next = stepped ? base + delta : wrapOffset(base + delta, countRef.current);
    if (stepped) animateRef.current(next);
    else paintRef.current(next);
  };

  const openSlide = (link?: string) => {
    const parsed = parseProjectLink(link);
    if (parsed) {
      navigation.navigate("project", parsed);
      return;
    }
    if (link) void openExternal(link);
  };

  const toggleMode = () => {
    if (modeRef.current === "continuous") {
      modeRef.current = "step";
      paint(wrapOffset(Math.round(offsetRef.current), countRef.current));
      setMode("step");
      return;
    }
    modeRef.current = "continuous";
    setMode("continuous");
  };

  useEffect(() => {
    const apply = (enabled: boolean) => setSystemReduceMotion(enabled);
    void AccessibilityInfo.isReduceMotionEnabled().then(apply);
    const subscription = AccessibilityInfo.addEventListener("reduceMotionChanged", apply);
    return () => subscription.remove();
  }, []);

  useEffect(() => {
    if (Platform.OS !== "web") return;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setWebReduceMotion(media.matches);
    apply();
    media.addEventListener("change", apply);
    return () => media.removeEventListener("change", apply);
  }, []);

  useEffect(
    () => () => {
      if (resumeTimer.current) clearTimeout(resumeTimer.current);
    },
    [],
  );

  useLayoutEffect(() => {
    if (width <= 0 || draggingRef.current) return;
    paintRef.current(offsetRef.current);
  }, [width]);

  useEffect(() => {
    if (mode !== "continuous" || paused || reduceMotion || count <= 1) return;
    let frame = 0;
    let last = performance.now();
    const tick = (now: number) => {
      const dt = Math.min(now - last, 64);
      last = now;
      if (
        layoutRef.current.width > 0 &&
        modeRef.current === "continuous" &&
        now >= pauseUntil.current &&
        !heldRef.current &&
        !draggingRef.current
      ) {
        paintRef.current(wrapOffset(offsetRef.current + dt / SCROLL_MS_PER_SLIDE, countRef.current));
      }
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [mode, paused, reduceMotion, count]);

  useEffect(() => {
    if (mode !== "step" || paused || reduceMotion || count <= 1) return;
    const id = setInterval(() => {
      if (heldRef.current || draggingRef.current) return;
      animateRef.current(offsetRef.current + 1);
    }, SLIDE_MS);
    return () => clearInterval(id);
  }, [mode, paused, reduceMotion, count, activeIndex]);

  const pan = useMemo(
    () =>
      Gesture.Pan()
        .runOnJS(true)
        .enabled(count > 1)
        .activeOffsetX([-DRAG_THRESHOLD, DRAG_THRESHOLD])
        .failOffsetY([-DRAG_THRESHOLD, DRAG_THRESHOLD])
        .onStart(() => {
          dragStart.current = offsetRef.current;
          heldRef.current = true;
          draggingRef.current = true;
          stopRef.current();
        })
        .onUpdate(event => {
          suppressClick.current = true;
          const next = wrapOffset(
            dragStart.current - event.translationX / (layoutRef.current.stride || 1),
            countRef.current,
          );
          paintRef.current(next);
        })
        .onFinalize(() => {
          const wasDragging = draggingRef.current;
          finishDragRef.current();
          if (!wasDragging) return;
          setTimeout(() => {
            suppressClick.current = false;
          }, 50);
        }),
    [count, translateX],
  );

  if (count === 0) return null;

  const stepped = mode === "step";
  const hoverHandlers =
    Platform.OS === "web"
      ? {
          onPointerEnter: (event: { nativeEvent: { pointerType: string } }) => {
            if (event.nativeEvent.pointerType === "touch" || suppressHover.current) return;
            setPaused(true);
          },
          onPointerLeave: (event: { nativeEvent: { pointerType: string } }) => {
            if (event.nativeEvent.pointerType === "touch") return;
            suppressHover.current = false;
            setPaused(false);
          },
        }
      : {};

  return (
    <View
      accessibilityLabel="Featured projects"
      onLayout={event => {
        const nextWidth = event.nativeEvent.layout.width;
        setWidth(current => (current === nextWidth ? current : nextWidth));
      }}
      {...hoverHandlers}
      style={[styles.section, width === 0 ? styles.pending : null]}
    >
      <GestureDetector gesture={pan}>
        <View style={styles.viewport} collapsable={false}>
          <Animated.View style={[styles.track, { gap: GAP_PX, transform: [{ translateX }] }]}>
            {loop.map((slide, slideIndex) => {
              const isActive = stepped
                ? slideIndex % count === activeIndex && Math.floor(slideIndex / count) === Math.floor(roundedOffset / count)
                : slideIndex === roundedOffset;
              return (
                <Pressable
                  key={`${slide.title}-${slideIndex}`}
                  accessibilityRole="link"
                  accessibilityLabel={slide.title}
                  accessibilityElementsHidden={!isActive}
                  importantForAccessibility={isActive ? "auto" : "no-hide-descendants"}
                  onPress={() => {
                    if (suppressClick.current) return;
                    if (!isActive) {
                      moveBy(shortestDelta(slideIndex % count, activeIndex, count), "tap");
                      return;
                    }
                    openSlide(slide.link);
                  }}
                  style={[
                    styles.slide,
                    {
                      width: slideWidth || undefined,
                      opacity: isActive ? 1 : 0.9,
                    },
                  ]}
                >
                  <PortfolioImage imageKey={slide.imageKey} style={styles.image} />
                  <View style={styles.caption}>
                    <View style={[StyleSheet.absoluteFill, { backgroundColor: colors.secondary, opacity: 0.85 }]} />
                    <Text numberOfLines={2} style={[styles.title, { color: colors.onSecondary }]}>
                      {slide.title}
                    </Text>
                    {slide.description ? (
                      <Text numberOfLines={2} style={[styles.description, { color: colors.onSecondary }]}>
                        {slide.description}
                      </Text>
                    ) : null}
                  </View>
                </Pressable>
              );
            })}
          </Animated.View>
        </View>
      </GestureDetector>

      {count > 1 ? (
        <View style={styles.controls}>
          <Pressable
            accessibilityRole="switch"
            accessibilityState={{ checked: !stepped }}
            accessibilityLabel={stepped ? "Switch to continuous scroll" : "Switch to stepped scroll"}
            hitSlop={8}
            onPress={toggleMode}
            style={[styles.modeButton, { backgroundColor: colors.brand }]}
          >
            <View style={styles.modeIcon}>
              <Ionicons name="arrow-forward" size={10} color={colors.onBrand} />
              <Ionicons name="arrow-back" size={10} color={colors.onBrand} style={styles.modeIconBack} />
            </View>
          </Pressable>
          <View style={styles.pager}>
            <Pressable
              accessibilityRole="button"
              accessibilityLabel="Previous project"
              hitSlop={8}
              onPress={() => moveBy(-1, "arrow")}
              style={[styles.arrow, { backgroundColor: colors.brand }]}
            >
              <Ionicons name="chevron-back" size={14} color={colors.onBrand} />
            </Pressable>
            <View
              accessibilityRole={stepped ? "tablist" : undefined}
              accessibilityLabel={stepped ? "Slides" : undefined}
              style={styles.dots}
            >
              {slides.map((slide, slideIndex) => {
                const selected = slideIndex === activeIndex;
                const dotStyle = [
                  styles.dot,
                  {
                    width: selected ? 24 : 8,
                    backgroundColor: colors.brand,
                    opacity: selected ? 1 : 0.4,
                  },
                ];
                if (!stepped) return <View key={slide.title} style={dotStyle} />;
                return (
                  <Pressable
                    key={slide.title}
                    accessibilityRole="tab"
                    accessibilityLabel={`Show ${slide.title}`}
                    accessibilityState={{ selected }}
                    hitSlop={6}
                    onPress={() => moveBy(shortestDelta(slideIndex, activeIndex, count), "tap")}
                    style={dotStyle}
                  />
                );
              })}
            </View>
            <Pressable
              accessibilityRole="button"
              accessibilityLabel="Next project"
              hitSlop={8}
              onPress={() => moveBy(1, "arrow")}
              style={[styles.arrow, { backgroundColor: colors.brand }]}
            >
              <Ionicons name="chevron-forward" size={14} color={colors.onBrand} />
            </Pressable>
          </View>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    alignSelf: "stretch",
    marginHorizontal: -16,
  },
  pending: {
    opacity: 0,
  },
  viewport: {
    overflow: "hidden",
  },
  track: {
    flexDirection: "row",
    alignItems: "stretch",
  },
  slide: {
    borderRadius: 12,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    aspectRatio: 16 / 10,
  },
  caption: {
    height: 88,
    paddingHorizontal: 10,
    paddingVertical: 8,
    gap: 2,
  },
  title: {
    fontSize: 14,
    fontWeight: "700",
    lineHeight: 18,
    textAlign: "center",
  },
  description: {
    fontSize: 12,
    lineHeight: 16,
    textAlign: "center",
  },
  controls: {
    marginTop: 12,
    alignItems: "center",
    gap: 8,
  },
  modeButton: {
    width: 24,
    height: 24,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  modeIcon: {
    alignItems: "center",
  },
  modeIconBack: {
    marginTop: -4,
  },
  pager: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  arrow: {
    width: 20,
    height: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  dots: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  dot: {
    height: 8,
    borderRadius: 4,
  },
});
