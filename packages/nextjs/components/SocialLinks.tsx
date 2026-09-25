"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/24/solid";
import { IconsLinksData } from "~~/configs/socials.config";

type SocialLinksPlacement = "header" | "footer";

const STORAGE_KEY = "social-links-placement";

type SocialLinksContextValue = {
  placement: SocialLinksPlacement;
  mounted: boolean;
  togglePlacement: () => void;
};

const SocialLinksContext = createContext<SocialLinksContextValue | null>(null);

export const SocialLinksProvider = ({ children }: { children: React.ReactNode }) => {
  const [override, setOverride] = useState<SocialLinksPlacement | null>(null);
  const [isLarge, setIsLarge] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    const media = window.matchMedia("(min-width: 1024px)");
    setIsLarge(media.matches);
    if (stored === "header" || stored === "footer") setOverride(stored);
    setMounted(true);

    const onChange = () => setIsLarge(media.matches);
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  const placement = override ?? (isLarge ? "header" : "footer");

  const togglePlacement = () => {
    const next: SocialLinksPlacement = placement === "header" ? "footer" : "header";
    setOverride(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  };

  return (
    <SocialLinksContext.Provider value={{ placement, mounted, togglePlacement }}>
      {children}
    </SocialLinksContext.Provider>
  );
};

export const useSocialLinksPlacement = () => {
  const context = useContext(SocialLinksContext);
  if (!context) throw new Error("useSocialLinksPlacement must be used within SocialLinksProvider");
  return context;
};

export const SocialLinks = ({ iconClassName = "h-6 w-6" }: { iconClassName?: string }) => {
  const { placement, togglePlacement } = useSocialLinksPlacement();
  const inHeader = placement === "header";

  return (
    <div className="flex items-center gap-3">
      {IconsLinksData.map(link => {
        const Icon = link.icon;
        return (
          <a href={link.url} target="#" key={link.url} aria-label={link.label}>
            <Icon className={iconClassName} alt={link.label} />
          </a>
        );
      })}
      <button
        type="button"
        role="switch"
        aria-checked={inHeader}
        aria-label={inHeader ? "Move social links to the footer" : "Move social links to the header"}
        className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-content"
        onClick={togglePlacement}
      >
        <span className="flex flex-col" aria-hidden>
          <ArrowUpIcon className="h-2.5 w-2.5" />
          <ArrowDownIcon className="-mt-1 h-2.5 w-2.5" />
        </span>
      </button>
    </div>
  );
};
