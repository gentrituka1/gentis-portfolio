const items = [
  { name: "React – The Complete Guide", org: "Udemy", year: "2023" },
  { name: "Software Developer", org: "Hoxton Academy – United Kingdom", year: "2022" },
  { name: "IT Essentials and Soft Skills", org: "Prishtina REA", year: "2022" },
  { name: "Web Developer", org: "Dreambig", year: "2021" },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6 max-w-4xl mx-auto">
      <h2
        className="text-3xl font-bold mb-12 text-accent opacity-0 animate-fade-in-up"
        style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
      >
        Certifications & Training
      </h2>
      <ul className="space-y-4">
        {items.map((item, index) => (
          <li
            key={item.name + item.org}
            className="border border-white/5 rounded-lg px-6 py-4 bg-card/50 flex flex-wrap justify-between items-center gap-4 opacity-0 animate-card-enter hover:border-white/10 hover:shadow-[0_4px_20px_-8px_rgba(0,0,0,0.3)] transition-all duration-300"
            style={{
              animationDelay: `${0.15 + index * 0.08}s`,
              animationFillMode: "forwards",
            }}
          >
            <div>
              <p className="font-medium">{item.name}</p>
              <p className="text-sm text-[#9a9691]">{item.org}</p>
            </div>
            <span className="text-accent text-sm font-mono">{item.year}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
