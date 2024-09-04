"use client";

import Link from "next/link";
import { UniversalIcon } from "./UniversalIcon";

type Props = {
  iconLink: {
    url: string;
    icon: any;
    name?: string;
  };
  title?: string;
  size?: "base" | "sm" | "lg" | "xs";
  isRounded?: boolean;
};

export const IconLink = ({ iconLink, size = "base", isRounded }: Props) => {
  return (
    <Link href={iconLink.url} target="#" className="flex flex-col max-w-[128px] items-center flex-grow p-1">
      <UniversalIcon Icon={iconLink.icon} size={size} isRounded={isRounded} />
      <div className="text-center text-xl text-wrap break-word text-center w-full">{iconLink.name}</div>
    </Link>
  );
};
