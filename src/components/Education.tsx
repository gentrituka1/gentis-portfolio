export default function Education() {
  return (
    <section id="education" className="py-24 px-6 max-w-4xl mx-auto">
      <h2
        className="text-3xl font-bold mb-12 text-accent opacity-0 animate-fade-in-up"
        style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
      >
        Education
      </h2>
      <div
        className="border border-white/5 rounded-xl p-6 bg-card/50 opacity-0 animate-card-enter hover:border-white/10 transition-colors duration-300"
        style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
      >
        <h3 className="text-xl font-semibold">
          University of Mitrovica &quot;Isa Boletini&quot;
        </h3>
        <p className="text-[#b8b5b0] mt-2">Bachelor of Computer Engineering</p>
      </div>
    </section>
  );
}
