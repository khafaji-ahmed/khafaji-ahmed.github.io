'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 250 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        target.getAttribute('role') === 'button'
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Main Follower */}
      <motion.div
        className="custom-cursor fixed top-0 left-0 w-8 h-8 border border-ink rounded-full pointer-events-none z-[10000] mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovering ? 2.5 : 1,
          backgroundColor: isHovering ? 'var(--ink)' : 'transparent',
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 300, mass: 0.5 }}
      />
      
      {/* Precision Point */}
      <motion.div
        className="custom-cursor fixed top-0 left-0 w-1 h-1 bg-ink rounded-full pointer-events-none z-[10001]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />

      {/* Crosshair Lines for Architectural Feel */}
      <motion.div
        className="custom-cursor fixed top-0 left-0 h-[1px] bg-border pointer-events-none z-[9998] opacity-20"
        style={{
          width: '100vw',
          y: cursorY,
          translateX: 0,
          translateY: '-50%',
        }}
      />
      <motion.div
        className="custom-cursor fixed top-0 left-0 w-[1px] bg-border pointer-events-none z-[9998] opacity-20"
        style={{
          height: '100vh',
          x: cursorX,
          translateX: '-50%',
          translateY: 0,
        }}
      />
    </>
  );
}
