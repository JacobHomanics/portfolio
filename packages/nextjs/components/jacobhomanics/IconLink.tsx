"use client";

import Link from "next/link";
import { UniversalIcon } from "./UniversalIcon";

type Props = {
  iconLink: {
    url: string;
    icon: any;
  };
};

export const IconLink = ({ iconLink }: Props) => {
  return (
    <Link href={iconLink.url} target="#">
      <UniversalIcon Icon={iconLink.icon} />
    </Link>
  );
};
