"use client";

import { useEffect, useState } from "react";
import { readContract } from "@wagmi/core";
import type { NextPage } from "next";
// import { isAddress } from "viem";
// import { normalize } from "viem/ens";
// import { useEnsAvatar, useEnsName, useEnsText } from "wagmi";
import { PfpCard } from "~~/components/portfolio/PfpCard";
// import { organizations } from "~~/components/portfolio/config/organization.config";
import { PersonData } from "~~/components/portfolio/config/person.config";
import { BuidlGuidl } from "~~/components/portfolio/socials/BuidlGuidl";
// import { projectsData } from "~~/components/portfolio/config/projects.config";
// import { IconsLinks } from "~~/components/portfolio/icons-links/IconLinks";
// import { EmailLogo } from "~~/components/portfolio/logos/EmailLogo";
// import { GithubLogo } from "~~/components/portfolio/logos/GithubLogo";
// import { XLogo } from "~~/components/portfolio/logos/XLogo";
// import { Projects } from "~~/components/portfolio/projects/Projects";
import { Discord } from "~~/components/portfolio/socials/Discord";
import { Email } from "~~/components/portfolio/socials/Email";
import { Etherscan } from "~~/components/portfolio/socials/Etherscan";
import { github } from "~~/components/portfolio/socials/Github";
import { Link } from "~~/components/portfolio/socials/Link";
import { Linkedin } from "~~/components/portfolio/socials/Linkedin";
import { Nounspace } from "~~/components/portfolio/socials/Nounspace";
import { Opensea } from "~~/components/portfolio/socials/Opensea";
import { Telegram } from "~~/components/portfolio/socials/Telegram";
import { Warpcast } from "~~/components/portfolio/socials/Warpcast";
import { X } from "~~/components/portfolio/socials/X";
import { Youtube } from "~~/components/portfolio/socials/Youtube";
import { useScaffoldContract, useScaffoldReadContract } from "~~/hooks/scaffold-eth";
// import avatarUrl from "~~/public/jake3.gif";
// import TelegramLogo from "~~/public/website-icons/Logo.png";
import { useGlobalState } from "~~/services/store/store";
import { wagmiConfig } from "~~/services/web3/wagmiConfig";

