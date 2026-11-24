import Image from "next/image";
import Link from "next/link";
import jake from "../assets/images/jake.jpg";
import ProjectShowcase from "./ProjectShowcase";

export default function Home() {
  return (
    <main
      className="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        boxSizing: "border-box",
        textAlign: "center",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <Image
          src={jake}
          alt="Jacob Homanics"
          width={48}
          height={48}
          priority
          style={{ borderRadius: "50%", objectFit: "cover" }}
        />
        <div style={{ textAlign: "left" }}>
          <div style={{ fontSize: 20, fontWeight: 600, lineHeight: 1.2 }}>Jacob Homanics</div>
          <div style={{ fontSize: 14, color: "var(--text-muted)" }}>Austin, TX</div>
        </div>
      </div>
      <h1 style={{ margin: 0, fontSize: 24, lineHeight: 1.25, maxWidth: 720 }}>
        Software Engineer Consultant for Businesses who want to build an MVP, turn a vibe coded project into a real
        product, modernize legacy products, or manage and maintain existing products.
      </h1>
      <h2 style={{ margin: 0, fontSize: 16, fontWeight: 700, maxWidth: 560 }}>
        Websites, Mobile Applications, Video Games, VR/AR applications, tooling solutions, smart contracts and blockchain
        technologies built fast and securely with the latest frameworks and AI tools.
      </h2>
      <ProjectShowcase />
      <Link
        href="/contact"
        style={{
          padding: "10px 20px",
          background: "#2C3A78",
          border: "1px solid #2C3A78",
          borderRadius: 6,
          color: "#fff",
          fontWeight: 600,
          textDecoration: "none",
        }}
      >
        Let's talk
      </Link>
    </main>
  );
}
