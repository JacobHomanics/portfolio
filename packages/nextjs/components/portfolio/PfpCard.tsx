"use client";

import { useEffect, useState } from "react";
import { Address } from "../scaffold-eth";
// import { IconsLinksData } from "./config/socials.config";
import { IconsLinks } from "./icons-links/IconLinks";
import { BuilderScoreCard } from "~~/components/BuilderScoreCard";
import { EFPCard } from "~~/components/EFPCard";

type Props = {
  name?: string;
  description?: string;
  image?: string;
  address?: string;
  size?: "sm" | "base" | "lg";
  iconslinks?: any;
};

const sizeMap = {
  sm: 7,
  base: "w-[75px] md:w-[150px]",
  lg: "",
};

export const PfpCard = ({ name, address, description, image, iconslinks, size = "base" }: Props) => {
  const [efpData, setEfpData] = useState<any>();
  const [passport, setPassport] = useState<any>();

  useEffect(() => {
    async function get() {
      const result = await fetch("https://api.ethfollow.xyz/api/v1/users/jacobhomanics.eth/stats");
      const data = await result.json();
      console.log(data);

      setEfpData(data);

      try {
        const response = await fetch(`/api/talent-protocol/passport/0xc689c800a7121b186208ea3b182fAb2671B337E7`);
        const data2 = await response.json();
        setPassport(data2.passport);
      } catch (err) {
        console.log(err);
      }
    }
    get();
  }, []);

  return (
    <div className="flex flex-col items-center text-center">
      <div className="flex gap-4">
        <div className="flex flex-col items-center text-center w-full">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={image} alt={"Profile Picture"} className={`rounded-full ${sizeMap[size]}`} />
        </div>

        <div className="w-full flex flex-col items-start justify-start gap-4">
          <div className="w-[200px]">
            <EFPCard
              address="jacobhomanics.eth"
              efpFollowers={efpData?.followers_count}
              efpFollowing={efpData?.following_count}
            />
          </div>
          <div className="w-[200px]">
            <BuilderScoreCard talentScore={passport?.score} />
          </div>
        </div>
      </div>

      <div className="text-3xl">{name}</div>
      <Address address={address} showIcon={false} />

      <div className="pointer-events-auto border-4 border-primary rounded-lg p-2 w-[200px]">
        <IconsLinks iconsLinks={iconslinks} size="sm" justify="center" />
      </div>

      <div className="md:text-xl m-2 md:w-[700px]">{description}</div>
    </div>
  );
};
