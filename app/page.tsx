import Link from "next/link";
import ProjectShowcase from "./ProjectShowcase";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 16,
        padding: "24px 16px",
        boxSizing: "border-box",
        textAlign: "center",
      }}
    >
      <h1 style={{ margin: 0, fontSize: 24, lineHeight: 1.25, maxWidth: 720 }}>
        Software Engineer Consultant for Businesses who want to build an MVP, turn a vibe coded project into a real
        product, modernize legacy products, or manage and maintain existing products.
      </h1>
      <p style={{ margin: 0, fontWeight: 700, maxWidth: 560 }}>
        I partner with you to shape the product, then build it on reliable infrastructure with a clean user experience.
      </p>
      <ProjectShowcase />
      <p style={{ margin: 0, maxWidth: 560 }}>Software built fast with the latest frameworks and AI tools.</p>
      <Link
        href="/contact"
        style={{
          padding: "10px 20px",
          border: "1px solid currentColor",
          borderRadius: 6,
          color: "inherit",
          textDecoration: "none",
        }}
      >
        Let's talk
      </Link>
    </main>
  );
}
