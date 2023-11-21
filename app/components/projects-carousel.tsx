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
import { projectsData } from "@/lib/data";
import { BiLinkExternal } from "react-icons/bi";
import { Badge } from "./ui/badge";
import { buttonVariants } from "./ui/button";
import { Card } from "./ui/card";

const ProjectsCarousel = () => {
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
            <div className="flex gap-2">
              <Link
                href={project.githubUrl}
                className={buttonVariants({
                  variant: "outline",
                  className: "flex-1",
                })}
                target="_blank"
              >
                Source Code
                <BiLinkExternal size={16} className="ml-1" />
              </Link>
              <Link
                href={project.projectUrl}
                className={buttonVariants({
                  variant: "secondary",
                  className: "flex-1",
                })}
                target="_blank"
              >
                Visit Site
                <BiLinkExternal size={16} className="ml-1" />
              </Link>
            </div>
          </DialogContent>
        </Dialog>
      ))}
    </div>
  );
};

export default ProjectsCarousel;
