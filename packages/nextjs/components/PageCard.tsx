"use client";

// import { useEffect, useState } from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ProjectData } from "./configs/types";

function shuffleArray<T>(array: T[]): T[] {
  const newArr: T[] = [...array];

  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]]; // Swap elements
  }
  return newArr;
}

const classes: { [key: number]: string } = {
  0: "absolute rounded-md top-0 bottom-0 left-0 right-0 m-auto z-40 h-24 w-24",
  1: "rounded-md absolute inset-0 m-auto z-30 w-16 h-16 transform -translate-x-16",
  2: "rounded-md absolute inset-0 m-auto z-30 w-16 h-16 transform translate-x-16",
  3: "rounded-md absolute top-1/2 transform -translate-y-1/2 left-10 m-auto w-12 h-12 z-20",
  4: "rounded-md absolute right-10 top-1/2 transform -translate-y-1/2 m-auto w-12 h-12 z-20",
};

export function PageCard({ name, title, data }: { name: string; title: string; data: ProjectData[] }) {
  const [componentsArray, setComponentsArray] = useState<any[]>([]);

  useEffect(() => {
    setComponentsArray(shuffleArray(data).slice(0, 5));
  }, [data]);

  //   const components = componentsArray.map((game, index) => {
  //     return <img key={index} className="rounded-lg w-12 h-12" src={game.imgSrc} />;
  //   });

  return (
    <div className="flex flex-col items-center justify-center gap-y-3 p-6 border border-secondary bg-secondary rounded-xl">
      <div className="relative flex justify-center items-center py-4 w-full h-20 mb-4">
        {componentsArray?.map((item, index) => (
          <Image
            key={index}
            alt={item.name}
            src={item.imgSrc || ""}
            width={1080}
            height={1080} // Adjusting size based on index
            className={classes[index]}
          />
        ))}
      </div>

      <p className="text-2xl font-bold text-center">{title}</p>
      <Link href={name} className="w-full">
        <button className="btn btn-primary w-full">View</button>
      </Link>
    </div>

    // <Link href={name}>
    //   <div className="rounded-lg bg-primary p-2 gap-4 flex flex-col hover:scale-110 transition-transform duration-300">
    //     <p className="text-2xl font-bold text-center">{title}</p>
    //     <div className="flex flex-wrap items-center justify-center gap-4">{components}</div>
    //   </div>
    // </Link>
  );
}
