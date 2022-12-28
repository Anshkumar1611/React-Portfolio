import React from "react";
import ProjectCard from "../common/cards/ProjectCard";

function Project() {
  return (
    <div className="lg:min-h-screen ">
      <div className="flex flex-col items-center py-4">
        <span className="font-akronim text-5xl flex gap-2 justify-center py-4">
          <p className="text-primary">My</p>
          <p>Projects</p>
        </span>
      </div>
      <div className="px-12 lg:px-64 py-8">
        <ProjectCard />
      </div>
    </div>
  );
}

export default Project;
