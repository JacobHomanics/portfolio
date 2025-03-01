import { coa, github, hats, of, scroll, snapshot, starter, unlock } from "./icons";
import { ProjectData } from "./types";

export const data: Array<ProjectData> = [
  {
    name: "Reputation & Roles Starter Kit",
    description:
      "Toolkit to deploy trust tracking onchain and grant authorities/permissions in decentralized and permissionless ways!",
    imgSrc: starter,
    link: "https://github.com/ATXDAO/rep-and-roles-starter-kit",
    links: [
      { url: "https://github.com/ATXDAO/rep-and-roles-starter-kit", imagePath: github },
      {
        url: "https://jacobhomanics.github.io/rep-and-roles-docs/starter-kit/overview.html",
        imagePath: scroll,
      },
    ],
  },
  {
    name: "Optimism Fractal Hats Tree",
    description:
      "Allows participants of the Respect Game to claim authorities/responsibilities based on their number of Respect tokens.",
    imgSrc: of,
    link: "https://app.hatsprotocol.xyz/trees/10/175",
    links: [{ url: "https://app.hatsprotocol.xyz/trees/10/175", imagePath: hats }],
  },
  {
    name: "DAO Coalition Hats Tree",
    description:
      "Uses the Gitcoin Passport and Signer Agreement Modules, which hooks into an Unlock checkout experience which unlocks a Voter Hat to be used in Snapshot.",
    imgSrc: coa,
    link: "https://app.hatsprotocol.xyz/trees/10/167",
    links: [
      { url: "https://app.hatsprotocol.xyz/trees/10/167", imagePath: hats },
      { url: "https://snapshot.org/#/daocoa.eth", imagePath: snapshot },
      { url: "https://app.unlock-protocol.com/checkout?id=4b82ba6e-661b-4cf6-8a35-fa60850eba6f", imagePath: unlock },
    ],
  },
];
