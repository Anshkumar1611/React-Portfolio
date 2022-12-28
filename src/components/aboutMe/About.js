import React from "react";
import Images from "../../assets/images";
import Rectangular from "../common/buttons/Rectangular";

function About() {
  return (
    <div className="lg:px-24 bg-neutral-focus pt-4 lg:h-[42rem]">
      <span className="flex gap-4 justify-center text-5xl font-akronim ">
        <p>About</p> <p className="text-primary">Me</p>
      </span>
      <div className="flex flex-col items-center lg:flex-row h-4/6 pt-8">
        <div className="flex justify-center items-center basis-1/2">
          <div className="w-full lg:w-96 h-[27rem] p-4">
            <img
              src={Images.profile}
              alt="Profile"
              className="rounded-lg drop-shadow-lg w-full h-full"
            />
          </div>
        </div>
        <div className="basis-1/2 p-4 flex flex-col gap-4 md:text-center lg:text-justify">
          <div className="">
            <p className="text-4xl font-semibild ">I,m Ansh</p>
            <p className="text-xl text-primary">Frontend Developer</p>
          </div>

          <p className="text-justify ">
            I am a Frontend developer based in Gurugram, India. I am an
            Information Technology graduate from Dayalbagh Educational
            Institute. I am very passionate about improving my coding skills &
            developing applications & websites. I build WebApps and Websites
            using Javascript and its library like React js. Working for myself
            to improve my skills. Love to build Full-Stack clones.
          </p>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-4">
              <span className="flex gap-1">
                <p className="text-primary">Age :</p>
                <p className="text-semibold ">22</p>
              </span>
              <span className="flex gap-1 pl-36">
                <p className="text-primary">Email :</p>
                <p className="text-semibold ">ansh2018gupta@gmail.com</p>
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span className="flex gap-1">
                <p className="text-primary">Phone :</p>
                <p className="text-semibold ">+91 639-670-4951</p>
              </span>
              <span className="flex gap-1 pl-7">
                <p className="text-primary">Place :</p>
                <p className="text-semibold ">Agra, India - 282006</p>
              </span>
            </div>
          </div>
          
          <Rectangular title={"Resume"} />
        </div>
      </div>
    </div>
  );
}

export default About;
