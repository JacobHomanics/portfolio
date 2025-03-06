import { useEffect, useState } from "react";
import { StaticImageData } from "next/image";
import { useWindowSize } from "usehooks-ts";

export function ProjectCard2({
  name,
  description,
  imgSrc,
  link,
}: // links = [],
{
  name: string;
  description?: string;
  imgSrc?: string | StaticImageData;
  link?: string;
  // links?: { url: string; imagePath: string | StaticImageData }[];
}) {
  const result = useWindowSize();

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(result.width <= 767);
  }, [result.width]);

  return (
    <a href={link} target="#" className="bg-slate-900 rounded-lg p-2 h-32 w-44 md:h-56 md:w-80 lg:h-64 lg:w-80">
      <div
        className={`bg-cover bg-center h-full w-full rounded-lg flex items-end`}
        style={{ backgroundImage: `url(${typeof imgSrc === "string" ? imgSrc : imgSrc?.src})` }}
      >
        <div className="hover:bg-slate-900 hover:bg-opacity-40 h-full w-full flex items-end rounded-b-lg">
          <div className="flex flex-col items-end bg-slate-900 bg-opacity-80 rounded-b-lg min-h-2 md:h-24 p-1 md:p-2 w-full">
            <div className="w-full font-bold text-center text-sm md:text-xl">{name}</div>
            {!isMobile && <div className="w-full text-center text-md">{description}</div>}
          </div>
        </div>
      </div>
    </a>
  );
}
