import React from "react";

function Navbar() {
  const links = [
    { name: "Home", path: "/" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "About me", path: "/about" },
    { name: "Contact me", path: "/contact" },
  ];
  return (
    <div className="lg:px-24 pt-4 bg-neutral-focus border-b-2 border-primary sticky top-0 z-50">
      <div className="navbar bg-neutral-focus  ">
        <div className="navbar-start">
          <div className="dropdown">
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
              className="menu uppercase menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-64 font-akronim "
            >
              {links.map((link, index) => {
                return (
                  <a href={link.path} alt="nav-links" key={index}>
                    <li className="hover:text-primary">{link.name}</li>
                  </a>
                );
              })}
            </ul>
          </div>
          <p className="font-akronim text-3xl ">Ansh Kumar</p>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 uppercase font-akronim ">
            {links.map((link, index) => {
              return (
                <a href={link.path} alt="nav-links" key={index}>
                  <li className="px-3 text-xl hover:text-primary">{link.name}</li>
                </a>
              );
            })}
          </ul>
        </div>
        <div className="navbar-end pr-4 lg:pr-0"><p className="font-akronim text-2xl cursor-pointer hover:text-primary">Resume</p></div>
      </div>
    </div>
  );
}

export default Navbar;
