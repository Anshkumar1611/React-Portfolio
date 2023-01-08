import React from "react";
import {
  FaLinkedin,
  FaGithubSquare,
  FaTwitter,
  FaMailBulk,
} from "react-icons/fa";

const social = [
  <FaLinkedin />,
  <FaGithubSquare />,
  <FaTwitter />,
  <FaMailBulk />,
];
function SocialIcons() {
  return (
    <div className="flex flex-row gap-3 py-2">
      {social.map((icon, index) => {
        return (
          <div
            className="w-12 h-12 rounded-full bg-gray-gradient flex justify-center items-center "
            key={index}
          >
            <span className="text-xl cursor-pointer">{icon}</span>
          </div>
        );
      })}
    </div>
  );
}

export default SocialIcons;
