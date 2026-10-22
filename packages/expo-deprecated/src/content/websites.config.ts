import { withDetailPage } from "./detail-page";
import { ProjectData } from "./types";

const projects: Array<ProjectData & { slug: string }> = [
  {
    slug: "disgo",
    name: "Disgo",
    description: "Personalized recommendations for bars and restaurants.",
    imgSrc: "disgo.webp",
    bannerSrc: "disgo.webp",
    links: [
      { url: "https://app.disgoapp.io", imagePath: "link.svg" },
      { url: "https://apps.apple.com/us/app/disgoapp/id6480529083", imagePath: "apple.svg", label: "iOS" },
      {
        url: "https://play.google.com/store/apps/details?id=com.disgoapp.disgo",
        imagePath: "android.svg",
        label: "Android",
      },
    ],
  },
  {
    slug: "bartynder",
    name: "Bartynder",
    description: "On-demand staffing that matches bars with bartenders.",
    imgSrc: "bartynder.svg",
    bannerSrc: "bartynder.svg",
    link: "https://www.disgoapp.io/bartynder",
    links: [{ url: "https://bartynder.com", imagePath: "link.svg" }],
  },
  {
    slug: "venue-manager",
    name: "Venue Manager",
    description: "Operator tools for venues. Coming soon.",
    imgSrc: "venue-manager.svg",
    bannerSrc: "venue-manager.svg",
  },
  {
    slug: "ziti-cash",
    name: "ZitiCashbox",
    description: "Send, receive, and request payments.",
    imgSrc: "ziti.svg",
    link: "https://ziti.cash",
  },
  {
    slug: "bluebell-stock-exchange",
    name: "Bluebell Stock Exchange",
    description: "Trade tokenized stocks on Base.",
    imgSrc: "bluebell.svg",
    link: "https://bluebell-stock-exchange-vert.vercel.app/",
  },
  {
    slug: "carstarz",
    name: "CarStarz",
    shortDescription: "Owner-controlled vehicle profiles for showcasing builds and earning rewards.",
    description:
      "Specialty vehicle registry with tools to showcase your ride, connect owners, builders, and shops, and earn rewards.",
    imgSrc: "carstarz.png",
    bannerSrc: "carstarz.png",
    link: "https://carstarz.io",
    links: [{ url: "https://www.linkedin.com/company/carstarz", imagePath: "linkedin.png" }],
  },
  {
    slug: "op-atlas",
    name: "OP Atlas",
    shortDescription: "Platform rewarding 250+ developers for open-source contributions.",
    description: "Platform rewarding 250+ developers for open-source contributions.",
    imgSrc: "atlas.webp",
    bannerSrc: "atlas.webp",
    link: "https://atlas.optimism.io/",
    links: [
      {
        url: "https://github.com/voteagora/op-atlas",
        imagePath: "github.svg",
      },
    ],
  },
  {
    slug: "engagement-vision",
    name: "Engagement.Vision",
    description:
      "Generate a user engagement score within specific communities or blockchains through a variety of different metrics from different data sources like blockchains, KarmaGAP, Talent Protocol, Ethereum Follow Protocol, and more! 805 Page views and 194 unique visitors. Received $54.04 from 63 unique donations through Gitcoin Grants.",
    imgSrc: "engagementdotvision.png",
    link: "https://engagement.vision",
    links: [
      {
        url: "https://github.com/JacobHomanicsOrganization/engagement.vision",
        imagePath: "github.svg",
      },
    ],
  },
  {
    slug: "members-portal",
    name: "Members Portal",
    description:
      "The home for ATX DAO's tools and the neccesary info you need to get involved in events, projects, and governance.",
    imgSrc: "atx-dao.png",
    link: "https://members.atxdao.com/",
    links: [
      {
        url: "https://github.com/ATXDAO/nouns-monorepo",
        imagePath: "github.svg",
      },
    ],
  },

  {
    slug: "pizza-people",
    name: "Pizza People",
    shortDescription: "NFT collection achieved $26k+ revenue!",
    imgSrc: "pizzapeople.webp",
    link: "https://pizzapeople.wtf",
    links: [
      { url: "https://github.com/jacobhomanics/pizza-people", imagePath: "github.svg" },
      {
        url: "https://basescan.org/address/0xF2137f6E039Cc0d2a19709a259CCCe13168cCD33",
        imagePath: "etherscan.svg",
      },
      { url: "https://opensea.io/collection/pizza-people-1", imagePath: "opensea.png" },
      {
        url: "https://www.ladders.vision/collections/base/0xF2137f6E039Cc0d2a19709a259CCCe13168cCD33",
        imagePath: "ladders.webp",
      },
    ],
  },
  {
    slug: "portfolio",
    name: "Portfolio",
    description:
      "This is the website you are currently viewing. It is completely open source so feel free to fork/clone it for whatever you find it useful for!",
    imgSrc: "portfolio.png",
    link: "https://jacobhomanics.com",
    links: [{ url: "https://github.com/jacobhomanics/portfolio", imagePath: "github.svg" }],
  },
  {
    slug: "wild-water-bottle-cap-token",
    name: "Wild Water Bottle Cap Token",
    description: "A tokenized Real World Asset where the proof of reserve is in bottle caps!",
    imgSrc: "worldwidebottlecaptoken.png",
    link: "https://bottlecaptoken.com",
    links: [{ url: "https://github.com/JacobHomanics/wild-water-bottle-cap-token", imagePath: "github.svg" }],
  },
  {
    slug: "ladders-vision",
    name: "Ladders.Vision",
    description: "View any NFT on any blockchain using the most decentralized methods!",
    imgSrc: "ladders.webp",
    link: "https://ladders.vision",
    links: [{ url: "https://github.com/jacobhomanics/ladders.vision", imagePath: "github.svg" }],
  },

  // {
  //   name: "Weedies",
  //   description: "A Nounish NFT collection celebrating marijuana!",
  //   imgSrc: "weedies.webp",
  //   link: "https://weedies.wtf",
  //   links: [
  //     { url: "https://github.com/jacobhomanics/weedies", imagePath: "github.svg" },
  //     {
  //       url: "https://basescan.org/address/0x1c8264Cee472ef10758DFe8AE05156A1E52E6e40",
  //       imagePath: "etherscan.svg",
  //     },
  //     { url: "https://opensea.io/collection/weedies-3", imagePath: "opensea.png" },
  //     {
  //       url: "https://www.ladders.vision/collections/base/0x1c8264Cee472ef10758DFe8AE05156A1E52E6e40",
  //       imagePath: "ladders.webp",
  //     },
  //   ],
  // },
  {
    slug: "trash-nfts",
    name: "Trash NFTs",
    description:
      "An NFT collection that utilizes the unique properties of the dn404 token standard. We had the idea for Trash NFTs as a way to combine artichokelord’s incredible artwork with novel tech to create something fun that pushed the boundaries of what’s possible for a memecoin. We chose to build Trash NFTs on Base because we believe in the future of the Superchain and the supportive community of builders it fosters. Between the two contracts associated with Trash NFTs, the project has generated over 1300 onchain transactions. Demo video: https://youtu.be/KORe_xnJx1w?si=6V52TlkOfLz3hySz Dn404 is an experimental token standard pioneered by Pandora on February 2, 2024. dn404 tokens embrace characteristics of both ERC20 and ERC721 tokens: They are “semi-fungible,” enabling both highly liquid markets and uniqueness within a single asset. This allows collectors to sell their tokens when they want and in pieces, if they’d like, as well as introduces the ability to reroll your NFT traits by making more transactions. dn404s are inherently fractionalized and designed to work natively with existing DeFi protocols. While innovative, it’s important to note that dn404 is also experimental. When we first launched $TRASH, we forked Pandora’s contract and raced to be one of the first, if not the first project to deploy an dn404 on Base. Pandora’s contract was limited to 5 variations of artwork, images that implied a reveal down the line, so we followed suit with 5 closed-lid NFTs of different rarities. Our next goal was to have a PFP collection with the lids removed, so we came up with the idea to create a new contract where you could stash your $TRASH and mint a Dumpster Diver. This contract is named The Dumpster. It is open source and available to any other dn404 token that wishes to fork it to enable their holders to redeem their dn404 token for an ERC721. In addition to the ability to mint an ERC721 by depositing an dn404, the Dumpster contract enables holders of Dumpster Divers PFP tokens to burn their ERC721 to redeem the original dn404 that the ERC721 was minted with (retaining the rarity and token ID). A small cleaning fee (0.00042069 ETH, updatable by governance) is charged, and this mechanism can also be used for regenerating/rerolling or ‘recycling’, Dumpster Diver PFPs to get the desired traits. We have grown to 185 holders and have generated $44k from trade fees (50% of which is $TRASH and 100% of which is reinvested in providing liquidity for our pools), and 1,654,148 DEGEN (~$40k) from liquidity mining rewards. We were also a finalist in the Backdrop Build V3 Accelerator Program (top 5% of applicants). Trash NFTs have built an effective machine: by owning the LPs that facilitate the swaps into $TRASH we capture 1% of the volume and store that in our treasury. We have two liquidity pools: 1) TRASH/ETH and 2) TRASH/ DEGEN, the rapidly growing meme token with utility in the Farcaster network and beyond. This exposes Trash NFTs to volatility, which generates more revenue because arbitrage bots stabilize the price across pools. Trash NFTs is also governed by a DAO called Waste Management that was initially allocated 20% of all $TRASH tokens. This DAO collects the cleaning fees associated with trait rerolls as well as the transaction fees and LP rewards from its DeFi activities. Finally, Trash NFTs has entered the meatspace by hosting a trash pickup event during Farcon 2024 with /humankind. We are proud of Trash NFTs, as it has maintained and proven to be a sound investment for its holder base while operating successfully. There are definite improvements we continue working toward: 1) expanding growth efforts to the broader 404 ecosystem with partnerships (such as Scattering.io with which we have built a relationship) and promotion, 2) revamping The Dumpster website for a more seamless experience and 3) engaging the community to take leadership in expanding the DAO.",
    imgSrc: "trash.png",
    link: "https://trashnfts.com",
    links: [
      { url: "https://github.com/TrashNFTs/Dumpster-Divers", imagePath: "github.svg" },
      { url: "https://x.com/trashnfts404", imagePath: "x.svg" },
      { url: "https://warpcast.com/trashnfts", imagePath: "warpcast-icon.png" },
      {
        url: "https://basescan.org/address/0xdf00fde26a6819507649904ca52fe5062ef75ba7",
        imagePath: "etherscan.svg",
      },
      { url: "https://opensea.io/collection/dumpster-divers", imagePath: "opensea.png" },
      {
        url: "https://www.ladders.vision/collections/base/0xdf00fdE26A6819507649904Ca52FE5062eF75Ba7",
        imagePath: "ladders.webp",
      },
    ],
  },
];

export const data = withDetailPage("/websites", projects);
