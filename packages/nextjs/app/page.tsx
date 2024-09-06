"use client";

import { useEffect, useState } from "react";
import { readContract } from "@wagmi/core";
import type { NextPage } from "next";
import { Chain, createClient, http, isAddress } from "viem";
import { hardhat, mainnet } from "viem/chains";
import { normalize } from "viem/ens";
import { createConfig, useEnsName } from "wagmi";
import { getEnsAvatar, getEnsText } from "wagmi/actions";
import { PfpCard } from "~~/components/portfolio/PfpCard";
import { organizations } from "~~/components/portfolio/config/organization.config";
import { PersonData } from "~~/components/portfolio/config/person.config";
import { projectsData } from "~~/components/portfolio/config/projects.config";
import { IconsLinks } from "~~/components/portfolio/icons-links/IconLinks";
import { Projects } from "~~/components/portfolio/projects/Projects";
import { BuidlGuidl } from "~~/components/portfolio/socials/BuidlGuidl";
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
import scaffoldConfig from "~~/scaffold.config";
import { useGlobalState } from "~~/services/store/store";
import { wagmiConfig } from "~~/services/web3/wagmiConfig";
import { wagmiConnectors } from "~~/services/web3/wagmiConnectors";
import { getAlchemyHttpUrl } from "~~/utils/scaffold-eth";

const Home: NextPage = () => {
  const { isWeb3 } = useGlobalState();

  const [selectedName, setSelectedName] = useState<any>(PersonData.name);
  const [selectedImage, setSelectedImage] = useState<string>(PersonData.img);
  const [selectedDescription, setSelectedDescription] = useState<any>(PersonData.description);

  const arr = [];
  for (let i = 0; i < PersonData.links.length; i++) {
    arr.push(checkLinkWithTag(PersonData.links[i]));
  }
  const [socialLinks, setSocialLinks] = useState<any[]>(arr);

  const { data: fetchedEns } = useEnsName({
    address: PersonData.addr,
    chainId: 1,
    query: {
      enabled: isAddress(PersonData.addr ?? ""),
    },
  });

  const [isLoading, setIsLoading] = useState<boolean>();

  useEffect(() => {
    async function get() {
      let finalName;
      let finalImage = "";
      let finalDescription;
      const finalLinksArr: any[] = [];

      if (isWeb3) {
        setIsLoading(true);
        const wagmiConfig = createConfig({
          chains: [mainnet],
          connectors: wagmiConnectors,
          ssr: true,
          client({ chain }) {
            return createClient({
              chain,
              transport: http(getAlchemyHttpUrl(chain.id)),
              ...(chain.id !== (hardhat as Chain).id
                ? {
                    pollingInterval: scaffoldConfig.pollingInterval,
                  }
                : {}),
            });
          },
        });

        const normalizedName = fetchedEns ? normalize(fetchedEns) : "";

        const nickname = await getEnsText(wagmiConfig, { name: normalizedName, key: "name" });
        const description = await getEnsText(wagmiConfig, { name: normalizedName, key: "description" });
        const image = await getEnsAvatar(wagmiConfig, { name: normalizedName });

        const link1 = (await getEnsText(wagmiConfig, { name: normalizedName, key: "com.twitter" })) as string;
        const link2 = (await getEnsText(wagmiConfig, { name: normalizedName, key: "com.github" })) as string;
        const link3 = (await getEnsText(wagmiConfig, { name: normalizedName, key: "com.discord" })) as string;
        const link4 = (await getEnsText(wagmiConfig, { name: normalizedName, key: "org.telegram" })) as string;
        const link5 = (await getEnsText(wagmiConfig, { name: normalizedName, key: "email" })) as string;

        const link1Transformed = { tag: "X", url: link1 };
        const link2Transformed = { tag: "Github", url: link2 };
        const link3Transformed = { tag: "Discord", url: link3 };
        const link4Transformed = { tag: "Telegram", url: link4 };
        const link5Transformed = { tag: "Email", url: link5 };

        finalLinksArr.push(checkLinkWithTag(link1Transformed));
        finalLinksArr.push(checkLinkWithTag(link2Transformed));
        finalLinksArr.push(checkLinkWithTag(link3Transformed));
        finalLinksArr.push(checkLinkWithTag(link4Transformed));
        finalLinksArr.push(checkLinkWithTag(link5Transformed));

        finalName = nickname;
        finalDescription = description;
        finalImage = image || "";
        setIsLoading(false);
      } else {
        for (let i = 0; i < PersonData.links.length; i++) {
          finalLinksArr.push(checkLinkWithTag(PersonData.links[i]));
        }

        finalName = PersonData.name;
        finalImage = PersonData.img;
        finalDescription = PersonData.description;
      }

      setSelectedName(finalName);
      setSelectedDescription(finalDescription);
      setSelectedImage(finalImage);
      setSocialLinks(finalLinksArr);
    }
    get();
  }, [fetchedEns, isWeb3, PersonData?.links, PersonData?.links?.length]);

  const { data: personConfig } = useScaffoldReadContract({ contractName: "Person", functionName: "getData" });

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

  const [selectedOrganizationsConfig, setSelectedOrganizationsConfig] = useState<any>();

  useEffect(() => {
    if (isWeb3) {
      setSelectedOrganizationsConfig(web3Orgs);
    } else {
      setSelectedOrganizationsConfig(organizations);
    }
  }, [personConfig, web3Orgs, isWeb3]);

  console.log("bleh");

  return (
    <div className="flex flex-col items-center">
      <div className="bg-primary w-full p-4">
        <p className="text-center text-xs">{isWeb3 ? "profile loaded from ENS" : ""}</p>
        {isLoading ? (
          <p className="text-center">Loading ENS Profile...</p>
        ) : (
          <PfpCard
            address={PersonData?.addr}
            name={selectedName}
            description={selectedDescription}
            image={selectedImage}
            iconslinks={socialLinks}
          />
        )}
      </div>

      <div className="m-4" />

      <div className="text-center text-4xl">Organizations</div>
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
      </div>
    </div>
  );
};

export default Home;

function checkLinkWithTag(link: { url: string; tag: string; img?: any }) {
  let finalSocialLink;

  if (link.tag === "Github") {
    finalSocialLink = github(link.url, link.img);
  } else if (link.tag === "Email") {
    finalSocialLink = Email(link.url, link.img);
  } else if (link.tag === "X") {
    finalSocialLink = X(link.url, link.img);
  } else if (link.tag === "Discord") {
    finalSocialLink = Discord(link.url, link.img);
  } else if (link.tag === "Telegram") {
    console.log(link.img);
    finalSocialLink = Telegram(link.url, link.img);
  } else if (link.tag === "Warpcast") {
    finalSocialLink = Warpcast(link.url, link.img);
  } else if (link.tag === "Youtube") {
    finalSocialLink = Youtube(link.url, link.img);
  } else if (link.tag === "Linkedin") {
    finalSocialLink = Linkedin(link.url, link.img);
  } else if (link.tag === "BuidlGuidl") {
    finalSocialLink = BuidlGuidl(link.url, link.img);
  } else if (link.tag === "Etherscan") {
    finalSocialLink = Etherscan(link.url, link.img);
  } else if (link.tag === "Nounspace") {
    finalSocialLink = Nounspace(link.url, link.img);
  } else if (link.tag === "Opensea") {
    finalSocialLink = Opensea(link.url, link.img);
  } else {
    finalSocialLink = Link(link.url, link.img);
  }

  return finalSocialLink;
}
