import Image from "next/image";
import Link from "next/link";
import jake from "../assets/images/jake.jpg";
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
        gap: 12,
        padding: "24px 16px",
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
        <span style={{ fontSize: 20, fontWeight: 600 }}>Jacob Homanics</span>
      </div>
      <h1 style={{ margin: 0, fontSize: 24, lineHeight: 1.25, maxWidth: 720 }}>
        Software Engineer Consultant for Businesses who want to build an MVP, turn a vibe coded project into a real
        product, modernize legacy products, or manage and maintain existing products.
      </h1>
      <p style={{ margin: 0, fontWeight: 700, maxWidth: 560 }}>
        Websites, Mobile Applications, Video Games, VR/AR applications, tools, smart contracts and blockchain
        technologies built fast with the latest frameworks and AI tools.
      </p>
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
