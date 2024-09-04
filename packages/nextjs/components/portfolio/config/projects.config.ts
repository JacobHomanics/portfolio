import { BuidlGuidlLogo } from "~~/components/assets/BuidlGuidlLogo";
import { EtherscanLogo } from "~~/components/portfolio/logos/EtherscanLogo";
import { GithubLogo } from "~~/components/portfolio/logos/GithubLogo";
import { OpenSeaLogo } from "~~/components/portfolio/logos/OpenSeaLogo";
import { ScrollLogo } from "~~/components/portfolio/logos/ScrollLogo";
import { XLogo } from "~~/components/portfolio/logos/XLogo";
import daoCoalitionLogo from "~~/public/organizations/dao-coalition.png";
import hatsLogo from "~~/public/organizations/hats.jpg";
import optimismFractalIcon from "~~/public/organizations/optimism-fractal.jpg";
import atxDaoRepAndRolesIcon from "~~/public/projects/lifetimetoken.jpg";
import pizzaPeople from "~~/public/projects/pizzapeople.webp";
import repAndRolesIcon from "~~/public/projects/rep-and-roles.png";
import trashIcon from "~~/public/projects/trashIcon.png";
import weedies from "~~/public/projects/weedies.webp";
import wwbtcIcon from "~~/public/projects/wwbtc-icon.png";
import laddersDotVision from "~~/public/website-icons/ladders.webp";
import snapshotIcon from "~~/public/website-icons/snapshot.png";
import unlockIcon from "~~/public/website-icons/unlock.png";
import warpcastIcon from "~~/public/website-icons/warpcast-icon.png";

