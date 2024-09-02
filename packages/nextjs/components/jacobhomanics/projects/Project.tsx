"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useWindowSize } from "usehooks-ts";

type Props = {
  name: string;
  description: string;
  url: string;
  img: any;
};

export const Project = ({ name, description, img, url }: Props) => {
  const [isLineClamped, setIsLineClamped] = useState(true);
  const [isClamped, setIsClamped] = useState(false);
  const descriptionRef = useRef<HTMLDivElement>(null);

  const result = useWindowSize();

  useEffect(() => {
    const element = descriptionRef.current;
    if (element) {
      setIsClamped(element.scrollHeight > element.clientHeight);
    }
  }, [result.width, description]);

  return (
    <div className="flex bg-secondary p-4 rounded-lg border-2 border-indigo-500 items-start">
      <Link href={url} target="#" className="w-[100px] h-[100px] flex-none">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={img.src} alt="Hejh" className="w-full h-full object-cover rounded-lg" />
      </Link>
      <div className="flex flex-col pl-6 items-start">
        <Link href={url} target="#">
          <div className="text-2xl text-blue-600 dark:text-blue-500 hover:underline">{name}</div>
        </Link>
        <div ref={descriptionRef} className={`break-all ${isLineClamped ? "line-clamp-2" : ""}`}>
          {description}
        </div>

        {isClamped && (
          <button
            onClick={() => {
              setIsLineClamped(!isLineClamped);
            }}
            className="hover:underline cursor-pointer"
          >
            {isLineClamped ? "Click to show more." : "Click to show less."}
          </button>
        )}
      </div>
    </div>
  );
};
