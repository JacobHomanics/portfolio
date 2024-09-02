"use client";

// import Link from "next/link";
import { IconLink } from "./IconLink";

// import { UniversalIcon } from "./UniversalIcon";

type Props = {
  iconsLinks: (
    | { url: string; icon: string }
    | { url: string; icon: ({ className }: { className: string }) => Element }
  )[];
};

export const IconsLinks = ({ iconsLinks }: Props) => {
  const iconsLinksElements = iconsLinks.map((iconLink: any, index: number) => {
    return <IconLink iconLink={iconLink} key={"iconLink" + index} />;
  });
  return (
    <div className="flex flex-wrap items-center gap-4 border-4 border-indigo-400 rounded-lg bg-primary w-full">
      {iconsLinksElements}
    </div>
  );
};
