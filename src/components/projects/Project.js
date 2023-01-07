import React from "react";
import ProjectCard from "../common/cards/ProjectCard";
import Header from "../common/header/Header";

function Project() {
  return (
    <div className="lg:min-h-screen ">
           <Header title="My Projects"/>

      <div className="px-12 lg:px-64 py-8">
        <ProjectCard />
      </div>
    </div>
  );
}

export default Project;
