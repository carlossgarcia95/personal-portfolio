"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineArrowRight, AiOutlineDownload } from "react-icons/ai";
import { useTheme } from "../context/theme-context";
import { buttonVariants } from "./ui/button";
import { titillium_web } from "./ui/fonts";

const Hero = () => {
  const { theme } = useTheme();

  return (
    <section
      className={`relative ${
        theme === "light"
          ? "bg-gradient-to-b md:bg-gradient-to-r from-slate-50 via-sky-400/10 to-blue-400/50"
          : "bg-gradient-to-b md:bg-gradient-to-r from-slate-950 via-blue-950 to-indigo-950"
      }`}
    >
      <div className="container flex flex-col md:flex-row justify-between items-center py-10 md:py-0">
        <div className="flex-1 max-w-2xl xl:ml-4 space-y-5 lg:space-y-8">
          <motion.h1
            className={`${titillium_web.className} text-sky-800 dark:text-slate-50 text-center md:text-left text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-10 sm:leading-[3rem] lg:leading-[4rem] xl:leading-[4.5rem] font-bold tracking-wide`}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
          >
            I&apos;m Carlos Garcia, Project Manager and Full-Stack Developer.
          </motion.h1>
          <div className="relative flex justify-center md:hidden">
            <div className="relative h-[300px] sm:h-[450px] aspect-square">
              <Image
                src="/profile-img.jpg"
                alt="Carlos Garcia image"
                fill
                className="self-center relative object-contain rounded-full"
                sizes="(max-width: 768px) 100vw"
                priority
              />
            </div>
          </div>
          <motion.p
            className="text-center text-lg md:text-xl lg:text-2xl font-medium md:text-left"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.1,
            }}
          >
            I can{" "}
            <span className="font-extrabold text-sky-800 dark:text-slate-50 dark:brightness-110">
              manage
            </span>{" "}
            your project,{" "}
            <span className="font-extrabold text-sky-800  dark:text-slate-50 dark:brightness-110">
              code
            </span>{" "}
            your solution and{" "}
            <span className="font-extrabold text-sky-800  dark:text-slate-50 dark:brightness-110">
              implement
            </span>{" "}
            your idea.
          </motion.p>
          <motion.div
            className="flex flex-wrap gap-2 justify-center items-center md:justify-start"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
            }}
          >
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
          </motion.div>
        </div>

        <div className="hidden relative aspect-square flex-1 md:block mt-4">
          <Image
            src="/profile-img.jpg"
            alt="Carlos Garcia profile image"
            fill
            className="object-contain"
            sizes="(min-width: 769px) 50vw"
            quality={100}
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
