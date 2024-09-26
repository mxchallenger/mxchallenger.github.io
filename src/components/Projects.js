import React, { useState } from "react";
import { websites, apps, graphics } from "../data";
import { HiCode } from "react-icons/hi";
import { WebModal, AppModal, GraphicModal } from "./Modals";

export default function Projects() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");
  const [currentUrl, setCurrentUrl] = useState("");
  const [currentDescription, setCurrentDescription] = useState("");
  const [currentTitle, setCurrentTitle] = useState("");
  const [stack, setStack] = useState("");
  const [modalType, setModalType] = useState("");


  const openModal = (type, image, url, description, stack, title = "") => {
    // Log all the values being passed to the modal
    // console.log("Modal Type:", type);
    // console.log("Image:", image);
    // console.log("URL:", url);
    // console.log("Description:", description);
    // console.log("Stack:", stack);
    // console.log("Title:", title);
  
    // Set the modal values
    setModalType(type);
    setCurrentImage(image || "");
    setCurrentUrl(url || "");
    setCurrentDescription(description || "");
    setStack(stack || "");
    setCurrentTitle(title || "");
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setCurrentImage("");
    setCurrentUrl("");
    setCurrentDescription("");
    setStack("");
    setCurrentTitle("");
  };

  const truncateText = (text, limit) => {
    if (text.length > limit) {
      return text.slice(0, limit) + "...";
    }
    return text;
  };

  return (
    <section id="projects" className="text-green-500 bg-gray-900 body-font">
      <div className="container px-5 py-5 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <HiCode className="text-5xl mx-auto inline-block w-10 text-blue-500" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-green-500">
            Things I've Crafted
          </h1>
          <p className="lg mx-auto leading-relaxed text-base text-white">
            Whether it's a software challenge, building furniture or a creative endeavor, I'm always up for a good project.
          </p>
        </div>
        <div className="flex flex-col text-left w-full mt-20 mb-10">
          <h1 className="sm:text-2xl font-medium title-font mb-4 text-pink-500">
            Website and API Development
          </h1>
          <p className="lg mx-auto leading-relaxed text-base text-white">
            Most of these websites are full-stack websites with various technologies. Each stack is unique and provides a different set of challenges and solutions. I prefer creating full-stack sites because I love building APIs and databases and they allow me to show off my architectural muscle and design skills. Some of my projects are just front-end with external API integrations, but I usually try to include a back-end to show off my full-stack skills unless I need to rely on outside data.
          </p>
        </div>
        <div className="flex flex-wrap -m-8">
  {websites.map((website, index) => (
    <div
    key={`${website.image}-${index}`}
      className="sm:w-1/2 w-100 p-2 group"
      onClick={() => openModal("website", website.image, website.link, website.description, website.stack)}
      style={{ cursor: "pointer" }}
    >
      <div className="flex relative min-h-56 ">
        <img
          alt="gallery"
          className="absolute inset-0 w-full h-full object-cover object-top opacity-0 group-hover:opacity-100"
          src={website.image}
        />
        <div className="px-8 py-6 relative z-10 w-full border-4 border-gray-800 bg-gray-900 group-hover:opacity-0">
          <h2 className="tracking-widest text-sm title-font font-normal text-yellow-400 mb-1">
            {website.subtitle}
          </h2>
          <h1 className="title-font text-xl font-semibold text-white mb-3">
            {website.title}
          </h1>
          <p className="text-justify leading-relaxed">{website.description}</p>
        </div>
      </div>
    </div>
  ))}
</div>
        <div className="flex flex-col text-left w-full mt-20 mb-10">
          <h1 className="sm:text-2xl font-medium title-font mb-8 text-purple-500">
            Mobile Applications
          </h1>
          <p className="lg mx-auto leading-relaxed text-base text-white">
            Built using Expo and React Native, these mobile apps are some of my proudest creations and deployed on both iOS and Android using the full extent of both app stores.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {apps.map((app, index) => (
            <div
            key={`${app.image}-${index}`}
              className="lg:w-1/3 sm:w-1/2 w-full p-2 group" 
              onClick={() => openModal("app", app.image, app.link, app.description, app.stack)}
              style={{ cursor: "pointer" }}
            >
              <div className="flex relative min-h-80">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center opacity-0 group-hover:opacity-100"
                  src={app.image}
                />
                <div className="absolute inset-0 px-6 py-6 z-10 w-full h-full border-4 border-gray-800 bg-gray-900 group-hover:opacity-0">
                  <h1 className="title-font text-lg font-medium text-yellow-400 mb-3">
                    {app.title}
                  </h1>
                  <p className="text-purple-200 leading-relaxed text-left">{truncateText(app.description, 150)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col text-left w-full mt-20 mb-10">
          <h1 className="sm:text-2xl font-medium title-font mb-8 text-blue-500">
            Graphics Work
          </h1>
          <p className="lg mx-auto leading-relaxed text-base text-white">
            At the core of creating is a love for design. I've been creating graphics for years and have a passion for creating beautiful and functional designs. I've created logos, business cards, branding materials and apparel and other textile merchandies for clients and friends. I've also created graphics for websites and social media. I love creating graphics and I'm always up for new projects to work on.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {graphics.map((graphic, index) => (
            <div
            key={`${graphic.image}-${index}`}
              className="lg:w-1/4 sm:w-1/3 w-full p-2 group"
              onClick={() => openModal("graphic", graphic.image, "", graphic.description, "", graphic.title,)}
              style={{ cursor: "pointer" }}
            >
              <div className="flex relative min-h-80">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center opacity-100 group-hover:opacity-0"
                  src={graphic.image}
                />
                <div className="absolute inset-0 px-6 py-6 z-10 w-full h-full border-4 border-gray-800 bg-gray-900 opacity-0 group-hover:opacity-100 flex items-center justify-center">
                  <div>
                    <h1 className="title-font text-lg font-medium text-yellow-400 mb-3">
                      {graphic.title}
                    </h1>
                    <p className="text-purple-200 leading-relaxed text-left">
                      {graphic.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
              {/* Modals */}
      {modalType === "website" && (
        <WebModal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          image={currentImage}
          url={currentUrl}
          description={currentDescription}
          stack={stack}
        />
      )}
      {modalType === "app" && (
        <AppModal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          image={currentImage}
          url={currentUrl}
          description={currentDescription}
          stack={stack}
        />
      )}
      {modalType === "graphic" && (
        <GraphicModal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          title={currentTitle}
          image={currentImage}
          description={currentDescription}
        />
      )}
    </section>
  );
}
