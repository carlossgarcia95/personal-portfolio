"use client";

import { motion } from "framer-motion";
import ContactForm from "./contact-form";
import { titillium_web } from "./ui/fonts";

const Contact = () => {
  return (
    <section id="contact" className="bg-slate-200 dark:bg-slate-950">
      <div className="container py-10 flex flex-col justify-center text-center gap-3 md:gap-6">
        <h2 className={`${titillium_web.className} section-heading`}>
          Contact
        </h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Send email to{" "}
          <a href="mailto:" className="text-blue-500 font-bold hover:underline">
            carlosgarcia3995@gmail.com
          </a>{" "}
          or fill out the form below.
        </motion.p>
        <motion.hr
          className="self-center my-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        />
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
