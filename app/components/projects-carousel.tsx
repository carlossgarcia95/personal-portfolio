// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/components/ui/dialog";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { BiLinkExternal } from "react-icons/bi";
import { Badge } from "./ui/badge";
import { buttonVariants } from "./ui/button";
import { Card } from "./ui/card";

export default function App() {
  return (
    <>
      <Swiper
        speed={500}
        slidesPerView={"auto"}
        centeredSlides={true}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper w-full z-0"
      >
        {projectsData.map((project) => (
          <SwiperSlide
            key={project.title}
            className="relative aspect-video max-w-6xl hover:cursor-pointer hover:opacity-95"
          >
            <Dialog key={project.title}>
              <DialogTrigger asChild>
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  sizes="(max-width: 1152px) 100vw 1152px"
                  className="object-fit rounded-lg"
                />
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
                      sizes="(max-width: 672px) 100vw 672px"
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
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
