"use client";

// import { useEffect, useState } from "react";
// import { useEffect, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import type { NextPage } from "next";
// import { ItemCard } from "~~/components/ItemCard";
import { PageCard } from "~~/components/cards/PageCard";
import { data as daoToolingData } from "~~/components/configs/dao-tooling.config";
import { data as nftCollectionsData } from "~~/components/configs/nftCollections.config";
import { data as organizationsData } from "~~/components/configs/organizations.config";
import { IconsLinksData } from "~~/components/configs/socials.config";
import { data as unityToolingData } from "~~/components/configs/unity-tooling.config";
import { data as gamesData } from "~~/components/configs/video-games.config";
import { data as websitesData } from "~~/components/configs/websites.config";
import { Address } from "~~/components/scaffold-eth";
import jakeGif from "~~/public/images/jake.webp";

// function shuffleArray<T>(array: T[]): T[] {
//   for (let i = array.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]]; // Swap elements
//   }
//   return array;
// }

// import { BuilderScoreCard } from "~~/components/BuilderScoreCard";
// import { EFPCard } from "~~/components/EFPCard";
// import { Organizations } from "~~/components/portfolio/Organizations";
// import { Profile } from "~~/components/portfolio/Profile";
// import { SwitchWeb } from "~~/components/portfolio/SwitchWeb";
// import { projectsData } from "~~/components/portfolio/config/projects.config";
// import { GithubLogo } from "~~/components/portfolio/logos/GithubLogo";
// import { Project } from "~~/components/portfolio/projects/Project";
// import { Projects } from "~~/components/portfolio/projects/Projects";

const Home: NextPage = () => {
  // console.log("bleh");

  // const [efpData, setEfpData] = useState<any>();
  // const [passport, setPassport] = useState<any>();

  // useEffect(() => {
  //   async function get() {
  //     const result = await fetch("https://api.ethfollow.xyz/api/v1/users/jacobhomanics.eth/stats");
  //     const data = await result.json();
  //     console.log(data);

  //     setEfpData(data);

  //     try {
  //       const response = await fetch(`/api/talent-protocol/passport/0xc689c800a7121b186208ea3b182fAb2671B337E7`);
  //       const data2 = await response.json();
  //       setPassport(data2.passport);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }
  //   get();
  // }, []);

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
      name: "/nft-collections",
      title: "NFTs",
      data: nftCollectionsData,
    },

    {
      name: "/organizations",
      title: "Organizations",
      data: organizationsData,
    },
  ];

  const pageCardComponents = pageCards.map((page, index) => {
    return (
      <div className="w-[150px] md:w-[400px]" key={index}>
        <PageCard title={page.title} name={page.name} data={page.data} />
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
              className="rounded-full w-20 h-20 md:w-32 md:h-32"
              width={128}
              height={128}
              src={jakeGif}
              alt="Jake's Profile Icon"
              priority
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="font-bold text-2xl md:text-4xl">Jacob Homanics</p>
            <Address address="0xc689c800a7121b186208ea3b182fAb2671B337E7" size="base" showIcon={false} />
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

          <p className="text-center mb-4">
            <span className="font-bold">Creator</span> of <span className="font-bold">tools</span>,{" "}
            <span className="font-bold">websites</span>, <span className="font-bold">video games</span>, and{" "}
            <span className="font-bold">smart contracts</span>.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap md:w-4/5 items-center justify-center gap-4">{pageCardComponents}</div>
    </div>
  );
};

export default Home;
