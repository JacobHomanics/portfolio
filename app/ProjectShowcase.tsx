"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { projects } from "./projects-data";

const SLIDE_MS = 4500;
const FADE_MS = 1000;

export default function ProjectShowcase() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(query.matches);
    const onChange = () => setReducedMotion(query.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (paused || reducedMotion) return;
    const id = setInterval(() => setIndex(i => (i + 1) % projects.length), SLIDE_MS);
    return () => clearInterval(id);
  }, [paused, reducedMotion]);

  const step = (d: number) => setIndex(i => (i + d + projects.length) % projects.length);

  return (
    <section
      aria-label="Projects"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => setPaused(false)}
      style={{ width: "100%", maxWidth: 640, padding: "0 16px", boxSizing: "border-box" }}
    >
      <div style={{ display: "grid" }}>
        {projects.map((p, i) => (
          <article
            key={p.name}
            aria-hidden={i !== index}
            style={{
              gridArea: "1 / 1",
              opacity: i === index ? 1 : 0,
              pointerEvents: i === index ? "auto" : "none",
              transition: reducedMotion ? "none" : `opacity ${FADE_MS}ms ease`,
              border: "1px solid #ccc",
              borderRadius: 8,
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Image
              src={p.image}
              alt={p.name}
              priority={i === 0}
              sizes="(max-width: 640px) 100vw, 640px"
              style={{ width: "100%", height: 200, objectFit: "cover" }}
            />
            <div style={{ padding: 16 }}>
              <h2 style={{ margin: "0 0 8px", fontSize: 20 }}>{p.name}</h2>
              <p style={{ margin: 0, fontSize: 14, lineHeight: 1.45 }}>{p.description}</p>
            </div>
          </article>
        ))}
      </div>
      {reducedMotion && (
        <div style={{ display: "flex", justifyContent: "center", gap: 12, marginTop: 12 }}>
          <button type="button" onClick={() => step(-1)} aria-label="Previous project">
            ←
          </button>
          <button type="button" onClick={() => step(1)} aria-label="Next project">
            →
          </button>
        </div>
      )}
    </section>
  );
}
