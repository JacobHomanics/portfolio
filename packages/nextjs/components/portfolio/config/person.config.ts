import profilePic from "~~/public/jake3.gif";

// import TelegramLogo from "~~/public/website-icons/Logo.png";

export const personAddress = "0xc689c800a7121b186208ea3b182fAb2671B337E7";
export const PersonData = {
  addr: personAddress,
  name: "Tony Rodriguez",
  description: "Web3 Developer focusing on NFTs, DAOs, open source technologies, and public goods.",
  img: profilePic.src,
  links: [
    {
      tag: "Telegram",
      url: "jacobhomanics", //, icon: TelegramLogo.src
    },
    { tag: "Github", url: "hotmanics" },
    { tag: "Email", url: "homanicsjake@gmail.com" },
    { tag: "X", url: "jacobhomanics" },
    { tag: "Discord", url: "jakehomanics" },

    { tag: "Warpcast", url: "jacobhomanics.eth" },
    { tag: "Linkedin", url: "jacobhomanics" },
    { tag: "Etherscan", url: personAddress },
    {
      tag: "BuidlGuidl",
      url: personAddress,
    },
    { tag: "Youtube", url: "@jacobhomanics8018" },
    { tag: "Nounspace", url: "jacobhomanics.eth" },
    {
      tag: "Opensea",
      url: personAddress,
    },
  ],
};
