"use client";

// import { useEffect, useState } from "react";
import type { NextPage } from "next";
// import { BuilderScoreCard } from "~~/components/BuilderScoreCard";
// import { EFPCard } from "~~/components/EFPCard";
import { Organizations } from "~~/components/portfolio/Organizations";
import { Profile } from "~~/components/portfolio/Profile";
// import { SwitchWeb } from "~~/components/portfolio/SwitchWeb";
import { projectsData } from "~~/components/portfolio/config/projects.config";
import { Projects } from "~~/components/portfolio/projects/Projects";

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
        <Profile />
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
