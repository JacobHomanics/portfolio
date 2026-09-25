"use client";

import { useEffect, useRef, useState } from "react";
import { StaticImageData } from "next/image";
import Link from "next/link";
import { ArrowLeftIcon, ArrowRightIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const SCROLL_MS_PER_SLIDE = 8000;
const SLIDE_MS = 4000;
const PAUSE_AFTER_ARROW_MS = 1500;
const SWIPE_THRESHOLD = 40;
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
  const count = slides.length;
  const [offset, setOffset] = useState(count);
  const [animate, setAnimate] = useState(true);
  const [paused, setPaused] = useState(false);
  const resumeTimer = useRef<number | null>(null);
  const heldRef = useRef(false);
  const [carouselMode, setCarouselMode] = useState<CarouselMode>(mode);
  const touchStartX = useRef<number | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(offset);

  const paint = (next: number) => {
    offsetRef.current = next;
    if (trackRef.current) trackRef.current.style.transform = trackTransform(next);
  };

  const active = count === 0 ? 0 : ((Math.round(offset) % count) + count) % count;
  const loop = count > 1 ? [...slides, ...slides, ...slides] : slides;
  const stepped = carouselMode === "step";
  if (stepped) offsetRef.current = offset;

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
      setOffset(current => current + 1);
    }, SLIDE_MS);
    return () => window.clearInterval(id);
  }, [stepped, paused, count, active]);

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
    if (!stepped || count <= 1) return;
    const current = offsetRef.current;
    const normalized = (((current % count) + count) % count) + count;
    if (normalized === current) return;
    setAnimate(false);
    setOffset(normalized);
  };

  if (count === 0) return null;

  return (
    <section
      className="-mx-4 w-[calc(100%+2rem)] md:hidden"
      aria-roledescription="carousel"
      aria-label="Featured projects"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={event => {
        touchStartX.current = event.touches[0]?.clientX ?? null;
        setPaused(true);
      }}
      onTouchEnd={event => {
        const start = touchStartX.current;
        const end = event.changedTouches[0]?.clientX;
        touchStartX.current = null;
        setPaused(false);
        if (start == null || end == null) return;
        const delta = end - start;
        if (delta <= -SWIPE_THRESHOLD) step(1);
        if (delta >= SWIPE_THRESHOLD) step(-1);
      }}
    >
      <div className="overflow-hidden">
        <div
          ref={trackRef}
          className={`flex w-full ${
            stepped && animate ? "transition-transform duration-500 ease-out motion-reduce:transition-none" : ""
          }`}
          style={{ gap: GAP_PX, transform: trackTransform(stepped ? offset : offsetRef.current) }}
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
                className={`shrink-0 overflow-hidden rounded-xl ${isActive ? "" : "opacity-90"}`}
                style={{ width: `${SLIDE_PERCENT}%` }}
                aria-hidden={!isActive}
                tabIndex={isActive ? 0 : -1}
                onClick={event => {
                  if (isActive) return;
                  event.preventDefault();
                  const delta = (slideIndex % count) - active;
                  const wrapped = delta > count / 2 ? delta - count : delta < -count / 2 ? delta + count : delta;
                  if (wrapped !== 0) step(wrapped);
                }}
              >
                <div
                  className="flex aspect-[16/10] w-full items-end bg-primary bg-cover bg-center"
                  style={src ? { backgroundImage: `url(${src})` } : undefined}
                >
                  {!src && (
                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary to-secondary text-4xl font-bold text-primary-content">
                      {slide.title.slice(0, 1)}
                    </div>
                  )}
                </div>
                <div className="bg-secondary bg-opacity-85 px-3 py-3">
                  <p className="text-center text-base font-bold leading-tight">{slide.title}</p>
                  {slide.description && <p className="mt-1 text-center text-xs">{slide.description}</p>}
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
