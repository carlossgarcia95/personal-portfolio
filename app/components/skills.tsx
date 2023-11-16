import Certifications from "./certifications";
import SkillTabs from "./skill-tabs";

const Skills = () => {
  return (
    <section id="skills" className="">
      <div className="container py-10 flex flex-col justify-center text-center gap-6">
        <h2 className="section-heading">Skills</h2>
        <p>Professional with business and technical acumen.</p>
        <hr className="self-center mb-12" />
        <SkillTabs />
        <Certifications />
      </div>
    </section>
  );
};

export default Skills;
