"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { titillium_web } from "./ui/fonts";
import { IoBarChartSharp } from "react-icons/io5";
import { BarChartHorizontalBig, Code } from "lucide-react";

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
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        />
        <div className="flex flex-col space-between md:flex-row gap-10">
          {/* Left Container */}
          <div className="flex-1 flex-col max-w-xl mx-auto items-center space-y-6 md:space-y-10">
            <motion.div
              className="flex-col space-y-1 border p-4 rounded-lg bg-white dark:bg-slate-800 md:dark:bg-slate-900 dark:border-transparent  md:bg-slate-50 md:border-transparent md:p-0 "
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex justify-center md:hidden mb-4">
                <BarChartHorizontalBig
                  size={80}
                  className="self-center text-center text-blue-900 dark:text-blue-600 items-center"
                />
              </div>
              <h3 className="text-xl text-center md:text-left text-blue-900 font-medium dark:text-slate-50">
                Project Management
              </h3>
              <p className="text-left leading-7">
                Certified <span className="font-bold">PMP&reg;</span> and{" "}
                <span className="font-bold">Scrum Master</span> with{" "}
                <span className="font-bold">5+ years of experience</span>,
                who&apos;s successfully led projects ranging from internal
                initiatives to complex, full{" "}
                <span className="font-bold">
                  software client implementations
                </span>
                . My expertise lies in navigating project complexities, ensuring
                successful outcomes, and fostering collaboration for client
                satisfaction.
              </p>
            </motion.div>
            <motion.div
              className="flex-col space-y-1 border p-4 rounded-lg bg-white dark:bg-slate-800 md:dark:bg-slate-900 dark:border-transparent md:bg-slate-50 md:border-transparent md:p-0"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex justify-center md:hidden">
                <Code size={80} className="text-blue-900 dark:text-blue-600" />
              </div>
              <h3 className="text-xl text-center md:text-left text-blue-900 font-medium dark:text-slate-50">
                Web Development
              </h3>
              <p className="text-left leading-7">
                <span className="font-bold">
                  Self-taught developer who began coding in 2021
                </span>{" "}
                and has never looked back since. Several years and personal
                projects later, I{" "}
                <span className="font-bold">
                  {" "}
                  secured{" "}
                  <Link
                    href="https://red-taco-shop.vercel.app/"
                    target="_blank"
                    className="hover:underline text-blue-500"
                  >
                    Red Taco Shop
                  </Link>{" "}
                  as my first client in March, 2023
                </span>
                . Specializing in{" "}
                <span className="font-bold">
                  Web and Full-Stack development
                </span>
                , I&apos;m committed to continuous learning and being at the
                forefront of technology.
              </p>
            </motion.div>
          </div>

          <motion.div
            className="hidden md:block relative h-96 w-5/12 self-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <motion.div
              className="absolute left-3 bottom-3 h-96 w-full bg-teal-600 rounded-lg shadow-xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.5 }}
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
