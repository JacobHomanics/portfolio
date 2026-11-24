"use client";

// Ported from the ProjectCarousel on the previous site's newer pages: shows one project at a time
// and cross-fades to the next on a timer, looping forever. It holds while the pointer is over it
// or a finger is on it. With reduced motion on, it doesn't change on its own and shows arrows.

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { projects } from "./projects-data";

const HOLD_MS = 4500;
const FADE_MS = 1000;
const RESUME_AFTER_TOUCH_MS = 1500;
const MAX_SLIDE_WIDTH = 600;

// Colors from the previous site's palette.
const colors = {
  surface: "#FFFCF7",
  surfaceMuted: "#E8E2D2",
  border: "#D9D0C0",
  heading: "#3E1F2C",
  textMuted: "#5C5648",
};

const count = projects.length;

export default function ProjectShowcase() {
  const rootRef = useRef<HTMLElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [index, setIndex] = useState(0);
  const [hovering, setHovering] = useState(false);
  const [touching, setTouching] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const touchTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const slideWidth = Math.min(MAX_SLIDE_WIDTH, Math.max(containerWidth - 48, 240));
  const paused = hovering || touching;

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduceMotion(query.matches);
    apply();
    query.addEventListener("change", apply);
    return () => query.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const observer = new ResizeObserver(() => setContainerWidth(el.clientWidth));
    observer.observe(el);
    setContainerWidth(el.clientWidth);
    return () => observer.disconnect();
  }, []);

  const showProject = useCallback((next: number) => setIndex(next), []);

  useEffect(() => {
    if (reduceMotion || paused || containerWidth === 0) return;
    const timer = setTimeout(() => showProject((index + 1) % count), HOLD_MS);
    return () => clearTimeout(timer);
  }, [index, reduceMotion, paused, containerWidth, showProject]);

  useEffect(
    () => () => {
      if (touchTimer.current) clearTimeout(touchTimer.current);
    },
    [],
  );

  const onTouchStart = () => {
    if (touchTimer.current) clearTimeout(touchTimer.current);
    setTouching(true);
  };
  const onTouchEnd = () => {
    if (touchTimer.current) clearTimeout(touchTimer.current);
    touchTimer.current = setTimeout(() => setTouching(false), RESUME_AFTER_TOUCH_MS);
  };

  const arrow = {
    width: 36,
    height: 36,
    borderRadius: 999,
    border: 0,
    padding: 0,
    cursor: "pointer",
    fontSize: 20,
    color: colors.heading,
    background: colors.surfaceMuted,
  } as const;

  return (
    <section
      ref={rootRef}
      aria-labelledby="projects-heading"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      onTouchCancel={onTouchEnd}
      style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", opacity: containerWidth === 0 ? 0 : 1 }}
    >
      {/* All cards share one grid cell, so the frame is as tall as the longest description and
          every description shows in full. */}
      {/* Labels the section for screen readers and search engines without taking up space. */}
      <h2 id="projects-heading" className="sr-only">
        What have you built?
      </h2>
      <div style={{ display: "grid", width: slideWidth }}>
        {projects.map((p, i) => (
          <div
            key={p.name}
            aria-hidden={i !== index}
            style={{
              gridArea: "1 / 1",
              opacity: i === index ? 1 : 0,
              pointerEvents: i === index ? "auto" : "none",
              transition: reduceMotion ? "none" : `opacity ${FADE_MS}ms ease`,
            }}
          >
            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={p.name}
              tabIndex={i === index ? 0 : -1}
              style={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                overflow: "hidden",
                borderRadius: 16,
                border: `1px solid ${colors.border}`,
                background: colors.surface,
                textDecoration: "none",
                boxSizing: "border-box",
              }}
            >
              <div style={{ position: "relative", width: "100%", height: `min(${Math.round(slideWidth / (containerWidth < 500 ? 2.2 : 16 / 9))}px, ${containerWidth < 500 ? 15 : 26}dvh)`, background: colors.surfaceMuted }}>
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  priority={i === 0}
                  sizes="(max-width: 648px) 100vw, 600px"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div style={{ padding: 16, display: "flex", flexDirection: "column", gap: 6 }}>
                <div
                  style={{
                    fontSize: 18,
                    fontWeight: 700,
                    color: colors.heading,
                  }}
                >
                  {p.name}
                </div>
                <div
                  style={{
                    fontSize: 14,
                    lineHeight: "21px",
                    color: colors.textMuted,
                  }}
                >
                  {p.description}
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>

      {reduceMotion && (
        <div style={{ marginTop: 20, display: "flex", alignItems: "center", justifyContent: "center", gap: 16 }}>
          <button type="button" aria-label="Previous project" onClick={() => showProject((index - 1 + count) % count)} style={arrow}>
            ‹
          </button>
          <span style={{ fontSize: 14, fontWeight: 600, color: colors.textMuted }}>
            {index + 1} / {count}
          </span>
          <button type="button" aria-label="Next project" onClick={() => showProject((index + 1) % count)} style={arrow}>
            ›
          </button>
        </div>
      )}
    </section>
  );
}
