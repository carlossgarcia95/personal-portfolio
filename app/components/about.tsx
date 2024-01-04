"use client";

import { motion } from "framer-motion";
import { BarChartHorizontalBig, Code } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { buttonVariants } from "./ui/button";
import { titillium_web } from "./ui/fonts";

const About = () => {
  return (
    <section id="about">
      <div className="container py-12 flex flex-col text-center gap-3 md:gap-6 max-w-7xl">
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
        <div className="flex flex-col space-between md:flex-row gap-12">
          <motion.div
            className="hidden md:block relative h-[30rem] w-5/12 self-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="absolute left-4 bottom-4 h-[30rem] w-full bg-sky-700 rounded-lg shadow-xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.5 }}
            />
            <Image
              src="/about-img.jpg"
              alt="laptop"
              fill
              sizes="(min-width: 769px) 50vw"
              className="object-cover rounded-lg"
            />
          </motion.div>

          {/* Right Container */}
          <div className="flex-1 flex-col max-w-xl mx-auto md:mx-0 md:ml-auto items-center space-y-6">
            <motion.div
              className="flex-col space-y-1 border p-4 rounded-lg bg-white dark:bg-slate-800 md:dark:bg-slate-900 dark:border-transparent  md:bg-slate-50 md:border-transparent md:p-0 "
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.35 }}
            >
              <div className="flex justify-center md:hidden mb-4">
                <BarChartHorizontalBig
                  size={80}
                  className="self-center text-center text-sky-700 dark:text-sky-600 items-center"
                />
              </div>
              <h3 className="text-xl text-center md:text-left text-sky-700 font-medium dark:text-slate-50">
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
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.35 }}
            >
              <div className="flex justify-center md:hidden">
                <Code size={80} className="text-sky-700 dark:text-sky-600" />
              </div>
              <h3 className="text-xl text-center md:text-left text-sky-700 font-medium dark:text-slate-50">
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
            <motion.div
              className="flex dark:text-white justify-center md:justify-start gap-2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className={buttonVariants({ variant: "secondary" })}>
                <Link
                  href="https://linkedin.com/in/carlossgarcia95"
                  target="_blank"
                  className="flex items-center gap-1"
                >
                  <AiFillLinkedin size={25} />
                  LinkedIn
                </Link>
              </div>
              <div className={buttonVariants({ variant: "secondary" })}>
                <Link
                  href="https://github.com/carlossgarcia95"
                  target="_blank"
                  className="flex items-center gap-1"
                >
                  <AiFillGithub size={25} />
                  Github
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
