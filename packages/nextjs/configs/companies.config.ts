import { resolveProject } from "./catalog";
import { withDetailPage } from "./detail-page";
import { agora, bigshotToyworks, disgo, projectVenkman } from "./images";
import { ProjectData, ProjectRef } from "./types";

const companies: Array<ProjectData & { slug: string; projectRefs: ProjectRef[] }> = [
  {
    slug: "disgo",
    name: "Disgo",
    shortDescription: "3 Apps with 800+ users and 5 design partners.",
    description:
      "Software for bars and restaurants: personalized recommendations for guests, on-demand bartender staffing, and operator tools for venues.",
    imgSrc: disgo,
    bannerSrc: disgo,
    link: "https://www.disgoapp.io/",
    projectRefs: [
      { category: "websites", slug: "disgo" },
      { category: "websites", slug: "bartynder" },
      { category: "websites", slug: "venue-manager" },
    ],
  },
  {
    slug: "agora",
    name: "Agora",
    shortDescription: "Built the first Superchain interoperable governance voting platform.",
    description: "Onchain governance platform trusted by Optimism, ENS, Uniswap, and other protocol communities.",
    imgSrc: agora,
    bannerSrc: agora,
    link: "https://www.agora.xyz/",
    projectRefs: [{ category: "websites", slug: "op-atlas" }],
  },
  {
    slug: "bigshot-toyworks",
    name: "Bigshot Toyworks",
    shortDescription: "Built the Weedies and Pizza People NFT collections.",
    description: "Creative agency designing characters, illustrations, toys, and art objects.",
    imgSrc: bigshotToyworks,
    bannerSrc: bigshotToyworks,
    link: "https://www.bigshottoyworks.com/",
    projectRefs: [
      { category: "nft-collections", slug: "weedies" },
      { category: "nft-collections", slug: "pizza-people" },
    ],
  },
  {
    slug: "project-venkman",
    name: "Project Venkman",
    shortDescription: "Built the Bill Murray 1000 NFT collections.",
    description:
      "Austin company creating celebrity memberships. Behind the Bill Murray 1000, a biographical NFT collection of stories from Bill Murray’s life.",
    imgSrc: projectVenkman,
    bannerSrc: projectVenkman,
    projectRefs: [
      { category: "nft-collections", slug: "bill-murray-1000" },
      { category: "nft-collections", slug: "bill-murray-1000-open-edition" },
    ],
  },
];

export const data = withDetailPage("/companies", companies).map(company => {
  const source = companies.find(item => item.slug === company.slug);
  return {
    ...company,
    projects: (source?.projectRefs ?? []).map(resolveProject),
  };
});
