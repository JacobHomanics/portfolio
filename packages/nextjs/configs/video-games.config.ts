import { withDetailPage } from "./detail-page";
import { ProjectData } from "./types";
import cookie from "~~/public/images/cookie.png";
import faith from "~~/public/images/faith.png";
import gorglok from "~~/public/images/gorglok.png";
import newBeginnings from "~~/public/images/new-beginnings.png";
import onslaught from "~~/public/images/onslaught.png";
import pandemic from "~~/public/images/pandemic.png";

const projects: Array<ProjectData & { slug: string }> = [
  {
    slug: "faith",
    name: "Faith",
    shortDescription: "Role-playing game exploring narrative, progression, and unique abilities.",
    description: "Role-playing game exploring narrative, progression, and unique abilities.",
    imgSrc: faith,
    bannerSrc: faith,
    link: "https://jacobhomanics.itch.io/faith",
    embed: {
      url: "https://itch.io/embed-upload/4232394",
      width: 1280,
      height: 720,
    },
    recommendedPlatform: {
      name: "Desktop browser",
      note: "Also available for Windows, macOS, and Linux.",
    },
  },
  {
    slug: "pandemic-simulation",
    name: "Pandemic Simulation",
    description: "Survive the clock by taking necessary precautions in order to prevent the virus from spreading!",
    imgSrc: pandemic,
    link: "https://jacobhomanics.itch.io/prevent-infection",
    embed: {
      url: "https://itch.io/embed-upload/2368000",
      width: 980,
      height: 668,
    },
    recommendedPlatform: { name: "Desktop browser" },
  },
  {
    slug: "gorgloks-revenge",
    name: "Gorglok's Revenge",
    description: "Gorglok The Eye is fed up with these pointy objects. He will disintegrate them if he has to!",
    imgSrc: gorglok,
    link: "https://jacobhomanics.itch.io/gorgloksrevenge",
    embed: {
      url: "https://itch.io/embed-upload/2519481",
      width: 980,
      height: 668,
    },
    recommendedPlatform: { name: "Desktop browser" },
  },
  {
    slug: "onslaught",
    name: "Onslaught",
    description: "An action role-plaiyng game focused on quick combat. How long can you last?",
    imgSrc: onslaught,
    link: "https://jacobhomanics.itch.io/project-evolution-1point0",
    embed: {
      url: "https://itch.io/embed-upload/6249326",
      width: 960,
      height: 540,
    },
    recommendedPlatform: {
      name: "Desktop browser",
      note: "Also available for Windows, macOS, and Linux.",
    },
  },
  {
    slug: "new-beginnings",
    name: "New Beginnings",
    description: "An early open sourced prototype for an RPG that draws inspiration from World of Warcraft.",
    imgSrc: newBeginnings,
    link: "https://jacobhomanics.itch.io/new-beginnings",
    embed: {
      url: "https://itch.io/embed-upload/12920406",
      width: 1280,
      height: 720,
    },
    recommendedPlatform: { name: "Desktop browser" },
  },
  {
    slug: "cookie-clicker-web3",
    name: "Cookie Clicker Web3",
    description:
      "A cookie clicker prototype where you kill enemies for gold and increase your party's strength! Implements Web3 Technology in order to save the player game data using their wallet.",
    imgSrc: cookie,
    link: "https://cookie-clicker-web3-nextjs.vercel.app/",
    embed: {
      url: "https://cookie-clicker-web3-nextjs.vercel.app/",
      width: 1280,
      height: 800,
    },
    recommendedPlatform: { name: "Desktop browser" },
  },
];

export const data = withDetailPage("/video-games", projects);
