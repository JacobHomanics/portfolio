"use client";

import { Address } from "../scaffold-eth";
import { IconsLinksData } from "./config/socials.config";
import { IconsLinks } from "./icons-links/IconLinks";

type Props = {
  name?: string;
  description?: string;
  image?: any;
  address?: string;
  size?: "sm" | "base" | "lg";
};

const sizeMap = {
  sm: 7,
  base: "w-[75px] md:w-[150px]",
  lg: "",
};

export const PfpCard = ({ name, address, description, image, size = "base" }: Props) => {
  return (
    <div className="flex flex-col items-center text-center">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={image.src} alt={name} className={`rounded-full ${sizeMap[size]}`} />
      <div className="text-3xl">{name}</div>
      <Address address={address} />
      <div className="pointer-events-auto border-4 border-primary rounded-lg p-2">
        <IconsLinks iconsLinks={IconsLinksData} size="sm" justify="center" />
      </div>
      <div className="text-xl m-2">{description}</div>
    </div>
  );
};
