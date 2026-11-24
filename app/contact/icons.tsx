import type { ReactNode } from "react";

// Simple inline SVG icons (24x24), so no icon library is needed.
export const contactIcons: Record<string, { color: string; svg: ReactNode }> = {
  LinkedIn: {
    color: "#0A66C2",
    svg: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="3" fill="currentColor" />
        <rect x="6.2" y="10" width="2.6" height="7.8" fill="#fff" />
        <circle cx="7.5" cy="7" r="1.5" fill="#fff" />
        <path d="M11 10h2.5v1.1c.5-.8 1.4-1.3 2.6-1.3 2.1 0 2.9 1.3 2.9 3.4v4.6h-2.6v-4.1c0-1-.3-1.6-1.2-1.6-1 0-1.6.7-1.6 1.7v4H11z" fill="#fff" />
      </>
    ),
  },
  "X (Twitter)": {
    color: "#000000",
    svg: <path d="M4 4l16 16M20 4L4 20" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" fill="none" />,
  },
  Telegram: {
    color: "#1B8FC9",
    svg: <path d="M21 3L2.5 10.2l5.6 2.1L9.5 19l3.2-3.6 4.6 3.4zM8.1 12.3L17.5 6.5l-7.4 7.6" fill="currentColor" />,
  },
  Email: {
    color: "#EA4335",
    svg: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M3.5 6.5L12 13l8.5-6.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      </>
    ),
  },
  Text: {
    color: "#34C759",
    svg: <path d="M4 4h16a1 1 0 011 1v11a1 1 0 01-1 1h-9l-5 4v-4H4a1 1 0 01-1-1V5a1 1 0 011-1z" fill="currentColor" />,
  },
};

export function ContactIcon({ name }: { name: string }) {
  const icon = contactIcons[name];
  if (!icon) return null;
  return (
    <svg viewBox="0 0 24 24" width={20} height={20} aria-hidden="true" style={{ color: icon.color, flexShrink: 0 }}>
      {icon.svg}
    </svg>
  );
}
