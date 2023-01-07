import React from "react";
import SocialIcons from "../common/socialIcons/SocialIcons";
import { BiChevronRightCircle, BiPhoneCall } from "react-icons/bi";
import { TfiEmail } from "react-icons/tfi";
import { RiMapPinUserFill } from "react-icons/ri";
const pageLinks = [
  { link: "Home", path: "/" },
  { link: "About", path: "/about" },
  { link: "Skills", path: "/skills" },
  { link: "Education", path: "/education" },
  { link: "Work", path: "/work" },
  { link: "Experience", path: "/experience" },
];

const contactLinks = [
  {
    icon: <BiPhoneCall size={20} className="text-accent" />,
    link: "+91 639-670-4951",
  },
  {
    icon: <TfiEmail size={20} className="text-accent" />,
    link: "ansh2018gupta@gmail.com",
  },
  {
    icon: <RiMapPinUserFill size={20} className="text-accent" />,
    link: "Agra,India-282006",
  },
];

function Footer() {
  return (
    <>
      <footer className="footer py-10 text-neutral-content justify-center lg:justify-evenly">
        <div className="">
          <span className="footer-title font-poppins text-2xl ">
            Ansh's Portfolio
          </span>
          <p className="text-lg font-playflair">
            Thank you for visiting my personal portfolio website.
          </p>
          <p className="text-lg font-playflair">
            Connect with me over socials.
          </p>

          <br />
          <p className="text-lg font-playflair">
            Keep Rising 🚀. Connect with me over live chat!
          </p>
        </div>
        <div className="">
          <span className="footer-title font-poppins text-2xl ">
            Quick Links
          </span>
          {pageLinks.map((links, index) => {
            return (
              <a
                href={links.path}
                className="link link-hover text-[17px] flex gap-1 items-center hover:decoration-accent"
                key={index}
              >
                <BiChevronRightCircle className=" text-neutral-content" />
                {links.link}
              </a>
            );
          })}
        </div>

        <div className="">
          <span className="footer-title font-poppins text-2xl ">
            Contact Info
          </span>
          {contactLinks.map((links, index) => {
            return (
              <a
                href="/"
                className="link link-hover text-[17px] py-1 flex gap-3 items-center hover:decoration-accent"
                key={index}
              >
                {links.icon}
                {links.link}
              </a>
            );
          })}

          <SocialIcons />
        </div>
      </footer>
      <footer className="footer footer-center p-4 text-base-content ">
        <div>
          <p className="font-akronim text-xl">
            Designed With By  <span className="text-secondary">Ansh Kumar</span>
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;