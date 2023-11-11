import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section id="about">
      <div className="container py-5 flex flex-col justify-center text-center">
        <h2 className="section-heading">About Me</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <hr className="self-center mb-10" />

        <div className="grid grid-cols-10 gap-8">
          {/* Left Container */}
          <div className="flex flex-col lg:flex-row col-span-full md:col-span-5 lg:col-span-7 gap-8">
            <div className="flex-1 flex-col space-y-4">
              <h3 className="text-xl text-sky-900 font-medium">
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
              <h3 className="text-xl text-sky-900 font-medium">
                Web Development
              </h3>
              <p className="text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>

          <div className="relative h-80 self-center col-span-full md:col-span-5 lg:col-span-3">
            <div className="absolute left-2 top-2 h-80 w-full max-w-xl bg-blue-600 rounded-3xl shadow-xl" />
            <Image
              src="/laptop.jpg"
              alt="laptop"
              fill
              className="object-cover rounded-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
