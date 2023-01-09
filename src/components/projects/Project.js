import React from "react";
import Rectangular from "../common/buttons/Rectangular";
import ProjectCard from "../common/cards/ProjectCard";
import Header from "../common/header/Header";

function Project() {
  return (
    <div className="lg:min-h-screen py-8">
      <Header title="My Projects" />
      <div className="px-8 lg:px-48 py-8">
        <ProjectCard />
      </div>
      <div className="flex flex-row gap-4 justify-center items-center pt-10">
        <div className="basis-1/4 sm:basis-1/3 h-1 w-full bg-black-gradient"></div>
        <Rectangular title="More Projects" />
        <div className="basis-1/4 sm:basis-1/3 h-1 w-full bg-black-gradient"></div>
      </div>
    </div>
  );
}

export default Project;
