import React from "react";

const Header = () => {
  return (
    <section className="text-white mt-[125px] p-2 grid place-items-center mb-20">
      <div className=" absolute top-[-60px] w-[250px] left-[-170px] md:left-[-40px] md:top-[1px]">
        <img src="/images/icono1.png" alt="" />
      </div>

      <section className="px-2 py-10 grid place-items-center relative">
        <h2 className="text-3xl font-bold mb-10 md:mt-[40px] md:ml-[150px] uppercase md:w-[600px]">
          HI! I'm Esneider Miranda. A front-end developer based in colombia.
        </h2>

        <div className="relative bg-purplee w-[400px] aspect-square place-items-center z-10 ">
          <div className="bg-gradient-to-br from-purple-500 via-purple-800 to-blue-700 rounded-full w-[240px] aspect-square overflow-hidden ml-[10%] mb-6">
            <img
              className=" w-[200px] aspect-square translate-y-[25%] translate-x-[8%] "
              src="/images/Fotodeperfil.png"
              alt=""
            />
          </div>
          <p className="grid  w-[550px] leading-loose text-sm md:text-base md:-translate-x-16 md:w-[600px]">
            <span>
              {" "}
              <span className="text-purple-400 font-bold">C</span> onsidered a
              highly committed professional to my projects.
            </span>
            <span>
              <span className="text-purple-400 font-bold">O</span> btaining my
              best results in the most adverse situations.
            </span>
            <span>
              {" "}
              <span className="text-purple-400 font-bold">D</span> isposition
              and tenacity to solve all problems{" "}
            </span>
            <span>
              <span className="text-purple-400 font-bold">E</span> specially
              when it comes to working as a team to push projects forward.
            </span>
          </p>
        </div>

        <div className="grid place-items-center md:flex md:justify-center md:items-center md:gap-3">
          <button className="py-2 px-7 rounded-3xl bg-gradient-to-br from-purple-500 via-purple-800 to-blue-700 ">
            <a href="/CV.docx" download>
              Download CV
            </a>
          </button>
        </div>
        <div className="-translate-y-80 translate-x-20">
          <div className="hidden md:block absolute z-0 ">
            <img
              className="absolute max-w-[300px] top-[20px] left-[200px] z-30 "
              src="/images/planets.png"
              alt=""
            />
          </div>
          <div className="hidden md:block absolute">
            <img
              className="absolute max-w-[500px] top-[-90px] left-[40px]"
              src="/images/base.png"
              alt=""
            />
          </div>
        </div>
      </section>
      <hr className="border-[1px] m-4 border-gray-700/50 w-[400px] relative mx-auto md:w-[70%]" />
    </section>
  );
};

export default Header;