const Home: NextPage = () => {
  const { data: personConfig } = useScaffoldReadContract({ contractName: "Person", functionName: "getData" });

  // const { data: linkedinUrl } = useEnsText({
  //   name: normalize("jacobhomanics.eth"),
  //   key: "com.linkedin",
  // });

  const { data: organizationsCount } = useScaffoldReadContract({
    contractName: "Organizations",
    functionName: "getOrgCount",
  });
  const { data: organizationsContract } = useScaffoldContract({ contractName: "Organizations" });

  const [web3Orgs, setWeb3Orgs] = useState<any[]>([]);

  useEffect(
    () => {
      async function get() {
        if (!organizationsContract) return;
        if (!organizationsCount) return;

        const orgs = [];
        for (let i = 0; i < organizationsCount; i++) {
          const result = await readContract(wagmiConfig, {
            abi: organizationsContract.abi,
            address: organizationsContract.address,
            functionName: "getData",
            args: [BigInt(i)],
          });
          orgs.push(result);

          setWeb3Orgs([...orgs]);
        }
      }
      get();
    },
    /* eslint-disable-next-line */
    [organizationsContract?.address, organizationsCount],
  );

  const { isWeb3 } = useGlobalState();

  const [selectedPersonConfig, setSelectedPersonConfig] = useState<any>({ ...PersonData });

  // const { data: fetchedEns } = useEnsName({
  //   address: selectedPersonConfig.addr,
  //   chainId: 1,
  //   query: {
  //     enabled: isAddress(selectedPersonConfig.addr ?? ""),
  //   },
  // });

  // const { data: githubUrl } = useEnsText({
  //   name: fetchedEns ? normalize(fetchedEns) : undefined,
  //   key: "com.github",
  //   query: {
  //     enabled: Boolean(fetchedEns),
  //     gcTime: 30_000,
  //   },
  // });

  // const { data: twitterUrl } = useEnsText({
  //   name: fetchedEns ? normalize(fetchedEns) : undefined,
  //   key: "com.twitter",
  //   query: {
  //     enabled: Boolean(fetchedEns),
  //     gcTime: 30_000,
  //   },
  // });

  // const { data: telegramUrl } = useEnsText({
  //   name: fetchedEns ? normalize(fetchedEns) : undefined,
  //   key: "org.telegram",
  //   query: {
  //     enabled: Boolean(fetchedEns),
  //     gcTime: 30_000,
  //   },
  // });

  // const { data: descript } = useEnsText({
  //   name: fetchedEns ? normalize(fetchedEns) : undefined,
  //   key: "description",
  //   query: {
  //     enabled: Boolean(fetchedEns),
  //     gcTime: 30_000,
  //   },
  // });

  // const { data: email } = useEnsText({
  //   name: fetchedEns ? normalize(fetchedEns) : undefined,
  //   key: "email",
  //   query: {
  //     enabled: Boolean(fetchedEns),
  //     gcTime: 30_000,
  //   },
  // });

  // // console.log(descript);

  // const { data: ensAvatar } = useEnsAvatar({
  //   name: fetchedEns ? normalize(fetchedEns) : undefined,
  //   query: {
  //     enabled: Boolean(fetchedEns),
  //     gcTime: 30_000,
  //   },
  // });

  // console.log(normalize("jacobhomanics.eth"));
  // console.log(test);
  // console.log(result);

  // console.log(githubUrl);
  // console.log(linkedinUrl);
  // console.log(twitterUrl);
  // console.log(telegramUrl);
  // console.log(avatarUrl);

  // const githubObj = { url: "https://github.com/" + githubUrl, icon: GithubLogo };
  // const xObj = { url: "https://x.com/" + twitterUrl, icon: XLogo };
  // const tgObj = { url: "https://t.me/" + telegramUrl, icon: TelegramLogo.src };
  // // const emailObj = { url: "mailto:" + email, icon: EmailLogo };

  // const iconsLinks = [githubObj, xObj, tgObj, emailObj];
  // const githubObj = { url: "https://github.com/" + githubUrl, icon: GithubLogo};
  // const githubObj = { url: "https://github.com/" + githubUrl, icon: GithubLogo};

  // const { data: resolver } = useEnsResolver({
  //   name: normalize("jacobhomanics.eth"),
  // });

  // console.log(resolver);

  // const [selectedOrganizationsConfig, setSelectedOrganizationsConfig] = useState<any>(organizations);

  useEffect(() => {
    if (isWeb3) {
      setSelectedPersonConfig({
        addr: PersonData.addr,
        name: PersonData.name,
      });
      // setSelectedOrganizationsConfig(web3Orgs);
    } else {
      setSelectedPersonConfig(PersonData);
      // setSelectedOrganizationsConfig(organizations);
    }
  }, [personConfig, web3Orgs, isWeb3]);

  // console.log({ ...PersonData });

  const [socialLinks, setSocialLinks] = useState<any[]>([]);

  useEffect(() => {
    const finalArr = [];

    for (let i = 0; i < selectedPersonConfig.links.length; i++) {
      if (selectedPersonConfig.links[i].tag === "Github") {
        finalArr.push(github(selectedPersonConfig.links[i].url));
      } else if (selectedPersonConfig.links[i].tag === "Email") {
        finalArr.push(Email(selectedPersonConfig.links[i].url));
      } else if (selectedPersonConfig.links[i].tag === "X") {
        finalArr.push(X(selectedPersonConfig.links[i].url));
      } else if (selectedPersonConfig.links[i].tag === "Discord") {
        finalArr.push(Discord(selectedPersonConfig.links[i].url));
      } else if (selectedPersonConfig.links[i].tag === "Telegram") {
        finalArr.push(Telegram(selectedPersonConfig.links[i].url));
      } else if (selectedPersonConfig.links[i].tag === "Warpcast") {
        finalArr.push(Warpcast(selectedPersonConfig.links[i].url));
      } else if (selectedPersonConfig.links[i].tag === "Youtube") {
        finalArr.push(Youtube(selectedPersonConfig.links[i].url));
      } else if (selectedPersonConfig.links[i].tag === "Linkedin") {
        finalArr.push(Linkedin(selectedPersonConfig.links[i].url));
      } else if (selectedPersonConfig.links[i].tag === "BuidlGuidl") {
        finalArr.push(BuidlGuidl(selectedPersonConfig.links[i].url));
      } else if (selectedPersonConfig.links[i].tag === "Etherscan") {
        finalArr.push(Etherscan(selectedPersonConfig.links[i].url));
      } else if (selectedPersonConfig.links[i].tag === "Nounspace") {
        finalArr.push(Nounspace(selectedPersonConfig.links[i].url));
      } else if (selectedPersonConfig.links[i].tag === "Opensea") {
        finalArr.push(Opensea(selectedPersonConfig.links[i].url));
      } else {
        finalArr.push(Link(selectedPersonConfig.links[i].url));
      }
    }

    setSocialLinks(finalArr);
  }, [selectedPersonConfig?.links, selectedPersonConfig?.links?.length]);

  console.log("bleh");

  return (
    <div className="flex flex-col items-center">
      <div className="bg-primary w-full p-4">
        <p className="text-center text-xs">profile loaded from ENS</p>
        <PfpCard
          name={selectedPersonConfig?.name}
          address={selectedPersonConfig?.addr}
          description={selectedPersonConfig?.description}
          image={selectedPersonConfig?.img}
          iconslinks={socialLinks}
        />
      </div>

      <div className="m-4" />

      {/* <div className="text-center text-4xl">Organizations</div>
      <div className="rounded-lg p-2">
        <IconsLinks
          iconsLinks={selectedOrganizationsConfig}
          size="base"
          areIconsRounded={true}
          justify="center"
          align="start"
        />
      </div>
      <div className="p-4 rounded-lg w-full">
        <p className="text-center text-4xl">My Projects</p>
        <Projects projects={projectsData} />
      </div> */}
    </div>
  );
};

export default Home;
