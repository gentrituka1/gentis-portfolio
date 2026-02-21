import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:absolute focus:top-4 focus:left-6 focus:z-[100] focus:px-4 focus:py-2 focus:bg-accent focus:text-white focus:rounded-lg focus:w-auto focus:h-auto focus:m-0 focus:[clip:auto]"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Experience />
        <Education />
        <Certifications />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
