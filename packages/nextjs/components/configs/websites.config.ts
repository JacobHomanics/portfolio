import { ProjectData } from "./types";

export const data: Array<ProjectData> = [
  {
    name: "OP Atlas",
    description:
      "Created the Application process for Optimism's Season 7 & 8 Missions: Dev Tooling & Onchain Builders. Worked closely with Agora and Optimism to match design requirements. Utilized tools/frameworks like Prisma and React Hook Forms. Suggested contributions which evolved into standalone Pull Requests to improve the overall codebase.",
    imgSrc: "/websites/atlas.webp",
    link: "https://atlas.optimism.io/",
  },
  {
    name: "Engagement.Vision",
    description:
      "Generate a user engagement score within specific communities or blockchains through a variety of different metrics from different data sources like blockchains, KarmaGAP, Talent Protocol, Ethereum Follow Protocol, and more!",
    imgSrc: "/websites/engagementdotvision.png",
    link: "https://engagement.vision",
  },
  {
    name: "Wild Water Bottle Cap Token",
    description: "A tokenized Real World Asset where the proof of reserve is in bottle caps!",
    imgSrc: "/websites/worldwidebottlecaptoken.png",
    link: "https://bottlecaptoken.com",
  },
  {
    name: "Ladders.Vision",
    description: "View any NFT on any blockchain using the most decentralized methods!",
    imgSrc: "/websites/ladders.webp",
    link: "https://ladders.vision",
    // links: [
    //   { url: "https://github.com/jacobhomanics/ladders.vision", icon: GithubLogo },
    //   { url: "https://app.buidlguidl.com/build/VKVHbZcjnrtUbUSwE1e5", icon: BuidlGuidlLogo },
    // ],
  },
  {
    name: "Pizza People",
    description: "A Nounish NFT collection celebrating Pizza!",
    imgSrc: "/nftCollections/pizzapeople.webp",
    link: "https://pizzapeople.wtf",
    // links: [
    //   { url: "https://github.com/jacobhomanics/pizza-people", icon: GithubLogo },
    //   { url: "https://basescan.org/address/0xF2137f6E039Cc0d2a19709a259CCCe13168cCD33", icon: EtherscanLogo },
    //   { url: "https://app.buidlguidl.com/build/s8wG9A0CKk2SOzAoVmUN", icon: BuidlGuidlLogo },
    //   { url: "https://opensea.io/collection/pizza-people-1", icon: OpenSeaLogo },
    //   {
    //     url: "https://www.ladders.vision/collections/base/0xF2137f6E039Cc0d2a19709a259CCCe13168cCD33",
    //     icon: laddersDotVision.src,
    //   },
    // ],
  },
  {
    name: "Weedies",
    description: "A Nounish NFT collection celebrating marijuana!",
    imgSrc: "/nftCollections/weedies.webp",
    link: "https://weedies.wtf",
    // links: [
    //   { url: "https://github.com/jacobhomanics/weedies", icon: GithubLogo },
    //   { url: "https://basescan.org/address/0x1c8264Cee472ef10758DFe8AE05156A1E52E6e40", icon: EtherscanLogo },
    //   { url: "https://app.buidlguidl.com/build/b8RxW8ys6vt2d0Rk3fYa", icon: BuidlGuidlLogo },
    //   { url: "https://opensea.io/collection/weedies-3", icon: OpenSeaLogo },
    //   {
    //     url: "https://www.ladders.vision/collections/base/0x1c8264Cee472ef10758DFe8AE05156A1E52E6e40",
    //     icon: laddersDotVision.src,
    //   },
    // ],
  },
  {
    name: "Trash NFTs",
    description:
      "An NFT collection that utilizes the unique properties of the dn404 token standard. We had the idea for Trash NFTs as a way to combine artichokelord’s incredible artwork with novel tech to create something fun that pushed the boundaries of what’s possible for a memecoin. We chose to build Trash NFTs on Base because we believe in the future of the Superchain and the supportive community of builders it fosters. Between the two contracts associated with Trash NFTs, the project has generated over 1300 onchain transactions. Demo video: https://youtu.be/KORe_xnJx1w?si=6V52TlkOfLz3hySz Dn404 is an experimental token standard pioneered by Pandora on February 2, 2024. dn404 tokens embrace characteristics of both ERC20 and ERC721 tokens: They are “semi-fungible,” enabling both highly liquid markets and uniqueness within a single asset. This allows collectors to sell their tokens when they want and in pieces, if they’d like, as well as introduces the ability to reroll your NFT traits by making more transactions. dn404s are inherently fractionalized and designed to work natively with existing DeFi protocols. While innovative, it’s important to note that dn404 is also experimental. When we first launched $TRASH, we forked Pandora’s contract and raced to be one of the first, if not the first project to deploy an dn404 on Base. Pandora’s contract was limited to 5 variations of artwork, images that implied a reveal down the line, so we followed suit with 5 closed-lid NFTs of different rarities. Our next goal was to have a PFP collection with the lids removed, so we came up with the idea to create a new contract where you could stash your $TRASH and mint a Dumpster Diver. This contract is named The Dumpster. It is open source and available to any other dn404 token that wishes to fork it to enable their holders to redeem their dn404 token for an ERC721. In addition to the ability to mint an ERC721 by depositing an dn404, the Dumpster contract enables holders of Dumpster Divers PFP tokens to burn their ERC721 to redeem the original dn404 that the ERC721 was minted with (retaining the rarity and token ID). A small cleaning fee (0.00042069 ETH, updatable by governance) is charged, and this mechanism can also be used for regenerating/rerolling or ‘recycling’, Dumpster Diver PFPs to get the desired traits. We have grown to 185 holders and have generated $44k from trade fees (50% of which is $TRASH and 100% of which is reinvested in providing liquidity for our pools), and 1,654,148 DEGEN (~$40k) from liquidity mining rewards. We were also a finalist in the Backdrop Build V3 Accelerator Program (top 5% of applicants). Trash NFTs have built an effective machine: by owning the LPs that facilitate the swaps into $TRASH we capture 1% of the volume and store that in our treasury. We have two liquidity pools: 1) TRASH/ETH and 2) TRASH/ DEGEN, the rapidly growing meme token with utility in the Farcaster network and beyond. This exposes Trash NFTs to volatility, which generates more revenue because arbitrage bots stabilize the price across pools. Trash NFTs is also governed by a DAO called Waste Management that was initially allocated 20% of all $TRASH tokens. This DAO collects the cleaning fees associated with trait rerolls as well as the transaction fees and LP rewards from its DeFi activities. Finally, Trash NFTs has entered the meatspace by hosting a trash pickup event during Farcon 2024 with /humankind. We are proud of Trash NFTs, as it has maintained and proven to be a sound investment for its holder base while operating successfully. There are definite improvements we continue working toward: 1) expanding growth efforts to the broader 404 ecosystem with partnerships (such as Scattering.io with which we have built a relationship) and promotion, 2) revamping The Dumpster website for a more seamless experience and 3) engaging the community to take leadership in expanding the DAO.",
    imgSrc: "/nftCollections/trash.png",
    link: "https://trashnfts.com",
    // links: [
    //   { url: "https://github.com/TrashNFTs/Dumpster-Divers", icon: GithubLogo },
    //   { url: "https://x.com/trashnfts404", icon: XLogo },
    //   { url: "https://warpcast.com/trashnfts", icon: warpcastIcon.src },
    //   { url: "https://basescan.org/address/0xdf00fde26a6819507649904ca52fe5062ef75ba7", icon: EtherscanLogo },
    //   { url: "https://app.buidlguidl.com/build/gQYWXsujR2edqkr1dd3K", icon: BuidlGuidlLogo },
    //   { url: "https://opensea.io/collection/dumpster-divers", icon: OpenSeaLogo },
    //   {
    //     url: "https://www.ladders.vision/collections/base/0xdf00fdE26A6819507649904Ca52FE5062eF75Ba7",
    //     icon: laddersDotVision.src,
    //   },
    // ],
  },
];
