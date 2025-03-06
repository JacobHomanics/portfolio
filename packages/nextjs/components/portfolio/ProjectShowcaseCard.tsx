import { useEffect, useState } from "react";
import { StaticImageData } from "next/image";
import { useWindowSize } from "usehooks-ts";

export function ProjectShowcaseCard({
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
    <a href={link} target="#" className="bg-slate-900 rounded-lg p-2 h-32 w-40 md:h-44 md:w-72 lg:h-56 lg:w-80">
      <div
        className={`bg-cover bg-center h-full w-full rounded-lg flex items-end`}
        style={{ backgroundImage: `url(${typeof imgSrc === "string" ? imgSrc : imgSrc?.src})` }}
      >
        <div className="hover:bg-slate-900 hover:bg-opacity-40 h-full w-full flex items-end rounded-b-lg">
          <div className="flex flex-col items-end bg-slate-900 bg-opacity-85 rounded-b-lg p-1 md:p-2 w-full">
            <div className="w-full font-bold text-center text-base md:text-lg lg:text-xl">{name}</div>
            {!isMobile && <div className="w-full text-center md:text-sm lg:text-base">{description}</div>}
          </div>
        </div>
      </div>
    </a>
  );
}
