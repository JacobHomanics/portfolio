import type { Metadata } from "next";
import "./globals.css";
import TopNav from "./TopNav";

const SITE_URL = "https://jacobhomanics.com";
// Pattern: what I do | who I serve | city. Keep under 60 characters.
const TITLE = "Software Engineer Consultant for Businesses | Austin, TX";
// Keep under 160 characters.
const DESCRIPTION =
  "Software engineer consultant in Austin, TX. I build MVPs, turn vibe-coded projects into real products, and modernize or maintain existing ones.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Software Engineer | Build, Fix, Scale & Maintain Your App",
  description: DESCRIPTION,
  // The favicon (app/icon.svg) and Apple touch icon (app/apple-icon.png) are picked up automatically.
  openGraph: {
    type: "website",
    siteName: "Jacob Homanics",
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Jacob Homanics, software engineer consultant" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og-image.png"],
  },
};

// Structured data so search engines can associate the logo with the site.
const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Jacob Homanics",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  image: `${SITE_URL}/og-image.png`,
  description: DESCRIPTION,
  address: { "@type": "PostalAddress", addressLocality: "Austin", addressRegion: "TX", addressCountry: "US" },
  sameAs: ["https://www.linkedin.com/in/jacobhomanics", "https://x.com/jacobhomanics", "https://t.me/jacobhomanics"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "system-ui, sans-serif" }}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <TopNav />
        {children}
      </body>
    </html>
  );
}
