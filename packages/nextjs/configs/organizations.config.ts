import { ProjectData } from "./types";
import atxDaoLogo from "~~/public/images/atx-dao.png";
import bstwLogo from "~~/public/images/bstw.png";
import buidlguidlLogo from "~~/public/images/buidlguidllogo.jpg";
import daoCoalition from "~~/public/images/dao-coalition.png";
import developerDaoLogo from "~~/public/images/dd.png";
import hatsProtocolLogo from "~~/public/images/hats.jpg";
import optimismLogo from "~~/public/images/optimism-ethereum-op-logo.png";
import optimismFractalLogo from "~~/public/images/optimism-fractal.jpg";
import raidGuildLogo from "~~/public/images/rg-icon.png";
import solidityGuildLogo from "~~/public/images/solidity-guild.png";

export const data: Array<ProjectData> = [
  {
    link: "https://optimism.io/",
    imgSrc: optimismLogo,
    name: "Optimism",
    description:
      "Built out the application process on OP Atlas for user's to submit applications to Missions 7 & 8: Dev Tooling & Onchain Builders. Helped developers setup and troubleshoot their OP nodes through OP's discord as a techNERD.",
  },
  {
    link: "https://atxdao.com",
    imgSrc: atxDaoLogo,
    name: "ATX DAO",
    description:
      "Seeked and received a 30k OP grant to build a Reputation & Roles Starter Kit. Participates in governance through voting mechanisms. Attends in-person and online events. Signer on the Treasury multi-sig. Assisted with the development of the member's portal. Deployed infrastructure to track members' reputation and grant them authorities through the Hats Protocol. Owner of a membership NFT.",
  },

  {
    link: "https://buidlguidl.com",
    imgSrc: buidlguidlLogo,
    name: "Buidl Guidl",
    description:
      "Contributed open source code to the Scaffold-ETH 2 repository which allows for the abstraction of chain interactions and was a driving force in improving the application's security by moving private keys from .env files over to keystore files. Received several mini-grants to build out prototypes using SE-2. Additionally participated in several BowTie Fridays showcasing several mini-projects.",
  },
  {
    link: "https://raidguild.org",
    imgSrc: raidGuildLogo,
    name: "Raid Guild",
    description:
      "Participated in the Cohort VII. Built the CohortViewer application that was showcased at the end of orientation.",
  },
  {
    link: "https://solidityguild.com/",
    imgSrc: solidityGuildLogo,
    name: "Solidity Guild",
    description: "Owner of a membership NFT.",
  },
  {
    link: "https://hatsprotocol.xyz/",
    imgSrc: hatsProtocolLogo,
    name: "Hats Protocol",
    description:
      "Winner of the first ever Hatathon. Created many Hats Trees that integrated a variety of eligibility modules: NFTs, ERC20s, Gitcoin Passport, Unlock Protocol, Signer Agreement, and custom combinations of the aforementioned (which required custom smart contract deployments).",
  },
  {
    link: "https://www.developerdao.com/",
    imgSrc: developerDaoLogo,
    name: "Developer DAO",
    description: "Owner of a membership NFT.",
  },

  {
    link: "https://optimismfractal.com/",
    imgSrc: optimismFractalLogo,
    name: "Optimism Fractal",
    description:
      "Participates in the weekly Respect Game by showcasing my contributions to the Optimism ecosystem and showing support for others doing the same.",
  },
  {
    link: "https://www.daocoalition.org/",
    imgSrc: daoCoalition,
    name: "DAO Coalition",
    description:
      "Developed several systems that combine protocols to achieve fully autonomous flows ranging from subscriptions to gated communities.",
  },

  {
    link: "https://www.bigshottoyworks.com/",
    imgSrc: bstwLogo,
    name: "Bigshot Toyworks",
    description: "Brought Web2 people onchain by releasing several NFT collections that piqued their interest.",
  },
];
