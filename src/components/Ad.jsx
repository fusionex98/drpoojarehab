'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export default function Ad({ autoplay = true, autoplayInterval = 5000 }) {
  const slides = ['/slid1.png', '/slider2.jpg','/slider4.jpg' ];
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  // --- Autoplay Effect ---
  useEffect(() => {
    if (!autoplay) return;
    const intervalId = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, autoplayInterval);
    
    timeoutRef.current = intervalId; // Store the ID for clearing

    // Clear interval when component unmounts or dependencies change
    return () => clearInterval(intervalId);
  }, [autoplay, autoplayInterval, slides.length]); // Dependencies must be correct

  // --- Navigation Functions ---
  const handleNavClick = (newIndex) => {
    // Stop autoplay when a user manually navigates
    if (timeoutRef.current) {
        clearInterval(timeoutRef.current);
    }
    setIndex(newIndex);
  };

  const prev = () => {
    handleNavClick((index - 1 + slides.length) % slides.length);
  };

  const next = () => {
    handleNavClick((index + 1) % slides.length);
  };

  const goTo = (i) => {
    handleNavClick(i);
  };
  
  // --- Full Bleed Style (Stretches across viewport) ---
  const fullBleedStyle = {
    position: 'relative',
    left: '50%',
    right: '50%',
    marginLeft: '-50vw',
    marginRight: '-50vw',
    width: '100vw',
    marginTop: 0,
    zIndex: 0,
    backgroundColor: '#ffffff',
  };

  return (
    <section aria-label="Promotional carousel" className="relative bg-white">
      <div style={fullBleedStyle} className="bg-transparent">
        <div
          className="relative overflow-hidden h-64 sm:h-96 lg:h-[85vh]"
          // h-64 (256px) for small mobile screens
          // sm:h-96 (384px) for medium mobile/tablet screens
          // lg:h-[85vh] (85% of viewport height) for large desktop screens
        >
          {/* Slide Track */}
          <div
            className="flex transition-transform duration-700 ease-in-out h-full"
            style={{
              width: `${slides.length * 100}%`,
              transform: `translateX(-${(index * 100) / slides.length}%)`,
            }}
          >
            {slides.map((src, i) => (
              <div
                key={i}
                className="relative flex-shrink-0"
                style={{ width: `${100 / slides.length}%`, height: '100%' }}
              >
                {/* Image component with fill property ensures image covers its container */}
                <Image 
                    src={src} 
                    alt={`Slide ${i + 1}`} 
                    fill 
                    className="object-cover" 
                    priority={i === 0} 
                />
              </div>
            ))}
          </div>

          {/* Left Arrow */}
          <button
            onClick={prev}
            aria-label="Previous slide"
            className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-30 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/95 hover:bg-white flex items-center justify-center shadow"
            style={{ backdropFilter: 'blur(4px)' }}
          >
            <span className="text-green-700 text-xl md:text-2xl leading-none">‹</span>
          </button>

          {/* Right Arrow */}
          <button
            onClick={next}
            aria-label="Next slide"
            className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 z-30 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/95 hover:bg-white flex items-center justify-center shadow"
            style={{ backdropFilter: 'blur(4px)' }}
          >
            <span className="text-green-700 text-xl md:text-2xl leading-none">›</span>
          </button>

          {/* Dots */}
          <div
            className="absolute left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 md:gap-3"
            style={{ bottom: '1rem' }}
          >
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full transition-colors duration-200 ${
                  i === index ? 'bg-green-600' : 'bg-green-100'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}