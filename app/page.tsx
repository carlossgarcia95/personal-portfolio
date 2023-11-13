import About from "./components/about";
import Contact from "./components/contact";
import Hero from "./components/hero";
import Portfolio from "./components/portfolio";
import Skills from "./components/skills";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
    </main>
  );
}
