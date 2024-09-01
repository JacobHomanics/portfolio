"use client";

// import Link from "next/link";
// import Link from "next/link";
import type { NextPage } from "next";
// import { useAccount } from "wagmi";
// import { BugAntIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { PfpCard } from "~~/components/jacobhomanics/PfpCard";
import { ProjectItem } from "~~/components/jacobhomanics/ProjectItem";
// import { SocialLinks } from "~~/components/jacobhomanics/SocialLinks";
// import { socialLinks } from "~~/components/jacobhomanics/SocialLinksObject";
// import { SocialIcon } from "~~/components/jacobhomanics/SocialIcon";
// import { SocialLink } from "~~/components/jacobhomanics/SocialLink";
import jake from "~~/public/jake.gif";
import laddersDotVision from "~~/public/ladders.webp";
import pizzaPeople from "~~/public/pizzapeople.webp";
import repAndRolesIcon from "~~/public/rep-and-roles.png";

// import { Address } from "~~/components/scaffold-eth";
// import github from "~~/public/social-icons/github.png";

const Home: NextPage = () => {
  // const { address: connectedAddress } = useAccount();

  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5">
          <h1 className="text-center">
            <span className="block text-2xl mb-2">Presented to you by</span>
            <PfpCard name="jacobhomanics.eth" image={jake} />
          </h1>
        </div>
        <div className="bg-primary p-4 rounded-lg border-2 border-indigo-500">
          <p>My Projects</p>

          <div className="space-y-5">
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
              description="Track trust onchain and grant roles in decentralized/permissionless ways!"
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
