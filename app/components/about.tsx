import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section id="about">
      <div className="container py-10 flex flex-col justify-center text-center gap-6">
        <h2 className="section-heading">About Me</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <hr className="self-center" />
        <div className="grid grid-cols-10 gap-8">
          {/* Left Container */}
          <div className="flex flex-col lg:flex-row col-span-full mb-2 md:mb-0 md:col-span-5 lg:col-span-7 gap-4 md:gap-8 items-center">
            <div className="flex-1 flex-col space-y-4">
              <h3 className="text-xl text-sky-900 font-medium dark:text-slate-50">
                Project Management
              </h3>
              <p className="text-justify">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
                corrupti vero amet quibusdam hic eveniet quidem tempora ducimus!
                Dolorem temporibus distinctio repellat ea ad quos recusandae
                dolore repellendus consequatur officia!
              </p>
            </div>
            <div className="flex-1 flex-col space-y-4">
              <h3 className="text-xl text-sky-900 font-medium dark:text-slate-50">
                Web Development
              </h3>
              <p className="text-justify">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
                corrupti vero amet quibusdam hic eveniet quidem tempora ducimus!
                Dolorem temporibus distinctio repellat ea ad quos recusandae
                dolore repellendus consequatur officia!
              </p>
            </div>
          </div>

          <div className="relative h-80 self-center col-span-full md:col-span-5 lg:col-span-3">
            <div className="absolute left-2 bottom-2 h-80 w-full bg-teal-600 rounded-lg shadow-xl" />
            <Image
              src="/laptop.jpg"
              alt="laptop"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
