export type GameEmbed = {
  url: string;
  width: number;
  height: number;
};

export type RecommendedPlatform = {
  name: string;
  note?: string;
};

export type ProjectCategory =
  | "websites"
  | "video-games"
  | "nft-collections"
  | "presentations"
  | "unity-tooling"
  | "dao-tooling";

export type ProjectRef = {
  category: ProjectCategory;
  slug: string;
};

export type ProjectData = {
  name: string;
  description?: string;
  imgSrc?: string;
  bannerSrc?: string;
  shortDescription?: string;
  link?: string;
  links?: Array<Link>;
  embed?: GameEmbed;
  recommendedPlatform?: RecommendedPlatform;
};

export type Link = {
  url: string;
  imagePath: string;
  label?: string;
};
