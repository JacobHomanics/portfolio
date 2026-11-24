import type { Metadata } from "next";
import ContactForm from "./ContactForm";
import { ContactIcon } from "./icons";
import { contactLinks } from "./links";

export const metadata: Metadata = {
  alternates: { canonical: "/contact" },
  // Keep under 160 characters.
  description:
    "Contact Jacob Homanics, a software engineer consultant in Austin, TX. Send a message by email or phone, or reach out on LinkedIn, X, Telegram or text.",
};

export default function Contact() {
  return (
    <main className="contact">
      {/* The visible headline keeps the original wording. This heading carries the descriptive version
          for screen readers and search engines. */}
      <h1 className="sr-only">Contact Jacob Homanics, software engineer consultant in Austin, TX</h1>
      <div className="contact-title" aria-hidden="true">
        Let's create something exceptional together.
      </div>
      <div className="contact-form">
        <ContactForm />
      </div>
      <section className="contact-direct" aria-labelledby="reach-me">
        <div className="contact-or" aria-hidden="true">
          <hr />
          <span>or</span>
          <hr />
        </div>
        <h2 id="reach-me" className="sr-only">
          How else can I reach you?
        </h2>
        <div className="contact-heading" aria-hidden="true">
          Reach me directly
        </div>
        <div className="contact-links">
          {contactLinks.map(link => {
            const external = link.url.startsWith("https://");
            return (
              <a
                key={link.label}
                href={link.url}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className={link.label === "Email" ? "contact-link contact-link-wide" : "contact-link"}
              >
                <ContactIcon name={link.label} />
                {link.label}
              </a>
            );
          })}
        </div>
      </section>
    </main>
  );
}
