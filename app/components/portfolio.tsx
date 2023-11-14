import ProjectsCarousel from "./projects-carousel";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <div className="px-5 lg:px-0 py-10 flex flex-col justify-center text-center gap-6">
        <h2 className="section-heading">Portfolio</h2>
        <p>Take a peak at some of my previous work</p>
        <hr className="self-center" />
        <ProjectsCarousel />
      </div>
    </section>
  );
};

export default Portfolio;
