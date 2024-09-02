"use client";

import Link from "next/link";
import { UniversalIcon } from "./UniversalIcon";

type Props = {
  iconLink: {
    url: string;
    icon: any;
  };
  size?: "base" | "sm" | "lg" | "xs";
};

export const IconLink = ({ iconLink, size = "base" }: Props) => {
  return (
    <Link href={iconLink.url} target="#">
      <UniversalIcon Icon={iconLink.icon} size={size} />
    </Link>
  );
};
