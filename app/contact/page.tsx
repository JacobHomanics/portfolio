import ContactForm from "./ContactForm";
import { ContactIcon } from "./icons";
import { contactLinks } from "./links";

export default function Contact() {
  return (
    <main className="contact">
      <h1 className="contact-title">Reach out to me.</h1>
      <div className="contact-form">
        <ContactForm />
      </div>
      <section className="contact-direct" aria-labelledby="reach-me">
        <div className="contact-or" aria-hidden="true">
          <hr />
          <span>or</span>
          <hr />
        </div>
        <h2 id="reach-me">Reach me directly</h2>
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
