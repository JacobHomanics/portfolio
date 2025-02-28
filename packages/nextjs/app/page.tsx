"use client";

// import { useEffect, useState } from "react";
// import { useEffect, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
import Image from "next/image";
import type { NextPage } from "next";
// import { ItemCard } from "~~/components/ItemCard";
import { PageCard } from "~~/components/PageCard";
import { data as daoToolingData } from "~~/components/configs/dao-tooling.config";
import { data as nftCollectionsData } from "~~/components/configs/nftCollections.config";
import { data as unityToolingData } from "~~/components/configs/unity-tooling.config";
import { data as gamesData } from "~~/components/configs/video-games.config";
import { data as websitesData } from "~~/components/configs/websites.config";
import { Address } from "~~/components/scaffold-eth";

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
      data: [],
    },
  ];

  const pageCardComponents = pageCards.map((page, index) => {
    return (
      <div className="w-[150px] md:w-[400px]" key={index}>
        <PageCard title={page.title} name={page.name} data={page.data} />
      </div>
    );
  });

  return (
    <div className="flex flex-col items-center bg-gradient-to-t p-4">
      {/* <div className="bg-primary w-full"> */}

      <div className="flex flex-col gap-4">
        <div className="flex gap-4 items-center justify-center">
          <div>
            <Image
              className="rounded-full w-20 h-20 md:w-32 md:h-32"
              width={1080}
              height={1080}
              src={"/jake3.gif"}
              alt="Jake's Profile Icon"
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="font-bold text-2xl md:text-4xl">Jacob Homanics</p>
            <Address address="0xc689c800a7121b186208ea3b182fAb2671B337E7" size="base" showIcon={false} />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center mb-4">
          <p className="text-center">
            <span className="font-bold">Creator</span> of <span className="font-bold">tools</span>,{" "}
            <span className="font-bold">websites</span>, <span className="font-bold">video games</span>, and{" "}
            <span className="font-bold">smart contracts</span>.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap md:w-4/5 items-center justify-center gap-4">{pageCardComponents}</div>

      {/* <Link href="/video-games">
        <div className="rounded-lg bg-primary p-2 gap-4 flex flex-col hover:scale-110 transition-transform duration-300">
          <p className="text-2xl font-bold text-center">Video Games</p>
          <div className="flex flex-wrap items-center justify-center gap-4">{gameComponents}</div>
        </div>
      </Link>

      <Link href="/websites">
        <div className="rounded-lg bg-primary p-2 gap-4 flex flex-col hover:scale-110 transition-transform duration-300">
          <p className="text-2xl font-bold text-center">Websites</p>
          <div className="flex flex-wrap items-center justify-center gap-4">{websiteComponents}</div>
        </div>
      </Link>

      <Link href="/nft-collections">
        <div className="rounded-lg bg-primary p-2 gap-4 flex flex-col hover:scale-110 transition-transform duration-300">
          <p className="text-2xl font-bold text-center">NFT Collections</p>
          <div className="flex flex-wrap items-center justify-center gap-4">{nftCollectionsComponents}</div>
        </div>
      </Link> */}

      {/* <Profile /> */}
      {/* <div className="flex items-start justify-center gap-4">
          <div className="w-[250px]">
            <EFPCard
              address="jacobhomanics.eth"
              efpFollowers={efpData?.followers_count}
              efpFollowing={efpData?.following_count}
            />
          </div>
          <div className="w-[250px]">
            <BuilderScoreCard talentScore={passport?.score} />
          </div>
        </div> */}
      {/* <SwitchWeb /> */}
      {/* </div> */}
      {/* <div className="m-4" />
      <Organizations />
      <div className="p-4 rounded-lg w-full flex flex-wrap justify-center gap-4">
        <Projects cardName="Web3 Projects" projects={projectsData} />

        <Projects
          cardName="Unity Tools"
          projects={[
            {
              name: "Raycast Controller",
              description:
                "Flexible raycasting configuration for distance, layers, and runtime control. Event-based callbacks (`OnEnter`, `OnStay`, `OnExit`) for interaction logic. Debugging tools to visualize raycasts and hit points in the Scene view.",
              img: "unity-assets/icon.png",
              url: "https://assetstore.unity.com/packages/tools/utilities/raycast-controller-305913",
              links: [{ icon: GithubLogo, url: "https://github.com/JacobHomanics/raycast-controller" }],
            },
            {
              name: "Overlap Shape",
              description:
                "simplifies the process of detecting and responding to colliders in Unity using geometrical shapes.",
              img: "unity-assets/overlap-shapes.png",
              url: "https://assetstore.unity.com/packages/tools/utilities/overlap-shapes-305907",
              links: [{ icon: GithubLogo, url: "https://github.com/JacobHomanics/overlap-shape" }],
            },
            {
              name: "Callbacks",
              description: "Provides a unified way to handle MonoBehaviour lifecycle events through UnityEvents.",
              img: "unity-assets/callbacks.png",
              url: "https://assetstore.unity.com/packages/tools/utilities/callbacks-305914",
              links: [{ icon: GithubLogo, url: "https://github.com/JacobHomanics/callbacks" }],
            },
            {
              name: "Event Driven Pool Management System",
              description:
                "Utilizes UnityEvents to make development an ease when dealing with GameObjects that need managed in a pool. What/How things are pooled is up to the developer. The system allows for the developer to define what it means for a pooled object to be spawned or despawned.",
              img: "unity-assets/pms.webp",
              url: "https://assetstore.unity.com/packages/tools/integration/event-driven-pool-management-system-176853",
              links: [{ icon: GithubLogo, url: "https://github.com/JacobHomanics/pool-management-system" }],
            },
            {
              name: "Supercharged Vector2",
              description:
                "Enhances Vector2s with events, helper methods, and components for health and timer management.",
              img: "unity-assets/supercharged-vector2.png",
              url: "https://assetstore.unity.com/packages/tools/utilities/supercharged-vector2-305553",
              links: [{ icon: GithubLogo, url: "https://github.com/JacobHomanics/pool-management-system" }],
            },
          ]}
        />
      </div> */}
    </div>
  );
};

export default Home;
