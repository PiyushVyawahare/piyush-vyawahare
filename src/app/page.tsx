import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import EducationCerts from "@/components/EducationCerts";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <EducationCerts />
      <Contact />
    </main>
  );
}
