import Link from "next/link";

export const metadata = {
  title: "FAQ | Jacob Homanics",
  description: "Frequently asked questions about working with Jacob Homanics.",
};

// Draft answers based on what is already on the site. Edit freely.
const faqs = [
  {
    q: "What kinds of projects do you take on?",
    a: "Building an MVP from scratch, turning a vibe coded project into a real product, modernizing legacy products, and managing and maintaining existing products.",
  },
  {
    q: "What do you build?",
    a: "Websites, mobile applications, video games, VR/AR applications, tooling solutions, smart contracts and blockchain technologies.",
  },
  {
    q: "How do you use AI?",
    a: "I use the latest frameworks and AI tools throughout development to build faster and more securely, with every change reviewed before it ships.",
  },
  {
    q: "Where are you based, and do you work remotely?",
    a: "I'm based in Austin, TX and work both hybrid and remote.",
  },
  {
    q: "Can you take over a project someone else started?",
    a: "Yes. That includes projects built with AI tools that need to become reliable products, and existing products that need ongoing management and maintenance.",
  },
  {
    q: "How do we get started?",
    a: "Reach out through the contact page with a short description of what you need, and I'll reply by email or phone, whichever you choose.",
  },
];

export default function FAQ() {
  return (
    <main className="faq">
      <h1>Frequently asked questions</h1>
      <div className="faq-list">
        {faqs.map(item => (
          <details key={item.q}>
            <summary>{item.q}</summary>
            <p>{item.a}</p>
          </details>
        ))}
      </div>
      <Link href="/contact" className="faq-cta">
        Still have a question? Let's talk
      </Link>
    </main>
  );
}
