"use client";

import { useEffect, useState } from "react";

type GameEmbedProps = {
  src: string;
  title: string;
  width: number;
  height: number;
};

export const GameEmbed = ({ src, title, width, height }: GameEmbedProps) => {
  const [frameSrc, setFrameSrc] = useState<string | null>(null);
  const [loadedSrc, setLoadedSrc] = useState<string | null>(null);
  const loaded = loadedSrc === src && frameSrc === src;

  // Set the iframe src after mount so the load event cannot fire before React listens for it.
  useEffect(() => {
    setFrameSrc(src);
  }, [src]);

  return (
    <div
      className="relative w-full max-w-5xl overflow-hidden rounded-lg bg-black"
      style={{ aspectRatio: `${width} / ${height}` }}
    >
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="loading loading-spinner loading-lg text-white" role="status" aria-label="Loading game" />
        </div>
      )}
      <iframe
        className={`h-full w-full ${loaded ? "opacity-100" : "opacity-0"}`}
        src={frameSrc ?? undefined}
        title={title}
        allow="autoplay; fullscreen *; gamepad; gyroscope; accelerometer; xr-spatial-tracking"
        allowFullScreen
        onLoad={() => {
          if (frameSrc) setLoadedSrc(frameSrc);
        }}
      />
    </div>
  );
};
