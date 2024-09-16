import React, { useState } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import Card from './Card'; 
import { resume } from '../data';
import { HiBriefcase } from "react-icons/hi";

export default function Resume() {
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const [shuffledResume, setShuffledResume] = useState(shuffleArray([...resume]));

  const handleShuffle = () => {
    setShuffledResume(shuffleArray([...resume]));
  };

  return (
    <section id="resume" className="text-green-500 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <HiBriefcase className="text-5xl mx-auto inline-block w-10 mb-4 text-purple-500" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-pink-500">
            How I Ended Up Here (Don't Ask)
          </h1>
          <div className="w-full flex justify-center gap-4 mt-4 md:mt-0">
          <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-500 rounded text-lg">
              Resume PDF
            </a>
            <button
              onClick={handleShuffle}
              className="inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-500 rounded text-lg">
              Shuffle Cards
            </button>
          </div>
        </div>
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 300: 2, 900: 3 }}
        >
          <Masonry
            columnsCount={3}
            gutter="25px">
            {shuffledResume.map((item, index) => (
              <Card
              key={index}
              title={item.title}
              organization={item.organization}  // Ensure this is being passed
              location={item.location}
              degree={item.degree}
              dates={item.dates}
              description={item.description}
              image={item.image}
              link={item.link}
              category={item.category}
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </section>
  );
}
