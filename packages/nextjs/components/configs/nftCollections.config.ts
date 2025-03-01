import { ProjectData } from "./types";
import bill2 from "~~/public/nftCollections/bill-2.webp";
import bill1 from "~~/public/nftCollections/bill.webp";
import pizza from "~~/public/nftCollections/pizzapeople.webp";
import trash from "~~/public/nftCollections/trash.png";
import weedies from "~~/public/nftCollections/weedies.webp";

export const data: Array<ProjectData> = [
  {
    name: "Pizza People",
    description: "A Nounish NFT collection celebrating Pizza!",
    imgSrc: pizza,
    link: "https://pizzapeople.wtf",
    links: [
      { url: "https://github.com/jacobhomanics/pizza-people", imagePath: "/linkIcons/github.svg" },
      {
        url: "https://basescan.org/address/0xF2137f6E039Cc0d2a19709a259CCCe13168cCD33",
        imagePath: "/linkIcons/etherscan.svg",
      },
      { url: "https://opensea.io/collection/pizza-people-1", imagePath: "/linkIcons/os.svg" },
      {
        url: "https://www.ladders.vision/collections/base/0xF2137f6E039Cc0d2a19709a259CCCe13168cCD33",
        imagePath: "/linkIcons/ladders.webp",
      },
    ],
  },

  {
    name: "Weedies",
    description: "A Nounish NFT collection celebrating marijuana!",
    imgSrc: weedies,
    link: "https://weedies.wtf",
    links: [
      { url: "https://github.com/jacobhomanics/weedies", imagePath: "/linkIcons/github.svg" },
      {
        url: "https://basescan.org/address/0x1c8264Cee472ef10758DFe8AE05156A1E52E6e40",
        imagePath: "/linkIcons/etherscan.svg",
      },
      { url: "https://opensea.io/collection/weedies-3", imagePath: "/linkIcons/os.svg" },
      {
        url: "https://www.ladders.vision/collections/base/0x1c8264Cee472ef10758DFe8AE05156A1E52E6e40",
        imagePath: "/linkIcons/ladders.webp",
      },
    ],
  },
  {
    name: "Trash NFTs",
    description:
      "An NFT collection that utilizes the unique properties of the dn404 token standard. We had the idea for Trash NFTs as a way to combine artichokelord’s incredible artwork with novel tech to create something fun that pushed the boundaries of what’s possible for a memecoin. We chose to build Trash NFTs on Base because we believe in the future of the Superchain and the supportive community of builders it fosters. Between the two contracts associated with Trash NFTs, the project has generated over 1300 onchain transactions. Demo video: https://youtu.be/KORe_xnJx1w?si=6V52TlkOfLz3hySz Dn404 is an experimental token standard pioneered by Pandora on February 2, 2024. dn404 tokens embrace characteristics of both ERC20 and ERC721 tokens: They are “semi-fungible,” enabling both highly liquid markets and uniqueness within a single asset. This allows collectors to sell their tokens when they want and in pieces, if they’d like, as well as introduces the ability to reroll your NFT traits by making more transactions. dn404s are inherently fractionalized and designed to work natively with existing DeFi protocols. While innovative, it’s important to note that dn404 is also experimental. When we first launched $TRASH, we forked Pandora’s contract and raced to be one of the first, if not the first project to deploy an dn404 on Base. Pandora’s contract was limited to 5 variations of artwork, images that implied a reveal down the line, so we followed suit with 5 closed-lid NFTs of different rarities. Our next goal was to have a PFP collection with the lids removed, so we came up with the idea to create a new contract where you could stash your $TRASH and mint a Dumpster Diver. This contract is named The Dumpster. It is open source and available to any other dn404 token that wishes to fork it to enable their holders to redeem their dn404 token for an ERC721. In addition to the ability to mint an ERC721 by depositing an dn404, the Dumpster contract enables holders of Dumpster Divers PFP tokens to burn their ERC721 to redeem the original dn404 that the ERC721 was minted with (retaining the rarity and token ID). A small cleaning fee (0.00042069 ETH, updatable by governance) is charged, and this mechanism can also be used for regenerating/rerolling or ‘recycling’, Dumpster Diver PFPs to get the desired traits. We have grown to 185 holders and have generated $44k from trade fees (50% of which is $TRASH and 100% of which is reinvested in providing liquidity for our pools), and 1,654,148 DEGEN (~$40k) from liquidity mining rewards. We were also a finalist in the Backdrop Build V3 Accelerator Program (top 5% of applicants). Trash NFTs have built an effective machine: by owning the LPs that facilitate the swaps into $TRASH we capture 1% of the volume and store that in our treasury. We have two liquidity pools: 1) TRASH/ETH and 2) TRASH/ DEGEN, the rapidly growing meme token with utility in the Farcaster network and beyond. This exposes Trash NFTs to volatility, which generates more revenue because arbitrage bots stabilize the price across pools. Trash NFTs is also governed by a DAO called Waste Management that was initially allocated 20% of all $TRASH tokens. This DAO collects the cleaning fees associated with trait rerolls as well as the transaction fees and LP rewards from its DeFi activities. Finally, Trash NFTs has entered the meatspace by hosting a trash pickup event during Farcon 2024 with /humankind. We are proud of Trash NFTs, as it has maintained and proven to be a sound investment for its holder base while operating successfully. There are definite improvements we continue working toward: 1) expanding growth efforts to the broader 404 ecosystem with partnerships (such as Scattering.io with which we have built a relationship) and promotion, 2) revamping The Dumpster website for a more seamless experience and 3) engaging the community to take leadership in expanding the DAO.",
    imgSrc: trash,
    link: "https://trashnfts.com",
    links: [
      { url: "https://github.com/TrashNFTs/Dumpster-Divers", imagePath: "/linkIcons/github.svg" },
      { url: "https://x.com/trashnfts404", imagePath: "/linkIcons/x.svg" },
      { url: "https://warpcast.com/trashnfts", imagePath: "/linkIcons/warpcast-icon.png" },
      {
        url: "https://basescan.org/address/0xdf00fde26a6819507649904ca52fe5062ef75ba7",
        imagePath: "/linkIcons/etherscan.svg",
      },
      { url: "https://opensea.io/collection/dumpster-divers", imagePath: "/linkIcons/os.svg" },
      {
        url: "https://www.ladders.vision/collections/base/0xdf00fdE26A6819507649904Ca52FE5062eF75Ba7",
        imagePath: "/linkIcons/ladders.webp",
      },
    ],
  },

  {
    name: "Bill Murray 1000",
    description:
      "A great NFT collection tells a great story. And there’s no better story than a Bill Murray story.The Bill Murray 1000 is a unique biographical NFT project telling the story of iconic actor, comedian, and writer, Bill Murray – and a life very well-lived. The collection offers 100 story NFTs containing anecdotes, observations, advice, memories, Murray-isms, and more.Each of the 100 story NFTs features a unique design inspired by the story, and each original story/design combination is available in nine additional colorways. The result of all this (we did the math) is 1000 unique story/design/colorway combinations with something special for every Bill Murray collector.",
    imgSrc: bill1,
    link: "https://opensea.io/collection/billmurray1000",
  },

  {
    name: "Bill Murray 1000: Open Edition",
    description:
      "A great NFT collection tells a great story. And there’s no better story than a Bill Murray story.The Bill Murray 1000 is a unique biographical NFT project telling the story of iconic actor, comedian, and writer, Bill Murray – and a life very well-lived. The collection offers two membership tiers:Original Bill (118 NFTS)Bill Murray Destinations (882 NFTs) Original Bill NFTs are the anecdotes, observations, advice, memories, and Murray-isms that are the foundation of the Bill Murray 1000 collection. Original Bill NFT owners will receive a VIP ticket to every Bill Murray event that they can use, trade, or sell.Bill Murray Destinations NFTs are nine distinct sets of NFTs that each share a common story and offer visually distinct themes reflecting destinations that are near and dear to Bill Murray. Bill Murray Destinations NFT owners will receive limited invites to events with Bill Murray that they can use, trade, or sell.",
    imgSrc: bill2,
    link: "https://opensea.io/collection/billmurray1000",
  },
];
