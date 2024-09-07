"use client";

import type { NextPage } from "next";
import { Organizations } from "~~/components/portfolio/Organizations";
import { Profile } from "~~/components/portfolio/Profile";
// import { SwitchWeb } from "~~/components/portfolio/SwitchWeb";
import { projectsData } from "~~/components/portfolio/config/projects.config";
import { Projects } from "~~/components/portfolio/projects/Projects";

const Home: NextPage = () => {
  console.log("bleh");

  return (
    <div className="flex flex-col items-center bg-gradient-to-t from-base-100 to-base-300">
      <div className="bg-primary w-full">
        <Profile />
        {/* <SwitchWeb /> */}
      </div>
      <div className="m-4" />
      <Organizations />
      <div className="p-4 rounded-lg w-full">
        <p className="text-center text-4xl">My Projects</p>
        <Projects projects={projectsData} />
      </div>
    </div>
  );
};

export default Home;
