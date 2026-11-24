import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  // Pattern: what I do | who I serve | city. Keep under 60 characters.
  title: "Software Engineer Consultant for Businesses | Austin, TX",
  // Keep under 160 characters.
  description:
    "Software engineer consultant in Austin, TX. I build MVPs, turn vibe-coded projects into real products, and modernize or maintain existing ones.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "system-ui, sans-serif" }}>{children}</body>
    </html>
  );
}
