import React from "react";
import Intro from "./Intro";

function Hero() {
  return (
    <div className="flex flex-col lg:flex-row px-4 lg:px-24 py-4 h-[42rem] ">
      <div className="basis-1/2 flex items-center">
        <Intro />
      </div>
      <div className="basis-1/2 flex items-center">
        <div className="">
          <iframe
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjJyiJ1gPj4NQdsBLuqN-SK5_Kwg_VooHzUw&usqp=CAU"
            width="100%"
            height="100%"
            className="object-fit"
            title="gif"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Hero;
