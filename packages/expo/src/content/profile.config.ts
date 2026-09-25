import { data as companiesData } from "./companies.config";
import { data as daoToolingData } from "./dao-tooling.config";
import { data as nftCollectionsData } from "./nftCollections.config";
import { talkProjects } from "./talks.config";
import { ProjectData } from "./types";
import { data as gamesData } from "./video-games.config";
import { data as websitesData } from "./websites.config";

export const profile = {
  name: "Jacob Homanics",
  title: "Software Engineer & Founder",
  description: "Skilled in 0→1 product building. Adept in web, native, games, VR/AR, tooling, and blockchains.",
  photo: "jake.webp",
};

export const cardHighlightProjects: ProjectData[] = [
  companiesData[0],
  talkProjects[0],
  nftCollectionsData[3],
  daoToolingData[0],
];

export const highlightProjects: ProjectData[] = [
  ...cardHighlightProjects,
  nftCollectionsData[0],
  websitesData.find(
    project =>
      project.slug !== "bluebell-stock-exchange" &&
      project.slug !== "carstarz" &&
      project.slug !== "ziti-cash" &&
      project.slug !== "disgo" &&
      project.slug !== "bartynder" &&
      project.slug !== "venue-manager",
  ) ?? websitesData[0],
  gamesData[0],
];
