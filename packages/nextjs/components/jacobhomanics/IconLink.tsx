"use client";

import Link from "next/link";

type Props = {
  url?: string;
  children?: any;
  size?: "sm" | "base" | "lg";
};

export const IconLink = ({ url, children }: Props) => {
  return (
    <Link href={url || ""} target="#" className="hover:brightness-75">
      {children}
    </Link>
  );
};
