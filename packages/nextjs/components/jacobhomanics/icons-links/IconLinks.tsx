"use client";

import { IconLink } from "./IconLink";

type Props = {
  iconsLinks: (
    | { url: string; icon: string }
    | { url: string; icon: ({ className }: { className: string }) => Element }
  )[];
  size?: "base" | "sm" | "lg" | "xs";
};

export const IconsLinks = ({ iconsLinks, size }: Props) => {
  const iconsLinksElements = iconsLinks.map((iconLink: any, index: number) => {
    return <IconLink iconLink={iconLink} size={size} key={"iconLink" + index} />;
  });
  return <div className="flex flex-wrap items-center gap-4">{iconsLinksElements}</div>;
};
