import { useEffect, useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { useWindowSize } from "usehooks-ts";

export function ItemCard({
  name,
  description,
  imgSrc,
  link,
  links,
}: {
  name: string;
  description?: string;
  imgSrc: string | StaticImageData;
  link: string;
  links: { url: string; imagePath: string }[];
}) {
  const [isLineClamped, setIsLineClamped] = useState(true);
  const [isClamped, setIsClamped] = useState(false);
  const descriptionRef = useRef<HTMLDivElement>(null);

  const result = useWindowSize();

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(result.width <= 767);
  }, [result.width]);

  useEffect(() => {
    const element = descriptionRef.current;
    if (element) {
      setIsClamped(element.scrollHeight > element.clientHeight);
    }
  }, [result.width, description]);

  return (
    <div className="bg-primary rounded-lg flex items-start p-4 gap-4">
      <div className="flex flex-col gap-2">
        <a href={link} target="#" className="flex-none w-16 h-16 md:w-40 md:h-40">
          <Image
            className="rounded-lg w-full h-full object-fit"
            width={160}
            height={160}
            src={imgSrc}
            alt="Project Image"
          />
        </a>
        {isMobile && (
          <div
            className={`max-w-[64px] flex flex-wrap gap-2 justify-center bg-secondary rounded-lg ${
              links.length > 0 && "p-1"
            }`}
          >
            {links.map((link, index) => {
              return (
                <a href={link.url} target="#" key={index}>
                  <Image
                    src={link.imagePath}
                    width={32}
                    height={32}
                    className="w-6 h-6 hover:scale-90 transition-transform duration-300"
                    alt={"Link " + index}
                  />
                </a>
              );
            })}
          </div>
        )}
      </div>

      <div className="flex flex-col items-start gap-4">
        <div>
          <div className="flex gap-4 items-center">
            <a href={link} target="#">
              <p className="font-bold text-xl md:text-2xl text-blue-700 dark:text-blue-400 hover:underline">{name}</p>
            </a>{" "}
            {!isMobile && (
              <div className={`flex flex-wrap gap-2 bg-secondary rounded-lg ${links.length > 0 && "p-1"}`}>
                {links.map((link, index) => {
                  return (
                    <a href={link.url} target="#" key={index}>
                      <Image
                        src={link.imagePath}
                        width={32}
                        height={32}
                        alt={"Link " + index}
                        className="hover:scale-90 transition-transform duration-300"
                      />
                    </a>
                  );
                })}
              </div>
            )}
          </div>

          <p ref={descriptionRef} className={`${isLineClamped && "line-clamp-2 md:line-clamp-2 break-words"}`}>
            {description}
          </p>
        </div>

        <div className="flex gap-4">
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
    </div>
  );
}
