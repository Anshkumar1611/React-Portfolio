import React from "react";
import Images from "../../../assets/images";

function ProjectCard() {
  return (
    <div className="flex w-96 h-96 border-2 border-primary flex-col">
      <img src={Images.hero} alt="w-full h-full" />
      <div>
        <div className="flex flex-col gap-2">
          <div className="bg-accent flex justify-center items-center">
            <p>MERN APP</p>
          </div>
          <div className="hidden hover:flex">
            <p>
              Full-Stack Flipkart With Admin Dashboard And Paytm Payment
              Gateway. MERN Stack WebApp, Ready To Use For Business.
            </p>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
