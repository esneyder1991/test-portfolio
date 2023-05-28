import React from "react";

const Skills = () => {
  return (
    <div className="mb-20" id="aboutme">
      <div className="flex items-center justify-center">
        <h2 className="py-2 px-20 font-extrabold text-white text-3xl bg-gradient-to-br from-purple-500 via-purple-800 to-blue-700 rounded-lg mb-10">
          SKILLS
        </h2>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-10 mt-10">
        <div className="w-[150px] ">
          <img className="w-full" src="/images/html.png" alt="" />
        </div>
        <div className="w-[150px] ">
          <img className="w-full" src="/images/css.png" alt="" />
        </div>
        <div className="w-[150px] ">
          <img className="w-full" src="/images/javascript.png" alt="" />
        </div>
        <div className="w-[150px] ">
          <img className="w-full" src="/images/react3.png" alt="" />
        </div>
      </div>
      <hr className="border-[1px] m-4 my-10 border-gray-700/50 w-[400px] relative mx-auto md:w-[70%]" />
    </div>
  );
};

export default Skills;
