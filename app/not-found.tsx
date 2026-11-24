import Link from "next/link";

export default function NotFound() {
  return (
    <main
      id="main"
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 12,
        padding: 16,
        textAlign: "center",
      }}
    >
      <h1 style={{ margin: 0, fontSize: 32 }}>Page not found</h1>
      <p style={{ margin: 0, color: "var(--text-muted)" }}>The page you're looking for doesn't exist or has moved.</p>
      <Link
        href="/"
        style={{
          marginTop: 8,
          padding: "10px 20px",
          background: "#2C3A78",
          borderRadius: 6,
          color: "#fff",
          fontWeight: 600,
          textDecoration: "none",
        }}
      >
        Back to home
      </Link>
    </main>
  );
}
