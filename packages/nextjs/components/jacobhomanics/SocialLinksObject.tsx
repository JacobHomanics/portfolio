import { EtherscanLogo } from "./EtherscanLogo";
// import { IconLink } from "./IconLink";
import { NounspaceLogo } from "./NounspaceLogo";
import { BuidlGuidlLogo } from "~~/components/assets/BuidlGuidlLogo";
// import ladders from "~~/public/ladders.webp";
import fc from "~~/public/social-icons/farcaster.png";
import github from "~~/public/social-icons/github.png";
// import ig from "~~/public/social-icons/instagram.png";
import linkedin from "~~/public/social-icons/linkedin.png";
import twitter from "~~/public/social-icons/x.png";
import youtube from "~~/public/youtube_social_circle_red.png";

export const socialLinks2 = [
  { url: "https://x.com/jacobhomanics", img: twitter, type: "img" },
  { url: "https://warpcast.com/jacobhomanics.eth", img: fc, type: "img" },
  { url: "https://github.com/hotmanics", img: github, type: "img" },
  { url: "https://linkedin.com/in/jacobhomanics", img: linkedin, type: "img" },
  {
    url: "https://app.buidlguidl.com/builders/0xc689c800a7121b186208ea3b182fAb2671B337E7",
    img: BuidlGuidlLogo,
    type: "component",
  },
  { url: "https://etherscan.io/name-lookup-search?id=jacobhomanics.eth", img: EtherscanLogo, type: "component" },
  { url: "https://nounspace.com/s/jacobhomanics.eth", img: NounspaceLogo, type: "component" },
  { url: "https://www.youtube.com/@jacobhomanics8018", img: youtube, type: "img" },
];
