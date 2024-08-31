"use client";

import { SocialLinks } from "./SocialLinks";

type Props = {
  name?: string;
  image?: any;
  twitterUrl?: string;
  farcasterUrl?: string;
  instagramUrl?: string;
  linkedinUrl?: string;
  githubUrl?: string;
  size?: "sm" | "base" | "lg";
};

const sizeMap = {
  sm: 7,
  base: "w-[75px] lg:w-[275px]",
  lg: "",
};

export const PfpCard = ({
  name,
  image,
  twitterUrl,
  farcasterUrl,
  instagramUrl,
  linkedinUrl,
  githubUrl,
  size = "base",
}: Props) => {
  return (
    <div className="flex flex-col items-center">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={image.src} alt={name} className={`rounded-full ${sizeMap[size]}`} />
      <p className="m-1 lg:m-4 grilledCheese lg:text-4xl">{name}</p>
      <SocialLinks
        twitterUrl={twitterUrl}
        farcasterUrl={farcasterUrl}
        instagramUrl={instagramUrl}
        linkedinUrl={linkedinUrl}
        githubUrl={githubUrl}
      />
    </div>
  );
};
