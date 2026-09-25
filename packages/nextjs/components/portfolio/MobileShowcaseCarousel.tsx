"use client";

import { type MouseEvent, type PointerEvent, useEffect, useLayoutEffect, useRef, useState } from "react";
import { StaticImageData } from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeftIcon, ArrowRightIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { pushProjectOrigin } from "~~/utils/projectNavStack";

const SCROLL_MS_PER_SLIDE = 8000;
const SLIDE_MS = 4000;
const PAUSE_AFTER_ARROW_MS = 1500;
const DRAG_THRESHOLD = 8;
const SLIDE_PERCENT = 58;
const GAP_PX = 8;

/** "continuous" keeps the track moving. "step" advances one project at a time. */
export type CarouselMode = "continuous" | "step";

export type CarouselSlide = {
  title: string;
  description?: string;
  imgSrc?: string | StaticImageData;
  link?: string;
};

function imageUrl(imgSrc?: string | StaticImageData) {
  if (!imgSrc) return undefined;
  return typeof imgSrc === "string" ? imgSrc : imgSrc.src;
}

function trackTransform(offset: number) {
  const centerPad = (100 - SLIDE_PERCENT) / 2;
  return `translateX(calc(${centerPad - offset * SLIDE_PERCENT}% - ${offset * GAP_PX}px))`;
}

let scrollLoop = 0;
let pauseUntil = 0;

function wrapOffset(offset: number, count: number) {
  if (count <= 1) return offset;
  let next = offset;
  while (next >= count * 2) next -= count;
  while (next < count) next += count;
  return next;
}

