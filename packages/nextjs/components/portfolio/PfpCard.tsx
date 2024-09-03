"use client";

import { Address } from "../scaffold-eth";

type Props = {
  name?: string;
  image?: any;
  address?: string;
  size?: "sm" | "base" | "lg";
};

const sizeMap = {
  sm: 7,
  base: "w-[75px] md:w-[150px]",
  lg: "",
};

export const PfpCard = ({ name, address, image, size = "base" }: Props) => {
  return (
    <div className="flex flex-col items-center">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={image.src} alt={name} className={`rounded-full ${sizeMap[size]}`} />
      <div className="text-3xl">{name}</div>
      <Address address={address} />
      {/* <SocialLinks items={[]} /> */}
    </div>
  );
};
