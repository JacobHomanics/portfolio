import { ProjectData } from "./types";

export type Talk = {
  slug: string;
  name: string;
  description: string;
  shortDescription?: string;
  youtubeUrl: string;
  imgSrc?: string;
  bannerSrc?: string;
};

export const talks: Talk[] = [
  {
    slug: "interoperable-gaming-with-web3",
    name: "Bringing Web2 Games to Web3",
    shortDescription: "Game assets on decentralized storage.",
    description: "Presented interoperable gaming assets using decentralized storage.",
    youtubeUrl: "https://www.youtube.com/watch?v=jpsT6qCkTJs&list=PLp3zrT1ewY0kwXj2NgQU6ZrbLlb_Uwmc0",
    imgSrc: "filecoin-talk.png",
    bannerSrc: "maxresdefault4.png",
  },
  {
    slug: "superchain-demo-day",
    name: "Superchain Demo Day",
    description: "Optimism - Reputation & Roles Starter Kit Demo",
    youtubeUrl: "https://www.youtube.com/watch?v=WZMwNuQgtBE&t=1165s",
    imgSrc: "superchain-demo-day.png",
  },
  {
    slug: "reputation-starter-kit",
    name: "Reputation Starter Kit",
    description: "Buidl Guidl - Reputation & Roles Starter Kit Demo",
    youtubeUrl: "https://www.youtube.com/watch?v=1p0KQlVTFow&t=1s",
    imgSrc: "buidlguidlDemoDay.png",
  },
];

export function getTalk(slug: string) {
  return talks.find(talk => talk.slug === slug);
}

function youtubeStartSeconds(value: string | null) {
  if (!value) return 0;
  if (/^\d+$/.test(value)) return Number(value);
  const match = value.match(/^(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?$/);
  if (!match || match[0] === "") return 0;
  return Number(match[1] || 0) * 3600 + Number(match[2] || 0) * 60 + Number(match[3] || 0);
}

export function youtubeEmbedUrl(url: string) {
  const parsed = new URL(url);
  const id = parsed.hostname === "youtu.be" ? parsed.pathname.slice(1) : parsed.searchParams.get("v");
  if (!id) return undefined;

  const embed = new URL(`https://www.youtube.com/embed/${id}`);
  const start = youtubeStartSeconds(parsed.searchParams.get("t") ?? parsed.searchParams.get("start"));
  if (start > 0) embed.searchParams.set("start", String(start));
  return embed.toString();
}

export const talkProjects: Array<ProjectData & { slug: string }> = talks.map(talk => ({
  slug: talk.slug,
  name: talk.name,
  shortDescription: talk.shortDescription,
  description: talk.description,
  imgSrc: talk.imgSrc,
  bannerSrc: talk.bannerSrc,
  link: `/presentations/${talk.slug}`,
  links: [{ url: talk.youtubeUrl, imagePath: "youtube_social_circle_red.png" }],
}));
