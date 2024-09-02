"use client";

// import Link from "next/link";
// import Link from "next/link";
// import Link from "next/link";
// import Link from "next/link";
import type { NextPage } from "next";
import { projectsData } from "~~/components/jacobhomanics/data/ProjectsData";
// import { BuidlGuidlLogo } from "~~/components/assets/BuidlGuidlLogo";
// import { IconLink } from "~~/components/jacobhomanics/IconLink";
// import { IconsLinks } from "~~/components/jacobhomanics/IconLinks";
// import { Project } from "~~/components/jacobhomanics/Project";
import { Projects } from "~~/components/jacobhomanics/projects/Projects";

// import { UniversalIcon } from "~~/components/jacobhomanics/UniversalIcon";
// import { EtherscanLogo } from "~~/components/jacobhomanics/logos/EtherscanLogo";
// import { GithubLogo } from "~~/components/jacobhomanics/logos/GithubLogo";
// import { NounspaceLogo } from "~~/components/jacobhomanics/logos/NounspaceLogo";
// import { OpenSeaLogo } from "~~/components/jacobhomanics/logos/OpenSeaLogo";
// import { ScrollLogo } from "~~/components/jacobhomanics/logos/ScrollLogo";
// import { XLogo } from "~~/components/jacobhomanics/logos/XLogo";
// import { IconsLinksData } from "~~/components/jacobhomanics/social/IconsLinksData";

// import linkedinIcon from "~~/public/icons/LI-In-Bug.png";
// import warpcastIcon from "~~/public/icons/warpcast-icon.png";
// import { useAccount } from "wagmi";
// import { BugAntIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
// import { PfpCard } from "~~/components/jacobhomanics/PfpCard";
// import { ProjectItem } from "~~/components/jacobhomanics/ProjectItem";
// import { SocialLinks } from "~~/components/jacobhomanics/SocialLinks";
// import { socialLinks } from "~~/components/jacobhomanics/SocialLinksObject";
// import { SocialIcon } from "~~/components/jacobhomanics/SocialIcon";
// import { SocialLink } from "~~/components/jacobhomanics/SocialLink";
// import jake from "~~/public/jake.gif";

// import { Address } from "~~/components/scaffold-eth";
// import github from "~~/public/social-icons/github.png";
// const textExample =
//   "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at risus velit. Integer porta lectus ac nisi semper, a vehicula lectus iaculis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce vitae sollicitudin dui. Integer scelerisque a purus eget hendrerit. Nam sagittis elit quis fermentum tempus. Aliquam non venenatis ante, eget efficitur tortor. Maecenas lorem felis, ullamcorper ac volutpat et, fringilla ac est. Donec scelerisque purus magna, id volutpat mauris feugiat id. Phasellus dignissim sed ex sed porttitor. Ut fringilla accumsan lectus, vel aliquet quam laoreet vitae. Duis eros massa, dictum pellentesque nisl vitae, malesuada rhoncus neque." +
//   "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec ultrices ex. Pellentesque accumsan varius odio non ullamcorper. Vivamus blandit ligula a aliquet imperdiet. Donec sapien purus, rutrum facilisis maximus nec, eleifend vel tortor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut hendrerit semper mauris. Integer sed dictum augue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.";

