import React, { useState } from "react";
import { websites, apps } from "../data";
import { HiCode } from "react-icons/hi";
import Modal from 'react-modal';

export default function Projects() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const openModal = (image) => {
    setCurrentImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setCurrentImage("");
  };

  return (
    <section id="projects" className="text-green-500 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <HiCode className="text-5xl mx-auto inline-block w-10 text-blue-500" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-green-500">
            Things I've Crafted
          </h1>
          <p className="lg mx-auto leading-relaxed text-base text-white">
            Whether it's a software challenge or a creative endeavor, I'm always up for a good project.
          </p>
          <HiCode className="text-5xl mx-auto inline-block w-10 text-blue-500" />
        </div>        
        <div className="flex flex-col text-left w-full mt-20 mb-10">
          <h1 className="sm:text-2xl font-medium title-font mb-4 text-pink-500">
            Website and API Development
          </h1>
          <p className="lg mx-auto leading-relaxed text-base text-white">
            Most of these websites are full-stack websites with various technologies.  Each stack is unique and provides a different set of challenges and solutions. I prefer creating full-stack sites because I love building APIs and databases and they allow me to show off my architectural muscle and design skills. Some of my projects are just front-end with external API integrations, but I usually try to include a back-end to show off my full-stack skills unless I need to rely on outside data.
          </p>
        </div>  
        <div className="flex flex-wrap -m-8">
          {websites.map((website) => (
            <div
              key={website.image}
              className="sm:w-1/2 w-100 p-4 group"
              onClick={() => openModal(website.image)}
              style={{ cursor: "pointer" }}
            >
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center opacity-0 group-hover:opacity-100"
                  src={website.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 group-hover:opacity-0">
                  <h2 className="tracking-widest text-sm title-font font-medium text-yellow-400 mb-1">
                    {website.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {website.title}
                  </h1>
                  <p className="leading-relaxed">{website.description}</p>
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
  {apps.map((app) => (
    <div
      key={app.image}
      className="lg:w-1/3 sm:w-1/2 w-100 p-4 group"
      onClick={() => openModal(app.image)}
      style={{ cursor: "pointer" }}
    >
      <div className="flex relative">
        <img
          alt="gallery"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-0 group-hover:opacity-100"
          src={app.image}
        />
        <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 group-hover:opacity-0">
          <h1 className="title-font text-lg font-medium text-yellow-400 mb-3">
            {app.title}
          </h1>
          <p className="text-purple-200 leading-relaxed">{app.description}</p>
        </div>
      </div>
    </div>
  ))}
</div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#333', 
            border: '1px solid #ccc', 
            padding: '20px', 
            zIndex: '1000',
            maxWidth: '90%',
            maxHeight: '90%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          },
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
            zIndex: '1000'
          }
        }}
      >
        <div className="flex justify-center items-center w-full h-full">
          <img src={currentImage} alt="Full size" className="max-w-full max-h-full object-contain" />
        </div>
        <div className="mt-4 p-2 border-t border-gray-400 text-white">
          <p>Future content or buttons can be added here.</p>
        </div>
      </Modal>
    </section>
  );
}
