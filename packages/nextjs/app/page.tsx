"use client";

import { useState } from "react";
import Image from "next/image";
import type { NextPage } from "next";
import { ProjectCard2 } from "~~/components/portfolio/ProjectCard2";
import { ProjectsOverviewCard } from "~~/components/portfolio/ProjectsOverviewCard";
import { data as aiData } from "~~/configs/ai.config";
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
    name: "/organizations",
    title: "Organizations",
    data: organizationsData,
  },
  {
    name: "/dao-tooling",
    title: "DAO Tooling",
    data: daoToolingData,
  },
  {
    name: "/unity-tooling",
    title: "Unity Tooling",
    data: unityToolingData,
  },

  {
    name: "/presentations",
    title: "Presentations",
    data: presentationsData,
  },
];

const Home: NextPage = () => {
  const pageCardComponents = pageCards.map((page, index) => {
    return (
      <div className="w-[150px] md:w-[400px]" key={index}>
        <ProjectsOverviewCard title={page.title} name={page.name} data={page.data} />
      </div>
    );
  });

  const [showSocials, setShowSocials] = useState(false);

  return (
    <div className="flex flex-col items-center bg-gradient-to-t p-4">
      <div className="flex flex-col gap-4">
        <div className="flex gap-4 items-center justify-center">
          <div>
            <Image
              className="rounded-full min-w-20 w-20 h-20 md:w-32 md:h-32"
              width={128}
              height={128}
              src={jakeGif}
              alt="Jake's Profile Icon"
              priority
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="font-bold text-2xl md:text-4xl">Jacob Homanics</p>
            <p className="text-center">Software Engineer disciplined in a variety of specialties.</p>
            {/* <Address address="0xc689c800a7121b186208ea3b182fAb2671B337E7" size="base" showIcon={false} /> */}
            <button
              className="btn btn-sm btn-primary mt-1"
              onClick={() => {
                setShowSocials(!showSocials);
              }}
            >
              {showSocials ? "Hide Socials" : "Contact Me"}
            </button>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          {showSocials && (
            <div className="flex flex-wrap gap-4 items-center justify-center p-2 mb-2 md:mb-4">
              {IconsLinksData.map((link, index) => {
                return (
                  <a href={link.url} target="#" key={index}>
                    <Image
                      src={link.icon}
                      width={32}
                      height={32}
                      className="w-6 h-6 md:w-10 md:h-10 hover:scale-90 transition-transform duration-300"
                      alt={"Link " + index}
                      loading="lazy"
                    />
                  </a>
                );
              })}
            </div>
          )}

          {/* <p className="text-center mb-4">
            Creating Web3 Technologies that bring the world together and Video Games that create pure enjoyment.
          </p>

          <p className="text-center mb-4">
            <span className="font-bold">Creator</span> of <span className="font-bold">tools</span>,{" "}
            <span className="font-bold">websites</span>, <span className="font-bold">video games</span>, and{" "}
            <span className="font-bold">smart contracts</span>.
          </p> */}
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center">
        <ProjectCard2
          name={presentationsData[0].name}
          description={presentationsData[0].shortDescription}
          imgSrc={presentationsData[0].bannerSrc}
          link={presentationsData[0].link}
        />

        <ProjectCard2
          name={aiData[0].name}
          description={aiData[0].shortDescription}
          imgSrc={aiData[0].imgSrc}
          link={aiData[0].link}
        />

        <ProjectCard2
          name={nftCollectionsData[0].name}
          description={nftCollectionsData[0].shortDescription}
          imgSrc={nftCollectionsData[0].imgSrc}
          link={nftCollectionsData[0].link}
        />

        <ProjectCard2
          name={gamesData[0].name}
          description={gamesData[0].shortDescription}
          imgSrc={gamesData[0].imgSrc}
          link={gamesData[0].link}
        />

        <ProjectCard2
          name={websitesData[0].name}
          description={websitesData[0].shortDescription}
          imgSrc={websitesData[0].imgSrc}
          link={websitesData[0].link}
        />

        <ProjectCard2
          name={daoToolingData[0].name}
          description={daoToolingData[0].shortDescription}
          imgSrc={daoToolingData[0].imgSrc}
          link={daoToolingData[0].link}
        />
      </div>

      <div className="flex flex-wrap md:w-4/5 items-center justify-center gap-4">{pageCardComponents}</div>
    </div>
  );
};

export default Home;
