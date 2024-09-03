"use client";

import type { NextPage } from "next";
import { PfpCard } from "~~/components/portfolio/PfpCard";
import { organizations } from "~~/components/portfolio/config/organization.config";
import * as PersonData from "~~/components/portfolio/config/person.config";
import { projectsData } from "~~/components/portfolio/config/projects.config";
import { IconsLinks } from "~~/components/portfolio/icons-links/IconLinks";
import { Projects } from "~~/components/portfolio/projects/Projects";
import jake from "~~/public/jake.gif";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-center">
        <span className="block text-2xl mb-2">Presented to you by</span>
        <PfpCard name={PersonData.name} address={PersonData.address} image={jake} />
      </h1>

      <div className="m-4" />

      <div className="text-center text-4xl">Organizations</div>
      <div className="rounded-lg p-2">
        <IconsLinks iconsLinks={organizations} size="base" areIconsRounded={true} justify="center" />
      </div>
      <div className="p-4 rounded-lg w-full">
        <p className="text-center text-4xl">My Projects</p>
        <Projects projects={projectsData} />
      </div>
    </div>
  );
};

export default Home;
