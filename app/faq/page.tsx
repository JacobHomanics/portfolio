import type { Metadata } from "next";
import BrandIcon from "../BrandIcon";
import type { brandIcons } from "../brand-icons";

export const metadata: Metadata = {
  alternates: { canonical: "/faq" },
  // The title tag is inherited from the root layout, so every page shares it.
  // Keep under 160 characters.
  description:
    "Answers to common questions about hiring a software engineer consultant in Austin, TX to build an MVP, modernize legacy products, or maintain existing ones.",
};

type Tool = { name: string; icon: keyof typeof brandIcons; before?: string };
type Line = { label?: string; prefix?: string; tools: Tool[]; and?: boolean };

// 4 to 6 FAQs. Each question is an h2 phrased the way a client would ask it, with the answer
// directly below: the direct answer first, one idea per line, plain language. Tool names are
// always written as text; the icons are decorative.
const faqs: { question: string; answer?: string; lines?: Line[]; after?: string }[] = [
  {
    question: "What kind of software do you build?",
    lines: [
      {
        tools: [
          { name: "Websites", icon: "web" },
          { name: "Mobile Applications", icon: "mobile" },
          { name: "Video Games", icon: "gamepad" },
          { name: "VR/AR applications", icon: "vr" },
          { name: "tooling solutions", icon: "tooling" },
          { name: "smart contracts", icon: "contract" },
          { name: "blockchain technologies", icon: "blockchain", before: " and " },
        ],
      },
    ],
  },
  {
    question: "How do you charge for your work?",
    lines: [
      {
        prefix: "I'm open to ",
        and: true,
        tools: [
          { name: "hourly rates", icon: "clock" },
          { name: "task-based pricing", icon: "task" },
          { name: "project-based pricing", icon: "project" },
        ],
      },
    ],
    after: "Tell me about your project and we'll choose the one that fits.",
  },
  {
    question: "What AI tools are you most familiar with?",
    lines: [
      {
        and: true,
        tools: [
          { name: "Claude", icon: "claude" },
          { name: "ChatGPT", icon: "openai" },
          { name: "Grok", icon: "grok" },
          { name: "Gemini", icon: "gemini" },
        ],
      },
    ],
  },
  {
    question: "What languages are you most familiar with?",
    lines: [
      {
        tools: [
          { name: "TypeScript", icon: "typescript" },
          { name: "JavaScript", icon: "javascript" },
          { name: "Node", icon: "node" },
          { name: "C#", icon: "csharp" },
          { name: "Solidity", icon: "solidity" },
        ],
      },
    ],
  },
  {
    question: "What frameworks are you most familiar with?",
    lines: [
      {
        tools: [
          { name: "React", icon: "react" },
          { name: "React Native", icon: "react" },
          { name: "Vite", icon: "vite" },
          { name: "Next.js", icon: "nextjs" },
          { name: "Expo", icon: "expo" },
        ],
      },
    ],
  },
  {
    question: "What backend technologies are you familiar with?",
    // One idea per line.
    lines: [
      {
        label: "Backend and databases",
        tools: [
          { name: "Convex", icon: "convex" },
          { name: "Supabase", icon: "supabase" },
          { name: "Prisma", icon: "prisma" },
          { name: "MongoDB", icon: "mongodb" },
          { name: "PostgreSQL", icon: "postgresql" },
        ],
      },
      {
        label: "Hosting",
        tools: [
          { name: "Vercel", icon: "vercel" },
          { name: "Cloudflare", icon: "cloudflare" },
        ],
      },
    ],
  },
];

function ToolLine({ line }: { line: Line }) {
  const last = line.tools.length - 1;
  return (
    <p style={{ margin: "0 0 4px", lineHeight: 1.9 }}>
      {line.label ? `${line.label}: ` : null}
      {line.prefix}
      {line.tools.map((tool, i) => (
        <span key={tool.name}>
          {tool.before ?? (i === 0 ? "" : ", ")}
          {line.and && i === last ? "and " : null}
          <span className="tool">
            <BrandIcon name={tool.icon} />
            {tool.name}
          </span>
        </span>
      ))}
      .
    </p>
  );
}

export default function FAQ() {
  return (
    <main style={{ maxWidth: 680, margin: "0 auto", padding: "32px 16px" }}>
      <h1 style={{ margin: "0 0 24px", fontSize: 28, lineHeight: 1.2 }}>
        Frequently asked questions about working with a software engineer consultant
      </h1>
      {faqs.map(item => (
        <section key={item.question} style={{ marginBottom: 20 }}>
          <h2 style={{ margin: "0 0 8px", fontSize: 20 }}>{item.question}</h2>
          {item.answer ? <p style={{ margin: 0, lineHeight: 1.5 }}>{item.answer}</p> : null}
          {item.lines?.map((line, i) => (
            <ToolLine key={i} line={line} />
          ))}
          {item.after ? <p style={{ margin: 0, lineHeight: 1.5 }}>{item.after}</p> : null}
        </section>
      ))}
    </main>
  );
}
