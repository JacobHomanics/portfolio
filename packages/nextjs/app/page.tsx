"use client";

import { useEffect, useState } from "react";
import { readContract } from "@wagmi/core";
import type { NextPage } from "next";
import { PfpCard } from "~~/components/portfolio/PfpCard";
import { organizations } from "~~/components/portfolio/config/organization.config";
import * as PersonData from "~~/components/portfolio/config/person.config";
import { projectsData } from "~~/components/portfolio/config/projects.config";
import { IconsLinks } from "~~/components/portfolio/icons-links/IconLinks";
import { Projects } from "~~/components/portfolio/projects/Projects";
import { useScaffoldContract, useScaffoldReadContract } from "~~/hooks/scaffold-eth";
import jake from "~~/public/jake.gif";
import { useGlobalState } from "~~/services/store/store";
import { wagmiConfig } from "~~/services/web3/wagmiConfig";

const Home: NextPage = () => {
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

  const { isWeb3 } = useGlobalState();

  const [selectedPersonConfig, setSelectedPersonConfig] = useState<any>(PersonData);
  const [selectedOrganizationsConfig, setSelectedOrganizationsConfig] = useState<any>(organizations);

  useEffect(() => {
    if (isWeb3) {
      setSelectedPersonConfig(personConfig);
      setSelectedOrganizationsConfig(web3Orgs);
    } else {
      setSelectedPersonConfig(PersonData);
      setSelectedOrganizationsConfig(organizations);
    }
  }, [personConfig, web3Orgs, isWeb3]);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-center">
        <span className="block text-2xl mb-2">Presented to you by</span>
        <PfpCard
          name={selectedPersonConfig?.name}
          address={selectedPersonConfig?.addr}
          description={selectedPersonConfig?.description}
          image={jake}
        />
      </h1>

      <div className="m-4" />

      <div className="text-center text-4xl">Organizations</div>
      <div className="rounded-lg p-2">
        <IconsLinks iconsLinks={selectedOrganizationsConfig} size="base" areIconsRounded={true} justify="center" />
      </div>
      <div className="p-4 rounded-lg w-full">
        <p className="text-center text-4xl">My Projects</p>
        <Projects projects={projectsData} />
      </div>
    </div>
  );
};

export default Home;
