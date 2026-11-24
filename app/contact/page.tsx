import ContactForm from "./ContactForm";
import { ContactIcon } from "./icons";
import { contactLinks } from "./links";

const linkStyle = {
  display: "flex",
  alignItems: "center",
  gap: 8,
  padding: "10px 14px",
  border: "1px solid #ccc",
  borderRadius: 6,
  color: "inherit",
  textDecoration: "none",
} as const;

export default function Contact() {
  return (
    <main style={{ maxWidth: 480, margin: "0 auto", padding: "48px 24px" }}>
      <h1>Contact</h1>
      <ContactForm />
      <div style={{ display: "flex", alignItems: "center", gap: 12, margin: "32px 0", color: "#666" }}>
        <hr style={{ flex: 1, border: 0, borderTop: "1px solid #ccc" }} />
        <span>or</span>
        <hr style={{ flex: 1, border: 0, borderTop: "1px solid #ccc" }} />
      </div>
      <h2>Reach me directly</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
        {contactLinks.map(link => {
          const external = link.url.startsWith("https://");
          return (
            <a
              key={link.label}
              href={link.url}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              style={{ ...linkStyle, ...(link.label === "Email" ? { flexBasis: "100%" } : null) }}
            >
              <ContactIcon name={link.label} />
              {link.label}
            </a>
          );
        })}
      </div>
    </main>
  );
}
