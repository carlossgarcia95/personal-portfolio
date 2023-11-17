import Certifications from "./certifications";
import SkillTabs from "./skill-tabs";

const Skills = () => {
  return (
    <section id="skills">
      <div className="container py-8 flex flex-col justify-center text-center gap-3 md:gap-6">
        <h2 className="section-heading">Skills</h2>
        <p>Professional with business and technical acumen.</p>
        <hr className="self-center mt-4 mb-5" />
        <SkillTabs />
        <Certifications />
      </div>
    </section>
  );
};

export default Skills;
