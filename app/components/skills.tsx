import SkillTabs from "./skill-tabs";

const Skills = () => {
  return (
    <section id="skills" className="bg-">
      <div className="container py-5 flex flex-col justify-center text-center">
        <h2 className="section-heading">Skills</h2>
        <p>Fully billingual in English and Español</p>
        <hr className="self-center mb-10" />

        <SkillTabs />
      </div>
    </section>
  );
};

export default Skills;
