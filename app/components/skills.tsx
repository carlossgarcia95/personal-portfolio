import Certifications from "./certifications";
import SkillTabs from "./skill-tabs";

const Skills = () => {
  return (
    <section id="skills">
      <div className="container py-10 flex flex-col justify-center text-center gap-6">
        <h2 className="section-heading">Skills</h2>
        <p>Fully billingual in English and Español</p>
        <hr className="self-center" />
        <SkillTabs />
        <Certifications />
      </div>
    </section>
  );
};

export default Skills;
