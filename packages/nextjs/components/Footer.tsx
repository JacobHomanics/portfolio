import React, { useEffect, useState } from "react";
// import { SocialLinks } from "./jacobhomanics/SocialLinks";
// import { socialLinks2 } from "./jacobhomanics/SocialLinksObject";
import Link from "next/link";
import { SwitchWeb } from "./portfolio/SwitchWeb";
import { IconsLinksData } from "./portfolio/config/socials.config";
import { IconsLinks } from "./portfolio/icons-links/IconLinks";
import { hardhat } from "viem/chains";
import { CurrencyDollarIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { HeartIcon } from "@heroicons/react/24/outline";
import { SwitchTheme } from "~~/components/SwitchTheme";
import * as PersonData from "~~/components/portfolio/config/person.config";
import { Faucet } from "~~/components/scaffold-eth";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";
import { useTargetNetwork } from "~~/hooks/scaffold-eth/useTargetNetwork";
import { useGlobalState } from "~~/services/store/store";

/**
 * Site footer
 */
export const Footer = () => {
  const nativeCurrencyPrice = useGlobalState(state => state.nativeCurrency.price);
  const isWeb3 = useGlobalState(state => state.isWeb3);
  const { targetNetwork } = useTargetNetwork();
  const isLocalNetwork = targetNetwork.id === hardhat.id;

  const { data: personConfig } = useScaffoldReadContract({ contractName: "Person", functionName: "getData" });

  const [selectedPersonConfig, setSelectedPersonConfig] = useState<any>(PersonData);

  useEffect(() => {
    if (isWeb3) {
      setSelectedPersonConfig(personConfig);
    } else {
      setSelectedPersonConfig(PersonData);
    }
  }, [personConfig, isWeb3]);
  return (
    <div className="min-h-0 py-5 px-1 mb-11 lg:mb-0">
      <div>
        <div className="fixed flex justify-between items-end w-full z-10 p-4 bottom-0 left-0 pointer-events-none gap-4">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col md:flex-row gap-2 pointer-events-auto">
              {nativeCurrencyPrice > 0 && (
                <div>
                  <div className="btn btn-primary btn-sm font-normal gap-1 cursor-auto">
                    <CurrencyDollarIcon className="h-4 w-4" />
                    <span>{nativeCurrencyPrice.toFixed(2)}</span>
                  </div>
                </div>
              )}
              {isLocalNetwork && (
                <>
                  <Faucet />
                  <Link href="/blockexplorer" passHref className="btn btn-primary btn-sm font-normal gap-1">
                    <MagnifyingGlassIcon className="h-4 w-4" />
                    <span>Block Explorer</span>
                  </Link>
                </>
              )}
            </div>

            <div className="pointer-events-auto border-4 border-primary rounded-lg bg-base-300 dark:bg-base-200 p-2">
              <IconsLinks iconsLinks={IconsLinksData} size="sm" />
            </div>
          </div>

          {isWeb3 ? (
            <div className="bg-primary p-1 rounded-lg">This website is now pulling data from the blockchain!</div>
          ) : (
            <></>
          )}
          {/* <div className="pointer-events-auto bg-primary p-1 border-2 border-indigo-500 rounded-lg">
            <SocialLinks items={socialLinks2} />  
          </div> */}
          <div className="flex flex-col mr-2">
            <SwitchWeb className={`pointer-events-auto ${isLocalNetwork ? "self-end md:self-auto" : ""}`} />
            <SwitchTheme className={`pointer-events-auto ${isLocalNetwork ? "self-end md:self-auto" : ""}`} />
          </div>
        </div>
      </div>
      <div className="w-full">
        <ul className="menu menu-horizontal w-full">
          <div className="flex justify-center items-center gap-2 text-sm w-full">
            <div className="text-center">
              <a
                href="https://github.com/hotmanics/jacobhomanics-website"
                target="_blank"
                rel="noreferrer"
                className="link"
              >
                Fork me
              </a>
            </div>
            <span>·</span>
            <div className="flex justify-center items-center gap-2">
              <p className="m-0 text-center">
                Built with <HeartIcon className="inline-block h-4 w-4" /> by {}
              </p>
              <span>{selectedPersonConfig?.name}</span>
            </div>
            {/* <span>·</span>
            <div className="text-center">
              <a href="https://t.me/joinchat/KByvmRe5wkR-8F_zz6AjpA" target="_blank" rel="noreferrer" className="link">
                Support
              </a>
            </div> */}
          </div>
        </ul>
      </div>
    </div>
  );
};
