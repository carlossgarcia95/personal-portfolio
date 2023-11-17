import Image from "next/image";
import Link from "next/link";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineArrowRight,
  AiOutlineDownload,
} from "react-icons/ai";
import { buttonVariants } from "./ui/button";
import { titillium_web } from "./ui/fonts";

const Hero = () => {
  return (
    <section className="relative light:bg-gradient-to-b from-slate-50 via-teal-100/50 to-teal-200/50 dark:bg-slate-950">
      <div className="absolute bg-slate-50 dark:bg-slate-800 text-blue-900 dark:text-white top-1/3 right-0">
        <Link
          href="https://www.linkedin.com/in/carlossgarcia95/"
          target="_blank"
        >
          <AiFillLinkedin
            size={50}
            className="mb-3 h-[40px] w-[40px] sm:h-[45px] sm:w-[45px] lg:h-[50px] lg:w-[50px]"
          />
        </Link>
        <Link href="https://github.com/carlossgarcia95" target="_blank">
          <AiFillGithub className="h-[40px] w-[40px] sm:h-[45px] sm:w-[45px] lg:h-[50px] lg:w-[50px]" />
        </Link>
      </div>
      <div className="container flex flex-col md:flex-row justify-between items-center py-10 md:py-0">
        <div className="flex-1 max-w-2xl xl:ml-4 space-y-5 lg:space-y-8">
          <h1
            className={`${titillium_web.className} text-blue-900 dark:text-slate-50 text-center md:text-left text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-10 sm:leading-[3rem] lg:leading-[4rem] xl:leading-[4.5rem] font-bold tracking-wide`}
          >
            I&apos;m Carlos Garcia, Project Manager and Full-Stack Developer.
          </h1>
          <div className="relative flex justify-center md:hidden">
            <div className="relative h-[300px] sm:h-[450px] aspect-square">
              <Image
                src="/person-transparent.jpg"
                alt="Carlos Garcia image"
                fill
                className="self-center relative object-contain rounded-full"
              />
            </div>
          </div>
          <p className="text-center text-lg md:text-xl lg:text-2xl font-medium md:text-left">
            I can{" "}
            <span className="font-extrabold text-blue-900 dark:text-slate-50 dark:brightness-110">
              manage
            </span>{" "}
            your project,{" "}
            <span className="font-extrabold text-blue-900  dark:text-slate-50 dark:brightness-110">
              code
            </span>{" "}
            your solution and{" "}
            <span className="font-extrabold text-blue-900  dark:text-slate-50 dark:brightness-110">
              implement
            </span>{" "}
            your idea.
          </p>
          <div className="flex flex-wrap gap-2 justify-center items-center md:justify-start">
            <Link
              href="/#portfolio"
              className={buttonVariants({
                variant: "default",
              })}
            >
              See my work
              <AiOutlineArrowRight className="h-4 w-4 ml-1" />
            </Link>
            <a
              href="/resume-carlos-garcia.pdf"
              className={buttonVariants({ variant: "secondary" })}
              download
            >
              Download CV
              <AiOutlineDownload className="h-5 w-5 ml-1" />
            </a>
          </div>
        </div>

        <div className="hidden relative aspect-square flex-1 max-w-[700px] md:block mt-4">
          <Image
            src="/person-transparent.jpg"
            alt="Carlos Garcia image"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
