import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import jake from "../assets/images/jake.jpg";
import ProjectShowcase from "./ProjectShowcase";
import { projects } from "./projects-data";

export const metadata: Metadata = { alternates: { canonical: "/" } };

export default function Home() {
  return (
    <main
      id="main"
      className="home"
      style={{
        flex: 1,
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
        Software Engineer Consultant to Build MVPs, Fix and Make Vibe Coded Apps Production Ready, Modernize Legacy
        Software, and Maintain Products
      </h1>
      <h2 style={{ margin: 0, fontSize: 16, fontWeight: 700, maxWidth: 560 }}>
        <span style={{ display: "block" }}>
          I build websites, mobile apps, video games, VR/AR apps, tooling, smart contracts and blockchain products.
        </span>
        <span style={{ display: "block" }}>
          They ship fast and are secure and scalable, built with modern frameworks and AI tools.
        </span>
      </h2>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Projects by Jacob Homanics",
            itemListElement: projects.map((project, i) => ({
              "@type": "ListItem",
              position: i + 1,
              item: { "@type": "CreativeWork", name: project.name, description: project.description, url: project.url },
            })),
          }),
        }}
      />
      <ProjectShowcase />
      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
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
          Let&apos;s talk
        </Link>
        <Link href="/faq" style={{ fontWeight: 600 }}>
          Read the FAQ
        </Link>
      </div>
    </main>
  );
}
