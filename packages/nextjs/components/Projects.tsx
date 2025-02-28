"use client";

import { ProjectData } from "./configs/types";
import { ItemCard } from "~~/components/ItemCard";

export function Projects({ title, data }: { title: string; data: ProjectData[] }) {
  const components = data.map((game, index) => {
    return (
      <ItemCard name={game.name} key={index} description={game.description} imgSrc={game.imgSrc} link={game.link} />
    );
  });

  return (
    <div className="flex flex-col items-center bg-gradient-to-t p-4 md:p-8 gap-4">
      <p className="font-bold text-2xl md:text-4xl text-center">{title}</p>
      <div className="flex flex-col gap-4 max-w-3xl">{components}</div>
    </div>
  );
}
