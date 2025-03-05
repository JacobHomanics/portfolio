import { buidlguidlDemoDay, filecoinTalk, supercahinDemoDay } from "./images";
import { ProjectData } from "./types";

export const data: Array<ProjectData> = [
  {
    name: "Bringing Web2 Games to Web3",
    description: "Filecoin - FIL Network Base Austin 23",
    imgSrc: filecoinTalk,
    link: "https://www.youtube.com/watch?v=jpsT6qCkTJs&list=PLp3zrT1ewY0kwXj2NgQU6ZrbLlb_Uwmc0",
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
