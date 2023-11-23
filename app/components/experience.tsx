"use client";

import { experiencesData } from "@/lib/data";
import { motion } from "framer-motion";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import TimelineElement from "./timeline-element";
import { titillium_web } from "./ui/fonts";

const Experience = () => {
  return (
    <section id="experience">
      <div className="container py-8 flex flex-col justify-center text-center gap-3 md:gap-6">
        <h2 className={`${titillium_web.className} section-heading`}>
          Experience
        </h2>
        <p>Working with technology teams to deliver value.</p>
        <motion.hr
          className="self-center mt-4"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        />

        <VerticalTimeline lineColor="#9ca3af" className="">
          {experiencesData.map((item, index) => {
            return <TimelineElement key={index} item={item} />;
          })}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experience;
