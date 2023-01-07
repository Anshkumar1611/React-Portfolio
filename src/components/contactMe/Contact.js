import React from "react";
import Images from "../../assets/images";
import Rectangular from "../common/buttons/Rectangular";
import { FaTelegramPlane } from "react-icons/fa";
import Header from "../common/header/Header";

const inputArray = [
  { placeholder: "Name", type: "text", required: true },
  { placeholder: "Email", type: "email", required: true },
  { placeholder: "Phone", type: "number", required: true },
];
function Contact() {
  return (
    <div className="lg:min-h-screen">
      <Header title="Get In Touch" />

      <div className="px-12 lg:px-52 py-8 flex justify-center items-center lg:h-[35rem]">
        <div className="bg-black-gradient h-full w-full flex flex-col lg:flex-row gap-4 rounded-lg">
          <div className="basis-1/2 h-full w-full hidden lg:flex items-center justify-center">
            <img
              src={Images.contact}
              alt="contact"
              className="h-4/5 w-4/5 rounded-lg"
            />
          </div>

          <form className="flex flex-col gap-4 justify-center flex-1 p-8">
            {inputArray.map((input, index) => {
              return (
                <input
                  type={input.type}
                  placeholder={input.placeholder}
                  required={input.required}
                  className="input backdrop-blur-sm bg-primary/40 w-full rounded-xl "
                  key={index}
                />
              );
            })}

            <textarea
              className="textarea rounded-xl backdrop-blur-sm bg-primary/40"
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
