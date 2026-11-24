"use client";

import { useRef, useState, type FormEvent, type ReactNode } from "react";

// Styled after the card form on the original site: a bordered card with a title, labeled fields,
// an error box that offers the direct email as a fallback, and a "sent" card with "Send another".

type Status = "idle" | "sending" | "sent" | "error";
type Method = "email" | "phone";

const FALLBACK_EMAIL = "homanicsjake@gmail.com";
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const card = {
  width: "100%",
  boxSizing: "border-box",
  padding: 20,
  display: "grid",
  gap: 14,
  borderRadius: 16,
  border: "1px solid var(--border)",
  background: "var(--surface)",
} as const;

const input = {
  display: "block",
  width: "100%",
  boxSizing: "border-box",
  padding: "10px 12px",
  borderRadius: 10,
  background: "var(--background)",
  fontSize: 16,
} as const;

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label style={{ display: "grid", gap: 6, fontSize: 13, fontWeight: 600, color: "var(--text)" }}>
      {label}
      {children}
    </label>
  );
}

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [method, setMethod] = useState<Method>("email");
  const [problem, setProblem] = useState<string | null>(null);
  // When the form appeared. Real people take more than a couple of seconds to fill it in.
  const openedAt = useRef(Date.now());

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const contact = String(data.get("contact") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    // Honeypot: real people never fill this in. Act as if it worked, and send nothing.
    if (data.get("botcheck")) {
      setStatus("sent");
      return;
    }
    if (Date.now() - openedAt.current < 2000) {
      setStatus("error");
      setProblem("That was quick! Please check your message and send it again.");
      return;
    }
    const invalid = !name
      ? "Please add your name."
      : method === "email" && !EMAIL_PATTERN.test(contact)
        ? "Please add a valid email address so I can reply."
        : method === "phone" && contact.replace(/\D/g, "").length < 7
          ? "Please add a phone number with at least 7 digits so I can reach you."
          : message.length < 10
            ? "Please write a short message (at least 10 characters)."
            : null;
    if (invalid) {
      setStatus("error");
      setProblem(invalid);
      return;
    }

    const body = new FormData();
    body.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "");
    body.append("subject", `New message from ${name} via jacobhomanics.com`);
    body.append("from_name", "jacobhomanics.com");
    body.append("name", name);
    body.append("preferred_contact_method", method === "email" ? "Email" : "Phone number");
    body.append(method === "email" ? "email" : "phone", contact);
    body.append("message", message);

    setStatus("sending");
    setProblem(null);
    try {
      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body });
      const json = await res.json().catch(() => null);
      if (res.ok && json?.success) {
        form.reset();
        setStatus("sent");
      } else {
        setStatus("error");
        setProblem(json?.message || "Something went wrong sending your message.");
      }
    } catch {
      setStatus("error");
      setProblem("I couldn't reach the mail service. Check your connection and try again.");
    }
  }

  if (status === "sent") {
    return (
      <div style={card} role="status">
        <h2 style={{ margin: 0, fontSize: 18 }}>Message sent. Thank you!</h2>
        <p style={{ margin: 0, fontSize: 14, lineHeight: 1.5, color: "var(--text-muted)" }}>
          I'll reply by {method === "email" ? "email" : "phone"} as soon as I can.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          style={{ justifySelf: "start", padding: "10px 16px", borderRadius: 999, background: "none", color: "var(--link)", borderColor: "var(--link)", fontWeight: 600, fontSize: 14 }}
        >
          Send another
        </button>
      </div>
    );
  }

  const sending = status === "sending";

  return (
    <form onSubmit={onSubmit} noValidate style={card}>
      <h2 style={{ margin: 0, fontSize: 18 }}>How can I send you a message?</h2>
      <Field label="Name">
        <input name="name" autoComplete="name" placeholder="Your name" disabled={sending} style={input} />
      </Field>
      <div style={{ display: "grid", gap: 8 }}>
        <div role="radiogroup" aria-label="How should I reach you?" style={{ display: "flex", gap: 8 }}>
          {(["email", "phone"] as const).map(m => (
            <label key={m} className="method-pill">
              <input
                type="radio"
                name="method"
                value={m}
                checked={method === m}
                onChange={() => {
                  setMethod(m);
                  setProblem(null);
                  setStatus("idle");
                }}
              />
              {m === "email" ? "Email" : "Phone number"}
            </label>
          ))}
        </div>
        <Field label={method === "email" ? "Email" : "Phone number"}>
          <input
            key={method}
            name="contact"
            type={method === "email" ? "email" : "tel"}
            autoComplete={method === "email" ? "email" : "tel"}
            placeholder={method === "email" ? "you@example.com" : "(555) 123-4567"}
            disabled={sending}
            style={input}
          />
        </Field>
      </div>
      <Field label="Message">
        <textarea name="message" rows={5} placeholder="How can I help?" disabled={sending} style={{ ...input, minHeight: 110, resize: "vertical" }} />
      </Field>
      <input type="text" name="botcheck" tabIndex={-1} autoComplete="off" aria-hidden style={{ position: "absolute", left: -9999, width: 1, height: 1, opacity: 0 }} />
      {status === "error" && problem && (
        <div
          role="alert"
          style={{ padding: 12, display: "grid", gap: 4, borderRadius: 10, border: "1px solid #B42318", background: "#FEF3F2", color: "#7A271A", fontSize: 14, lineHeight: "20px" }}
        >
          <span>{problem}</span>
          <span>
            You can also email me directly at{" "}
            <a href={`mailto:${FALLBACK_EMAIL}`} style={{ color: "#7A271A", fontWeight: 700 }}>
              {FALLBACK_EMAIL}
            </a>
            .
          </span>
        </div>
      )}
      <button type="submit" disabled={sending} style={{ padding: "14px 0", borderRadius: 12, fontSize: 16, fontWeight: 700 }}>
        {sending ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
