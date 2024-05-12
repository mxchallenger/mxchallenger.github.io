import React from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import Card from './Card'; 
import { resume } from '../data';
import { HiBriefcase } from "react-icons/hi";


export default function Resume() {
  return (
    <section id="projects" className="text-green-500 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <HiBriefcase className="text-5xl mx-auto inline-block w-10 mb-4 text-purple-500" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-pink-500">
            Experiences
          </h1>
        </div>
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 300: 2, 900: 3,}}
      >
        <Masonry
          columnsCount={3}
           gutter="25px">
          {resume.map((item, index) => (
            <Card 
              key={index}
              title={item.title}
              subtitle1={item.subtitle1}
              subtitle2={item.subtitle2}
              subtitle3={item.subtitle3}
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