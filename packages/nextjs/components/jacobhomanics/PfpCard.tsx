"use client";

import { Address } from "../scaffold-eth";
// import { SocialLinks } from "./SocialLinks";
import { normalize } from "viem/ens";
import { useEnsAddress } from "wagmi";

type Props = {
  name?: string;
  image?: any;
  size?: "sm" | "base" | "lg";
};

const sizeMap = {
  sm: 7,
  base: "w-[75px] lg:w-[275px]",
  lg: "",
};

export const PfpCard = ({ name, image, size = "base" }: Props) => {
  const result = useEnsAddress({
    name: normalize(name || ""),
  });

  console.log(result);

  return (
    <div className="flex flex-col items-center">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={image.src} alt={name} className={`rounded-full ${sizeMap[size]}`} />
      <Address address={result.data as string} size="3xl" />
      {/* <SocialLinks items={[]} /> */}
    </div>
  );
};
