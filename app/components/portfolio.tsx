"use client";

import { motion } from "framer-motion";
import ProjectsCarousel from "./projects-carousel";
import { titillium_web } from "./ui/fonts";

const Portfolio = () => {
  return (
    <section id="portfolio" className="bg-zinc-900 dark:bg-blue-950">
      <div className="py-12 flex flex-col justify-center text-center gap-3 md:gap-6">
        <h2
          className={`${titillium_web.className} !text-slate-50 section-heading `}
        >
          Portfolio
        </h2>
        <motion.p
          className="text-slate-50"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Have a peak at my work, coded from scratch.
        </motion.p>
        <motion.hr
          className="self-center mt-4 mb-5"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        />
        <ProjectsCarousel />
      </div>
    </section>
  );
};

export default Portfolio;
