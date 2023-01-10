import React from "react";

function Navbar() {
  const handleCheck = (value) => {
    if (value === "Home") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const links = [
    { name: "Home" },
    { name: "Skills", path: "#skill" },
    { name: "Education", path: "#education" },
    { name: "Work", path: "#project" },
    { name: "About", path: "#about" },
    { name: "Contact", path: "#contact" },
  ];
  return (
    <div className="lg:px-32 sticky top-0 z-50  backdrop-blur-sm  bg-primary/10">
      <div className="navbar ">
        <div className="navbar-start">
          <div className="dropdown ">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu uppercase menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-48 bg-black-gradient"
            >
              {links.map((link, index) => {
                return (
                  <a
                    href={link.path}
                    alt="nav-links"
                    key={index}
                    onClick={() => {
                      handleCheck(link.name);
                    }}
                  >
                    <li className="font-poppins hover:text-secondary hover:cursor-pointer">
                      {link.name}
                    </li>
                  </a>
                );
              })}
            </ul>
          </div>
          <span className="font-poppins text-3xl flex gap-1">
            <p className="text-secondary">Ansh</p>{" "}
            <p className="text-white">Kumar</p>
          </span>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-2 uppercase font-poppins">
            {links.map((link, index) => {
              return (
                <a
                  href={link.path}
                  alt="nav-links"
                  key={index}
                  onClick={() => {
                    handleCheck(link.name);
                  }}
                >
                  <li
                    className={`pl-4 hover:cursor-pointer hover:text-secondary`}
                  >
                    {link.name}
                  </li>
                </a>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
