import ProjectsCarousel from "./projects-carousel";
import { titillium_web } from "./ui/fonts";

const Portfolio = () => {
  return (
    <section id="portfolio" className="bg-slate-900 dark:bg-slate-950">
      <div className="py-8 flex flex-col justify-center text-center gap-3 md:gap-6">
        <h2
          className={`${titillium_web.className} section-heading !text-slate-50`}
        >
          Portfolio
        </h2>
        <p className="text-slate-50">
          Take a peak at some of my previous work.
        </p>
        <hr className="self-center mt-4 mb-5" />
        <ProjectsCarousel />
      </div>
    </section>
  );
};

export default Portfolio;
