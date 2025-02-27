"use client";

import { useState } from "react";
import { Project } from "./Project";

type Props = {
  cardName: string;
  projects: any;
};

const initialShowCount = 2;

export const Projects = ({ cardName, projects }: Props) => {
  const [showCount, setShowCount] = useState(initialShowCount);

  const projectsElements = projects.map((item: any, index: number) => {
    if (index >= showCount) return;

    return (
      <Project
        name={item.name}
        description={item.description}
        img={item.img}
        url={item.url}
        links={item.links}
        key={"project-" + index}
      />
    );
  });
  return (
    <div className="flex flex-col">
      <p className="text-center text-2xl m-0">{cardName}</p>

      <button
        onClick={() => {
          setShowCount(projectsElements.length === showCount ? initialShowCount : projectsElements.length);
        }}
      >
        {projectsElements.length === showCount ? "Show Less" : "Show More"}
      </button>
      <div className="flex flex-col gap-4 justify-center w-72 md:w-96">{projectsElements}</div>
    </div>
  );
};
