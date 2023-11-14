import Image from "next/image";

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
        <div
          key={project.title}
          className="carousel-item relative aspect-video w-full lg:w-2/3 max-w-5xl hover:cursor-pointer"
        >
          <Image
            src={project.imageUrl}
            alt="Burger"
            fill
            className="object-fit rounded-lg"
          />
        </div>
      ))}
    </div>
  );
};

export default ProjectsCarousel;
