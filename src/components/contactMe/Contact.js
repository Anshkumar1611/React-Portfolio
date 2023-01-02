import React from "react";
import Images from "../../assets/images";
import Rectangular from "../common/buttons/Rectangular";
import { FaTelegramPlane } from "react-icons/fa";
function Contact() {
  return (
    <div className="lg:min-h-screen bg-neutral-focus">
      <div className="flex flex-col items-center py-4">
        <span className="font-akronim text-5xl flex gap-2 justify-center py-4">
          <p>Get In</p>
          <p className="text-primary">Touch</p>
        </span>
      </div>
      <div className="px-12 lg:px-52 py-8 flex justify-center items-center lg:h-[35rem]">
        <div className="bg-neutral-content h-full w-full flex flex-col lg:flex-row gap-4 rounded-lg">
          <div className="basis-1/2 h-full w-full hidden lg:flex items-center justify-center">
            <img
              src={Images.contact}
              alt="contact"
              className="h-4/5 w-4/5 rounded-lg"
            />
          </div>

          <form className="flex flex-col gap-4 justify-center flex-1 p-8">
            <input
              type="text"
              placeholder="Name"
              required
              className="input input-bordered input-primary w-full rounded-xl "
            />
            <input
              type="email"
              placeholder="Email"
              required
              className="input input-bordered input-primary w-full rounded-xl "
            />
            <input
              type="number"
              placeholder="Phone"
              required
              className="input input-bordered input-primary w-full rounded-xl"
            />
            <textarea
              className="textarea textarea-primary rounded-xl"
              placeholder="Message"
              required
              rows={4}
            ></textarea>
            <Rectangular
              title={"Submit"}
              icon={<FaTelegramPlane size={20} />}
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
