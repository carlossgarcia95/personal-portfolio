import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/components/ui/dialog";
import Image from "next/image";
import Link from "next/link";
import { BiLinkExternal } from "react-icons/bi";
import { Badge } from "./ui/badge";
import { buttonVariants } from "./ui/button";
import { Card } from "./ui/card";
import { useState } from "react";

const ProjectsCarousel = () => {
  const projectsData = [
    {
      title: "Red Taco Shop",
      description:
        "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
      tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
      imageUrl: "/red-taco-shop.jpg",
      projectUrl: "https://red-taco-shop.vercel.app/",
    },
    {
      title: "iStore",
      description:
        "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
      tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
      imageUrl: "/iStore.jpg",
      projectUrl: "https://istore-shopping.vercel.app/",
    },
    {
      title: "Issue Tracker",
      description:
        "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
      tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
      imageUrl: "/issue-tracker.jpg",
      projectUrl: "https://issue-tracker-two-sigma.vercel.app/",
    },
  ];

  return (
    <div className="carousel carousel-center space-x-2">
      {projectsData.map((project) => (
        <Dialog>
          <DialogTrigger asChild>
            <div
              key={project.title}
              className="carousel-item relative aspect-video w-5/6 lg:w-2/3 max-w-5xl hover:cursor-pointer"
            >
              <Image
                src={project.imageUrl}
                alt="Burger"
                fill
                className="object-fit rounded-lg"
              />
            </div>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle className="text-center mb-2">{project.title}</DialogTitle>
              <Card className="relative aspect-video">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-fit rounded-md"
                />
              </Card>
              <DialogDescription className="pt-2">{project.description}</DialogDescription>
            </DialogHeader>
            <ul className="flex flex-wrap gap-2">
              {project.tags.map((tag, index) => (
                <Badge key={index}>{tag}</Badge>
              ))}
            </ul>
            <Link
              href={project.projectUrl}
              className={buttonVariants({
                variant: "default",
                className: "gap-1",
              })}
              target="_blank"
            >
              Visit Site
              <BiLinkExternal size={16} />
            </Link>
          </DialogContent>
        </Dialog>
      ))}
    </div>
  );
};

export default ProjectsCarousel;
