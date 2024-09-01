"use client";

import Link from "next/link";
import { BuidlGuidlLogo } from "../assets/BuidlGuidlLogo";
// import { IconLink } from "./IconLink";
import { ScrollIcon } from "./ScrollIcon";
import { SocialLinks } from "./SocialLinks";
import { EtherscanLogo } from "~~/components/jacobhomanics/EtherscanLogo";
import laddersDotVision from "~~/public/ladders.webp";
import opensea from "~~/public/opensea.png";
// import { SocialIcon } from "~~/components/jacobhomanics/SocialIcon";
// import { SocialLink } from "~~/components/jacobhomanics/SocialLink";
import github from "~~/public/social-icons/github.png";

type Props = {
  name: string;
  description: string;
  link: string;
  img: any;
  alt?: string;
  githubUrl?: string;
  etherscanUrl?: string;
  openseaUrl?: string;
  laddersDotVisionUrl?: string;
  documentationUrl?: string;
  buidlguidlUrl?: string;
  size?: "sm" | "base" | "lg";
};

// const sizeMap = {
//   sm: 7,
//   base: "w-[75px] lg:w-[275px]",
//   lg: "",
// };

export const ProjectItem = ({
  name,
  description,
  link,
  img,
  alt,
  //size = "base",
  githubUrl,
  etherscanUrl,
  openseaUrl,
  laddersDotVisionUrl,
  documentationUrl,
  buidlguidlUrl,
}: Props) => {
  const items = [{ url: link, img: img, type: "img" }];

  if (laddersDotVisionUrl) {
    items.push({ url: laddersDotVisionUrl, img: laddersDotVision, type: "img" });
  }
  if (openseaUrl) {
    items.push({ url: openseaUrl, img: opensea, type: "img" });
  }

  if (githubUrl) {
    items.push({ url: githubUrl, img: github, type: "img" });
  }

  if (etherscanUrl) {
    items.push({ url: etherscanUrl, img: EtherscanLogo, type: "component" });
  }

  if (documentationUrl) {
    items.push({ url: documentationUrl, img: ScrollIcon, type: "component" });
  }

  if (buidlguidlUrl) {
    items.push({ url: buidlguidlUrl, img: BuidlGuidlLogo, type: "component" });
  }

  return (
    <div className="flex bg-secondary p-4 rounded-lg border-2 border-indigo-500 items-center">
      <Link href={link} target="#">
        <div className="w-[100px] h-[100px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={img.src} alt={alt ?? name} className="rounded-lg hover:brightness-75 w-full h-full" />
        </div>
      </Link>

      <div className="pl-4 w-full">
        <Link href={link} target="#">
          <p className="text-2xl text-blue-600 dark:text-blue-500 hover:underline">{name}</p>
        </Link>
        <div className="p-[2px] bg-black"></div>
        <p>{description}</p>
        <SocialLinks items={items} />
      </div>
    </div>
  );
};
