import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    // Disable on touch devices or if reduced motion is requested
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0 || prefersReducedMotion) {
      setDisabled(true);
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

  if (disabled || !isVisible) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 flex items-center justify-center rounded-full mix-blend-difference"
        animate={{
          x: mousePosition.x - (isHovered ? 36 : 7),
          y: mousePosition.y - (isHovered ? 36 : 7),
          width: isHovered ? 72 : 14,
          height: isHovered ? 72 : 14,
          backgroundColor: isHovered ? 'rgba(253, 251, 247, 0.95)' : '#C86D51',
        }}
        transition={{ type: 'spring', damping: 28, stiffness: 320, mass: 0.4 }}
      >
        {isHovered && cursorText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-xs font-sans font-medium text-charcoal text-center px-1"
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>

      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-40 rounded-full border border-terracotta/40"
        animate={{
          x: mousePosition.x - 18,
          y: mousePosition.y - 18,
          width: 36,
          height: 36,
          scale: isHovered ? 1.4 : 1,
          opacity: isHovered ? 0 : 0.6,
        }}
        transition={{ type: 'spring', damping: 22, stiffness: 180, mass: 0.7 }}
      />
    </>
  );
}
