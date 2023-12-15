"use client";

import { experiencesData } from "@/lib/data";
import { motion } from "framer-motion";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import TimelineElement from "./timeline-element";
import { titillium_web } from "./ui/fonts";

const Experience = () => {
  return (
    <section id="experience" className="bg-blue-950 dark:bg-gradient-to-b from-blue-950 to-slate-950 dark:bg-slate-950">
      <div className="container py-8 flex flex-col justify-center text-center gap-3 md:gap-6">
        <h2 className={`${titillium_web.className} section-heading !text-slate-50`}>
          Experience
        </h2>
        <p className="text-slate-50">Working with technology teams to deliver value.</p>
        <motion.hr
          className="self-center mt-4"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        />

        <VerticalTimeline lineColor="#9ca3af" className="text-slate-50">
          {experiencesData.map((item, index) => {
            return <TimelineElement key={index} item={item} />;
          })}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experience;
