"use client";

import { useLayoutEffect, useRef, useState } from "react";
import type { NextPage } from "next";
import { DocumentIcon } from "@heroicons/react/24/outline";
import { MobileShowcaseCarousel } from "~~/components/portfolio/MobileShowcaseCarousel";
import { ProjectShowcaseCard } from "~~/components/portfolio/ProjectShowcaseCard";
import { ProjectsOverviewCard } from "~~/components/portfolio/ProjectsOverviewCard";
// import { data as aiData } from "~~/configs/ai.config";
import { data as daoToolingData } from "~~/configs/dao-tooling.config";
import { data as nftCollectionsData } from "~~/configs/nftCollections.config";
import { data as organizationsData } from "~~/configs/organizations.config";
import { data as presentationsData } from "~~/configs/presentations.config";
import { data as unityToolingData } from "~~/configs/unity-tooling.config";
import { data as gamesData } from "~~/configs/video-games.config";
import { data as websitesData } from "~~/configs/websites.config";
import jakeGif from "~~/public/images/jake.webp";

const pageCards = [
  // {
  //   name: "/ai",
  //   title: "AI / LLM",
  //   data: aiData,
  // },
  {
    name: "/websites",
    title: "Websites",
    data: websitesData,
  },
  {
    name: "/video-games",
    title: "Video Games",
    data: gamesData,
  },

  {
    name: "/nft-collections",
    title: "NFTs",
    data: nftCollectionsData,
  },
  {
    name: "/presentations",
    title: "Presentations",
    data: presentationsData,
  },
  {
    name: "/unity-tooling",
    title: "Unity Tooling",
    data: unityToolingData,
  },
  {
    name: "/organizations",
    title: "Organizations",
    data: organizationsData,
  },
  {
    name: "/dao-tooling",
    title: "DAO Tooling",
    data: daoToolingData,
  },
];

const showcaseProjects = [
  presentationsData[0],
  // aiData[0],
  websitesData[0],
  nftCollectionsData[0],
  daoToolingData[0],
  gamesData[0],
];

function ExpandableDescription({ children }: { children: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const measureRef = useRef<HTMLParagraphElement>(null);
  const [expanded, setExpanded] = useState(false);
  const [truncated, setTruncated] = useState<string | null>(null);
  const text = children.replace(/\s+/g, " ").trim();

  useLayoutEffect(() => {
    const container = containerRef.current;
    const measure = measureRef.current;
    if (!container || !measure) return;

    const fitsInTwoLines = () => {
      const lineHeight = parseFloat(getComputedStyle(measure).lineHeight);
      if (!lineHeight) return true;
      return measure.getBoundingClientRect().height <= lineHeight * 2 + 1;
    };

    const fillMeasure = (content: string, withToggle: boolean) => {
      measure.replaceChildren(document.createTextNode(content));
      if (!withToggle) return;
      const label = document.createElement("span");
      label.textContent = "Show more";
      label.style.whiteSpace = "nowrap";
      label.style.textDecoration = "underline";
      measure.append(label);
    };

    const measureFit = () => {
      const width = container.clientWidth;
      if (!width) return;

      measure.style.width = `${width}px`;
      fillMeasure(text, false);
      if (fitsInTwoLines()) {
        setTruncated(current => (current === null ? current : null));
        return;
      }

      let low = 0;
      let high = text.length;
      let best = 0;
      while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        const slice = text.slice(0, mid).trimEnd();
        fillMeasure(`${slice}… `, true);
        if (fitsInTwoLines()) {
          best = mid;
          low = mid + 1;
        } else {
          high = mid - 1;
        }
      }

      let slice = text.slice(0, best).trimEnd();
      const lastSpace = slice.lastIndexOf(" ");
      if (lastSpace > 0) slice = slice.slice(0, lastSpace);
      setTruncated(current => (current === slice ? current : slice));
    };

    measureFit();
    const observer = new ResizeObserver(measureFit);
    observer.observe(container);
    return () => observer.disconnect();
  }, [text]);

  const isClamped = truncated !== null && !expanded;

  return (
    <div ref={containerRef} className="relative w-full">
      <div className="pointer-events-none absolute h-0 w-full overflow-hidden" aria-hidden>
        <p ref={measureRef} className="text-left text-xs md:text-center md:text-base" />
      </div>
      <p className="text-left text-xs md:text-center md:text-base">
        {isClamped ? `${truncated}… ` : `${text} `}
        {truncated !== null && (
          <button
            type="button"
            className="inline whitespace-nowrap border-0 bg-transparent p-0 font-[inherit] text-inherit underline"
            aria-expanded={expanded}
            onClick={() => setExpanded(current => !current)}
          >
            {expanded ? "Show less" : "Show more"}
          </button>
        )}
      </p>
    </div>
  );
}

const Home: NextPage = () => {
  const pageCardComponents = pageCards.map((page, index) => {
    return (
      <div className="w-[150px] md:w-[400px]" key={index}>
        <ProjectsOverviewCard title={page.title} name={page.name} data={page.data} />
      </div>
    );
  });

  return (
    <div className="flex flex-col items-center bg-gradient-to-t p-4 gap-10">
      <div className="flex w-full flex-col items-center gap-4">
        <div className="flex w-full items-center gap-3 md:w-auto md:gap-4">
          <div
            className={`bg-cover bg-center rounded-full flex justify-center items-end shrink-0 w-32 h-32`}
            style={{ backgroundImage: `url(${jakeGif?.src})` }}
          >
            <button
              className="btn btn-sm w-full btn-primary"
              onClick={() => {
                window.open("/Jacob_Homanics_Resume.pdf");
              }}
              // href="/Jacob_Homanics_Resume.pdf"
              // download="Jacob_Homanics_Resume.pdf"
            >
              Resume
              <DocumentIcon className="w-5 h-5" />
            </button>
          </div>
          <div className="flex min-w-0 flex-1 flex-col items-start gap-4 md:max-w-2xl md:items-center">
            <div>
              <p className="font-bold text-2xl leading-tight md:text-4xl">Jacob Homanics</p>
              <p className="text-sm md:text-xl">Software Engineer & Founder</p>
            </div>
            <div className="w-full md:hidden">
              <p className="text-xs">
                Skilled in 0→1 product building. Adept in web, native, games, VR/AR, tooling, and blockchains.
              </p>
            </div>
            <div className="hidden w-full md:block">
              <ExpandableDescription>
                Skilled in 0→1 product building. Adept in web, native, games, VR/AR, tooling, and blockchains.
              </ExpandableDescription>
            </div>
          </div>
        </div>

        <MobileShowcaseCarousel
          mode="continuous"
          slides={showcaseProjects.map(project => ({
            title: project.name,
            description: project.shortDescription,
            imgSrc: project.bannerSrc,
            link: project.link,
          }))}
        />

        <div className="hidden flex-wrap items-center justify-center gap-2 md:flex md:gap-4 max-w-7xl">
          {showcaseProjects.map((project, index) => {
            return (
              <ProjectShowcaseCard
                key={index}
                name={project.name}
                description={project.shortDescription}
                imgSrc={project.bannerSrc}
                link={project.link}
              />
            );
          })}
        </div>
      </div>

      <div className="w-full h-2 bg-slate-900" />

      <div className="flex flex-wrap md:w-4/5 items-center justify-center gap-4">{pageCardComponents}</div>
    </div>
  );
};

export default Home;
