import {
  Dialog,
  DialogContent,
  DialogDescription,
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

const ProjectsCarousel = () => {
  const projectsData = [
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
    },
    {
      title: "iStore",
      description:
        "An ecommerce website that sells apple products, has it's own cart system, user authentication and is integrated with Stripe checkout.",
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
    },
    {
      title: "Issue Tracker",
      description:
        "An application for creating, tracking and assigning issues. Includes visualization dashboard to help manage issues.",
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
    },
  ];

  return (
    <div className="carousel carousel-center space-x-2">
      {projectsData.map((project) => (
        <Dialog key={project.title}>
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
              <DialogTitle className="text-center mb-2">
                {project.title}
              </DialogTitle>
              <Card className="relative aspect-video">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-fit rounded-md"
                />
              </Card>
              <DialogDescription className="pt-2">
                {project.description}
              </DialogDescription>
            </DialogHeader>
            <ul className="flex flex-wrap gap-2">
              {project.tags.map((tag, index) => (
                <Badge key={index}>{tag}</Badge>
              ))}
            </ul>
            <Link
              href={project.projectUrl}
              className={buttonVariants({
                variant: "secondary",
                className: "",
              })}
              target="_blank"
            >
              Visit Site
              <BiLinkExternal size={16} className="ml-1" />
            </Link>
          </DialogContent>
        </Dialog>
      ))}
    </div>
  );
};

export default ProjectsCarousel;
