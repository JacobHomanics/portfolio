import { StaticImageData } from "next/image";
// import { EmailLogo } from "../logos/EmailLogo";
import TelegramLogo from "~~/public/linkIcons/Logo.png";
import email from "~~/public/linkIcons/email.svg";
import etherscan from "~~/public/linkIcons/etherscan.svg";
import github from "~~/public/linkIcons/github.svg";
import linkedinIcon from "~~/public/linkIcons/linkedin.png";
import nounspace from "~~/public/linkIcons/nounspace.svg";
import opensea from "~~/public/linkIcons/opensea.png";
import warpcastIcon from "~~/public/linkIcons/warpcast-icon.png";
import x from "~~/public/linkIcons/x.svg";
import youtubeLogo from "~~/public/linkIcons/youtube_social_circle_red.png";

export const IconsLinksData = [
  { url: "https://x.com/jacobhomanics", icon: x },
  { url: "https://warpcast.com/jacobhomanics.eth", icon: warpcastIcon },
  { url: "https://linkedin.com/in/jacobhomanics", icon: linkedinIcon },
  { url: "https://t.me/jacobhomanics", icon: TelegramLogo },
  { url: "mailto:homanicsjake@gmail.com", icon: email },
  { url: "https://github.com/jacobhomanics", icon: github },
  { url: "https://etherscan.io/name-lookup-search?id=jacobhomanics.eth", icon: etherscan },
  // {
  //   url: "https://app.buidlguidl.com/builders/0xc689c800a7121b186208ea3b182fAb2671B337E7",
  //   icon: BuidlGuidlLogo,
  // },
  { url: "https://www.youtube.com/@jacobhomanics8018", icon: youtubeLogo },
  { url: "https://nounspace.com/s/jacobhomanics.eth", icon: nounspace },
  {
    url: "https://opensea.io/0xc689c800a7121b186208ea3b182fAb2671B337E7",
    icon: opensea,
  },
] as ({ url: string; icon: string } | { url: string; icon: StaticImageData })[];
