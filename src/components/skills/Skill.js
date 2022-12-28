import React from "react";
import SkillCard from "../common/cards/SkillCard";

function Skill() {
  return (
    <div className="lg:min-h-screen pt-4">
      <div className="font-akronim text-5xl flex gap-2 justify-center py-4 ">
        <p>Skills &</p>
        <p className="text-primary">Abilities</p>
      </div>
      <div className=" h-4/6 flex flex-wrap gap-4 ">
        <SkillCard />
      </div>
    </div>
  );
}

export default Skill;
