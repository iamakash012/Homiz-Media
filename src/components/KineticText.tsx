"use client";

import { useState, useEffect, useRef } from 'react';

export function KineticText() {
  const [scale, setScale] = useState(0.8);
  const [opacity, setOpacity] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const { top } = containerRef.current.getBoundingClientRect();
        const screenHeight = window.innerHeight;
        
        // Start the animation when the top of the element is visible
        const scrollPercent = Math.max(0, Math.min(1, (screenHeight - top) / (screenHeight * 0.75)));
        
        // Scale the text from 80% to 100% as it comes into view
        const newScale = 0.8 + scrollPercent * 0.2;
        
        // Fade in the text
        const newOpacity = Math.pow(scrollPercent, 2);

        setScale(newScale);
        setOpacity(newOpacity);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Run on mount to set initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    // A tall container is needed for the scroll effect to work
  <div ref={containerRef} className="relative w-full py-24 md:py-32 flex items-center justify-center overflow-hidden">
        {/* The "About Us" content that scales and fades in */}
      <div 
        className="text-center p-4"
        style={{
          transform: `scale(${scale})`,
          opacity: opacity,
          transition: 'transform 0.1s linear, opacity 0.1s linear',
        }}
      >
        <h2 className="font-headline uppercase  text-3xl md:text-5xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-foreground to-transparent mb-10">
          About Us
        </h2>
        <p className="max-w-2xl text-xl text-foreground/80">
          We are a creative media house specializing in bringing bold ideas to life through compelling visuals and strategic storytelling.
        </p>
      </div>
    </div>
  );
}