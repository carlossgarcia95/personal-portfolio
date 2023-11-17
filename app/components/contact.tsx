import ContactForm from "./contact-form";
import { titillium_web } from "./ui/fonts";

const Contact = () => {
  return (
    <section id="contact">
      <div className="container py-10 flex flex-col justify-center text-center gap-3 md:gap-6">
        <h2 className={`${titillium_web.className} section-heading`}>Contact</h2>
        <p>
          Send email to{" "}
          <a href="mailto:" className="text-sky-500 hover:underline">
            carlosgarcia3995@gmail.com
          </a>{" "}
          or fill out the form below.
        </p>
        <hr className="self-center my-4" />
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
