import React from "react";
import {
  FaGitAlt,
  FaReact,
  FaCss3,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiHeroku,
  SiNetlify,
  SiVisualstudiocode,
  SiPython,
  SiC,
  SiJavascript,
  SiJquery,
  SiMaterialui,
  SiNodedotjs,
  SiExpress,
  SiTailwindcss,
  SiFirebase
} from "react-icons/si";
import { AiFillHtml5 } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";

const skills = [
  // Frontend
  { logo: <AiFillHtml5 size={45} className="" />, title: "HTML 5" },
  { logo: <FaCss3 size={45} className="" />, title: "CSS" },
  { logo: <SiJavascript size={45} className="" />, title: "Javascript" },
  { logo: <FaBootstrap size={45} className="" />, title: "Bootstrap" },
  { logo: <SiTailwindcss size={45} className="" />, title: "Tailwind CSS" },
  { logo: <SiJquery size={45} className="" />, title: "JQuery" },
  { logo: <FaReact size={45} className="" />, title: "React" },
  { logo: <SiMaterialui size={45} className="" />, title: "Material UI" },
  { logo: <FaGitAlt size={45} className="" />, title: "Framer Motion" },
  // Backend
  { logo: <SiNodedotjs size={45} className="" />, title: "Node JS" },
  { logo: <SiExpress size={45} className="" />, title: "Express JS" },
  { logo: <SiFirebase size={45} className="" />, title: "Firebase" },
  // Languages
  { logo: <SiC size={45} className="" />, title: "C Language" },
  { logo: <SiPython size={45} className="" />, title: "Python" },
  // Tools
  { logo: <FaGitAlt size={45} className="" />, title: "Git" },
  { logo: <BsGithub size={45} className="" />, title: "GitHub" },
  { logo: <SiVisualstudiocode size={45} className="" />, title: "VS Code" },
  { logo: <SiNetlify size={45} className="" />, title: "Netlify" },
  { logo: <SiHeroku size={45} className="" />, title: "Heroku" },
];

function SkillCard() {
  return (
    <div className=" lg:px-44 pb-14 pt-8 flex-1 justify-center flex flex-wrap gap-x-4 gap-y-6 ">
      {skills.map((skill, index) => {
        return (
          <div
            className="w-52 h-36 p-4 rounded-lg flex flex-col gap-3 items-center justify-center hover:-translate-y-2 feature-card cursor-pointer hover:text-secondary"
            key={index}
          >
            <span className=" rounded-lg ">{skill.logo}</span>
            <p className="font-playflair hover:rounded-xl text-sm text-dimWhite">
              {skill.title}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default SkillCard;
