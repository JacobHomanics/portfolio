"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { parseEther } from "viem";
import { useAccount } from "wagmi";
import { Bars3Icon, BugAntIcon } from "@heroicons/react/24/outline";
import * as PersonData from "~~/components/portfolio/config/person.config";
import { FaucetButton, RainbowKitCustomConnectButton } from "~~/components/scaffold-eth";
import { useOutsideClick, useScaffoldReadContract, useTransactor } from "~~/hooks/scaffold-eth";
import { useGlobalState } from "~~/services/store/store";

type HeaderMenuLink = {
  label: string;
  href: string;
  icon?: React.ReactNode;
};

export const menuLinks: HeaderMenuLink[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Debug Contracts",
    href: "/debug",
    icon: <BugAntIcon className="h-4 w-4" />,
  },
];

export const HeaderMenuLinks = () => {
  const pathname = usePathname();

  return (
    <>
      {menuLinks.map(({ label, href, icon }) => {
        const isActive = pathname === href;
        return (
          <li key={href}>
            <Link
              href={href}
              passHref
              className={`${
                isActive ? "bg-secondary shadow-md" : ""
              } hover:bg-secondary hover:shadow-md focus:!bg-secondary active:!text-neutral py-1.5 px-3 text-sm rounded-full gap-2 grid grid-flow-col`}
            >
              {icon}
              <span>{label}</span>
            </Link>
          </li>
        );
      })}
    </>
  );
};

/**
 * Site header
 */
export const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const burgerMenuRef = useRef<HTMLDivElement>(null);
  useOutsideClick(
    burgerMenuRef,
    useCallback(() => setIsDrawerOpen(false), []),
  );

  const { address: user } = useAccount();

  const faucetTxn = useTransactor();

  const { data: personConfig } = useScaffoldReadContract({ contractName: "Person", functionName: "getData" });

  const { isWeb3 } = useGlobalState();

  const [selectedPersonConfig, setSelectedPersonConfig] = useState<any>(PersonData);

  useEffect(() => {
    if (isWeb3) {
      setSelectedPersonConfig(personConfig);
    } else {
      setSelectedPersonConfig(PersonData);
    }
  }, [personConfig, personConfig?.name, isWeb3]);

  const sendETH = async () => {
    try {
      await faucetTxn({
        to: selectedPersonConfig.addr,
        value: parseEther("0.0020"),
        account: user,
      });
    } catch (error) {
      console.error("⚡️ ~ file: Faucet.tsx:sendETH ~ error", error);
    }
  };

  return (
    <div className="sticky lg:static top-0 navbar bg-base-100 min-h-0 flex-shrink-0 justify-between z-20 shadow-md shadow-secondary px-0 sm:px-2">
      <div className="navbar-start w-auto lg:w-1/2">
        <div className="lg:hidden dropdown" ref={burgerMenuRef}>
          <label
            tabIndex={0}
            className={`ml-1 btn btn-ghost ${isDrawerOpen ? "hover:bg-secondary" : "hover:bg-transparent"}`}
            onClick={() => {
              setIsDrawerOpen(prevIsOpenState => !prevIsOpenState);
            }}
          >
            <Bars3Icon className="h-1/2" />
          </label>

          {isDrawerOpen && (
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              onClick={() => {
                setIsDrawerOpen(false);
              }}
            >
              <HeaderMenuLinks />
            </ul>
          )}
        </div>
        {/* <Link href="/" passHref className="hidden lg:flex items-center gap-2 ml-4 mr-6 shrink-0">
          <div className="flex relative w-10 h-10">
            <Image alt="SE2 logo" className="cursor-pointer" fill src="/logo.svg" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold leading-tight">Scaffold-ETH</span>
            <span className="text-xs">Ethereum dev stack</span>
          </div>
        </Link> */}

        <button onClick={sendETH} className="bg-primary hover:brightness-125 btn-primary btn-small p-4 rounded-lg">
          <p className="text-xs m-0">Buy me a coffee</p> <p className="text-xs m-0">(With Crypto!)</p>
        </button>
        {/* <button onClick={sendETH} className="btn btn-primary w-3/5 md:w-2/5 lg:w-1/5 justify-center flex p-1">
          <div className="text-xs">Buy me a coffee</div>
          <div className="text-xs">(With Crypto!)</div>
        </button> */}

        <ul className="hidden lg:flex lg:flex-nowrap menu menu-horizontal px-1 gap-2">
          <HeaderMenuLinks />
        </ul>
      </div>
      <div className="navbar-end flex-grow mr-4">
        <RainbowKitCustomConnectButton />
        <FaucetButton />
      </div>
    </div>
  );
};
