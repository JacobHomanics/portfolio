import React from "react";
import { HeartIcon } from "@heroicons/react/24/outline";
import { IconsLinksData } from "~~/configs/socials.config";

/**
 * Site footer
 */
export const Footer = () => {
  return (
    <div className="min-h-0 px-1 py-5 pb-16 lg:mb-0 lg:pb-5">
      <div className="fixed inset-x-0 bottom-0 z-40 flex items-center justify-center gap-4 bg-base-100 px-2 py-3 shadow-[0_-4px_12px_rgba(0,0,0,0.12)] lg:hidden">
        {IconsLinksData.map(link => {
          const Icon = link.icon;
          return (
            <a href={link.url} target="#" key={link.url} aria-label={link.label}>
              <Icon className="h-6 w-6" alt={link.label} />
            </a>
          );
        })}
      </div>
      <div className="w-full">
        <ul className="menu menu-horizontal w-full">
          <div className="flex justify-center items-center gap-2 text-sm w-full">
            <div className="text-center">
              <a
                href="https://github.com/jacobhomanics/jacobhomanics-website"
                target="_blank"
                rel="noreferrer"
                className="link"
              >
                Fork me
              </a>
            </div>
            <span>·</span>
            <div className="flex justify-center items-center gap-2">
              <p className="m-0 text-center">
                Built with <HeartIcon className="inline-block h-4 w-4" /> by {}
              </p>
              <span>{"Jacob Homanics"}</span>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};
