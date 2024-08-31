"use client";

// import Link from "next/link";
import { EtherscanLogo } from "./EtherscanLogo";
import { IconLink } from "./IconLink";
import { BuidlGuidlLogo } from "~~/components/assets/BuidlGuidlLogo";
import fc from "~~/public/social-icons/farcaster.png";
import github from "~~/public/social-icons/github.png";
import ig from "~~/public/social-icons/instagram.png";
import linkedin from "~~/public/social-icons/linkedin.png";
import twitter from "~~/public/social-icons/x.png";

type Props = {
  twitterUrl?: string;
  farcasterUrl?: string;
  instagramUrl?: string;
  linkedinUrl?: string;
  githubUrl?: string;
  etherscanUrl?: string;
  buidlguidlUrl?: string;
  size?: "sm" | "base" | "lg";
};

// const sizeMap = {
//   sm: 7,
//   base: "w-[75px] lg:w-[275px]",
//   lg: "",
// };

export const SocialLinks = ({
  twitterUrl,
  farcasterUrl,
  instagramUrl,
  linkedinUrl,
  githubUrl,
  buidlguidlUrl,
  etherscanUrl,
}: //   size = "base",
Props) => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex space-x-1 items-center justify-center">
        {twitterUrl ? (
          <IconLink url={twitterUrl}>
            <img src={twitter.src} alt="X" className="w-7 lg:w-10" />
          </IconLink>
        ) : (
          <></>
        )}
        {farcasterUrl ? (
          <IconLink url={farcasterUrl}>
            <img src={fc.src} alt="Warpcast" className="w-7 lg:w-10" />
          </IconLink>
        ) : (
          <></>
        )}
        {instagramUrl ? (
          <IconLink url={instagramUrl}>
            <img src={ig.src} alt="Instagram" className="w-7 lg:w-10" />
          </IconLink>
        ) : (
          <></>
        )}
        {linkedinUrl ? (
          <IconLink url={linkedinUrl}>
            <img src={linkedin.src} alt="Linkedin" className="w-7 lg:w-10" />
          </IconLink>
        ) : (
          <></>
        )}
        {githubUrl ? (
          <IconLink url={githubUrl}>
            <div className="bg-black">
              <img src={github.src} alt="Github" className="w-7 lg:w-10" />
            </div>
          </IconLink>
        ) : (
          <></>
        )}
        {buidlguidlUrl ? (
          <IconLink url={buidlguidlUrl}>
            <BuidlGuidlLogo className="w-7 h-7 lg:w-10 lg:h-10" />
          </IconLink>
        ) : (
          <></>
        )}

        {etherscanUrl ? (
          <IconLink url={etherscanUrl}>
            <EtherscanLogo className="w-7 h-7 lg:w-10 lg:h-10" />
          </IconLink>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
