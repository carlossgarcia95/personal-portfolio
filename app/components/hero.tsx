import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { eb_garamond } from "./ui/fonts";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineDownload,
  AiOutlineArrowRight,
} from "react-icons/ai";

const Hero = () => {
  return (
    <section id="hero" className="bg-slate-50">
      <div className="container flex flex-col md:flex-row justify-between items-center py-10 md:py-0">
        <div className="flex-1 max-w-xl space-y-4 md:space-y-5 lg:space-y-8">
          <h1
            className={`${eb_garamond.className} text-sky-900 dark:text-slate-50 text-center md:text-left text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-10 sm:leading-[3rem] lg:leading-[4rem] xl:leading-[4.5rem] font-semibold md:font-bold tracking-wide`}
          >
            I'm Carlos Garcia, Project Manager and Full-Stack Developer.
          </h1>
          <div className="flex justify-center md:hidden">
            <Image
              src="/person-transparent.jpg"
              alt="Carlos Garcia image"
              width={450}
              height={450}
              className="self-center"
            />
          </div>
          <p className="text-center text-lg md:text-xl lg:text-2xl font-medium tracking-wide md:text-left">
            I can <span className="font-bold">manage</span> your project,{" "}
            <span className="font-bold">code</span> your solution and{" "}
            <span className="font-bold">implement</span> your idea.
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
              href="/Resume-carlos-garcia.pdf"
              className={buttonVariants({ variant: "secondary" })}
              download
            >
              Download CV
              <AiOutlineDownload className="h-5 w-5 ml-1" />
            </a>
            <div className="flex gap-2">
              <Link
                href="https://www.linkedin.com/in/carlossgarcia95/"
                target="_blank"
              >
                <AiFillLinkedin size={30} />
              </Link>
              <Link href="https://github.com/carlossgarcia95" target="_blank">
                <AiFillGithub size={30} />
              </Link>
            </div>
          </div>
        </div>

        <div className="hidden relative aspect-square flex-1 max-w-2xl md:block mt-4">
          <Image
            src="/person-transparent.png"
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
