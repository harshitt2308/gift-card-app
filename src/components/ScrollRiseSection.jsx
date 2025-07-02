import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollRiseSection({ children, className = '', style = {} }) {
  const containerRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current || !contentRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(contentRef.current, {
        y: -100, // pixels to rise
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom', // when top of container hits bottom of viewport
          end: 'bottom top',   // when bottom of container hits top of viewport
          scrub: 1.2,          // smooth scrubbing, takes 1.2s to "catch up"
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      style={{ height: '100vh', ...style }}
    >
      <div ref={contentRef}>
        {children}
      </div>
    </section>
  );
}
