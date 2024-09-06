"use client";

// import { useEffect, useState } from "react";
// import { Address } from "../scaffold-eth";
import { IconsLinks } from "./icons-links/IconLinks";
// import { readContract } from "wagmi/actions";
import { organizations } from "~~/components/portfolio/config/organization.config";

// import { useScaffoldContract, useScaffoldReadContract } from "~~/hooks/scaffold-eth";
// import { useGlobalState } from "~~/services/store/store";
// import { wagmiConfig } from "~~/services/web3/wagmiConfig";

// type Props = {
//   name?: string;
//   description?: string;
//   image?: string;
//   address?: string;
//   size?: "sm" | "base" | "lg";
//   iconslinks?: any;
// };

// const sizeMap = {
//   sm: 7,
//   base: "w-[75px] md:w-[150px]",
//   lg: "",
// };

export const Organizations = () => {
  //   const { isWeb3 } = useGlobalState();

  //   const { data: organizationsCount } = useScaffoldReadContract({
  //     contractName: "Organizations",
  //     functionName: "getOrgCount",
  //   });
  //   const { data: organizationsContract } = useScaffoldContract({ contractName: "Organizations" });

  //   const [web3Orgs, setWeb3Orgs] = useState<any[]>([]);

  //   useEffect(
  //     () => {
  //       async function get() {
  //         if (!organizationsContract) return;
  //         if (!organizationsCount) return;

  //         const orgs = [];
  //         for (let i = 0; i < organizationsCount; i++) {
  //           const result = await readContract(wagmiConfig, {
  //             abi: organizationsContract.abi,
  //             address: organizationsContract.address,
  //             functionName: "getData",
  //             args: [BigInt(i)],
  //           });
  //           orgs.push(result);

  //           setWeb3Orgs([...orgs]);
  //         }
  //       }
  //       get();
  //     },
  //     /* eslint-disable-next-line */
  //     [organizationsContract?.address, organizationsCount],
  //   );

  //   const [selectedOrganizationsConfig, setSelectedOrganizationsConfig] = useState<any>(organizations);

  //   useEffect(() => {
  //     if (isWeb3) {
  //       setSelectedOrganizationsConfig(web3Orgs);
  //     } else {
  //       setSelectedOrganizationsConfig(organizations);
  //     }
  //   }, [web3Orgs, isWeb3]);

  return (
    <>
      <div className="text-center text-4xl">Organizations</div>
      <div className="rounded-lg p-2">
        <IconsLinks iconsLinks={organizations} size="base" areIconsRounded={true} justify="center" align="start" />
      </div>
    </>
  );
};
