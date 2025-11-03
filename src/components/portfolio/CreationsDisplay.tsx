
"use client";

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const creations = [
  "https://iili.io/KlmQj3P.jpg",
  "https://iili.io/KlmQWGV.jpg",
  "https://iili.io/KlmQlyu.jpg",
  "https://iili.io/KlmQ1Tb.jpg",
  "https://iili.io/KlmQGZx.jpg",
  "https://iili.io/KlmQEjj.jpg",
  "https://iili.io/Klmmshg.jpg",
  "https://iili.io/KlmmiTF.jpg",
  "https://iili.io/K0lD6l4.jpg",
  "https://iili.io/K0lDQO7.jpg",
  "https://iili.io/K0lDLRS.jpg",
  "https://iili.io/K0lDgiG.jpg",
];

const cardCycleInterval = 4000; // 4 seconds

const getStyle = (index: number, activeIndex: number, total: number) => {
    const diff = (index - activeIndex + total) % total;
    let distance = Math.min(diff, total - diff);
    
    // This creates the stacking effect by layering cards that are further away
    if (distance > 3) {
        return {
            zIndex: 0,
            transform: 'perspective(1000px) translateX(0px) translateY(0px) rotateZ(0deg) scale(0)',
        };
    }
    
    let xOffset = 0;
    if (diff > total / 2) {
      // Items to the "left" side of the active card
      xOffset = -((total - diff) * 40);
    } else {
      // Items to the "right" side of the active card
      xOffset = diff * 40;
    }

    return {
        zIndex: total - distance,
        transform: `perspective(1000px) translateX(${xOffset}px) translateY(${distance * 15}px) rotateZ(${xOffset / 10}deg) scale(${1 - distance * 0.1})`,
        filter: `blur(${distance > 0 ? 2 : 0}px)`,
    };
}


export function CreationsDisplay() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

     const resetTimeout = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };

    useEffect(() => {
        resetTimeout();
        if (!isPaused) {
            timeoutRef.current = setTimeout(
                () => setActiveIndex((prevIndex) => (prevIndex + 1) % creations.length),
                cardCycleInterval
            );
        }
        return () => resetTimeout();
    }, [activeIndex, isPaused]);


    const paginate = (newDirection: number) => {
        setActiveIndex(prevIndex => (prevIndex + newDirection + creations.length) % creations.length);
    };

    return (
        <div 
          className="relative w-full h-full flex flex-col items-center justify-center min-h-[400px]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
            <div 
                className="relative w-[300px] h-[300px] md:w-[350px] md:h-[350px] flex items-center justify-center cursor-pointer"
                onClick={() => paginate(1)}
            >
                 <AnimatePresence initial={false}>
                    {creations.map((creation, index) => (
                         <motion.div
                            key={creation}
                            className="absolute w-full h-full"
                            style={{
                                transformOrigin: 'bottom center',
                            }}
                            animate={getStyle(index, activeIndex, creations.length)}
                            transition={{
                                type: 'spring',
                                stiffness: 200,
                                damping: 25,
                            }}
                             drag="x"
                             dragConstraints={{ left: 0, right: 0 }}
                             dragElastic={0.2}
                             onDragEnd={(e, { offset }) => {
                                 if (Math.abs(offset.x) > 50) {
                                     paginate(offset.x < 0 ? 1 : -1);
                                 }
                             }}
                        >
                            <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl bg-gray-900/50 border border-gray-800">
                                <Image src={creation} alt={`Creation ${index + 1}`} layout="fill" objectFit="contain" />
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
             {/* Navigation Arrows */}
            <div className="flex gap-4 mt-8">
                <button onClick={() => paginate(-1)} className="z-20 bg-white/50 p-2 rounded-full text-gray-800 hover:bg-white transition-transform duration-300 hover:scale-110">
                    <ChevronLeft size={24} />
                </button>
                <button onClick={() => paginate(1)} className="z-20 bg-white/50 p-2 rounded-full text-gray-800 hover:bg-white transition-transform duration-300 hover:scale-110">
                    <ChevronRight size={24} />
                </button>
            </div>
        </div>
    );
}
