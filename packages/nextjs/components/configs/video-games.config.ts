import { ProjectData } from "./types";
import cookie from "~~/public/games/cookie.png";
import faith from "~~/public/games/faith.png";
import gorglok from "~~/public/games/gorglok.png";
import newBeginnings from "~~/public/games/new-beginnings.png";
import onslaught from "~~/public/games/onslaught.png";
import pandemic from "~~/public/games/pandemic.png";

export const data: Array<ProjectData> = [
  {
    name: "Faith",
    description: "A role-playing game exploring narrative, character progression, and unqiue abilities.",
    imgSrc: faith,
    link: "https://jacobhomanics.itch.io/faith",
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
    name: "Pandemic Simulation",
    description: "Survive the clock by taking necessary precautions in order to prevent the virus from spreading!",
    imgSrc: pandemic,
    link: "https://jacobhomanics.itch.io/prevent-infection",
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
