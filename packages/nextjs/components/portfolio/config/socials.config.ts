import { EmailLogo } from "../logos/EmailLogo";
import { BuidlGuidlLogo } from "~~/components/assets/BuidlGuidlLogo";
import { EtherscanLogo } from "~~/components/portfolio/logos/EtherscanLogo";
import { GithubLogo } from "~~/components/portfolio/logos/GithubLogo";
import { NounspaceLogo } from "~~/components/portfolio/logos/NounspaceLogo";
import { OpenSeaLogo } from "~~/components/portfolio/logos/OpenSeaLogo";
import { ScrollLogo } from "~~/components/portfolio/logos/ScrollLogo";
import { XLogo } from "~~/components/portfolio/logos/XLogo";
import linkedinIcon from "~~/public/website-icons/LI-In-Bug.png";
import TelegramLogo from "~~/public/website-icons/Logo.png";
import warpcastIcon from "~~/public/website-icons/warpcast-icon.png";
import youtubeLogo from "~~/public/website-icons/youtube_social_circle_red.png";

export const IconsLinksData = [
  { url: "https://x.com/jacobhomanics", icon: XLogo },
  { url: "https://github.com/hotmanics", icon: GithubLogo },
  { url: "https://warpcast.com/jacobhomanics.eth", icon: warpcastIcon.src },
  { url: "https://linkedin.com/in/jacobhomanics", icon: linkedinIcon.src },
  { url: "https://etherscan.io/name-lookup-search?id=jacobhomanics.eth", icon: EtherscanLogo },
  { url: "t.me/jacobhomanics", icon: TelegramLogo.src },
  { url: "mailto:homanicsjake@gmail.com", icon: EmailLogo },
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
] as ({ url: string; icon: string } | { url: string; icon: ({ className }: { className: string }) => Element })[];

export const warpcastIconLink = {
  url: "https://warpcast.com/jacobhomanics.eth",
  icon: warpcastIcon.src,
};

export const xIconLink = { url: "https://x.com/jacobhomanics", icon: XLogo };
export const linkedinIconLink = { url: "https://linkedin.com/in/jacobhomanics", icon: linkedinIcon.src };

export const githubIconLink = { url: "https://github.com/hotmanics", icon: GithubLogo };
export const etherscanIconLink = {
  url: "https://etherscan.io/name-lookup-search?id=jacobhomanics.eth",
  icon: EtherscanLogo,
};
export const buidlguidlIconLink = {
  url: "https://app.buidlguidl.com/builders/0xc689c800a7121b186208ea3b182fAb2671B337E7",
  icon: BuidlGuidlLogo,
};
export const youtubeIconLink = { url: "https://www.youtube.com/@jacobhomanics8018", icon: youtubeLogo.src };
export const nounspaceIconLink = { url: "https://nounspace.com/s/jacobhomanics.eth", icon: NounspaceLogo };
export const openseaIconLink = {
  url: "https://opensea.io/0xc689c800a7121b186208ea3b182fAb2671B337E7",
  icon: OpenSeaLogo,
};
export const documentationIconLink = { url: "", icon: ScrollLogo };
