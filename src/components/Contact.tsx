"use client";

import { useState, FormEvent } from "react";

const contactLinks = [
  {
    href: "http://linkedin.com/in/gentrit-uka-a06418231/",
    label: "LinkedIn",
    external: true,
  },
  { href: "tel:+38349448201", label: "+383 49 448 201", external: false },
  { href: "mailto:gentrit-uka@live.com", label: "gentrit-uka@live.com", external: false },
];

const formFields = [
  { id: "contact-name", label: "Name", type: "text", placeholder: "Your name", key: "name" },
  { id: "contact-email", label: "Email", type: "email", placeholder: "your@email.com", key: "email" },
] as const;

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setStatus("error");
        setErrorMessage(typeof data.error === "string" ? data.error : "Something went wrong. Please try again.");
        return;
      }
      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again.");
    }
  }

  return (
    <section id="contact" className="py-24 px-6 max-w-4xl mx-auto">
      <h2
        className="text-3xl font-bold mb-12 text-accent opacity-0 animate-fade-in-up"
        style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
      >
        Contact
      </h2>
      <div className="flex flex-col gap-12 lg:flex-row lg:gap-16 lg:items-start">
        <div
          className="flex flex-col gap-4 opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
        >
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="group flex items-center gap-3 px-5 py-4 rounded-xl bg-card/50 border border-white/5 hover:border-accent/30 hover:bg-card hover:shadow-[0_8px_30px_-8px_rgba(224,124,60,0.15)] transition-all duration-300"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent group-hover:bg-accent/20 transition-colors duration-300">
                {link.label === "LinkedIn" ? (
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                ) : link.href.startsWith("tel") ? (
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                ) : (
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                )}
              </span>
              <span className="text-[#b8b5b0] group-hover:text-accent transition-colors duration-300">
                {link.label}
              </span>
            </a>
          ))}
        </div>
        <div
          className="flex-1 min-w-0 max-w-md opacity-0 animate-scale-in"
          style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
        >
          <div className="form-card relative rounded-2xl p-6 sm:p-8 border border-white/5">
            <p className="text-[#9a9691] text-sm mb-6">
              Send a message and I&apos;ll get back to you.
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
              {formFields.map((field, i) => (
                <div
                  key={field.key}
                  className="input-glow rounded-xl border border-white/10 bg-surface/80 transition-all duration-300 focus-within:border-accent/50 opacity-0 animate-field-enter"
                  style={{
                    animationDelay: `${0.35 + i * 0.08}s`,
                    animationFillMode: "forwards",
                  }}
                >
                  <label
                    htmlFor={field.id}
                    className="block text-xs font-medium uppercase tracking-wider text-[#9a9691] mb-2 px-4 pt-3"
                  >
                    {field.label}
                  </label>
                  <input
                    id={field.id}
                    type={field.type}
                    value={field.key === "name" ? name : email}
                    onChange={(e) =>
                      field.key === "name" ? setName(e.target.value) : setEmail(e.target.value)
                    }
                    required
                    className="w-full px-4 pb-3 rounded-b-xl bg-transparent text-[#e8e6e3] placeholder-[#6b6762] focus:outline-none text-base transition-colors"
                    placeholder={field.placeholder}
                  />
                </div>
              ))}
              <div
                className="input-glow rounded-xl border border-white/10 bg-surface/80 transition-all duration-300 focus-within:border-accent/50 opacity-0 animate-field-enter"
                style={{
                  animationDelay: "0.51s",
                  animationFillMode: "forwards",
                }}
              >
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-medium uppercase tracking-wider text-[#9a9691] mb-2 px-4 pt-3"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={4}
                  className="w-full px-4 pb-3 rounded-b-xl bg-transparent text-[#e8e6e3] placeholder-[#6b6762] focus:outline-none transition-colors resize-y min-h-[110px] text-base"
                  placeholder="Your message"
                />
              </div>
              <div
                className="opacity-0 animate-field-enter"
                style={{
                  animationDelay: "0.59s",
                  animationFillMode: "forwards",
                }}
              >
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-accent text-white font-semibold hover:shadow-[0_0 32px -6px_rgba(224,124,60,0.45)] hover:-translate-y-1 active:translate-y-0 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-surface disabled:opacity-70 disabled:pointer-events-none disabled:translate-y-0"
                >
                  {status === "sending" ? "Sending…" : "Send message"}
                </button>
              </div>
              {status === "success" && (
                <p
                  className="text-accent font-medium animate-success-pop flex items-center gap-2 mt-4"
                  role="status"
                >
                  <svg className="h-5 w-5 shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Thanks for your message. I&apos;ll get back to you soon.
                </p>
              )}
              {status === "error" && (
                <p className="text-red-400 text-sm mt-4 flex items-center gap-2" role="alert">
                  <svg className="h-5 w-5 shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  {errorMessage}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
