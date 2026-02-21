"use client";

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const navLinks = [
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) return;
    const close = () => setOpen(false);
    document.body.style.overflow = "hidden";
    const handleEscape = (e: KeyboardEvent) => e.key === "Escape" && close();
    window.addEventListener("resize", close);
    window.addEventListener("keydown", handleEscape);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("resize", close);
      window.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (menuButtonRef.current?.contains(e.target as Node)) return;
    setOpen(false);
  };

  const overlay = open && mounted && typeof document !== "undefined" && createPortal(
    <div
      className="sm:hidden fixed inset-0 z-[9999] bg-[#0c0c0e]/90"
      aria-hidden
      onClick={handleOverlayClick}
    >
      <div
        className="fixed left-0 right-0 top-[57px] border-t border-white/5 flex flex-col gap-1 p-6 bg-[#1a1a1d]"
        onClick={(e) => e.stopPropagation()}
        onPointerDown={(e) => e.stopPropagation()}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-lg py-3 text-[#b8b5b0] hover:text-accent transition-colors"
            onClick={() => setOpen(false)}
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>,
    document.body
  );

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-surface/90 backdrop-blur-md">
        <nav className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-lg font-semibold text-accent" onClick={() => setOpen(false)}>
            GU
          </a>
          <div className="hidden sm:flex flex-wrap gap-4 sm:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[#9a9691] hover:text-[#e8e6e3] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setOpen(!open)}
            className="sm:hidden flex flex-col gap-1.5 w-10 h-10 justify-center items-center rounded-lg border border-white/10 hover:border-white/20 transition-colors"
            aria-expanded={open}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-5 h-0.5 bg-[#e8e6e3] transition-transform origin-center ${open ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block w-5 h-0.5 bg-[#e8e6e3] transition-transform origin-center ${open ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </nav>
      </header>
      {overlay}
    </>
  );
}
