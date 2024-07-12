import React from "react";
import { HiCode, HiCog, HiStar } from "react-icons/hi";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex flex-wrap px-10 flex-col md:flex-row items-center">
        <div className="w-full flex flex-col md:flex-row justify-between px-5 py-12">
          {/* Left Column */}
          <div className="lg:flex-grow md:w-1/2 lg:pr-6 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-yellow-300">
              Hi, I'm Margeaux.
            </h1>
            <p className="text-sm italic text-yellow-300">
              (pronounced mar•GO)
            </p>
            <h2 className="title-font sm:text-3xl text-2xl mb-4 font-medium">
              <br className="hidden lg:inline-block" />
              <span className="text-purple-500">
                Full-Stack Dev
                <HiCode className="w-6 h-6 inline-block ml-2 mr-2" />
              </span>
              <br className="hidden lg:inline-block" />
              <span className="text-pink-500">
                Magic Maker
                <HiStar className="w-6 h-6 inline-block ml-2 mr-2" />
              </span>
              <br className="hidden lg:inline-block" />
              <span className="text-green-500">
                Problem Solver
                <HiCog className="w-6 h-6 inline-block ml-2" />
              </span>
            </h2>
            <p className="mt-8 leading-relaxed text-purple-200 max-w-md mx-auto md:mx-0">
              I'm a full-stack developer who specializes in turning coffee into code and curiosity into solutions. Armed with a diverse tech stack, a PhD in Googling, and a Master's in figuring it out; I craft applications that are as functional as they are elegant. Off the clock, I'm not only coaching a tiny soccer team or tracing genealogies—I also dabble in graphic design, creating unique t-shirt designs and logos. It's just another way I love to solve creative puzzles!
            </p>
          </div>
          {/* Right Column */}
          <div className="lg:flex-grow md:w-1/2 lg:pr-6 flex flex-col md:items-end md:text-left items-center text-center">
            <img
              className="object-cover rounded w-full max-w-xs md:max-w-md lg:max-w-md object-contain"
              alt="hero"
              src="./coding.svg"
            />
          </div>
        </div>
        </div>
        <div className="w-full flex justify-center gap-4 mt-4 md:mt-0">
          <a
            href="#resume"
            className="inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-500 rounded text-lg">
            Resume
          </a>
          <a
            href="#projects"
            className="inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-500 hover:text-white rounded text-lg">
            Past Projects
          </a>
          <a
            href="https://github.com/mxchallenger"
            className="inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-500 hover:text-white rounded text-lg">
            GitHub
          </a>
        </div>
      {/* </div> */}
    </section>
  );
}
