import type { BrandIconName } from "../components/BrandIcon";

type Badge = { label: string; highlighted: boolean; icon?: BrandIconName };

export const skillSections: { title: string; badges: Badge[] }[] = [
  {
    title: "AI Tools",
    badges: [
      { label: "Claude Desktop", highlighted: true, icon: "claude" },
      { label: "Codex", highlighted: true, icon: "codex" },
      { label: "Cursor", highlighted: true, icon: "cursor" },
      { label: "Copilot", highlighted: false, icon: "copilot" },
    ],
  },
  {
    title: "AI Models",
    badges: [
      { label: "Claude", highlighted: true, icon: "claude" },
      { label: "ChatGPT", highlighted: true, icon: "openai" },
      { label: "Grok", highlighted: true, icon: "grok" },
      { label: "Gemini", highlighted: false, icon: "gemini" },
      { label: "Llama", highlighted: false, icon: "meta" },
      { label: "Perplexity", highlighted: false, icon: "perplexity" },
    ],
  },
  {
    title: "Web Development",
    badges: [
      { label: "React", highlighted: true, icon: "react" },
      { label: "Vite", highlighted: true, icon: "vite" },
      { label: "Next.js", highlighted: true, icon: "nextjs" },
    ],
  },
  {
    title: "Mobile Application Development",
    badges: [
      { label: "Expo", highlighted: true, icon: "expo" },
      { label: "React Native", highlighted: true, icon: "react" },
    ],
  },
  {
    title: "Languages",
    badges: [
      { label: "TypeScript", highlighted: true, icon: "typescript" },
      { label: "JavaScript", highlighted: true, icon: "javascript" },
      { label: "Node", highlighted: true, icon: "node" },
      { label: "Solidity", highlighted: true, icon: "solidity" },
      { label: "C#", highlighted: true, icon: "csharp" },
    ],
  },
  {
    title: "Backend",
    badges: [
      { label: "Convex", highlighted: true, icon: "convex" },
      { label: "Prisma", highlighted: true, icon: "prisma" },
    ],
  },
  {
    title: "Databases",
    badges: [
      { label: "Convex", highlighted: true, icon: "convex" },
      { label: "MongoDB", highlighted: true, icon: "mongodb" },
      { label: "PostgreSQL", highlighted: true, icon: "postgresql" },
    ],
  },
  {
    title: "Blockchain",
    badges: [
      { label: "Viem", highlighted: true, icon: "viem" },
      { label: "Wagmi", highlighted: true, icon: "wagmi" },
      { label: "Foundry", highlighted: true },
      { label: "Hardhat", highlighted: true, icon: "hardhat" },
    ],
  },
  {
    title: "Game Development",
    badges: [{ label: "Unity", highlighted: true, icon: "unity" }],
  },
];
