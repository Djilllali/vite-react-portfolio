import { navLinks } from "../constants/constants";
import { logo, close, menu } from "../assets";
import { useState } from "react";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState("false");
  return (
    <nav className="w-full items-center mt-[4%] flex">
      <div className="fixed left-1/2 transform -translate-x-1/2 z-40 mt-10 p-6 h-20 hidden sm:w-[80%] bg-purple-950 rounded-full sm:flex items-center">
        <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />
        <ul className="list-none sm:flex justify-end flex-1 space-x-4 sm:space-x-10 mt-4 sm:mt-0">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className="relative cursor-pointer transition-all duration-500 ease-in-out"
            >
              <a
                href={`#${nav.id}`}
                className="text-white hover:text-purple-300 hover:scale-125 block sm:inline-block"
              >
                {nav.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="fixed  z-40 mt-10 p-6 h-20 flex-col sm:hidden rounded-full  items-start">
        <img
          src={toggleMenu ? close : menu}
          alt="menu"
          className="justify-start w-[30px] h-[15px] mb-5"
          onClick={() => setToggleMenu((prev) => !prev)}
        />
        <div className={`${toggleMenu ? "flex-col" : "hidden"} justify-start `}>
          <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />
          <ul className="sm:hidden flex-col justify-start mt-4 divide-y">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className="relative cursor-pointer transition-all duration-500 ease-in-out p-2 "
              >
                <a
                  href={`#${nav.id}`}
                  className="text-white hover:text-purple-300 hover:scale-125 inline-block"
                >
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
