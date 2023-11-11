import ProjectsCarousel from "./projects-carousel";

const Portfolio = () => {
  return (
    <section id="about" className="bg-blue-100">
      <div className="px-5 lg:px-0 py-5 flex flex-col justify-center text-center">
        <h2 className="section-heading">Portfolio</h2>
        <p>Take a peak at some of my previous work</p>
        <hr className="self-center mb-10" />
        <ProjectsCarousel />
      </div>
    </section>
  );
};

export default Portfolio;
