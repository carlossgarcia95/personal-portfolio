import React from "react";
import Image from "next/image";
import { Button, buttonVariants } from "./ui/button";
import { eb_garamond, teko } from "./ui/fonts";
import Link from "next/link";

const Hero = () => {
  return (
    <section id="hero">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="flex-1 max-w-xl space-y-8">
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
          <p className="text-justify">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
            ut quam? Dolores voluptatum fugit beatae nihil consequatur obcaecati
            repellat eveniet quos, corporis mollitia totam? Quia dicta aut atque
            nemo magni?
          </p>
          <div className="flex gap-2 justify-center md:justify-start pb-5">
            <Button>See my work</Button>
            <a
              href="/Resume-carlos-garcia.pdf"
              className={buttonVariants({ variant: "secondary" })}
              download
            >
              Download CV
            </a>
          </div>
        </div>

        <div className="hidden relative aspect-square flex-1 max-w-2xl md:block">
          <Image
            src="/person-transparent.png"
            alt="Carlos Garcia image"
            fill
            className="object-contain pt-5"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
