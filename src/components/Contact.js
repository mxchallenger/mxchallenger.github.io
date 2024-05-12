import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <div className="lg:w-1/2 px-6">
            <h2 className="title-font font-semibold text-white tracking-widest text-xs">
              CONTACT ME
            </h2>
            <div className="mt-4">
              <a href="mailto:margeaux@email.com" className="text-pink-500 leading-relaxed flex items-center">
                <MdEmail className="w-6 h-6 inline-block mr-2" />
                <span>margeaux@email.com</span>
              </a>
            </div>
            <div className="mt-4">
              <a href="https://github.com/mxchallenger" className="text-pink-400 leading-relaxed flex items-center">
                <FaGithub className="w-6 h-6 inline-block mr-2" />
                <span>Github Profile</span>
              </a>
            </div>
            <div className="mt-4">
              <a href="https://www.linkedin.com/in/mxchallenger/" className="text-pink-300 leading-relaxed flex items-center">
                <FaLinkedin className="w-6 h-6 inline-block mr-2" />
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
