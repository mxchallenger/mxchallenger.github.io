import React, { useState } from "react";
import { languages, frames, tools, certs, skills } from "../data";
import { HiBadgeCheck, HiChip } from "react-icons/hi";

export default function Skills() {
    const tabs = [
        { label: "Languages", data: languages },
        { label: "Frameworks", data: frames },
        { label: "Tools", data: tools },
        { label: "Certifications", data: certs },
        { label: "Skills", data: skills }
    ];
    const [activeTab, setActiveTab] = useState(tabs[0].label);

    return (
        //Skills Section
        <section id="skills" className="bg-gray-900 text-yellow-400">
            <div className="container px-5 py-10 mx-auto">
                <div className="text-center mb-5">
                        <HiChip className="text-5xl w-10 inline-block mb-4 text-pink-500" />
                        <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-blue-500">
                            Skills & Technologies
                        </h1>
                        <p className="leading-relaxed text-white">
                            All the pretties.
                        </p>
                </div>
                <div className="container px-5 py-10 mx-auto flex flex-wrap">
                <div className="flex flex-col w-full md:w-1/4">
                    {tabs.map((tab, index) => (
                        <a href="#skills"
                            key={index}
                            className={`cursor-pointer py-2 px-2 mb-2 text-lg rounded-xl mt-1 ${
                                activeTab === tab.label ? "bg-gray-800" : "bg-gray-600"
                            }`}
                            onClick={() => setActiveTab(tab.label)}
                        >
                            {tab.label}
                        </a>
                    ))}
                </div>
                <div className="md:w-3/4 w-full px-2">
                    <div className="flex flex-wrap -py-1 bg-gray-800 rounded-2xl px-3 py-2">
                        {tabs.find((tab) => tab.label === activeTab).data.map((item) => (
                            <div key={item} className="p-1 sm:w-1/2 w-full">
                                <div className="rounded flex p-4 h-full items-center">
                                    <HiBadgeCheck className="text-5xl text-yellow-400 w-6 h-6 flex-shrink-0 mr-4" />
                                    <span className="title-font font-medium">
                                        {item}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                </div>
            </div>
        </section>
    );
}
