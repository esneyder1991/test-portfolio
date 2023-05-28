import React from "react";

const Projects = () => {
  return (
    <section className="max-w-[800px] mx-auto mb-20" id="projects">
      <div className="flex items-center justify-center">
        <h2 className="py-2 px-10 font-extrabold text-white text-3xl bg-gradient-to-br from-purple-500 via-purple-800 to-blue-700 rounded-lg mb-10">
          MY PROJECTS
        </h2>
      </div>
      <article className="flex flex-wrap items-center justify-center gap-10 mt-10">
        <div className="w-[250px] grid gap-8 ">
          <img className="rounded-lg" src="/images/mascotas2.jpg" alt="" />
          <button className="py-2 px-7 rounded-3xl bg-gradient-to-br from-purple-500 via-purple-800 to-blue-700 ">
            <a
              className="text-white"
              href="https://blog-esneidermiranda.netlify.app/"
              target="_blank"
            >
              Pet Blog
            </a>
          </button>
        </div>
        <div className="w-[170px] aspect-square grid gap-8">
          <img className="rounded-lg" src="/images/academlo.jpg" alt="" />
          <button className="py-2 px-7 rounded-3xl bg-gradient-to-br from-purple-500 via-purple-800 to-blue-700 ">
            <a
              className="text-white"
              href="https://iridescent-meringue-121bfb.netlify.app"
              target="_blank"
            >
              E-commerce
            </a>
          </button>
        </div>
        <div className="w-[300px] aspect-square grid  translate-y-10">
          <img
            className="rounded-lg bg-blue-900"
            src="/images/cookies.png"
            alt=""
          />
          <button className="h-10 px-7 rounded-3xl bg-gradient-to-br from-purple-500 via-purple-800 to-blue-700 -translate-y-3">
            <a
              className="text-white "
              href="https://dynamic-toffee-02c48f.netlify.app"
              target="_blank"
            >
              Fortune Cookies Messages
            </a>
          </button>
        </div>
        <div className="w-[250px] aspect-square grid gap-8 ">
          <img className="rounded-lg" src="/images/clima.jpg" alt="" />
          <button className="py-2 px-7 rounded-3xl bg-gradient-to-br from-purple-500 via-purple-800 to-blue-700 ">
            <a
              className="text-white"
              href="https://dynamic-mermaid-8b9466.netlify.app"
              target="_blank"
            >
              Climate application
            </a>
          </button>
        </div>
        <div className="w-[300px] aspect-square grid  translate-y-10 gap-7">
          <img
            className="rounded-lg h-[150px] w-[350px]"
            src="/images/Rickandmorty.png"
            alt=""
          />
          <button className="h-10 px-15 rounded-3xl bg-gradient-to-br from-purple-500 via-purple-800 to-blue-700 -translate-y-7">
            <a
              className="text-white"
              href=" https://unique-maamoul-09d1cb.netlify.app"
              target="_blank"
            >
              Rick and Morty Multiverse Catalog
            </a>
          </button>
        </div>
        <div className="w-[250px] aspect-square grid gap-8 ">
          <img className="rounded-lg" src="/images/registro.jpg" alt="" />
          <button className="h-10 px-15 rounded-3xl bg-gradient-to-br from-purple-500 via-purple-800 to-blue-700 ">
            <a
              className="text-white"
              href="https://prismatic-marshmallow-a1de6c.netlify.app"
              target="_blank"
            >
              User Account Registration
            </a>
          </button>
        </div>
        <div className="w-[250px] aspect-square grid gap-8 ">
          <img
            className="rounded-lg w-[180px] h-[180px] mx-auto"
            src="/images/pokedex.jpg"
            alt=""
          />
          <button className="h-10 px-15 rounded-3xl bg-gradient-to-br from-purple-500 via-purple-800 to-blue-700 ">
            <a
              className="text-white"
              href="https://papaya-bunny-0f897a.netlify.app "
              target="_blank"
            >
              Pokémon Type Gallery
            </a>
          </button>
        </div>
      </article>
      <hr className="border-[1px] m-4 my-10 border-gray-700/50 w-[400px] relative mx-auto md:w-[70%]" />
    </section>
  );
};

export default Projects;
