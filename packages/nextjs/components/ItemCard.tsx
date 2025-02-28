import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useWindowSize } from "usehooks-ts";

export function ItemCard({
  name,
  description,
  imgSrc,
  link,
}: {
  name: string;
  description?: string;
  imgSrc: string;
  link: string;
}) {
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
    <div className="bg-primary rounded-lg flex items-start p-4 gap-4">
      <a href={link} target="#" className="flex-none w-16 h-16 md:w-40 md:h-40">
        <Image
          className="rounded-lg w-full h-full object-fit"
          width={1080}
          height={1080}
          src={imgSrc}
          alt="Project Image"
        />
      </a>
      <div className="flex flex-col items-start gap-4">
        <div>
          <a href={link} target="#">
            <p className="font-bold text-xl md:text-2xl text-blue-700 dark:text-blue-400 hover:underline">{name}</p>
          </a>
          <p ref={descriptionRef} className={`${isLineClamped && "line-clamp-2 md:line-clamp-2 break-words"}`}>
            {description}
          </p>
        </div>

        {isClamped && (
          <button
            onClick={() => {
              setIsLineClamped(!isLineClamped);
            }}
            className="btn btn-xs bg-secondary"
          >
            {isLineClamped ? "Show more" : "Show less"}
          </button>
        )}
      </div>
    </div>
  );
}
