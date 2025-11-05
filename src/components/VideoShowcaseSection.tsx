"use client";

import React from 'react';

// Data for the video showcase section
const videoItems = [
  {
    title: "YouTube Videos",
    category: "Content Creation",
    image: "https://picsum.photos/seed/youtube/600/800",
    description: "We craft compelling long-form content designed to inform, entertain, and engage your audience effectively on YouTube.",
    width: 600,
    height: 800,
  },
  {
    title: "Website",
    category: "Film Production",
    image: "https://picsum.photos/seed/docu/800/600",
    description: "Our team provides in-depth analysis and post-production where raw footage is transformed into a polished, narrative-driven documentary.",
    width: 800,
    height: 600,
  },
  {
    title: "Shorts & Reels",
    category: "Social Media",
    image: "https://picsum.photos/seed/reels/600/800",
    description: "From short-form videos to engaging stories, we create content that captures attention and drives interaction on all platforms.",
    width: 600,
    height: 800,
  },
   {
    title: "Mid-Level Ads",
    category: "Advertising",
    image: "https://picsum.photos/seed/ads/800/600",
    description: "Strategic mid-level ad campaigns that are designed to target and convert your desired audience with precision.",
    width: 800,
    height: 600,
  },
   {
    title: "Commercials",
    category: "Brand Promotion",
    image: "https://picsum.photos/seed/commercial/600/800",
    description: "Full-scale commercial and advertisement production, from concept to final delivery, for maximum brand impact.",
    width: 600,
    height: 800,
  },
  {
    title: "Drone/FPV Content",
    category: "Aerial Videography",
    image: "https://picsum.photos/seed/drone/800/600",
    description: "Capturing breathtaking aerial footage with high-end drones and FPV technology to give your project a unique perspective.",
    width: 800,
    height: 600,
  },
];

// The card component with the corrected hover effect
const VideoCard = ({ item }) => (
  <div className="group relative overflow-hidden rounded-2xl bg-black border border-neutral-800 h-full w-full">
      <img
          src={item.image}
          alt={item.title}
          width={item.width}
          height={item.height}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
      />
      <div 
        className="absolute inset-0 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100 group-hover:delay-200"
        style={{
          backgroundImage: 'repeating-linear-gradient(90deg, rgba(255, 255, 255, 0.07) 0px, rgba(255, 255, 255, 0.07) 1px, transparent 1px, transparent 100px)'
        }}
      ></div>
      <div 
        className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-700 ease-in-out group-hover:left-full"
        style={{ transform: 'skewX(-25deg)' }}
      ></div>
      <div className="absolute inset-0 bg-black/70 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100 group-hover:delay-200"></div>
      <div className="relative z-10 h-full p-6 flex flex-col">
          <h3 className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-red-500">
              {item.title}
          </h3>
          <div className="mt-auto transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100 group-hover:delay-300 transform translate-y-4 group-hover:translate-y-0">
              <p className="text-sm text-neutral-300">
                  {item.description}
              </p>
          </div>
      </div>
  </div>
);

// The main section component
export const VideoShowcaseSection = () => {
    const videoItemLayoutClasses = [
        "lg:col-span-2",
        "lg:col-span-1",
        "lg:col-span-1 lg:row-span-2",
        "lg:col-span-1",
        "lg:col-span-2",
        "lg:col-span-2",
    ];

    return (
        <section id="video-showcase" className="w-full py-20 md:py-24 bg-[#111111]">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Experienced in Various Video Types</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-[22rem] gap-6">
                    {videoItems.map((item, index) => (
                        <div key={index} className={videoItemLayoutClasses[index] || ""}>
                            <VideoCard item={item} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

