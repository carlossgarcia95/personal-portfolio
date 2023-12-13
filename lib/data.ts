import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";

export const experiencesData = [
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
      "Manage the entire lifecycle for projects ranging from internal efforts to full client implementations. Demand, resource and backlog management for two product verticals. Over 20+ projects delievered successfully.",
    icon: React.createElement(CgWorkAlt),
    date: "Feb 2020 - Present",
  },
  {
    title: "Project Manager",
    company: "Salud Digna",
    location: "Mexico",
    description:
      "Led and coordinated team in obtaining the coveted, world-renowned CAP Accreditation, acting as a liaison between stakeholders and project team members. Implemented PMBOK standards.",
    icon: React.createElement(CgWorkAlt),
    date: "Jan 2019 - Jan 2020",
  },
  {
    title: "Quality Engineer",
    company: "Insertech",
    location: "Mexico",
    description:
      "Provided support and solutions to quality related problems within the organization. Reduced quality alert incidents by 21%.",
    icon: React.createElement(CgWorkAlt),
    date: "Aug 2018 - Dic 2018",
  },
];

export const projectsData = [
    {
      title: "Red Taco Shop",
      description:
        "My first formal client, I designed and developed Red Taco Shop's website, incorporating Google Analytics for website traffic monitoring and Framer for advanced animations.",
      tags: [
        "React",
        "Next.js",
        "Typescript",
        "Tailwind",
        "Google Analytics",
        "Framer",
      ],
      imageUrl: "/red-taco-shop.jpg",
      projectUrl: "https://red-taco-shop.vercel.app/",
      githubUrl: "https://github.com/carlossgarcia95/red-taco-shop",
    },
    {
      title: "iStore",
      description:
        "An e-commerce website that sells apple products, has its own cart system, user authentication, and is integrated with Stripe checkout.",
      tags: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind",
        "MongoDB",
        "Prisma",
        "React Query",
        "NextAuth",
        "Stripe",
      ],
      imageUrl: "/iStore.jpg",
      projectUrl: "https://istore-shopping.vercel.app/",
      githubUrl: "https://github.com/carlossgarcia95/iStore",
    },
    {
      title: "Issue Tracker",
      description:
        "An application for creating, tracking, and assigning issues. Includes visualization dashboard to help manage issues.",
      tags: [
        "React",
        "Next.js",
        "Typescript",
        "Tailwind",
        "MySQL",
        "Prisma",
        "NextAuth",
        "Zod",
        "Recharts",
      ],
      imageUrl: "/issue-tracker.jpg",
      projectUrl: "https://issue-tracker-two-sigma.vercel.app/",
      githubUrl: "https://github.com/carlossgarcia95/issue-tracker",
    },
  ];
