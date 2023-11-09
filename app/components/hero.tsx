import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section id="hero">
      <div className="flex justify-between items-center p-10">
        <div className="flex-1 max-w-lg">
          <h1 className="text-4xl">
            I'm Carlos Garcia, a Project Manager and Full-Stack Developer
          </h1>
        </div>

        <div className="relative aspect-square flex-1 max-w-2xl">
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
