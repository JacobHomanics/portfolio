import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { parseEther } from "viem";
import { hardhat } from "viem/chains";
import { useAccount, useSendTransaction } from "wagmi";
import { HeartIcon } from "@heroicons/react/24/outline";
import { SwitchTheme } from "~~/components/SwitchTheme";
import { useTargetNetwork } from "~~/hooks/scaffold-eth/useTargetNetwork";

/**
 * Site footer
 */
export const Footer = () => {
  const { targetNetwork } = useTargetNetwork();
  const isLocalNetwork = targetNetwork.id === hardhat.id;

  const { sendTransaction } = useSendTransaction();

  const { address: user } = useAccount();

  const sendETH = async () => {
    try {
      await sendTransaction({
        to: "0xc689c800a7121b186208ea3b182fAb2671B337E7",
        value: parseEther("0.002"),
        account: user,
      });
    } catch (error) {
      console.error("⚡️ ~ file: Faucet.tsx:sendETH ~ error", error);
    }
  };

  return (
    <div className="min-h-0 py-5 px-1 mb-11 lg:mb-0">
      <div>
        <div className="fixed flex justify-between items-end w-full z-50 p-4 bottom-0 left-0 pointer-events-none gap-4">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col md:flex-row gap-2 pointer-events-auto">
              <ConnectButton.Custom>
                {({ account, chain, openConnectModal, mounted }) => {
                  const connected = mounted && account && chain;
                  if (!connected) {
                    return (
                      <button className="btn btn-primary btn-sm" onClick={openConnectModal} type="button">
                        Buy me a coffee
                      </button>
                    );
                  } else {
                    return (
                      <button className="btn btn-primary btn-sm" onClick={sendETH} type="button">
                        Buy me a coffee
                      </button>
                    );
                  }

                  return <></>;
                }}
              </ConnectButton.Custom>
            </div>
          </div>

          <div className="flex flex-col mr-6">
            <SwitchTheme className={`pointer-events-auto ${isLocalNetwork ? "self-end md:self-auto" : ""}`} />
          </div>
        </div>
      </div>
      <div className="w-full">
        <ul className="menu menu-horizontal w-full">
          <div className="flex justify-center items-center gap-2 text-sm w-full">
            <div className="text-center">
              <a
                href="https://github.com/jacobhomanics/jacobhomanics-website"
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
              <span>{"Jacob Homanics"}</span>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};
