import React from "react";
import EducationCard from "../common/cards/EducationCard";

function Education() {
  return (
    <div className="lg:min-h-screen bg-neutral-focus">
      <div className="flex flex-col items-center py-4">
        <span className="font-akronim text-5xl flex gap-2 justify-center py-4">
          <p className="text-primary">My</p>
          <p>Education</p>
        </span>
        <span className="text-lg font-semibold px-2 text-center ">
          " Education Is Not The Learning Of Facts, But The Training Of The Mind
          To Think."
        </span>
      </div>
      <div className="px-12 lg:px-64 py-8">
        <EducationCard />
      </div>
    </div>
  );
}

export default Education;
