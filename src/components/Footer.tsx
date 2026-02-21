export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 mt-24">
      <div className="max-w-4xl mx-auto px-6 py-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-sm text-[#9a9691]">
          © {year} Gentrit Uka. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a
            href="https://www.linkedin.com/in/gentrit-uka-a06418231/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[#9a9691] hover:text-accent transition-colors"
          >
            LinkedIn
          </a>
          <a href="mailto:gentrit-uka@live.com" className="text-sm text-[#9a9691] hover:text-accent transition-colors">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
