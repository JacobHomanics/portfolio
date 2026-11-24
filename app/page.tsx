import Link from "next/link";
import ProjectShowcase from "./ProjectShowcase";

export default function Home() {
  return (
    <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 24, padding: "24px 0", boxSizing: "border-box" }}>
      <h1 style={{ margin: 0 }}>Hello, I'm Jacob.</h1>
      <ProjectShowcase />
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
