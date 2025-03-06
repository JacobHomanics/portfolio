import { ProjectData } from "./types";
import cookie from "~~/public/images/cookie.png";
import faith from "~~/public/images/faith.png";
import gorglok from "~~/public/images/gorglok.png";
import newBeginnings from "~~/public/images/new-beginnings.png";
import onslaught from "~~/public/images/onslaught.png";
import pandemic from "~~/public/images/pandemic.png";

export const data: Array<ProjectData> = [
  {
    name: "Faith",
    shortDescription: "Role-playing game exploring narrative, progression, and unique abilities.",
    description: "Role-playing game exploring narrative, progression, and unique abilities.",
    imgSrc: faith,
    bannerSrc: faith,
    link: "https://jacobhomanics.itch.io/faith",
  },
  {
    name: "Pandemic Simulation",
    description: "Survive the clock by taking necessary precautions in order to prevent the virus from spreading!",
    imgSrc: pandemic,
    link: "https://jacobhomanics.itch.io/prevent-infection",
  },
  {
    name: "Gorglok's Revenge",
    description: "Gorglok The Eye is fed up with these pointy objects. He will disintegrate them if he has to!",
    imgSrc: gorglok,
    link: "https://jacobhomanics.itch.io/gorgloksrevenge",
  },
  {
    name: "Onslaught",
    description: "An action role-plaiyng game focused on quick combat. How long can you last?",
    imgSrc: onslaught,
    link: "https://jacobhomanics.itch.io/project-evolution-1point0",
  },
  {
    name: "New Beginnings",
    description: "An early open sourced prototype for an RPG that draws inspiration from World of Warcraft.",
    imgSrc: newBeginnings,
    link: "https://jacobhomanics.itch.io/new-beginnings",
  },
  {
    name: "Cookie Clicker Web3",
    description:
      "A cookie clicker prototype where you kill enemies for gold and increase your party's strength! Implements Web3 Technology in order to save the player game data using their wallet.",
    imgSrc: cookie,
    link: "https://cookie-clicker-web3-nextjs.vercel.app/",
  },
];
