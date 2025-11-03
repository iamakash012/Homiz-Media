
"use client";

import { useState, useEffect, useRef } from 'react';

export function useActiveSection(sectionIds: string[], options?: IntersectionObserverInit) {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    const observer = new IntersectionObserver(
      (entries) => {
        let currentActiveSection: string | null = null;
        let maxIntersectionRatio = 0;

        entries.forEach(entry => {
          if (entry.isIntersecting && entry.intersectionRatio > maxIntersectionRatio) {
            maxIntersectionRatio = entry.intersectionRatio;
            currentActiveSection = entry.target.id;
          }
        });
        
        if(currentActiveSection) {
            setActiveSection(currentActiveSection)
        } else {
            // if nothing is intersecting, check scroll position
             if (window.scrollY < 400) {
                setActiveSection(null);
             }
        }
      },
      {
        rootMargin: '-30% 0px -70% 0px',
        threshold: 0,
        ...options,
      }
    );

    observerRef.current = observer;

    sectionIds.forEach(id => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [sectionIds, options]);

  return activeSection;
}
