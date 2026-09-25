"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

type AssetStoreWidgetProps = {
  packageId: string;
  title: string;
  href: string;
};

const WIDGET_WIDTH = 600;
const WIDGET_HEIGHT = 130;

export const AssetStoreWidget = ({ packageId, title, href }: AssetStoreWidgetProps) => {
  const src = `https://assetstore.unity.com/linkmaker/embed/package/${packageId}/widget-wide`;
  const frameRef = useRef<HTMLDivElement>(null);
  const [frameSrc, setFrameSrc] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    setFrameSrc(src);
  }, [src]);

  useLayoutEffect(() => {
    const element = frameRef.current;
    if (!element) return;

    const update = () => {
      setScale(Math.min(1, element.clientWidth / WIDGET_WIDTH));
    };

    update();
    const observer = new ResizeObserver(update);
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={frameRef}
      className="relative w-full max-w-[600px] overflow-hidden rounded-lg"
      style={{ height: WIDGET_HEIGHT * scale }}
    >
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-white">
          <span
            className="loading loading-spinner loading-md text-neutral"
            role="status"
            aria-label="Loading Asset Store widget"
          />
        </div>
      )}
      <iframe
        className={`pointer-events-none absolute left-0 top-0 origin-top-left border-0 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        style={{ width: WIDGET_WIDTH, height: WIDGET_HEIGHT, transform: `scale(${scale})` }}
        src={frameSrc ?? undefined}
        title=""
        tabIndex={-1}
        onLoad={() => {
          if (frameSrc) setLoaded(true);
        }}
      />
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        aria-label={`View ${title} on the Unity Asset Store`}
        className="absolute inset-0 z-10"
      />
    </div>
  );
};
