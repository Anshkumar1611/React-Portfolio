import React from "react";
import SkillCard from "../common/cards/SkillCard";
import Header from "../common/header/Header";

function Skill() {
  return (
    <div className="lg:min-h-screen py-4">
      <Header title="Skills & Abilities"/>
      <div className=" h-4/6 flex flex-wrap gap-4 flex-1">
        <SkillCard />
      </div>
    </div>
  );
}

export default Skill;
