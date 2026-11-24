import Link from "next/link";

export default function Home() {
  return (
    <main style={{ minHeight: "100vh", display: "grid", placeItems: "center", alignContent: "center", gap: 24 }}>
      <h1 style={{ margin: 0 }}>Hello, I'm Jacob.</h1>
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
