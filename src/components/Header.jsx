import React from "react";

const Header = () => {
  return (
    <section className="text-white mt-[125px] p-2">
      <div className="z-10 absolute top-[-60px] w-[250px] left-[-170px] md:left-[-40px] md:top-[1px]">
        <img src="/images/icono1.png" alt="" />
      </div>

      <section className="px-2 py-10 grid place-items-center relative">
        <h2 className="text-3xl font-bold mb-10 md:mt-[40px] md:ml-[150px] uppercase md:w-[600px]">
          HI! I'm Esneider Miranda. A front-end developer based in colombia.
        </h2>
        {/* 
        <div className="bg-gradient-to-br from-purple-500 via-purple-800 to-blue-700 rounded-full w-[240px] aspect-square overflow-hidden ml-[-20%]  ">
          <img
            className=" w-[200px] aspect-square translate-y-[25%] translate-x-[8%]"
            src="/images/Fotodeperfil.png"
            alt=""
          />
        </div> */}

        <div className="grid place-items-center md:flex md:justify-center md:items-center md:gap-3">
          <button className="py-2 px-7 rounded-3xl bg-gradient-to-br from-purple-500 via-purple-800 to-blue-700 ">
            Download CV
          </button>
        </div>
        <div className="hidden md:block absolute">
          <img
            className="absolute max-w-[300px] top-[20px] left-[200px] z-30"
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
      </section>
    </section>
  );
};

export default Header;
