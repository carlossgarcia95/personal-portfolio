import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { motion } from "framer-motion";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

const SkillTabs = () => {
  const pmFrameworks = ["Waterfall", "Agile", "Scrum", "Kanban", "SAFe"];
  const pmTechnologies = [
    "MS Project",
    "Jira",
    "Service Now",
    "Tableau",
    "MS Suite",
    "G Suite",
  ];

  const devSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Git",
    "Tailwind",
    "Figma",
    "Prisma",
    "MongoDB",
    "Redux",
    "Express",
    "MySQL",
    "Python",
    "Flask",
    "Framer",
    "Google Analytics",
  ];

  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
      },
    }),
  };

  return (
    <Tabs
      defaultValue="projectManagement"
      className="w-full max-w-[800px] self-center"
    >
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="projectManagement">Project Management</TabsTrigger>
        <TabsTrigger value="webDevelopment">Web Development</TabsTrigger>
      </TabsList>
      <TabsContent value="projectManagement">
        <Card className="dark:bg-slate-800">
          <CardHeader>
            <CardTitle className="font-medium">Project Management</CardTitle>
          </CardHeader>
          <CardContent>
            <div>
              <h3 className="text-xl text-left dark:text-slate-50 font-medium mb-2">
                Frameworks
              </h3>
              <ul className="flex flex-wrap justify-start gap-2 text-lg text-gray-800 mb-6">
                {pmFrameworks.map((skill, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInAnimationVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    custom={index}
                  >
                    <Badge key={index}>{skill}</Badge>
                  </motion.div>
                ))}
              </ul>
              <h3 className="text-xl text-left dark:text-slate-50 font-medium mb-2">
                Tools and Technologies
              </h3>
              <ul className="flex flex-wrap justify-start gap-2 text-lg text-gray-800">
                {pmTechnologies.map((skill, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInAnimationVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    custom={index}
                  >
                    <Badge key={index}>{skill}</Badge>
                  </motion.div>
                ))}
              </ul>
            </div>
            <div className="space-y-1"></div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="webDevelopment">
        <Card className="dark:bg-slate-800">
          <CardHeader>
            <CardTitle className="font-medium">Web Development</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <h3 className="text-xl text-left dark:text-slate-50 font-medium">
              Tools and Technologies
            </h3>
            <div className="space-y-1">
              <ul className="flex flex-wrap justify-start gap-2 text-lg text-gray-800">
                {devSkills.map((skill, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInAnimationVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    custom={index}
                  >
                    <Badge key={index}>{skill}</Badge>
                  </motion.div>
                ))}
              </ul>
            </div>
            <div className="space-y-1"></div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default SkillTabs;
