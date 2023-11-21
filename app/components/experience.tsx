"use client";

import { experiencesData } from "@/lib/data";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useTheme } from "../context/theme-context";
import { titillium_web } from "./ui/fonts";

const Experience = () => {
  const { theme } = useTheme();
  return (
    <section id="experience">
      <div className="container py-8 flex flex-col justify-center text-center gap-3 md:gap-6">
        <h2 className={`${titillium_web.className} section-heading`}>
          Experience
        </h2>
        <p>Working with technology teams to deliver value.</p>
        <hr className="self-center mt-4" />

        <VerticalTimeline lineColor="#9ca3af">
          {experiencesData.map((item, index) => (
            <React.Fragment key={index}>
              <VerticalTimelineElement
                visible={true}
                contentStyle={{
                  background: theme === "light" ? "#ffffff" : "#1e293b",
                  boxShadow: "none",
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  textAlign: "left",
                  padding: "1.3rem 2rem",
                }}
                contentArrowStyle={{
                  borderRight:
                    theme === "light"
                      ? "0.4rem solid #9ca3af"
                      : "0.4rem solid rgba(255, 255, 255, 0.5)",
                }}
                date={item.date}
                icon={item.icon}
                iconStyle={{
                  background: "#ffffff",
                  fontSize: "1.5rem",
                  color: "black",
                }}
              >
                <h3 className="font-semibold capitalize">{item.title}</h3>
                <p className="!font-normal !mt-0">{item.company}</p>
                <p className="!font-normal !mt-0">{item.location}</p>
                <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                  {item.description}
                </p>
              </VerticalTimelineElement>
            </React.Fragment>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experience;
