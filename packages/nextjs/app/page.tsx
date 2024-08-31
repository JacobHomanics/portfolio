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
            />

            <ProjectItem
              name="Pizza People"
              description="A Nounish NFT collection celebrating Pizza!"
              img={pizzaPeople}
              link="https://pizzapeople.wtf"
              githubUrl="https://github.com/hotmanics/pizza-people"
            />

            <ProjectItem
              name="Reputation & Roles"
              description="Track trust onchain and grant roles in decentralized/permissionless ways!"
              img={repAndRolesIcon}
              alt="Rep & Roles"
              link="https://github.com/ATXDAO/rep-and-roles-starter-kit"
              githubUrl="https://github.com/ATXDAO/rep-and-roles-starter-kit"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
