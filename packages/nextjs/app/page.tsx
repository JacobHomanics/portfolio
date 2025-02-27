"use client";

// import { useEffect, useState } from "react";
import type { NextPage } from "next";

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

  return (
    <div className="flex flex-col items-center bg-gradient-to-t from-base-100 to-base-300">
      <div className="bg-primary w-full">
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
      </div>
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
