import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouchDevice(true);
      return;
    }

    const onMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const onMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);

    const handleElementHover = () => {
      const handleOver = (e) => {
        const target = e.target.closest('[data-cursor]');
        if (target) {
          const text = target.getAttribute('data-cursor');
          setCursorText(text || '');
          setIsHovered(true);
        } else {
          setCursorText('');
          setIsHovered(false);
        }
      };

      document.addEventListener('mouseover', handleOver);
      return () => document.removeEventListener('mouseover', handleOver);
    };

    const cleanupHover = handleElementHover();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      cleanupHover();
    };
  }, [isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 flex items-center justify-center rounded-full mix-blend-difference"
        animate={{
          x: mousePosition.x - (isHovered ? 40 : 8),
          y: mousePosition.y - (isHovered ? 40 : 8),
          width: isHovered ? 80 : 16,
          height: isHovered ? 80 : 16,
          backgroundColor: isHovered ? 'rgba(253, 251, 247, 0.95)' : '#C86D51',
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 300, mass: 0.5 }}
      >
        {isHovered && cursorText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-[10px] tracking-widest font-sans font-bold uppercase text-charcoal text-center px-1"
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>

      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-40 rounded-full border border-terracotta/40"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          width: 40,
          height: 40,
          scale: isHovered ? 1.5 : 1,
          opacity: isHovered ? 0 : 0.6,
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 150, mass: 0.8 }}
      />
    </>
  );
}
