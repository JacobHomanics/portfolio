"use client";

import Image from "next/image";
import type { NextPage } from "next";
import { DocumentIcon } from "@heroicons/react/24/outline";
import { ProjectShowcaseCard } from "~~/components/portfolio/ProjectShowcaseCard";
import { ProjectsOverviewCard } from "~~/components/portfolio/ProjectsOverviewCard";
// import { data as aiData } from "~~/configs/ai.config";
import { data as daoToolingData } from "~~/configs/dao-tooling.config";
import { data as nftCollectionsData } from "~~/configs/nftCollections.config";
import { data as organizationsData } from "~~/configs/organizations.config";
import { data as presentationsData } from "~~/configs/presentations.config";
import { IconsLinksData } from "~~/configs/socials.config";
import { data as unityToolingData } from "~~/configs/unity-tooling.config";
import { data as gamesData } from "~~/configs/video-games.config";
import { data as websitesData } from "~~/configs/websites.config";
import jakeGif from "~~/public/images/jake.webp";

const pageCards = [
  // {
  //   name: "/ai",
  //   title: "AI / LLM",
  //   data: aiData,
  // },
  {
    name: "/websites",
    title: "Websites",
    data: websitesData,
  },
  {
    name: "/video-games",
    title: "Video Games",
    data: gamesData,
  },

  {
    name: "/nft-collections",
    title: "NFTs",
    data: nftCollectionsData,
  },
  {
    name: "/presentations",
    title: "Presentations",
    data: presentationsData,
  },
  {
    name: "/unity-tooling",
    title: "Unity Tooling",
    data: unityToolingData,
  },
  {
    name: "/organizations",
    title: "Organizations",
    data: organizationsData,
  },
  {
    name: "/dao-tooling",
    title: "DAO Tooling",
    data: daoToolingData,
  },
];

const showcaseProjects = [
  presentationsData[0],
  // aiData[0],
  websitesData[0],
  nftCollectionsData[0],
  daoToolingData[0],
  gamesData[0],
];

const Home: NextPage = () => {
  const pageCardComponents = pageCards.map((page, index) => {
    return (
      <div className="w-[150px] md:w-[400px]" key={index}>
        <ProjectsOverviewCard title={page.title} name={page.name} data={page.data} />
      </div>
    );
  });

  return (
    <div className="flex flex-col items-center bg-gradient-to-t p-4 gap-10">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          <div className="flex gap-4 items-center justify-center">
            <div
              className={`bg-cover bg-center rounded-full flex justify-center items-end w-32 h-32 md:w-32 md:h-32`}
              style={{ backgroundImage: `url(${jakeGif?.src})` }}
            >
              <button
                className="btn btn-sm w-full btn-primary"
                onClick={() => {
                  window.open("/Jacob_Homanics_Resume.pdf");
                }}
                // href="/Jacob_Homanics_Resume.pdf"
                // download="Jacob_Homanics_Resume.pdf"
              >
                Resume
                <DocumentIcon className="w-5 h-5" />
              </button>
            </div>
            <div className="flex flex-col justify-center items-center max-w-48 md:max-w-96">
              <p className="font-bold text-2xl md:text-4xl">Jacob Homanics</p>
              <p className="text-center text-sm md:text-base">
                Software Engineer disciplined in a variety of specialties.
              </p>
              <div className="flex flex-wrap gap-4 items-center justify-center p-2">
                {IconsLinksData.map((link, index) => {
                  return (
                    <a href={link.url} target="#" key={index}>
                      <Image
                        src={link.icon}
                        width={32}
                        height={32}
                        className="w-6 h-6 md:w-10 md:h-10"
                        alt={"Link " + index}
                        loading="lazy"
                      />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 max-w-7xl">
          {showcaseProjects.map((project, index) => {
            return (
              <ProjectShowcaseCard
                key={index}
                name={project.name}
                description={project.shortDescription}
                imgSrc={project.bannerSrc}
                link={project.link}
              />
            );
          })}
        </div>
      </div>

      <div className="w-full h-2 bg-slate-900" />

      <div className="flex flex-wrap md:w-4/5 items-center justify-center gap-4">{pageCardComponents}</div>
    </div>
  );
};

export default Home;
