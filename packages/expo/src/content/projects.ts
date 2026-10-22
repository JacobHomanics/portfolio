import type { ImageSourcePropType } from "react-native";

import type { BrandIconName } from "../components/BrandIcon";

type Tech = { label: string; icon?: BrandIconName };

const tech = {
  nextjs: { label: "Next.js", icon: "nextjs" },
  react: { label: "React", icon: "react" },
  typescript: { label: "TypeScript", icon: "typescript" },
  prisma: { label: "Prisma", icon: "prisma" },
  postgresql: { label: "PostgreSQL", icon: "postgresql" },
  solidity: { label: "Solidity", icon: "solidity" },
  foundry: { label: "Foundry" },
  viem: { label: "Viem", icon: "viem" },
  wagmi: { label: "Wagmi", icon: "wagmi" },
  reactNative: { label: "React Native", icon: "react" },
  expo: { label: "Expo", icon: "expo" },
  convex: { label: "Convex", icon: "convex" },
  privy: { label: "Privy" },
  stripe: { label: "Stripe", icon: "stripe" },
  hardhat: { label: "Hardhat", icon: "hardhat" },
  ipfs: { label: "IPFS", icon: "ipfs" },
  ethereum: { label: "Ethereum", icon: "ethereum" },
  unity: { label: "Unity", icon: "unity" },
  csharp: { label: "C#", icon: "csharp" },
} satisfies Record<string, Tech>;

/**
 * A few 0-to-1 products that back up the About section. Details and images are carried over
 * from the previous version of the site (packages/expo-deprecated). Tech stacks come from the
 * public repos where there is one; the rest are left empty until confirmed.
 */
export const projects: {
  name: string;
  description: string;
  url: string;
  image: ImageSourcePropType;
  tags: string[];
  tech: Tech[];
  /** Extra pages to show beside "View project". */
  links?: { label: string; url: string }[];
}[] = [
  {
    name: "Bill Murray 1000",
    description:
      "Engineered and deployed the Ethereum smart contracts behind the Bill Murray 1000 collection, a launch that attracted 500+ unique users and generated $240K+ in revenue.",
    url: "https://opensea.io/collection/billmurray1000",
    image: require("../../assets/projects/bill.webp"),
    tags: ["NFT", "Blockchain"],
    tech: [tech.solidity, tech.hardhat, tech.ipfs, tech.ethereum, tech.unity, tech.csharp],
    links: [
      { label: "Hollywood Reporter", url: "https://www.hollywoodreporter.com/news/general-news/bill-murray-nft-1235117478/" },
      { label: "OpenSea", url: "https://opensea.io/collection/bill-murray-1000-destinations" },
    ],
  },
  {
    name: "Reputation & Roles Starter Kit",
    description: "Secured a $60K grant to build an open-source framework for tracking and rewarding trust between individuals and organizations through transparent, verifiable onchain records.",
    url: "https://github.com/ATXDAO/rep-and-roles-starter-kit",
    image: require("../../assets/projects/starter-kit.png"),
    tags: ["Blockchain", "Open source", "Grant funded"],
    tech: [tech.solidity, tech.foundry, tech.nextjs, tech.react, tech.typescript, tech.viem, tech.wagmi],
    links: [
      { label: "Milestone tracking", url: "https://gov.optimism.io/t/reputation-roles-milestone-tracking-atx-dao/7953/27" },
      { label: "GitHub", url: "https://github.com/ATXDAO/rep-and-roles-starter-kit" },
    ],
  },
  {
    name: "Brandgage",
    description:
      "Developed interactive applications, video games, and immersive VR/AR experiences showcased at multiple pharmaceutical conferences, combining real-time 3D, game development, and interactive storytelling.",
    url: "https://www.brandgage.com",
    image: require("../../assets/projects/brandgage.jpg"),
    tags: ["Video games", "Interactive", "VR", "AR"],
    tech: [],
    links: [
      { label: "Interactive experiences", url: "https://www.brandgage.com/#!/touch-interactives/interactive-informational-panels" },
      { label: "Arcade games", url: "https://www.brandgage.com/#!/arcade-style-games" },
      { label: "VR", url: "https://www.brandgage.com/#!/virtual-reality" },
      { label: "AR", url: "https://www.brandgage.com/#!/augmented-reality" },
    ],
  },
  {
    name: "Disgo",
    description:
      "Led engineering for Disgo, a social discovery platform, and Bartynder, a B2B2C platform for hospitality businesses, shipping two cross-platform apps that serve 800+ users and onboarding 10+ venues.",
    url: "https://app.disgoapp.io",
    image: require("../../assets/projects/disgo.webp"),
    tags: ["Startup", "Web", "iOS", "Android"],
    tech: [tech.reactNative, tech.expo, tech.typescript, tech.convex, tech.privy, tech.stripe],
  },
  {
    name: "OP Atlas",
    description: "Platform rewarding 250+ developers for their open-source contributions to the Optimism ecosystem.",
    url: "https://atlas.optimism.io/",
    image: require("../../assets/projects/atlas.webp"),
    tags: ["Platform", "Open source"],
    tech: [tech.nextjs, tech.react, tech.typescript, tech.prisma, tech.postgresql, tech.viem, tech.wagmi],
  },
  {
    name: "BigShot Toyworks",
    description:
      "Developed interconnected products, including Pizza People and Weedies, that collectively generated over $60K in revenue, built on shared components and integrations across apps.",
    url: "https://pizzapeople.wtf",
    image: require("../../assets/projects/pizza-people.webp"),
    tags: ["NFT", "Blockchain"],
    tech: [],
    links: [
      { label: "Pizza People", url: "https://pizzapeople.wtf" },
      { label: "Pizza People on OpenSea", url: "https://opensea.io/collection/pizza-people-1" },
      { label: "Weedies", url: "https://weedies.wtf" },
      { label: "Weedies on OpenSea", url: "https://opensea.io/collection/weedies-4" },
    ],
  },
];
