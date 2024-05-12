import React from "react";
import { HiCode, HiCog, HiStar } from "react-icons/hi";

export default function About() {
  return (
<section id="about">
  <div className="container mx-auto flex px-10 pt-20 md:flex-row flex-col items-right pr-25">
    <div className="lg:flex-grow md:w-1/4 lg:pr-6 items-left text-left md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-yellow-300 text-left">
        Hi, I'm Margeaux.
      </h1>
      <h2 className="title-font text-right sm:text-3xl ml-10 mb-4 font-medium">
        <span className="text-purple-500">
          Full-Stack Dev
          <HiCode className="w-6 h-6 inline-block ml-4" />
        </span>
        <br className="hidden lg:inline-block"/>
        <span className="text-pink-500">
          Magic Maker
          <HiStar className="w-6 h-6 inline-block ml-4" />
        </span>
        <br className="hidden lg:inline-block"/>
        <span className="text-green-500">
          Problem Solver
          <HiCog className="w-6 h-6 inline-block ml-4" />
        </span>
      </h2>
      <br />
      <p className="mb-8 mr-20 leading-relaxed text-purple-200" style={{ maxWidth: "600px" }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
        laborum quasi, incidunt dolore iste nostrum cupiditate voluptas?
        Laborum, voluptas natus?
      </p>
      <div className="flex justify-center">
        <a
          href="#resume"
          className="inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-500 rounded text-lg">
          Resume
        </a>
        <a
          href="#projects"
          className="ml-4 inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-500 hover:text-white rounded text-lg">
          Past Projects
        </a>
      </div>
    </div>
    <div className="lg:flex-grow md:w-1/4 lg:pr-6 items-right text-left flex flex-col md:items-end md:text-left mb-16 md:mb-0 items-right text-center">
      <img
        className="object-cover object-center rounded max-w-lg"
        alt="hero"
        src="./coding.svg"
        style={{ marginTop: "-60px", marginRight: "-10px" }}
      />
    </div>
  </div>
</section>
  );
}