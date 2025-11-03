"use client";

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';

// Your existing custom hook (no changes needed here)
export function useScrollAnimation() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return { ref, isVisible };
}


// The updated AboutSection component
export function AboutSection() {
  // Hook for the text section
  const { ref: textRef, isVisible: isTextVisible } = useScrollAnimation();
  // A new instance of the hook for the video section
  const { ref: videoRef, isVisible: isVideoVisible } = useScrollAnimation();

  return (
    <section className="relative w-full bg-black text-white py-24 md:py-32 overflow-hidden">
      <div
        className="absolute inset-0 -z-10 opacity-50"
        style={{
          backgroundImage: 'repeating-linear-gradient(90deg, #333 0px, #333 1px, transparent 1px, transparent 150px)'
        }}
      />

      {/* ------ TEXT CONTENT SECTION ------ */}
      <div
        ref={textRef} // Attach the ref to the container
        className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
      >
        {/* Left Column: Title and Button */}
        <div className={cn(
          "flex flex-col gap-8 transition-all duration-700 ease-in-out",
          isTextVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          <h2 className="text-4xl md:text-5xl font-bold">
            About Our Agency
          </h2>
          <Button asChild size="lg" className="self-start bg-red-600 text-white rounded-full text-base font-semibold px-8 py-6 shadow-lg shadow-red-500/30 transition-transform duration-300 hover:scale-105 hover:bg-red-700">
            <Link href="/about">Know More About Us</Link>
          </Button>
        </div>

        {/* Right Column: Descriptive Text */}
        <div className={cn(
          "flex flex-col gap-6 transition-all duration-700 ease-in-out delay-200", // Adjusted delay
          isTextVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          <p className="text-xl md:text-2xl text-neutral-200">
              Homiz Media is a top-tier Social Media & Digital Production Agency based in Nagpur, delivering creative storytelling, brand strategy, and high-quality content that drives growth.          </p>
          <p className="text-base text-neutral-400">
            At Homiz Media, we create commercial shoots, social media content, and brand stories that stand out. Whether you need to boost your online presence or tell a compelling brand story, we bring innovation, passion, and precision to every project.
          </p>
        </div>
      </div>

               {/* ------ VIDEO SECTION START ------ */}
               <div
        ref={videoRef} // Attach the second ref here
        className={cn(
          "container mx-auto px-4 mt-24 transition-all duration-1000 ease-in-out",
          isVideoVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
        )}
      >
        <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-2xl shadow-red-900/20">
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            {/* IMPORTANT: Update this src path to your video file */}
            <source src="https://framerusercontent.com/assets/iTJ1qcoon0RZkRg95b89yuMHk8.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      {/* ------ VIDEO SECTION END ------ */}


    </section>
  );
}