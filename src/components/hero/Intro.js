import React from "react";
import Rectangular from "../common/buttons/Rectangular";
import SocialIcons from "../common/socialIcons/SocialIcons";

function Intro() {
  return (
    <div className="flex flex-col gap-4">
      <div className="text-6xl font-semibold ">
        <p className="">Hi There,</p>
      </div>
      <span className="text-6xl font-semibold flex gap-4">
        <p className=" ">I'm </p>
        <p className="text-primary-focus  font-bold">Ansh Kumar</p>
      </span>
      <p className="text-3xl font-semibold font-spartan">
        I am into Web Development ......
      </p>
      <div>
        <Rectangular title={"See Resume"} />
      </div>
      <div>
        <SocialIcons />
      </div>
    </div>
  );
}

export default Intro;
