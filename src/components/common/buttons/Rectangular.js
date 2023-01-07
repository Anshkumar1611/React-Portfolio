import React from "react";

function Rectangular({ title, icon }) {
  return (
    <button type="submit" className="bg-blue-gradient flex gap-2 justify-center items-center hover:bg-neutral-content text-base-100 hover:text-primary py-2 px-4 font-bold rounded drop-shadow-2xl">
      <span>{title}</span>
      <span>{icon}</span>
    </button>
  );
}

export default Rectangular;