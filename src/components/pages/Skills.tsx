import {
  SiReact,
  SiDjango,
  SiPostgresql,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiGit,
  SiGithub,
  SiExpress,
  SiSass,
  SiBootstrap,
  SiMysql,
  SiNginx,
  SiFlask,
  SiHtml5, SiCss3, SiJavascript
} from "react-icons/si";

import { DiMsqlServer } from "react-icons/di";

import { Tooltip } from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import { Wrench, Database, Code2, Server } from "lucide-react";

const groupedSkills = {
  Frontend: {
    icon: <Code2 size={20} className="text-primary" />,
    skills: [
      { name: "HTML", icon: <SiHtml5 size={24} className="text-orange-600" /> },
      { name: "CSS", icon: <SiCss3 size={24} className="text-blue-600" /> },
      {
        name: "JavaScript",
        icon: <SiJavascript size={24} className="text-yellow-500" />,
      },
     
      { name: "React", icon: <SiReact size={24} className="text-cyan-400" /> },
      {
        name: "TypeScript",
        icon: <SiTypescript size={24} className="text-blue-600" />,
      },
      {
        name: "TailwindCSS",
        icon: <SiTailwindcss size={24} className="text-teal-400" />,
      },
      { name: "Sass", icon: <SiSass size={24} className="text-pink-500" /> },
      {
        name: "Bootstrap",
        icon: <SiBootstrap size={24} className="text-purple-600" />,
      },
    ],
  },
  Backend: {
    icon: <Server size={20} className="text-primary" />,
    skills: [
      {
        name: "Node.js",
        icon: <SiNodedotjs size={24} className="text-green-600" />,
      },
      {
        name: "Express",
        icon: <SiExpress size={24} className="text-gray-400" />,
      },
      {
        name: "Django",
        icon: <SiDjango size={24} className="text-green-700" />,
      },
      { name: "Flask", icon: <SiFlask size={24} className="text-gray-300" /> },
    ],
  },
  "Database & Server": {
    icon: <Database size={20} className="text-primary" />,
    skills: [
      {
        name: "MongoDB",
        icon: <SiMongodb size={24} className="text-green-500" />,
      },
      {
        name: "PostgreSQL",
        icon: <SiPostgresql size={24} className="text-blue-700" />,
      },
      {
        name: "MySQL",
        icon: <SiMysql size={24} className="text-yellow-500" />,
      },

      {
        name: "SQL Server",
        icon: <DiMsqlServer size={24} className="text-blue-600" />,
      },
      { name: "Nginx", icon: <SiNginx size={24} className="text-lime-600" /> },
     
    ],
  },
  "Tools & Platforms": {
    icon: <Wrench size={20} className="text-primary" />,
    skills: [
      { name: "Git", icon: <SiGit size={24} className="text-orange-600" /> },
      {
        name: "GitHub",
        icon: <SiGithub size={24} className="text-gray-300" />,
      },
    ],
  },
};

export const Skills = () => {
  return (
    <section id="skills" className="py-28 md:px-6 px-1 w-11/12 mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center mb-20 text-white tracking-tight"
      >
        <span className="text-primary text-3xl md:text-4xl">Kullandığım Teknolojiler</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {Object.entries(groupedSkills).map(([category, data], i) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="relative group bg-muted/10 border border-muted/30 backdrop-blur-lg rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="flex items-center gap-3 mb-6">
              {data.icon}
              <h3 className="text-xl font-semibold text-primary">{category}</h3>
            </div>

            <div className="flex flex-wrap gap-5">
              {data.skills.map(({ name, icon }, j) => (
                <Tooltip key={j}>
                  <div className="group flex flex-col items-center gap-2 cursor-pointer">
                    <div className="p-4 rounded-lg bg-muted/20 backdrop-blur-sm border border-muted/30 shadow-sm group-hover:scale-110 group-hover:bg-muted/40 transition-all duration-200 hover:shadow-md">
                      {icon}
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {name}
                    </span>
                  </div>
                </Tooltip>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
