import React from "react";

const Footer = () => {
  return (
    <section className="relative  text-white md:bg-indigo-900/60  mt-[100px] md:py-12">
      <div className="absolute right-0 bottom-0 translate-x-1/2 translate-y-[4%] z-10 lg:translate-y-[15%] lg:translate-x-[25%]   lg:w-[1000px] w-[1000px] ">
        <img src="/images/footer.png" alt="" />
      </div>

      <article className="grid gap-4 md:gap-14  place-content-center mb-4 p-3 md:flex">
        <div>
          <i className="bx bx-home"></i>
          <span className="ml-4">Home</span>
        </div>

        <div>
          <i className="bx bx-user"></i>
          <span className="ml-4">About me</span>
        </div>

        <div>
          <i className="bx bxs-briefcase-alt"></i>
          <span className="ml-4">Work</span>
        </div>

        <div>
          <i className="bx bxs-phone"></i>
          <span className="ml-4">Contact</span>
        </div>
      </article>

      <article className="flex gap-6 justify-center mt-10">
        <div className="bg-blue-600 rounded-full  h-6 aspect-square text-center">
          <img src="/images/Instagram.png" alt="" />
        </div>
        <div className="bg-blue-600 rounded-full  h-6 aspect-square text-center">
          <img src="/images/Twitter.png" alt="" />
        </div>
        <div className="bg-blue-600 rounded-full  h-6 aspect-square text-center">
          <img src="/images/Linkedin.png" alt="" />
        </div>
        <div className="bg-blue-900 rounded-full  h-6 aspect-square text-center justify-center">
          <img src="/images/Facebook.png" alt="" />
        </div>
        <div className="bg-red-500 rounded-full  h-6 aspect-square text-center justify-center">
          <img src="/images/YouTube.png" alt="" />
        </div>
      </article>
      <div>
        <hr className=" border-[1px] m-4 border-gray-700/50 w-[230px] relative mx-auto md:w-[90%]" />
      </div>
    </section>
  );
};

export default Footer;
