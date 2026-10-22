import { withDetailPage } from "./detail-page";
import { ProjectData } from "./types";

const projects: Array<ProjectData & { slug: string }> = [
  {
    slug: "reputation-and-roles-starter-kit",
    name: "Reputation & Roles Starter Kit",
    shortDescription: "Onchain trust toolkit backed by a $60K grant.",
    description:
      "Toolkit to track trust onchain funded by receiving a $60k grant. Deploy trust tracking onchain and grant authorities/permissions in decentralized and permissionless ways!",
    imgSrc: "starterKit.png",
    bannerSrc: "starterKit.png",
    link: "https://app.charmverse.io/op-grants/page-23303127376120303",
    links: [
      { url: "https://github.com/ATXDAO/rep-and-roles-starter-kit", imagePath: "github.svg" },
      {
        url: "https://jacobhomanics.github.io/rep-and-roles-docs/starter-kit/overview.html",
        imagePath: "scroll.svg",
      },
    ],
  },
  {
    slug: "optimism-fractal-hats-tree",
    name: "Optimism Fractal Hats Tree",
    description:
      "Allows participants of the Respect Game to claim authorities/responsibilities based on their number of Respect tokens.",
    imgSrc: "of.jpg",
    link: "https://app.hatsprotocol.xyz/trees/10/175",
    links: [{ url: "https://app.hatsprotocol.xyz/trees/10/175", imagePath: "hats.jpg" }],
  },
  {
    slug: "dao-coalition-hats-tree",
    name: "DAO Coalition Hats Tree",
    description:
      "Uses the Gitcoin Passport and Signer Agreement Modules, which hooks into an Unlock checkout experience which unlocks a Voter Hat to be used in Snapshot.",
    imgSrc: "coa.png",
    link: "https://app.hatsprotocol.xyz/trees/10/167",
    links: [
      { url: "https://app.hatsprotocol.xyz/trees/10/167", imagePath: "hats.jpg" },
      { url: "https://snapshot.org/#/daocoa.eth", imagePath: "snapshot.png" },
      { url: "https://app.unlock-protocol.com/checkout?id=4b82ba6e-661b-4cf6-8a35-fa60850eba6f", imagePath: "unlock.png" },
    ],
  },
];

export const data = withDetailPage("/dao-tooling", projects);
