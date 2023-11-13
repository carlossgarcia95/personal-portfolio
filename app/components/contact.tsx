import React from "react";
import ContactForm from "./contact-form";

const Contact = () => {
  return (
    <section id="contact">
      <div className="container py-5 flex flex-col justify-center text-center">
        <h2 className="section-heading">Contact</h2>
        <p>
          Send email to{" "}
          <a href="mailto:" className="text-sky-500 hover:underline">
            carlosgarcia3995@gmail.com
          </a>{" "}
          or fill out the form below.
        </p>
        <hr className="self-center mb-10" />
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
