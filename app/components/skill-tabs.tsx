import React from "react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

const SkillTabs = () => {
  const pmFrameworks = ["Waterfall", "Agile", "Scrum", "Kanban", "SAFe"];
  const pmTechnologies = ["MS Project", "Jira", "Service Now", "Tableau", "MS Suite", "G Suite"];

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
    "Prisma",
    "MongoDB",
    "Redux",
    "GraphQL",
    "Apollo",
    "Express",
    "PostgreSQL",
    "Python",
    "Django",
    "Framer Motion",
  ];

  return (
    <Tabs defaultValue="account" className="w-full max-w-[800px] self-center">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Project Management</TabsTrigger>
        <TabsTrigger value="password">Web Development</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Project Management</CardTitle>
          </CardHeader>
          <CardContent>
            <div>
              <h3 className="text-xl text-left text-sky-900 dark:text-slate-50 font-medium mb-2">
                Frameworks
              </h3>
              <ul className="flex flex-wrap justify-start gap-2 text-lg text-gray-800 mb-6">
                {pmFrameworks.map((skill, index) => (
                  <li className="badge" key={index}>
                    {skill}
                  </li>
                ))}
              </ul>
              <h3 className="text-xl text-left text-sky-900 dark:text-slate-50 font-medium mb-2">
                Tools and Technologies
              </h3>
              <ul className="flex flex-wrap justify-start gap-2 text-lg text-gray-800">
                {pmTechnologies.map((skill, index) => (
                  <li className="badge" key={index}>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-1"></div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Web Development</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <h3 className="text-xl text-left text-sky-900 dark:text-slate-50 font-medium">
              Tools and Technologies
            </h3>
            <div className="space-y-1">
              <ul className="flex flex-wrap justify-start gap-2 text-lg text-gray-800">
                {devSkills.map((skill, index) => (
                  <li className="badge" key={index}>
                    {skill}
                  </li>
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
