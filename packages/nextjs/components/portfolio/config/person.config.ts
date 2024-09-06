import { EmailLogo } from "../logos/EmailLogo";
import { BuidlGuidlLogo } from "~~/components/assets/BuidlGuidlLogo";
import { EtherscanLogo } from "~~/components/portfolio/logos/EtherscanLogo";
import { GithubLogo } from "~~/components/portfolio/logos/GithubLogo";
import { NounspaceLogo } from "~~/components/portfolio/logos/NounspaceLogo";
import { OpenSeaLogo } from "~~/components/portfolio/logos/OpenSeaLogo";
// import { ScrollLogo } from "~~/components/portfolio/logos/ScrollLogo";
import { XLogo } from "~~/components/portfolio/logos/XLogo";
import profilePic from "~~/public/jake3.gif";
import linkedinIcon from "~~/public/website-icons/LI-In-Bug.png";
import TelegramLogo from "~~/public/website-icons/Logo.png";
import warpcastIcon from "~~/public/website-icons/warpcast-icon.png";
import youtubeLogo from "~~/public/website-icons/youtube_social_circle_red.png";

export const PersonData = {
  addr: "0xc689c800a7121b186208ea3b182fAb2671B337E7",
  name: "Jacob Homanics",
  description: "Web3 Developer focusing on NFTs, DAOs, open source technologies, and public goods.",
  img: profilePic.src,
  links: [
    { tag: "Telegram", url: "jacobhomanics", icon: TelegramLogo.src },
    { tag: "Github", url: "hotmanics", icon: GithubLogo },
    { tag: "Email", url: "homanicsjake@gmail.com", icon: EmailLogo },
    { tag: "X", url: "jacobhomanics", icon: XLogo },
    { tag: "Discord", url: "jakehomanics", icon: XLogo },

    { url: "https://warpcast.com/jacobhomanics.eth", icon: warpcastIcon.src },
    { url: "https://linkedin.com/in/jacobhomanics", icon: linkedinIcon.src },
    { url: "https://etherscan.io/name-lookup-search?id=jacobhomanics.eth", icon: EtherscanLogo },
    {
      url: "https://app.buidlguidl.com/builders/0xc689c800a7121b186208ea3b182fAb2671B337E7",
      icon: BuidlGuidlLogo,
    },
    { url: "https://www.youtube.com/@jacobhomanics8018", icon: youtubeLogo.src },
    { url: "https://nounspace.com/s/jacobhomanics.eth", icon: NounspaceLogo },
    {
      url: "https://opensea.io/0xc689c800a7121b186208ea3b182fAb2671B337E7",
      icon: OpenSeaLogo,
    },
  ],
};
