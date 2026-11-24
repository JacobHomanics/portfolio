import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/faq" },
  // The title tag is inherited from the root layout, so every page shares it.
  // Keep under 160 characters.
  description:
    "Answers to common questions about hiring a software engineer consultant in Austin, TX to build an MVP, modernize legacy products, or maintain existing ones.",
};

// 4 to 6 FAQs. Each question is an h2 phrased the way a client would ask it, with the answer
// directly below: the direct answer first, one idea per line, plain language.
const faqs = [
  {
    question: "What kind of software do you build?",
    answer:
      "Websites, Mobile Applications, Video Games, VR/AR applications, tooling solutions, smart contracts and blockchain technologies.",
  },
  {
    question: "How do you charge for your work?",
    answer:
      "I'm open to hourly rates, task-based pricing, and project-based pricing. Tell me about your project and we'll choose the one that fits.",
  },
  {
    question: "What AI tools are you most familiar with?",
    answer: "Claude, ChatGPT, Grok, and Gemini.",
  },
  {
    question: "What languages are you most familiar with?",
    answer: "TypeScript, JavaScript, Node, C#, Solidity.",
  },
  {
    question: "What frameworks are you most familiar with?",
    answer: "React, React Native, Vite, Next.js, Expo.",
  },
  {
    question: "What backend technologies are you familiar with?",
    // One idea per line.
    answer: [
      "Backend: Convex, Supabase, Prisma.",
      "Databases: Convex, Supabase, MongoDB, PostgreSQL.",
      "Hosting: Vercel, Cloudflare.",
    ],
  },
];

export default function FAQ() {
  return (
    <main style={{ maxWidth: 680, margin: "0 auto", padding: "32px 16px" }}>
      <h1 style={{ margin: "0 0 24px", fontSize: 28, lineHeight: 1.2 }}>
        Frequently asked questions about working with a software engineer consultant
      </h1>
      {faqs.map(item => (
        <section key={item.question} style={{ marginBottom: 20 }}>
          <h2 style={{ margin: "0 0 8px", fontSize: 20 }}>{item.question}</h2>
          {(Array.isArray(item.answer) ? item.answer : [item.answer]).map(line => (
            <p key={line} style={{ margin: 0, lineHeight: 1.5 }}>
              {line}
            </p>
          ))}
        </section>
      ))}
    </main>
  );
}
