import React from "react";
import Images from "../../../assets/images";

const skills = [
  // Frontend
  { logo: Images.html, title: "HTML 5" },
  { logo: Images.css, title: "CSS" },
  { logo: Images.js, title: "Javascript" },
  { logo: Images.bootstrap, title: "Bootstrap" },
  { logo: Images.tailwind, title: "Tailwind CSS" },
  { logo: Images.jquery, title: "JQuery" },
  { logo: Images.react, title: "React" },
  { logo: Images.materialui, title: "Material UI" },
  { logo: Images.framer, title: "Framer Motion" },
  // Backend
  { logo: Images.nodejs, title: "Node JS" },
  { logo: Images.express, title: "Express JS" },
  { logo: Images.firebase, title: "Firebase" },
  // Languages
  { logo: Images.c, title: "C Language" },
  { logo: Images.python, title: "Python" },
  // Tools
  { logo: Images.git, title: "Git" },
  { logo: Images.github, title: "GitHub" },
  { logo: Images.vscode, title: "VS Code" },
  { logo: Images.netlify, title: "Netlify" },
  { logo: Images.heroku, title: "Heroku" },
];

function SkillCard() {
  return (
    <div className=" lg:px-44 pb-14 pt-8 flex-1 justify-center flex flex-wrap gap-x-4 gap-y-8 ">
      {skills.map((skill, index) => {
        return (
          <div
            className="w-52 h-36 p-4 rounded-lg flex flex-col gap-4 items-center hover:-translate-y-2 feature-card cursor-pointer"
            key={index}
          >
            <img src={skill.logo} alt="skills" className=" rounded-lg h-3/6" />
            <p className="font-semibold font-playflair text-xl  px-2 py-1 hover:rounded-xl">
              {skill.title}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default SkillCard;
