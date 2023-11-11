import Image from "next/image";
import Hero from "./components/hero";
import About from "./components/about";
import Skills from "./components/skills";
import Portfolio from "./components/portfolio";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Portfolio />
    </main>
  );
}
