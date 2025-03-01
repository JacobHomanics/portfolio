"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ProjectData } from "../../configs/types";
import { useWindowSize } from "usehooks-ts";

function shuffleArray<T>(array: T[]): T[] {
  const newArr: T[] = [...array];

  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]]; // Swap elements
  }
  return newArr;
}

const classes: { [key: number]: string } = {
  0: "absolute rounded-md top-0 bottom-0 left-0 right-0 m-auto h-16 w-16 md:h-24 md:w-24 z-20",
  1: "rounded-md absolute inset-0 m-auto w-12 h-12 transform -translate-x-9 md:h-20 md:w-20 md:-translate-x-16 z-10", //16
  2: "rounded-md absolute inset-0 m-auto  w-12 h-12 transform translate-x-9 md:h-20 md:w-20 md:translate-x-16 z-10", //16
  3: "rounded-md absolute top-1/2 transform -translate-y-1/2 left-12 md:left-24 m-auto w-8 h-8 md:h-14 md:w-14 md:-translate-x-12 z-0", //12
  4: "rounded-md absolute top-1/2 transform -translate-y-1/2 right-12 md:right-24 m-auto w-8 h-8 md:w-14 md:h-14 md:translate-x-12 z-0", //12
};

export function ProjectsOverviewCard({ name, title, data }: { name: string; title: string; data: ProjectData[] }) {
  const [componentsArray, setComponentsArray] = useState<any[]>([]);

  useEffect(() => {
    setComponentsArray(shuffleArray(data).slice(0, 5));
  }, [data]);

  const size = useWindowSize();

  const [maxCarouselSize, setMaxCarouselSize] = useState(5);

  useEffect(() => {
    if (size.width <= 767) {
      setMaxCarouselSize(3);
    } else {
      setMaxCarouselSize(3);
    }
  }, [size]);

  const [selectedTitleClass, setSelectedTitleClass] = useState("");
  useEffect(() => {
    const getTextSizeClass = () => {
      if (title.length > 12 && size.width <= 767) {
        return "text-xl";
      }
      if (size.width > 767) {
        return "text-2xl";
      } else {
        return "text-base";
      }
    };

    setSelectedTitleClass(getTextSizeClass());
  }, [size, title.length]);
  return (
    <div className="flex flex-col items-center justify-center p-2 md:p-4 border border-secondary bg-secondary rounded-xl gap-3 md:gap-4">
      <p className={`text-2xl font-bold text-center ${selectedTitleClass}`}>{title}</p>

      <div className="relative flex justify-center items-center w-full h-12 md:h-20">
        {componentsArray?.map((item, index) => {
          if (index >= maxCarouselSize) return;

          return (
            <Image
              key={index}
              alt={item.name}
              src={item.imgSrc || ""}
              width={96}
              height={96}
              className={"bg-white " + classes[index]}
              loading="lazy"
            />
          );
        })}
      </div>

      <Link href={name} className="w-full mt-1">
        <button className="btn btn-sm md:btn-md btn-primary w-full">View</button>
      </Link>
    </div>
  );
}
