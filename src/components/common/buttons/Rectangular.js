import React from "react";

function Rectangular({title}) {
  return (
    <button className="bg-secondary hover:bg-neutral-content text-base-100 hover:text-primary py-2 font-monoton px-4 font-bold rounded drop-shadow-2xl">
      {title}
    </button>
  );
}

export default Rectangular;
