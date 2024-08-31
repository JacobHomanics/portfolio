"use client";

// import Link from "next/link";
import { EtherscanLogo } from "./EtherscanLogo";
import { SocialIcon } from "./SocialIcon";
import { SocialLink } from "./SocialLink";
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
          <SocialLink url={twitterUrl}>
            <SocialIcon img={twitter} alt="X" />
          </SocialLink>
        ) : (
          <></>
        )}
        {farcasterUrl ? (
          <SocialLink url={farcasterUrl}>
            <SocialIcon img={fc} alt="Warpcast" />
          </SocialLink>
        ) : (
          <></>
        )}
        {instagramUrl ? (
          <SocialLink url={instagramUrl}>
            <SocialIcon img={ig} alt="Instagram" />
          </SocialLink>
        ) : (
          <></>
        )}
        {linkedinUrl ? (
          <SocialLink url={linkedinUrl}>
            <SocialIcon img={linkedin} alt="Linkedin" />
          </SocialLink>
        ) : (
          <></>
        )}
        {githubUrl ? (
          <SocialLink url={githubUrl}>
            <div className="bg-black">
              <SocialIcon img={github} alt="Github" />
            </div>
          </SocialLink>
        ) : (
          <></>
        )}
        {buidlguidlUrl ? (
          <SocialLink url={buidlguidlUrl}>
            <BuidlGuidlLogo className="w-10 h-10 hover:brightness-75" />
          </SocialLink>
        ) : (
          <></>
        )}

        {etherscanUrl ? (
          <SocialLink url={etherscanUrl}>
            <EtherscanLogo className="w-10 h-10 hover:brightness-75" />
          </SocialLink>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
