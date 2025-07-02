import React, { useRef, useEffect } from 'react';

const ORB_COUNT = 40;
const COLORS = [
  'rgba(168,85,247,0.15)',   // lavender neon
  'rgba(236,72,153,0.12)',   // blush pink
  'rgba(34,211,238,0.12)',   // cyan blue
  'rgba(255,255,255,0.08)',  // soft white
];

function randomRange(min, max) {
  return Math.random() * (max - min) + min;
}

export default function FloatingOrbs() {
  const canvasRef = useRef(null);
  const orbs = useRef([]);
  const mouse = useRef({ x: 0.5, y: 0.5 }); // center by default

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    // Create aesthetic orbs
    orbs.current = Array.from({ length: ORB_COUNT }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: randomRange(12, 36),
      baseRadius: 0,
      speedX: randomRange(-0.07, 0.07),
      speedY: randomRange(-0.03, 0.03),
      alpha: randomRange(0.08, 0.2),
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      pulseSpeed: randomRange(0.002, 0.005),
      pulsePhase: Math.random() * Math.PI * 2,
      offsetFactor: randomRange(5, 20), // small movement on mouse
    }));

    function drawOrb(orb, t) {
      const pulse = Math.sin(t * orb.pulseSpeed + orb.pulsePhase) * 3;
      const radius = orb.radius + pulse;

      const offsetX = (mouse.current.x - 0.5) * orb.offsetFactor;
      const offsetY = (mouse.current.y - 0.5) * orb.offsetFactor;

      const x = orb.x + offsetX;
      const y = orb.y + offsetY;

      const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
      gradient.addColorStop(0, orb.color);
      gradient.addColorStop(1, 'transparent');

      ctx.beginPath();
      ctx.fillStyle = gradient;
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();
    }

    let t = 0;

    function animate() {
      ctx.clearRect(0, 0, width, height);
      orbs.current.forEach(orb => {
        orb.x += orb.speedX;
        orb.y += orb.speedY;

        // wrap edges
        if (orb.x - orb.radius > width) orb.x = -orb.radius;
        if (orb.x + orb.radius < 0) orb.x = width + orb.radius;
        if (orb.y - orb.radius > height) orb.y = -orb.radius;
        if (orb.y + orb.radius < 0) orb.y = height + orb.radius;

        drawOrb(orb, t);
      });

      t += 1;
      requestAnimationFrame(animate);
    }

    animate();

    const onResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const onMouseMove = (e) => {
      mouse.current.x = e.clientX / window.innerWidth;
      mouse.current.y = e.clientY / window.innerHeight;
    };

    window.addEventListener('resize', onResize);
    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        background: 'transparent',
        mixBlendMode: 'screen', // better blending of soft light
      }}
    />
  );
}
