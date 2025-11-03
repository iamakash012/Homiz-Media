
"use client";

import { useState, useEffect, useRef } from 'react';

export function GlowingCube() {
  const [rotation, setRotation] = useState({ x: -20, y: -20 });
  const [isHovering, setIsHovering] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const cubeRef = useRef<HTMLDivElement>(null);
  const animationFrameId = useRef<number>();
  const rotationRef = useRef(rotation);
  rotationRef.current = rotation;


  useEffect(() => {
    let ambientX = rotationRef.current.x;
    let ambientY = rotationRef.current.y;
    
    const animate = () => {
        if (cubeRef.current && !isActive) {
            if (isHovering) {
                // Faster spin on hover
                ambientY += 0.6;
                ambientX += 0.36;
            } else {
                // Slower ambient rotation
                ambientY += 0.06;
                ambientX += 0.056;
            }
            setRotation({ x: ambientX, y: ambientY });
        }
        animationFrameId.current = requestAnimationFrame(animate);
    };

    animationFrameId.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [isHovering, isActive]);

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => {
    setIsHovering(false);
    setIsActive(false);
  };
  
  const handleMouseDown = () => {
    setIsActive(true);
    setRotation(current => ({
      x: current.x + (Math.random() - 0.5) * 720,
      y: current.y + (Math.random() - 0.5) * 720,
    }));
  };
  
  const handleMouseUp = () => {
    setIsActive(false);
  };

  return (
    <div 
        className="relative opacity-0 md:opacity-50"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
    >
        <div className="new-cube-container">
            <div 
                className={`new-cube-parent ${isHovering ? 'hovering' : ''} ${isActive ? 'active' : ''}`}
                ref={cubeRef}
                style={{
                  transform: `rotateY(${rotation.y}deg) rotateX(${rotation.x}deg)`,
                }}
            >
                <div className="new-cube">
                    <div className="face front"></div>
                    <div className="face back"></div>
                    <div className="face right"></div>
                    <div className="face left"></div>
                    <div className="face top"></div>
                    <div className="face bottom"></div>
                </div>
            </div>
        </div>
    </div>
  );
}
