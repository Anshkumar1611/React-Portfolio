import React from "react";
import Images from "../../assets/images";
import Intro from "./Intro";

function Hero() {
  return (
    <div
      className="ss:flex ss:flex-col sm:flex-row px-4 lg:px-36 py-4 lg:h-[42rem]"
      // style={{ backgroundImage: `url(${Images.herobg})` }}
    >
      <div className="basis-1/2 flex items-center ">
        <Intro />
      </div>
      <div className="basis-1/2 flex items-center pt-4">
        <div className="flex-1 relative">
          <img
            src={Images.hero}
            alt={Images.hero}
            className=" relative z-5 w-full h-full"
          />
          <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
          <div className="absolute z-[1] w-[80%] h-[80%] bottom-40 rounded-full" />
          <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
