import About from "./components/about";
import Contact from "./components/contact";
import Experience from "./components/experience";
import Hero from "./components/hero";
import Portfolio from "./components/portfolio";
import Skills from "./components/skills";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Portfolio />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
