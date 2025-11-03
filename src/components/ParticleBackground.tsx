"use client";

import { useEffect, useRef } from 'react';

export function ParticleBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const createParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'particle';
      const size = Math.random() * 3 + 1;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100 + 100}%`; // Start below the screen
      particle.style.animationDuration = `${Math.random() * 15 + 15}s`;
      particle.style.animationDelay = `${Math.random() * 5}s`;
      container.appendChild(particle);

      particle.addEventListener('animationend', () => {
        particle.remove();
      });
    };

    const interval = setInterval(createParticle, 200);

    return () => {
      clearInterval(interval);
      if(container) {
          container.innerHTML = "";
      }
    };
  }, []);

  return <div ref={containerRef} className="absolute inset-0 z-0" />;
}
