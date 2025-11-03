"use client";

import React from 'react';

export const VideoCard = ({ item }) => {
  return (
    <div 
      className="group relative overflow-hidden rounded-2xl bg-black border border-neutral-800 break-inside-avoid" 
      style={{ aspectRatio: '4 / 5' }}
    >
      {/* 1. Base Image - Fades to zero opacity on hover */}
      <img
          src={item.image}
          alt={item.title}
          width={item.width}
          height={item.height}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out group-hover:opacity-0"
      />
      
      {/* Stripe Overlay - Appears only on hover */}
      <div 
        className="absolute inset-0 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100 group-hover:delay-200"
        style={{
          backgroundImage: 'repeating-linear-gradient(90deg, rgba(255, 255, 255, 0.07) 0px, rgba(255, 255, 255, 0.07) 1px, transparent 1px, transparent 100px)'
        }}
      ></div>

      {/* 2. Light Ray Effect */}
      <div 
        className="absolute top-0 -left-full h-full w-1/2 
                   bg-gradient-to-r from-transparent via-white/30 to-transparent 
                   transition-all duration-700 ease-in-out group-hover:left-full"
        style={{ transform: 'skewX(-25deg)' }}
      ></div>

      {/* 3. Content Overlay */}
      <div className="relative z-10 h-full p-6 flex flex-col">
          <h3 className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-red-500">
              {item.title}
          </h3>

          {/* Description - Fades and slides in after the darkening */}
          <div className="mt-auto transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100 group-hover:delay-300 transform translate-y-4 group-hover:translate-y-0">
              <p className="text-sm text-neutral-300">
                  {item.description}
              </p>
          </div>
      </div>
  </div>
  );
};

export default VideoCard;