export const projectsData = [
  {
    name: "Reputation & Roles Starter Kit",
    description:
      "Toolkit to deploy trust tracking onchain and grant authorities/permissions in decentralized and permissionless ways!",
    img: repAndRolesIcon,
    url: "https://github.com/ATXDAO/rep-and-roles-starter-kit",
    links: [
      { url: "https://github.com/ATXDAO/rep-and-roles-starter-kit", icon: GithubLogo },
      {
        url: "https://hotmanics.github.io/rep-and-roles-docs/starter-kit/overview.html",
        icon: ScrollLogo,
      },
    ],
  },
  {
    name: "Wild Water Bottle Cap Token",
    description: "A Real World Asset currency where the proof of reserve is bottle caps!",
    img: wwbtcIcon,
    url: "https://bottlecaptoken.com",
    links: [
      { url: "https://github.com/hotmanics/wild-water-bottle-cap-token", icon: GithubLogo },
      { url: "https://basescan.org/address/0x4169De2404a1484a50aB34fFf631F4B5dba90428", icon: EtherscanLogo },
    ],
  },
  {
    name: "ATX DAO - Reputation & Roles",
    description: "A complete implementation of the Reputation & Roles Starter Kit for ATX DAO.",
    img: atxDaoRepAndRolesIcon,
    url: "https://app.hatsprotocol.xyz/trees/10/105",
    links: [
      {
        url: "https://optimistic.etherscan.io/address/0xFEe6635F43E1eeff88F0A6876Dc9153Fb128a81F",
        icon: EtherscanLogo,
      },
      { url: "https://app.buidlguidl.com/build/hAIIsrHf8dnOBcu6UUZn", icon: BuidlGuidlLogo },
      { url: "https://opensea.io/collection/unidentified-contract-7c2a4c1a-3ced-47a3-8c48-1f2d", icon: OpenSeaLogo },
      {
        url: "https://www.ladders.vision/collections/optimism/0xFEe6635F43E1eeff88F0A6876Dc9153Fb128a81F",
        icon: laddersDotVision.src,
      },

      {
        url: "https://app.hatsprotocol.xyz/trees/10/105",
        icon: hatsLogo.src,
      },
    ],
  },
  {
    name: "Pizza People",
    description: "A Nounish NFT collection celebrating Pizza!",
    img: pizzaPeople,
    url: "https://pizzapeople.wtf",
    links: [
      { url: "https://github.com/hotmanics/pizza-people", icon: GithubLogo },
      { url: "https://basescan.org/address/0xF2137f6E039Cc0d2a19709a259CCCe13168cCD33", icon: EtherscanLogo },
      { url: "https://app.buidlguidl.com/build/s8wG9A0CKk2SOzAoVmUN", icon: BuidlGuidlLogo },
      { url: "https://opensea.io/collection/pizza-people-1", icon: OpenSeaLogo },
      {
        url: "https://www.ladders.vision/collections/base/0xF2137f6E039Cc0d2a19709a259CCCe13168cCD33",
        icon: laddersDotVision.src,
      },
    ],
  },

  {
    name: "Ladders.Vision",
    description: "View any NFT on any blockchain using the most decentralized methods!",
    img: laddersDotVision,
    url: "https://ladders.vision",
    links: [
      { url: "https://github.com/hotmanics/ladders.vision", icon: GithubLogo },
      { url: "https://app.buidlguidl.com/build/VKVHbZcjnrtUbUSwE1e5", icon: BuidlGuidlLogo },
    ],
  },
  {
    name: "Optimism Fractal Hats Tree",
    description:
      "A Hats tree that allows participants of the Respect Game to claim authorities/responsibilities based on their number of Respect tokens.",
    img: optimismFractalIcon,
    url: "https://app.hatsprotocol.xyz/trees/10/175",
    links: [{ url: "https://app.hatsprotocol.xyz/trees/10/175", icon: hatsLogo.src }],
  },
  {
    name: "DAO Coalition Hats Tree",
    description:
      "A Hats tree which utilizes the Gitcoin Passport and Signer Agreement Modules, which hooks into an Unlock checkout experience which unlocks a Voter Hat to be used in Snapshot.",
    img: daoCoalitionLogo,
    url: "https://app.hatsprotocol.xyz/trees/10/167",
    links: [
      { url: "https://app.hatsprotocol.xyz/trees/10/167", icon: hatsLogo.src },
      { url: "https://snapshot.org/#/daocoa.eth", icon: snapshotIcon.src },
      { url: "https://app.unlock-protocol.com/checkout?id=4b82ba6e-661b-4cf6-8a35-fa60850eba6f", icon: unlockIcon.src },
    ],
  },

  {
    name: "Weedies",
    description: "A Nounish NFT collection celebrating marijuana!",
    img: weedies,
    url: "https://weedies.wtf",
    links: [
      { url: "https://github.com/hotmanics/weedies", icon: GithubLogo },
      { url: "https://basescan.org/address/0x1c8264Cee472ef10758DFe8AE05156A1E52E6e40", icon: EtherscanLogo },
      { url: "https://app.buidlguidl.com/build/b8RxW8ys6vt2d0Rk3fYa", icon: BuidlGuidlLogo },
      { url: "https://opensea.io/collection/weedies-3", icon: OpenSeaLogo },
      {
        url: "https://www.ladders.vision/collections/base/0x1c8264Cee472ef10758DFe8AE05156A1E52E6e40",
        icon: laddersDotVision.src,
      },
    ],
  },
  {
    name: "Trash NFTs",
    description:
      "An NFT collection that utilizes the unique properties of the dn404 token standard. We had the idea for Trash NFTs as a way to combine artichokelord’s incredible artwork with novel tech to create something fun that pushed the boundaries of what’s possible for a memecoin. We chose to build Trash NFTs on Base because we believe in the future of the Superchain and the supportive community of builders it fosters. Between the two contracts associated with Trash NFTs, the project has generated over 1300 onchain transactions. Demo video: https://youtu.be/KORe_xnJx1w?si=6V52TlkOfLz3hySz Dn404 is an experimental token standard pioneered by Pandora on February 2, 2024. dn404 tokens embrace characteristics of both ERC20 and ERC721 tokens: They are “semi-fungible,” enabling both highly liquid markets and uniqueness within a single asset. This allows collectors to sell their tokens when they want and in pieces, if they’d like, as well as introduces the ability to reroll your NFT traits by making more transactions. dn404s are inherently fractionalized and designed to work natively with existing DeFi protocols. While innovative, it’s important to note that dn404 is also experimental. When we first launched $TRASH, we forked Pandora’s contract and raced to be one of the first, if not the first project to deploy an dn404 on Base. Pandora’s contract was limited to 5 variations of artwork, images that implied a reveal down the line, so we followed suit with 5 closed-lid NFTs of different rarities. Our next goal was to have a PFP collection with the lids removed, so we came up with the idea to create a new contract where you could stash your $TRASH and mint a Dumpster Diver. This contract is named The Dumpster. It is open source and available to any other dn404 token that wishes to fork it to enable their holders to redeem their dn404 token for an ERC721. In addition to the ability to mint an ERC721 by depositing an dn404, the Dumpster contract enables holders of Dumpster Divers PFP tokens to burn their ERC721 to redeem the original dn404 that the ERC721 was minted with (retaining the rarity and token ID). A small cleaning fee (0.00042069 ETH, updatable by governance) is charged, and this mechanism can also be used for regenerating/rerolling or ‘recycling’, Dumpster Diver PFPs to get the desired traits. We have grown to 185 holders and have generated $44k from trade fees (50% of which is $TRASH and 100% of which is reinvested in providing liquidity for our pools), and 1,654,148 DEGEN (~$40k) from liquidity mining rewards. We were also a finalist in the Backdrop Build V3 Accelerator Program (top 5% of applicants). Trash NFTs have built an effective machine: by owning the LPs that facilitate the swaps into $TRASH we capture 1% of the volume and store that in our treasury. We have two liquidity pools: 1) TRASH/ETH and 2) TRASH/ DEGEN, the rapidly growing meme token with utility in the Farcaster network and beyond. This exposes Trash NFTs to volatility, which generates more revenue because arbitrage bots stabilize the price across pools. Trash NFTs is also governed by a DAO called Waste Management that was initially allocated 20% of all $TRASH tokens. This DAO collects the cleaning fees associated with trait rerolls as well as the transaction fees and LP rewards from its DeFi activities. Finally, Trash NFTs has entered the meatspace by hosting a trash pickup event during Farcon 2024 with /humankind. We are proud of Trash NFTs, as it has maintained and proven to be a sound investment for its holder base while operating successfully. There are definite improvements we continue working toward: 1) expanding growth efforts to the broader 404 ecosystem with partnerships (such as Scattering.io with which we have built a relationship) and promotion, 2) revamping The Dumpster website for a more seamless experience and 3) engaging the community to take leadership in expanding the DAO.",
    img: trashIcon,
    url: "https://trashnfts.com",
    links: [
      { url: "https://github.com/TrashNFTs/Dumpster-Divers", icon: GithubLogo },
      { url: "https://x.com/trashnfts404", icon: XLogo },
      { url: "https://warpcast.com/trashnfts", icon: warpcastIcon.src },
      { url: "https://basescan.org/address/0xdf00fde26a6819507649904ca52fe5062ef75ba7", icon: EtherscanLogo },
      { url: "https://app.buidlguidl.com/build/gQYWXsujR2edqkr1dd3K", icon: BuidlGuidlLogo },
      { url: "https://opensea.io/collection/dumpster-divers", icon: OpenSeaLogo },
      {
        url: "https://www.ladders.vision/collections/base/0xdf00fdE26A6819507649904Ca52FE5062eF75Ba7",
        icon: laddersDotVision.src,
      },
    ],
  },
];
