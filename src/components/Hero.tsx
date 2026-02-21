"use client";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 pt-24 pb-16 max-w-4xl mx-auto overflow-hidden">
      <div className="hero-gradient absolute inset-0 pointer-events-none" />
      <div className="relative">
        <p
          className="text-accent font-mono text-sm mb-4 opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
        >
          Frontend Developer
        </p>
        <h1
          className="text-5xl md:text-6xl font-bold tracking-tight mb-4 opacity-0 animate-fade-in-up bg-clip-text text-[#e8e6e3]"
          style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
        >
          Gentrit Uka
        </h1>
        <p
          className="text-xl text-[#9a9691] mb-8 opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0.35s", animationFillMode: "forwards" }}
        >
          Pristina, Kosovo
        </p>
        <p
          className="text-lg text-[#b8b5b0] max-w-2xl leading-relaxed opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}
        >
          I lead frontend development, drive architectural decisions, and mentor
          teams. I build with TypeScript, React, Next.js, React Native, GraphQL,
          and modern tooling.
        </p>
        <div
          className="mt-12 flex gap-4 opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0.7s", animationFillMode: "forwards" }}
        >
          <a
            href="#experience"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-accent/10 text-accent border border-accent/20 font-medium hover:bg-accent/20 hover:border-accent/40 transition-all duration-300"
          >
            View experience
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-white/15 text-[#b8b5b0] font-medium hover:border-white/30 hover:text-[#e8e6e3] hover:bg-white/5 transition-all duration-300"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
