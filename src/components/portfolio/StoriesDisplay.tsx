"use client";

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Pause, Play } from 'lucide-react';

const stories = [
  "https://iili.io/KlbpHR1.jpg",
  "https://iili.io/KlbmmlV.jpg",
  "https://iili.io/KlbmbKQ.jpg",
  "https://iili.io/KlbmZVj.jpg",
  "https://iili.io/KlbmQob.jpg",
  "https://iili.io/KlbmrSS.jpg",
  "https://iili.io/Klbm6H7.jpg",
  "https://iili.io/KlbmPR9.jpg",
];

const storyDuration = 5000; // 5 seconds per story

export function StoriesDisplay() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const paginate = (newDirection: number) => {
        const newIndex = currentIndex + newDirection;
        if (newIndex >= 0 && newIndex < stories.length) {
            setCurrentIndex(newIndex);
            setDirection(newDirection);
        } else if (newIndex >= stories.length) {
            setCurrentIndex(0); // Loop to start
            setDirection(1);
        } else if (newIndex < 0) {
            setCurrentIndex(stories.length - 1); // Loop to end
            setDirection(-1);
        }
    };
    
    const resetTimeout = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };

    useEffect(() => {
        resetTimeout();
        if (!isPaused) {
            timeoutRef.current = setTimeout(
                () => paginate(1),
                storyDuration
            );
        }
        return () => resetTimeout();
    }, [currentIndex, isPaused]);

    const variants = {
        enter: (direction: number) => {
            return {
                x: direction > 0 ? 1000 : -1000,
                opacity: 0
            };
        },
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => {
            return {
                zIndex: 0,
                x: direction < 0 ? 1000 : -1000,
                opacity: 0
            };
        }
    };
    
    const handlePauseToggle = () => {
        setIsPaused(prev => !prev);
    }

    return (
        <div className="relative w-full h-full flex items-center justify-center">
            <div className="relative w-[280px] h-[560px] transform-gpu scale-75 md:scale-90">
                <div className="absolute w-full h-full rounded-[40px] bg-gray-900 border-4 border-gray-700 overflow-hidden soft-shadow">
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.div
                            key={currentIndex}
                            className="w-full h-full absolute"
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.2 }
                            }}
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={1}
                            onDragEnd={(e, { offset, velocity }) => {
                                const swipe = Math.abs(offset.x);
                                if (swipe > 50) {
                                    paginate(offset.x < 0 ? 1 : -1);
                                }
                            }}
                        >
                          <Image src={stories[currentIndex]} alt={`Story ${currentIndex + 1}`} layout="fill" objectFit="cover" />
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation and UI overlays */}
                    <div className="absolute top-2 left-0 right-0 px-2 z-20">
                         <div className="flex items-center gap-1">
                            {stories.map((_, index) => (
                                <div key={index} className="flex-1 h-1 bg-white/30 rounded-full overflow-hidden">
                                    <motion.div
                                        className="h-1 bg-white"
                                        initial={{ width: '0%' }}
                                        animate={{ width: index < currentIndex ? '100%' : (index === currentIndex && !isPaused ? '100%' : '0%') }}
                                        transition={{ duration: index === currentIndex && !isPaused ? storyDuration / 1000 : 0, ease: 'linear' }}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                     <div className="absolute inset-0 z-10 flex justify-between">
                        <div className="w-1/3 h-full" onClick={() => paginate(-1)}></div>
                        <div className="w-1/3 h-full" onClick={handlePauseToggle}></div>
                        <div className="w-1/3 h-full" onClick={() => paginate(1)}></div>
                    </div>
                    
                    <div className="absolute top-4 right-4 z-20">
                        <button onClick={handlePauseToggle} className="text-white bg-black/30 rounded-full p-1.5">
                            {isPaused ? <Play size={16} /> : <Pause size={16} />}
                        </button>
                    </div>

                    {/* Pinhole Camera */}
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 w-4 h-4 bg-gray-900 rounded-full z-30 border-2 border-gray-800"></div>
                </div>
            </div>
        </div>
    );
}
