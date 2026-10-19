import { data as daoToolingData } from "./dao-tooling.config";
import { data as nftCollectionsData } from "./nftCollections.config";
import { talkProjects } from "./talks.config";
import { ProjectCategory, ProjectData, ProjectRef } from "./types";
import { data as unityToolingData } from "./unity-tooling.config";
import { data as gamesData } from "./video-games.config";
import { data as websitesData } from "./websites.config";

export type CatalogProject = ProjectData & { slug: string; category: ProjectCategory; categoryTitle: string };

const projectCategories: Record<ProjectCategory, { title: string; projects: Array<ProjectData & { slug: string }> }> = {
  websites: { title: "Websites", projects: websitesData },
  "video-games": { title: "Video Games", projects: gamesData },
  "nft-collections": { title: "NFT Collections", projects: nftCollectionsData },
  presentations: { title: "Presentations", projects: talkProjects },
  "unity-tooling": { title: "Unity Tooling", projects: unityToolingData },
  "dao-tooling": { title: "DAO Tooling", projects: daoToolingData },
};

export function getCategory(slug: string) {
  if (!(slug in projectCategories)) return undefined;
  return projectCategories[slug as ProjectCategory];
}

export function resolveProject(ref: ProjectRef): CatalogProject {
  const category = projectCategories[ref.category];
  const project = category.projects.find(item => item.slug === ref.slug);
  if (!project) {
    throw new Error(`Missing ${ref.category} project "${ref.slug}"`);
  }

  return { ...project, category: ref.category, categoryTitle: category.title };
}
