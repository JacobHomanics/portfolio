"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "sending" | "success" | "error";
type Method = "email" | "phone";

const fieldStyle = { display: "block", width: "100%", padding: 8, marginTop: 4, boxSizing: "border-box" } as const;

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [method, setMethod] = useState<Method>("email");
  const [contactError, setContactError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const input = new FormData(form);
    // Honeypot: real users never fill this in. Pretend success for bots.
    if (input.get("botcheck")) {
      setStatus("success");
      return;
    }

    const contact = String(input.get("contact") ?? "").trim();
    if (method === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact)) {
      setContactError("Please enter a valid email address.");
      return;
    }
    if (method === "phone" && contact.replace(/\D/g, "").length < 7) {
      setContactError("Please enter a phone number with at least 7 digits.");
      return;
    }
    setContactError("");

    const data = new FormData();
    data.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "");
    data.append("subject", "New message from jacobhomanics.com");
    data.append("name", String(input.get("name") ?? ""));
    data.append("preferred_contact_method", method === "email" ? "Email" : "Phone number");
    data.append(method === "email" ? "email" : "phone", contact);
    data.append("message", String(input.get("message") ?? ""));

    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: data });
      const json = await res.json();
      if (json.success) {
        form.reset();
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} noValidate style={{ display: "grid", gap: 16 }}>
      <label>
        Name
        <input name="name" required style={fieldStyle} />
      </label>
      <div>
        <div role="tablist" aria-label="How should I reach you?" style={{ display: "flex", gap: 8 }}>
          {(["email", "phone"] as const).map(m => (
            <button
              key={m}
              type="button"
              role="tab"
              aria-selected={method === m}
              onClick={() => {
                setMethod(m);
                setContactError("");
              }}
              style={{ padding: "6px 12px", fontWeight: method === m ? 700 : 400 }}
            >
              {m === "email" ? "Email" : "Phone number"}
            </button>
          ))}
        </div>
        <label>
          <span style={{ display: "block", marginTop: 8 }}>{method === "email" ? "Email" : "Phone number"}</span>
          <input
            key={method}
            name="contact"
            type={method === "email" ? "email" : "tel"}
            required
            style={fieldStyle}
          />
        </label>
        {contactError && <p role="alert" style={{ margin: "4px 0 0" }}>{contactError}</p>}
      </div>
      <label>
        Message
        <textarea name="message" rows={6} required style={fieldStyle} />
      </label>
      <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" style={{ display: "none" }} />
      <button type="submit" disabled={status === "sending"} style={{ padding: 10 }}>
        {status === "sending" ? "Sending..." : "Send"}
      </button>
      {status === "success" && (
        <p role="status">Thanks! Your message was sent. I'll reply by {method === "email" ? "email" : "phone"}.</p>
      )}
      {status === "error" && <p role="alert">Something went wrong. Please try again.</p>}
    </form>
  );
}
