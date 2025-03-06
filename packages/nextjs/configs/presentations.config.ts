import { buidlguidlDemoDay, filecoinTalk, filecoinTalkBannerSrc, supercahinDemoDay } from "./images";
import { ProjectData } from "./types";

export const data: Array<ProjectData> = [
  {
    name: "Web2 Games to Web3",
    shortDescription: "Discussed implementing decentralized storage techniques into web2 gaming.",
    description: "Discussed the value proposition of introducing web2 games to web3 technologies.",
    imgSrc: filecoinTalk,
    link: "https://www.youtube.com/watch?v=jpsT6qCkTJs&list=PLp3zrT1ewY0kwXj2NgQU6ZrbLlb_Uwmc0",
    bannerSrc: filecoinTalkBannerSrc,
  },
  {
    name: "Superchain Demo Day",
    description: "Optimism - Reputation & Roles Starter Kit Demo",
    link: "https://www.youtube.com/watch?v=WZMwNuQgtBE&t=1165s",
    imgSrc: supercahinDemoDay,
  },
  {
    name: "Reputation Starter Kit",
    description: "Buidl Guidl - Reputation & Roles Starter Kit Demo",
    link: "https://www.youtube.com/watch?v=1p0KQlVTFow&t=1s",
    imgSrc: buidlguidlDemoDay,
  },
];
