"use client";

import React, { useCallback, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
// import { parseEther } from "viem";
// import { useAccount } from "wagmi";
import { Bars3Icon } from "@heroicons/react/24/outline";
// import * as PersonData from "~~/components/portfolio/config/person.config";
import { SwitchTheme } from "~~/components/SwitchTheme";
import { FaucetButton } from "~~/components/scaffold-eth";
import { useOutsideClick } from "~~/hooks/scaffold-eth";

// import { useGlobalState } from "~~/services/store/store";

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
  // {
  //   label: "AI / LLM",
  //   href: "/ai",
  // },
  {
    label: "Websites",
    href: "/websites",
  },
  {
    label: "Video Games",
    href: "/video-games",
  },
  {
    label: "NFTs",
    href: "/nft-collections",
  },
  {
    href: "/presentations",
    label: "Presentations",
  },
  {
    href: "/unity-tooling",
    label: "Unity Tooling",
  },
  {
    href: "/dao-tooling",
    label: "DAO Tooling",
  },
  {
    href: "/organizations",
    label: "Organizations",
  },
  // {
  //   label: "Debug Contracts",
  //   href: "/debug",
  //   icon: <BugAntIcon className="h-4 w-4" />,
  // },
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

  // const { address: user } = useAccount();

  // const faucetTxn = useTransactor();

  // const { data: personConfig } = useScaffoldReadContract({ contractName: "Person", functionName: "getData" });

  // const { isWeb3 } = useGlobalState();

  // const [selectedPersonConfig, setSelectedPersonConfig] = useState<any>(PersonData);

  // useEffect(() => {
  //   if (isWeb3) {
  //     setSelectedPersonConfig(personConfig);
  //   } else {
  //     setSelectedPersonConfig(PersonData);
  //   }
  // }, [personConfig, personConfig?.name, isWeb3]);

  return (
    <header className="sticky top-0 z-50 flex min-h-0 items-center justify-between bg-base-100 px-3 py-2 shadow-md shadow-secondary">
      <div className="lg:hidden" ref={burgerMenuRef}>
        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={isDrawerOpen}
          className={`btn btn-sm btn-circle border-0 text-primary-content ${
            isDrawerOpen ? "bg-secondary" : "bg-primary hover:bg-secondary"
          }`}
          onClick={() => {
            setIsDrawerOpen(prevIsOpenState => !prevIsOpenState);
          }}
        >
          <Bars3Icon className="h-6 w-6" />
        </button>

        {isDrawerOpen && (
          <ul
            className="menu menu-compact absolute left-3 top-full mt-2 p-2 shadow bg-base-100 rounded-box w-52"
            onClick={() => {
              setIsDrawerOpen(false);
            }}
          >
            <HeaderMenuLinks />
          </ul>
        )}
      </div>

      <ul className="hidden lg:flex flex-nowrap menu menu-horizontal px-1 gap-2">
        <HeaderMenuLinks />
      </ul>

      <div className="flex items-center gap-2">
        <SwitchTheme />
        <div className="hidden lg:block">
          <FaucetButton />
        </div>
      </div>
    </header>
  );
};
