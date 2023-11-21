"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { titillium_web } from "./ui/fonts";

const About = () => {
  return (
    <section id="about">
      <div className="container py-8 flex flex-col text-center gap-3 md:gap-6 max-w-7xl">
        <h2 className={`${titillium_web.className} section-heading`}>
          About Me
        </h2>
        <p>Life-long learner and technology enthusiast.</p>
        <motion.hr
          className="self-center my-4"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        />
        <div className="flex flex-col space-between md:flex-row gap-10">
          {/* Left Container */}
          <div className="flex-1 flex-col max-w-xl mx-auto items-center space-y-6 md:space-y-10">
            <motion.div
              className="flex-col space-y-1"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <h3 className="text-xl text-left text-blue-900 font-medium dark:text-slate-50">
                Project Management
              </h3>
              <p className="text-left">
                As a certified Project Manager and Scrum Master with 5+ years of
                experience, I&apos;ve successfully led projects, ranging from
                internal initiatives to full client implementations. My
                expertise lies in navigating project complexities, ensuring
                successful outcomes, and fostering collaboration for client
                satisfaction.
              </p>
            </motion.div>
            <motion.div
              className="flex-col space-y-1"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <h3 className="text-xl text-left text-blue-900 font-medium dark:text-slate-50">
                Web Development
              </h3>
              <p className="text-left">
                I began coding in 2021, instantly captivated by the power to
                bring ideas to life. Software development became my passion.
                After years of practice and personal projects, I secured{" "}
                <Link
                  className="underline"
                  href="https://red-taco-shop.vercel.app/"
                  target="_blank"
                >
                  Red Taco Shop
                </Link>{" "}
                as my first client in March 2023. Specializing in Web and
                Full-Stack development, I am dedicated to ongoing growth,
                keeping pace with the latest tools and technologies.
              </p>
            </motion.div>
          </div>

          <motion.div
            className="hidden md:block relative h-96 w-5/12 self-center"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <motion.div
              className="absolute left-3 bottom-3 h-96 w-full bg-teal-600 rounded-lg shadow-xl"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
            />
            <Image
              src="/about-img.jpg"
              alt="laptop"
              fill
              className="object-cover rounded-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