export function MobileShowcaseCarousel({
  slides,
  mode = "continuous",
}: {
  slides: CarouselSlide[];
  mode?: CarouselMode;
}) {
  const pathname = usePathname();
  const count = slides.length;
  const [offset, setOffset] = useState(count);
  const [animate, setAnimate] = useState(true);
  const [dragging, setDragging] = useState(false);
  const [releaseSnap, setReleaseSnap] = useState(false);
  const [paused, setPaused] = useState(false);
  const resumeTimer = useRef<number | null>(null);
  const heldRef = useRef(false);
  const [carouselMode, setCarouselMode] = useState<CarouselMode>(mode);
  const trackRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const offsetRef = useRef(offset);
  const dragRef = useRef<{
    pointerId: number;
    startX: number;
    startY: number;
    startOffset: number;
    locked: boolean;
  } | null>(null);
  const suppressClick = useRef(false);

  const paint = (next: number) => {
    offsetRef.current = next;
    if (trackRef.current) trackRef.current.style.transform = trackTransform(next);
  };

  const active = count === 0 ? 0 : ((Math.round(offset) % count) + count) % count;
  const loop = count > 1 ? [...slides, ...slides, ...slides] : slides;
  const stepped = carouselMode === "step";
  if (stepped && !dragRef.current?.locked) offsetRef.current = offset;

  const slideStride = () => {
    const slide = trackRef.current?.firstElementChild;
    if (!(slide instanceof HTMLElement)) return 1;
    return slide.getBoundingClientRect().width + GAP_PX;
  };

  useEffect(() => {
    const loopId = ++scrollLoop;
    if (stepped || paused || count <= 1) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    let last = performance.now();

    const tick = (now: number) => {
      if (loopId !== scrollLoop) return;
      const dt = Math.min(now - last, 64);
      last = now;
      if (now < pauseUntil) {
        last = now;
        frame = requestAnimationFrame(tick);
        return;
      }
      if (!heldRef.current) {
        const next = wrapOffset(offsetRef.current + dt / SCROLL_MS_PER_SLIDE, count);
        paint(next);
        const rounded = Math.round(next);
        setOffset(current => (Math.round(current) === rounded ? current : next));
      }
      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [stepped, paused, count]);

  useEffect(() => {
    if (!stepped || paused || count <= 1) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = window.setInterval(() => {
      if (heldRef.current) return;
      setOffset(current => current + 1);
    }, SLIDE_MS);
    return () => window.clearInterval(id);
  }, [stepped, paused, count, active]);

  useLayoutEffect(() => {
    if (dragRef.current?.locked) return;
    paint(offset);
  }, [offset]);

  useEffect(() => {
    if (animate) return;
    const id = requestAnimationFrame(() => setAnimate(true));
    return () => cancelAnimationFrame(id);
  }, [animate]);

  const toggleMode = () => {
    if (carouselMode === "continuous") {
      const snapped = wrapOffset(Math.round(offsetRef.current), count);
      paint(snapped);
      setOffset(snapped);
      setCarouselMode("step");
      return;
    }
    setCarouselMode("continuous");
  };

  const holdAfterArrow = () => {
    pauseUntil = performance.now() + PAUSE_AFTER_ARROW_MS;
    heldRef.current = true;
    if (resumeTimer.current != null) window.clearTimeout(resumeTimer.current);
    resumeTimer.current = window.setTimeout(() => {
      resumeTimer.current = null;
      heldRef.current = false;
    }, PAUSE_AFTER_ARROW_MS);
  };

  useEffect(
    () => () => {
      if (resumeTimer.current != null) window.clearTimeout(resumeTimer.current);
    },
    [],
  );

  const nudge = (delta: number) => {
    if (!stepped) holdAfterArrow();
    step(delta);
  };

  const step = (delta: number) => {
    if (!stepped) {
      const next = wrapOffset(Math.round(offsetRef.current) + delta, count);
      paint(next);
      setOffset(next);
      return;
    }
    setOffset(current => current + delta);
  };

  const settle = () => {
    setReleaseSnap(false);
    if (count <= 1) return;
    const current = offsetRef.current;
    const normalized = (((current % count) + count) % count) + count;
    if (normalized === current) return;
    setAnimate(false);
    setOffset(normalized);
  };

  const onPointerDown = (event: PointerEvent<HTMLElement>) => {
    if (event.button !== 0 || count <= 1) return;
    if (event.target instanceof Element && event.target.closest("button")) return;
    dragRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      startOffset: offsetRef.current,
      locked: false,
    };
  };

  const onPointerMove = (event: PointerEvent<HTMLElement>) => {
    const drag = dragRef.current;
    if (!drag || drag.pointerId !== event.pointerId) return;
    const dx = event.clientX - drag.startX;
    const dy = event.clientY - drag.startY;
    if (!drag.locked) {
      if (Math.abs(dx) < DRAG_THRESHOLD && Math.abs(dy) < DRAG_THRESHOLD) return;
      if (Math.abs(dy) > Math.abs(dx)) {
        dragRef.current = null;
        return;
      }
      drag.locked = true;
      heldRef.current = true;
      suppressClick.current = true;
      setDragging(true);
      sectionRef.current?.setPointerCapture(event.pointerId);
    }
    paint(wrapOffset(drag.startOffset - dx / slideStride(), count));
  };

  const finishDrag = (event: PointerEvent<HTMLElement>) => {
    const drag = dragRef.current;
    if (!drag || drag.pointerId !== event.pointerId) return;
    dragRef.current = null;
    if (!drag.locked) return;
    const rounded = Math.round(offsetRef.current);
    const wrapped = wrapOffset(rounded, count);
    setDragging(false);
    if (wrapped !== rounded) {
      setAnimate(false);
      setReleaseSnap(false);
    } else if (!stepped) {
      setReleaseSnap(true);
    }
    setOffset(wrapped);
    if (stepped) heldRef.current = false;
    else holdAfterArrow();
    window.setTimeout(() => {
      suppressClick.current = false;
    }, 0);
  };

  const onClickCapture = (event: MouseEvent) => {
    if (!suppressClick.current) return;
    suppressClick.current = false;
    event.preventDefault();
    event.stopPropagation();
  };

  if (count === 0) return null;

  return (
    <section
      ref={sectionRef}
      className="-mx-4 w-[calc(100%+2rem)] touch-pan-y md:hidden"
      aria-roledescription="carousel"
      aria-label="Featured projects"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={finishDrag}
      onPointerCancel={finishDrag}
      onClickCapture={onClickCapture}
    >
      <div className="overflow-hidden">
        <div
          ref={trackRef}
          className={`flex w-full items-stretch ${
            !dragging && (stepped ? animate : releaseSnap)
              ? "transition-transform duration-500 ease-out motion-reduce:transition-none"
              : ""
          }`}
          style={{ gap: GAP_PX, transform: trackTransform(offsetRef.current) }}
          onTransitionEnd={event => {
            if (event.propertyName !== "transform") return;
            settle();
          }}
        >
          {loop.map((slide, slideIndex) => {
            const src = imageUrl(slide.imgSrc);
            const isActive = stepped
              ? slideIndex % count === active && Math.floor(slideIndex / count) === Math.floor(offset / count)
              : slideIndex === Math.round(offset);
            const isInternal = slide.link?.startsWith("/");
            const Tag = isInternal ? Link : "a";
            return (
              <Tag
                key={`${slide.title}-${slideIndex}`}
                href={slide.link || "#"}
                {...(isInternal ? {} : { target: "_blank", rel: "noreferrer" })}
                draggable={false}
                onDragStart={event => event.preventDefault()}
                className={`flex h-full shrink-0 flex-col overflow-hidden rounded-xl ${isActive ? "" : "opacity-90"}`}
                style={{ width: `${SLIDE_PERCENT}%` }}
                aria-hidden={!isActive}
                tabIndex={isActive ? 0 : -1}
                onClick={event => {
                  if (isActive) {
                    if (isInternal) pushProjectOrigin(pathname);
                    return;
                  }
                  event.preventDefault();
                  const delta = (slideIndex % count) - active;
                  const wrapped = delta > count / 2 ? delta - count : delta < -count / 2 ? delta + count : delta;
                  if (wrapped !== 0) step(wrapped);
                }}
              >
                <div
                  className="flex aspect-[16/10] w-full shrink-0 items-end bg-primary bg-cover bg-center"
                  style={src ? { backgroundImage: `url(${src})` } : undefined}
                >
                  {!src && (
                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary to-secondary text-4xl font-bold text-primary-content">
                      {slide.title.slice(0, 1)}
                    </div>
                  )}
                </div>
                <div className="flex h-28 flex-col bg-secondary bg-opacity-85 px-3 py-3">
                  <p className="line-clamp-2 text-center text-base font-bold leading-tight">{slide.title}</p>
                  {slide.description && (
                    <p className="mt-1 line-clamp-3 text-center text-xs leading-snug">{slide.description}</p>
                  )}
                </div>
              </Tag>
            );
          })}
        </div>
      </div>

      <div className="mt-3 flex flex-col items-center gap-2">
        <button
          type="button"
          role="switch"
          aria-checked={!stepped}
          aria-label={stepped ? "Switch to continuous scroll" : "Switch to stepped scroll"}
          className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-content"
          onClick={toggleMode}
        >
          <span className="flex flex-col" aria-hidden>
            <ArrowRightIcon className="h-2.5 w-2.5" />
            <ArrowLeftIcon className="-mt-1 h-2.5 w-2.5" />
          </span>
        </button>
        <div className="flex items-center justify-center gap-2">
          <button
            type="button"
            aria-label="Previous project"
            className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-primary-content"
            onClick={() => nudge(-1)}
          >
            <ChevronLeftIcon className="h-3.5 w-3.5" />
          </button>
          <div
            className="flex items-center gap-2"
            {...(stepped ? { role: "tablist" as const, "aria-label": "Slides" } : { "aria-hidden": true })}
          >
            {slides.map((slide, slideIndex) => {
              const dotClass = `h-2 rounded-full transition-all ${
                slideIndex === active ? "w-6 bg-primary" : "w-2 bg-primary bg-opacity-40"
              }`;
              if (!stepped) return <span key={slide.title} className={dotClass} />;
              return (
                <button
                  key={slide.title}
                  type="button"
                  role="tab"
                  aria-label={`Show ${slide.title}`}
                  aria-selected={slideIndex === active}
                  className={dotClass}
                  onClick={() => {
                    const delta = slideIndex - active;
                    const wrapped = delta > count / 2 ? delta - count : delta < -count / 2 ? delta + count : delta;
                    if (wrapped !== 0) step(wrapped);
                  }}
                />
              );
            })}
          </div>
          <button
            type="button"
            aria-label="Next project"
            className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-primary-content"
            onClick={() => nudge(1)}
          >
            <ChevronRightIcon className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
}
