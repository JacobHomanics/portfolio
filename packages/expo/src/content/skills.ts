type Badge = { label: string; highlighted: boolean };

export const skillSections: { title: string; badges: Badge[] }[] = [
  {
    title: "AI Tools",
    badges: [
      { label: "Claude Desktop", highlighted: true },
      { label: "Codex", highlighted: true },
      { label: "Cursor", highlighted: true },
      { label: "Copilot", highlighted: false },
    ],
  },
  {
    title: "AI Models",
    badges: [
      { label: "Claude", highlighted: true },
      { label: "ChatGPT", highlighted: true },
      { label: "Grok", highlighted: true },
      { label: "Gemini", highlighted: false },
      { label: "Llama", highlighted: false },
      { label: "Perplexity", highlighted: false },
    ],
  },
  {
    title: "Web Development",
    badges: [
      { label: "React", highlighted: true },
      { label: "Vite", highlighted: true },
      { label: "Next.js", highlighted: true },
    ],
  },
  {
    title: "Mobile Application Development",
    badges: [
      { label: "Expo", highlighted: true },
      { label: "React Native", highlighted: true },
    ],
  },
  {
    title: "Languages",
    badges: [
      { label: "TypeScript", highlighted: true },
      { label: "JavaScript", highlighted: true },
      { label: "Node", highlighted: true },
      { label: "Solidity", highlighted: true },
      { label: "C#", highlighted: true },
    ],
  },
  {
    title: "Backend",
    badges: [
      { label: "Convex", highlighted: true },
      { label: "Prisma", highlighted: true },
    ],
  },
  {
    title: "Databases",
    badges: [
      { label: "Convex", highlighted: true },
      { label: "MongoDB", highlighted: true },
      { label: "PostgreSQL", highlighted: true },
    ],
  },
  {
    title: "Blockchain",
    badges: [
      { label: "Viem", highlighted: true },
      { label: "Wagmi", highlighted: true },
      { label: "Foundry", highlighted: true },
      { label: "Hardhat", highlighted: true },
    ],
  },
  {
    title: "Game Development",
    badges: [{ label: "Unity", highlighted: true }],
  },
];
