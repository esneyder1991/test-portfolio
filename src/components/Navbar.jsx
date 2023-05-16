import React, { useState } from "react";

const Navbar = () => {
  const [isShowNav, setIsShowNav] = useState(false);

  const handleShowNav = () => {
    setIsShowNav(!isShowNav);
  };

  return (
    <header
      className="flex justify-between p-6 text-white
     items-center relative md:py-0 z-10 "
    >
      <i
        onClick={handleShowNav}
        className="absolute bx bx-menu-alt-right mt-8 right-[20px] text-2xl cursor-pointer md:hidden"
      ></i>

      <nav
        className={`text-white absolute top-full ${
          isShowNav ? "right-0" : "-right-full"
        } bg-black md:bg-purplee w-full grid text-lg duration-300 mt-5 md:static md:flex md:w-[1000px] md:gap-20 md:justify-end`}
      >
        <a className="hover:bg-violet-700 duration-200 p-3" href="#">
          Home
        </a>
        <a className="hover:bg-violet-700 duration-200 p-3" href="#">
          About me
        </a>
        <a className="hover:bg-violet-700 duration-200 p-3" href="#">
          Work
        </a>
        <a className="hover:bg-violet-700 duration-200 p-3" href="#">
          Contact me
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
