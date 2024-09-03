"use client";

import { IconLink } from "./IconLink";

type Props = {
  iconsLinks: (
    | { url: string; icon: string; title?: string }
    | { url: string; icon: ({ className }: { className: string }) => Element; title?: string }
  )[];
  size?: "base" | "sm" | "lg" | "xs";
  areIconsRounded?: boolean;
  justify?: "start" | "center";
};

export const IconsLinks = ({ iconsLinks, size, areIconsRounded, justify = "start" }: Props) => {
  const iconsLinksElements = iconsLinks.map((iconLink: any, index: number) => {
    return <IconLink iconLink={iconLink} isRounded={areIconsRounded} size={size} key={"iconLink" + index} />;
  });
  return <div className={`flex flex-wrap items-center justify-${justify} gap-4`}>{iconsLinksElements}</div>;
};
