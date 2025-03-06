import { StaticImageData } from "next/image";
import {
  TelegramLogo,
  email, // etherscan,
  github,
  linkedinIcon, // nounspace,
  // opensea,
  warpcastIcon,
  x, // youtubeLogo,
} from "./images";

export const IconsLinksData = [
  { url: "https://github.com/jacobhomanics", icon: github },
  { url: "https://x.com/jacobhomanics", icon: x },
  { url: "https://linkedin.com/in/jacobhomanics", icon: linkedinIcon },
  { url: "https://warpcast.com/jacobhomanics.eth", icon: warpcastIcon },
  { url: "https://t.me/jacobhomanics", icon: TelegramLogo },
  { url: "mailto:homanicsjake@gmail.com", icon: email },
  // { url: "https://etherscan.io/name-lookup-search?id=jacobhomanics.eth", icon: etherscan },
  // {
  //   url: "https://app.buidlguidl.com/builders/0xc689c800a7121b186208ea3b182fAb2671B337E7",
  //   icon: BuidlGuidlLogo,
  // },
  // { url: "https://www.youtube.com/@jacobhomanics8018", icon: youtubeLogo },
  // { url: "https://nounspace.com/s/jacobhomanics.eth", icon: nounspace },
  // {
  //   url: "https://opensea.io/0xc689c800a7121b186208ea3b182fAb2671B337E7",
  //   icon: opensea,
  // },
] as ({ url: string; icon: string } | { url: string; icon: StaticImageData })[];
