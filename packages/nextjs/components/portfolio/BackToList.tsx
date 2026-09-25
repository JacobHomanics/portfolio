"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { peekProjectOrigin, popProjectOrigin } from "~~/utils/projectNavStack";

const lists: Record<string, string> = {
  companies: "Companies",
  websites: "Websites",
  "video-games": "Video Games",
  "nft-collections": "NFT Collections",
  presentations: "Presentations",
  "unity-tooling": "Unity Tooling",
  "dao-tooling": "DAO Tooling",
};

function listFallback(pathname: string | null) {
  if (!pathname) return undefined;
  const [segment, slug] = pathname.split("/").filter(Boolean);
  if (!slug || !segment || !lists[segment]) return undefined;
  return `/${segment}`;
}

export function BackToList() {
  const pathname = usePathname();
  const fallback = listFallback(pathname);
  const [origin, setOrigin] = useState<string>();

  useEffect(() => {
    setOrigin(peekProjectOrigin());
  }, [pathname]);

  const href = origin ?? fallback;
  if (!href) return null;

  return (
    <Link
      href={href}
      className="btn btn-sm btn-ghost gap-2 self-start"
      onClick={() => {
        if (origin) popProjectOrigin();
      }}
    >
      <ArrowLeftIcon className="h-4 w-4" />
      Back
    </Link>
  );
}
