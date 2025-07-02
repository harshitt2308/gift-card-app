import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const neonColor = 'rgba(168, 85, 247, 0.7)'; // Soft purple neon

export default function CursorGlow() {
  const [isMobile, setIsMobile] = useState(false);

  // Track cursor position
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const smoothX = useSpring(x, { stiffness: 120, damping: 18 });
  const smoothY = useSpring(y, { stiffness: 120, damping: 18 });

  // Magnetic subtle pull
  useEffect(() => {
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsMobile(true);
    }
  }, []);

  useEffect(() => {
    if (isMobile) return;

    function onMouseMove(e) {
      x.set(e.clientX);
      y.set(e.clientY);
    }
    window.addEventListener('mousemove', onMouseMove);

    function onMouseMoveMagnetic(e) {
      const interactiveEls = document.querySelectorAll('[data-cursor-magnetic]');
      interactiveEls.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const distX = e.clientX - centerX;
        const distY = e.clientY - centerY;
        const distance = Math.sqrt(distX * distX + distY * distY);
        const maxDistance = 120;
        if (distance < maxDistance) {
          const strength = (maxDistance - distance) / maxDistance;
          el.style.transform = `translate(${distX * 0.1 * strength}px, ${distY * 0.1 * strength}px)`;
        } else {
          el.style.transform = 'translate(0,0)';
        }
      });
    }

    window.addEventListener('mousemove', onMouseMoveMagnetic);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousemove', onMouseMoveMagnetic);
      document.querySelectorAll('[data-cursor-magnetic]').forEach((el) => {
        el.style.transform = 'translate(0,0)';
      });
    };
  }, [isMobile, x, y]);

  if (isMobile) return null;

  return (
    <>
      {/* Outer subtle glow ring */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
          width: 60,
          height: 60,
          borderRadius: '50%',
          pointerEvents: 'none',
          background: 'rgba(168, 85, 247, 0.1)',
          boxShadow: `0 0 20px 8px ${neonColor}`,
          zIndex: 9997,
        }}
      />

      {/* Inner solid dot */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
          width: 14,
          height: 14,
          borderRadius: '50%',
          pointerEvents: 'none',
          background: neonColor,
          boxShadow: `0 0 8px 3px ${neonColor}`,
          zIndex: 9998,
        }}
      />
    </>
  );
}