const Home: NextPage = () => {
  // const { address: connectedAddress } = useAccount();

  // const projectsElements = projects.map((item, index) => {
  //   return (
  //     <Project name={item.name} description={item.description} img={item.img} url={item.url} key={"project-" + index} />
  //   );
  // });

  // const warpcastIconData = { img: warpcastIcon, type: "img" };

  console.log(projectsData);

  return (
    <>
      <div className="bg-primary p-4 rounded-lg border-2 border-indigo-500 w-full">
        <Projects projects={projectsData} />
      </div>

      {/* <div className="flex space-x-4 bg-black m-10">
        <Link href={"jakdwkjwanjkdn"} target="#" className="w-full h-full"> */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      {/* <img src={pizzaPeople.src} alt={"Hejh" ?? name} className="rounded-lg hover:brightness-75" />
        </Link>
        <div>
          <p className="w-full p-10">Pizza People</p>
          <div className="w-full p-10">{textExample}</div>
        </div>
      </div> */}
      {/* <div className="lg:w-[648px] flex">
        <div className="bg-primary p-4 rounded-lg border-2 border-indigo-500 w-full">
          <p>My Projects</p>

          <div className="space-y-5">
            <ProjectItem
              name="Wild Water Bottle Cap Token"
              description="A tokenized Real World Asset (RWA) where the supply of the token matches the actual number of bottle caps that Jacob Homanics owns in the physical world."
              img={wwbtcIcon}
              link="https://bottlecaptoken.com"
              githubUrl="https://github.com/Hotmanics/wild-water-bottle-cap-token"
              etherscanUrl="https://basescan.org/address/0x4169De2404a1484a50aB34fFf631F4B5dba90428"
            />
            <ProjectItem
              name="Ladders.Vision"
              description="View any NFT on any blockchain using the most decentralized methods!"
              img={laddersDotVision}
              link="https://ladders.vision"
              githubUrl="https://github.com/hotmanics/ladders.vision"
              buidlguidlUrl="https://app.buidlguidl.com/build/VKVHbZcjnrtUbUSwE1e5"
            />

            <ProjectItem
              name="Pizza People"
              description="A Nounish NFT collection celebrating Pizza!"
              img={pizzaPeople}
              link="https://pizzapeople.wtf"
              githubUrl="https://github.com/hotmanics/pizza-people"
              etherscanUrl="https://basescan.org/address/0xF2137f6E039Cc0d2a19709a259CCCe13168cCD33"
              openseaUrl="https://opensea.io/collection/pizza-people-1"
              laddersDotVisionUrl="https://www.ladders.vision/collections/base/0xF2137f6E039Cc0d2a19709a259CCCe13168cCD33"
              buidlguidlUrl="https://app.buidlguidl.com/build/s8wG9A0CKk2SOzAoVmUN"
            />

            <ProjectItem
              name="Reputation & Roles Starter Kit"
              description="Track trust onchain and grant roles in decentralized & permissionless ways!"
              img={repAndRolesIcon}
              alt="Rep & Roles"
              link="https://github.com/ATXDAO/rep-and-roles-starter-kit"
              githubUrl="https://github.com/ATXDAO/rep-and-roles-starter-kit"
              laddersDotVisionUrl="https://www.ladders.vision/collections/optimism/0xFEe6635F43E1eeff88F0A6876Dc9153Fb128a81F"
              etherscanUrl="https://optimistic.etherscan.io/address/0xFEe6635F43E1eeff88F0A6876Dc9153Fb128a81F"
              openseaUrl="https://opensea.io/collection/unidentified-contract-7c2a4c1a-3ced-47a3-8c48-1f2d"
              documentationUrl="https://hotmanics.github.io/rep-and-roles-docs/starter-kit/overview.html"
              buidlguidlUrl="https://app.buidlguidl.com/build/hAIIsrHf8dnOBcu6UUZn"
            />

            <ProjectItem
              name="Weedies"
              description="A Nounish NFT collection celebrating marijuana!"
              img={weedies}
              link="https://weedies.wtf"
              githubUrl="https://github.com/hotmanics/weedies"
              etherscanUrl="https://basescan.org/address/0x1c8264Cee472ef10758DFe8AE05156A1E52E6e40"
              openseaUrl="https://opensea.io/collection/weedies-3"
              laddersDotVisionUrl="https://www.ladders.vision/collections/base/0x1c8264Cee472ef10758DFe8AE05156A1E52E6e40"
              buidlguidlUrl="https://app.buidlguidl.com/build/b8RxW8ys6vt2d0Rk3fYa"
            />

            <ProjectItem
              name="Trash NFTs"
              description="Trash NFTs is a project built on Base that leverages the unique properties of the ERC404 token standard. We had the idea for Trash NFTs as a way to combine artichokelord’s incredible artwork with novel tech to create something fun that pushed the boundaries of what’s possible for a memecoin. We chose to build Trash NFTs on Base because we believe in the future of the Superchain and the supportive community of builders it fosters. Between the two contracts associated with Trash NFTs, the project has generated over 1300 onchain transactions. Demo video: https://youtu.be/KORe_xnJx1w?si=6V52TlkOfLz3hySz Video of artichokelord drawing the art: https://warpcast.com/trashnfts/0xc65d2a4e ERC404 is an experimental token standard pioneered by Pandora on February 2, 2024. ERC404 tokens embrace characteristics of both ERC20 and ERC721 tokens: They are “semi-fungible,” enabling both highly liquid markets and uniqueness within a single asset. This allows collectors to sell their tokens when they want and in pieces, if they’d like, as well as introduces the ability to reroll your NFT traits by making more transactions. ERC404s are inherently fractionalized and designed to work natively with existing DeFi protocols. While innovative, it’s important to note that ERC404 is also experimental. When we first launched $TRASH, we forked Pandora’s contract and raced to be one of the first, if not the first project to deploy an ERC404 on Base. Pandora’s contract was limited to 5 variations of artwork, images that implied a reveal down the line, so we followed suit with 5 closed-lid NFTs of different rarities. Our next goal was to have a PFP collection with the lids removed, so we came up with the idea to create a new contract where you could stash your $TRASH and mint a Dumpster Diver. This contract is named The Dumpster. It is open source and available to any other ERC404 token that wishes to fork it to enable their holders to redeem their ERC404 token for an ERC721. In addition to the ability to mint an ERC721 by depositing an ERC404, the Dumpster contract enables holders of Dumpster Divers PFP tokens to burn their ERC721 to redeem the original ERC404 that the ERC721 was minted with (retaining the rarity and token ID). A small cleaning fee (0.00042069 ETH, updatable by governance) is charged, and this mechanism can also be used for regenerating/rerolling or ‘recycling’, Dumpster Diver PFPs to get the desired traits. We have grown to 185 holders and have generated $44k from trade fees (50% of which is $TRASH and 100% of which is reinvested in providing liquidity for our pools), and 1,654,148 DEGEN (~$40k) from liquidity mining rewards. We were also a finalist in the Backdrop Build V3 Accelerator Program (top 5% of applicants). Trash NFTs have built an effective machine: by owning the LPs that facilitate the swaps into $TRASH we capture 1% of the volume and store that in our treasury. We have two liquidity pools: 1) TRASH/ETH and 2) TRASH/ DEGEN, the rapidly growing meme token with utility in the Farcaster network and beyond. This exposes Trash NFTs to volatility, which generates more revenue because arbitrage bots stabilize the price across pools. Trash NFTs is also governed by a DAO called Waste Management that was initially allocated 20% of all $TRASH tokens. This DAO collects the cleaning fees associated with trait rerolls as well as the transaction fees and LP rewards from its DeFi activities. Finally, Trash NFTs has entered the meatspace by hosting a trash pickup event during Farcon 2024 with /humankind. We are proud of Trash NFTs, as it has maintained and proven to be a sound investment for its holder base while operating successfully. There are definite improvements we continue working toward: 1) expanding growth efforts to the broader 404 ecosystem with partnerships (such as Scattering.io with which we have built a relationship) and promotion, 2) revamping The Dumpster website for a more seamless experience and 3) engaging the community to take leadership in expanding the DAO."
              img={trashIcon}
              link="https://trashnfts.com"
              githubUrl="https://github.com/TrashNFTs/Dumpster-Divers"
              etherscanUrl="https://basescan.org/address/0xdf00fde26a6819507649904ca52fe5062ef75ba7"
              openseaUrl="https://opensea.io/collection/dumpster-divers"
              laddersDotVisionUrl="https://www.ladders.vision/collections/base/0xdf00fdE26A6819507649904Ca52FE5062eF75Ba7"
              buidlguidlUrl="https://app.buidlguidl.com/build/gQYWXsujR2edqkr1dd3K"
            />
          </div>
        </div>
         <div className="flex flex-col flex-grow pt-10">
        <div className="px-5">
          <h1 className="text-center">
            <span className="block text-2xl mb-2">Presented to you by</span>
            <PfpCard name="jacobhomanics.eth" image={jake} />
          </h1>
        </div>
        
        </div> 
      </div> */}
    </>
  );
};

export default Home;
