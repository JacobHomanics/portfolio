"use client";

import { useEffect, useRef, useState } from "react";
import { StaticImageData } from "next/image";

const SCROLL_MS_PER_SLIDE = 8000;
const SWIPE_THRESHOLD = 40;
const SLIDE_PERCENT = 58;
const GAP_PX = 8;

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

function wrapOffset(offset: number, count: number) {
  if (count <= 1) return offset;
  let next = offset;
  while (next >= count * 2) next -= count;
  while (next < count) next += count;
  return next;
}

export function MobileShowcaseCarousel({ slides }: { slides: CarouselSlide[] }) {
  const count = slides.length;
  const offsetRef = useRef(count);
  const trackRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);
  const [paused, setPaused] = useState(false);
  const [center, setCenter] = useState(count);
  const loop = count > 1 ? [...slides, ...slides, ...slides] : slides;
  const active = count === 0 ? 0 : ((center % count) + count) % count;

  const applyOffset = (offset: number) => {
    const next = wrapOffset(offset, count);
    offsetRef.current = next;
    if (trackRef.current) trackRef.current.style.transform = trackTransform(next);
    const rounded = Math.round(next);
    setCenter(current => (current === rounded ? current : rounded));
  };

  useEffect(() => {
    if (paused || count <= 1) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    let last = performance.now();

    const tick = (now: number) => {
      const dt = Math.min(now - last, 64);
      last = now;
      applyOffset(offsetRef.current + dt / SCROLL_MS_PER_SLIDE);
      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [paused, count]);

  const step = (delta: number) => {
    applyOffset(offsetRef.current + delta);
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
          className="flex w-full"
          style={{ gap: GAP_PX, transform: trackTransform(offsetRef.current) }}
        >
          {loop.map((slide, slideIndex) => {
            const src = imageUrl(slide.imgSrc);
            const isActive = slideIndex === center;
            return (
              <a
                key={`${slide.title}-${slideIndex}`}
                href={slide.link}
                target="_blank"
                rel="noreferrer"
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
              </a>
            );
          })}
        </div>
      </div>

      <div className="mt-3 flex items-center justify-center gap-2" role="tablist" aria-label="Slides">
        {slides.map((slide, slideIndex) => (
          <button
            key={slide.title}
            type="button"
            role="tab"
            aria-label={`Show ${slide.title}`}
            aria-selected={slideIndex === active}
            className={`h-2 rounded-full transition-all ${
              slideIndex === active ? "w-6 bg-primary" : "w-2 bg-primary bg-opacity-40"
            }`}
            onClick={() => {
              const delta = slideIndex - active;
              const wrapped = delta > count / 2 ? delta - count : delta < -count / 2 ? delta + count : delta;
              if (wrapped !== 0) step(wrapped);
            }}
          />
        ))}
      </div>
    </section>
  );
}
