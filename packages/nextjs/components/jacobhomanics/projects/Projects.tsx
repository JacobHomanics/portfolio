"use client";

import { Project } from "./Project";

type Props = {
  projects: any;
};

export const Projects = ({ projects }: Props) => {
  const projectsElements = projects.map((item: any, index: number) => {
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
  return <div className="flex flex-col gap-4">{projectsElements}</div>;
};
