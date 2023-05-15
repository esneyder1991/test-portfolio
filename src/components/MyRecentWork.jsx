import React from "react";

const MyRecentWork = () => {
  return (
    <section className="grid place-items-center ">
      <div className="md:hidden">
        <img src="/images/minWorkpage.png" alt="" />
      </div>

      <div className="hidden max-w-[900px] md:block ">
        <img src="/images/maxWorkpage.png" alt="" />
      </div>
    </section>
  );
};

export default MyRecentWork;
