"use client";

import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { useTheme } from "../context/theme-context";

const Experience = () => {
  const experiencesData = [
    {
      title: "Full-Stack Developer",
      company: "Freelance",
      location: "San Diego, CA",
      description:
        "Designed and developed Red Taco Shop website. Offer web development services to small and medium size businesses.",
      icon: React.createElement(FaReact),
      date: "Apr 2023 - Present",
    },
    {
      title: "Project Manager II",
      company: "FICO",
      location: "San Diego, CA",
      description:
        "Manage the entire lifecycle for projects ranging from internal efforts to full client implementations. Demand, resource and backlog management for two product verticals. Over 20+ project delievered successfully.",
      icon: React.createElement(CgWorkAlt),
      date: "Feb 2020 - Present",
    },
    {
      title: "Project Manager",
      company: "Salud Digna",
      location: "Culiacan, Mexico",
      description:
        "Led and coordinated team in obtaining the coveted, world-renowned CAP Accreditation, acting as a liaison between stakeholders and project team members. Implemented PMBOK standards.",
      icon: React.createElement(CgWorkAlt),
      date: "Jan 2019 - Jan 2020",
    },
    {
      title: "Quality Engineer",
      company: "Insertech",
      location: "Culiacan, Mexico",
      description:
        "Provided support and solutions to quality related problems within the organization. Reduced quality alert incidents by 21%.",
      icon: React.createElement(CgWorkAlt),
      date: "Aug 2018 - Dic 2018",
    },
  ];

  const { theme } = useTheme();
  return (
    <section id="experience">
      <div className="container py-8 flex flex-col justify-center text-center gap-3 md:gap-6">
        <h2 className="section-heading">Experience</h2>
        <p>Working with technology teams to deliver value.</p>
        <hr className="self-center mt-4" />

        <VerticalTimeline lineColor="">
          {experiencesData.map((item, index) => (
            <React.Fragment key={index}>
              <VerticalTimelineElement
                visible={true}
                contentStyle={{
                  background:
                    theme === "light" ? "#ffffff" : "rgba(255, 255, 255, 0.05)",
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
                  background:
                    theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                  fontSize: "1.5rem",
                }}
              >
                <h3 className="font-semibold capitalize">{item.title}</h3>
                <p className="!font-normal !mt-0">{item.company}</p>
                <p className="!font-light !mt-0">{item.location}</p>
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
