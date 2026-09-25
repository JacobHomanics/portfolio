"use client";

import { useEffect, useState } from "react";

type YoutubeEmbedProps = {
  src: string;
  title: string;
};

export const YoutubeEmbed = ({ src, title }: YoutubeEmbedProps) => {
  const [frameSrc, setFrameSrc] = useState<string | null>(null);
  const [loadedSrc, setLoadedSrc] = useState<string | null>(null);
  const loaded = loadedSrc === src && frameSrc === src;

  // Set the iframe src after mount so the load event cannot fire before React listens for it.
  useEffect(() => {
    setFrameSrc(src);
  }, [src]);

  return (
    <div className="relative aspect-video w-full max-w-3xl overflow-hidden rounded-lg bg-black">
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="loading loading-spinner loading-lg text-white" role="status" aria-label="Loading video" />
        </div>
      )}
      <iframe
        className={`h-full w-full ${loaded ? "opacity-100" : "opacity-0"}`}
        src={frameSrc ?? undefined}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        onLoad={() => {
          if (frameSrc) setLoadedSrc(frameSrc);
        }}
      />
    </div>
  );
};
