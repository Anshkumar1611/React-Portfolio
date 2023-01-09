import React from "react";
import Rectangular from "../common/buttons/Rectangular";
import SocialIcons from "../common/socialIcons/SocialIcons";
import { FaTelegramPlane } from "react-icons/fa";

function Intro() {
  return (
    <div className="flex flex-col gap-5 font-poppins flex-1">
      <div className="text-6xl font-semibold ">
        <p className="lg:tracking-wide">Hi There,</p>
      </div>
      <span className="text-5xl md:text-6xl font-semibold flex gap-4">
        <p className="lg:tracking-wide">I'm </p>
        <p className="text-primary-focus font-bold lg:tracking-wide text-gradient">
          Ansh Kumar
        </p>
      </span>
      <p className="text-3xl font-semibold lg:tracking-wide flex ">
        I am into Web Development ......
      </p>
      <div>
        <Rectangular title={"See Resume"} icon={<FaTelegramPlane size={20}/>} />
      </div>
      <div>
        <SocialIcons />
      </div>
    </div>
  );
}

export default Intro;
