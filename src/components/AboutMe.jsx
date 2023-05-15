import React from "react";

const AboutMe = () => {
  return (
    <section className="flex justify-center items-center w-[700px] mt-16">
      <div className="relative  max-w-none ">
        {" "}
        <img className="mx-auto w-full" src="/images/aboutme.png" alt="" />
        <div className="text-white  text-xs absolute top-[30%] left-[58%] transform -translate-x-1/2   w-[170px] h-[300px]">
          <h3 className="font-bold text-lg mb-4">About me</h3>
          <p>
            My name is Esneider Miranda. I'm a web designer based in Colombia.
            I'm currently completing my academic training and polishing my
            skills. I'm passionate about creating highly enjoyable digital
            experiences.{" "}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
