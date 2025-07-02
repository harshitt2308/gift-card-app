import React, { useState, useEffect, useRef } from 'react';
import './GiftCardReveal.css';

export default function GiftCardReveal({ image, title, message, price, details = [] }) {
  const [flipped, setFlipped] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const [hoverFlip, setHoverFlip] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    setIsTouch(hasTouch);
  }, []);

  // Handle mouse movement to toggle hover flip when mouse in upper half
  const handleMouseMove = (e) => {
    if (isTouch || flipped) return;
    const rect = cardRef.current.getBoundingClientRect();
    const mouseY = e.clientY - rect.top;
    const halfHeight = rect.height / 2;
    setHoverFlip(mouseY <= halfHeight);
  };

  // Remove hoverFlip when mouse leaves
  const handleMouseLeave = () => {
    if (!flipped) setHoverFlip(false);
  };

  // Toggle flip on touch or when clicking details/back buttons
  const toggleFlip = (e) => {
    e.stopPropagation();
    setFlipped((prev) => !prev);
    setHoverFlip(false); // clear hover flip on click flip
  };

  // On touch devices, flip on whole card click
  const handleCardClick = () => {
    if (isTouch) setFlipped((prev) => !prev);
  };

  return (
    <div
      ref={cardRef}
      className={`gift-card-flip ${flipped ? 'flipped' : ''} ${isTouch ? 'touch-device' : ''} ${hoverFlip ? 'hover-flip' : ''}`}
      onClick={handleCardClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter') toggleFlip(e); }}
      aria-pressed={flipped}
    >
      <div className="card-inner">
        {/* Front Side */}
        <div className="card-front bg-white/5 border border-neon rounded-xl shadow-lg backdrop-blur-lg overflow-hidden relative">
          <img src={image} alt={title} className="w-full h-48 object-cover" />
          <div className="p-4 text-left">
            <h3 className="text-lg font-semibold text-white">{title}</h3>
            <p className="text-sm text-gray-400 mb-1">{message}</p>
            {price && <p className="text-neon font-semibold mb-3">₹{price}</p>}
            <div className="action-buttons mt-4 flex justify-between items-center">
              <a
                href={`https://wa.me/91XXXXXXXXXX?text=I'm%20interested%20in%20${encodeURIComponent(title)}`}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-magnetic
                className="inline-block bg-neon text-black font-semibold px-4 py-2 rounded-full hover:scale-105 transition mt-2"
                onClick={(e) => e.stopPropagation()} // Prevent flip toggle when clicking button
              >
                Order on WhatsApp
              </a>
            </div>
            {/* Details toggle button on front */}
            <button
              onClick={toggleFlip}
              className="details-btn"
              aria-label="Show details"
              type="button"
            >
              Details
            </button>
          </div>
        </div>

        {/* Back Side */}
        <div className="card-back bg-white/5 border border-neon rounded-xl shadow-lg backdrop-blur-lg p-4 text-left relative">
          <h4 className="text-neon text-lg font-semibold mb-2">{title}</h4>
          <p className="text-sm text-gray-300 mb-3">{message}</p>
          <ul className="text-xs text-gray-400 list-disc list-inside space-y-1">
            {details.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          {/* Back side button to flip back */}
          <button
            onClick={toggleFlip}
            className="back-btn"
            aria-label="Hide details"
            type="button"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
}
