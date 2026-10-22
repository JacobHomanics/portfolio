export const siteNav = [
  { label: "Home", screen: "home" },
  { label: "Card", screen: "card" },
  { label: "Companies", screen: "category", category: "companies" },
  { label: "Websites", screen: "category", category: "websites" },
  { label: "Video Games", screen: "category", category: "video-games" },
  { label: "NFT Collections", screen: "category", category: "nft-collections" },
  { label: "Presentations", screen: "category", category: "presentations" },
  { label: "Unity Tooling", screen: "category", category: "unity-tooling" },
  { label: "DAO Tooling", screen: "category", category: "dao-tooling" },
] as const;

export type SiteNavItem = (typeof siteNav)[number];
