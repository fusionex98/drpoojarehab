'use client';

import React, { useEffect, useState, useRef } from 'react';

export default function About() {
  const [visible, setVisible] = useState(false);
  const [imageVisibleIndex, setImageVisibleIndex] = useState(-1);
  const sectionRef = useRef(null);

  // Trigger when the section is visible on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
          } else {
            // when out of view reset
            setVisible(false);
            setImageVisibleIndex(-1);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Sequential image fade-in timing once visible
  useEffect(() => {
    if (visible) {
      const timers = [0, 1, 2].map((i) =>
        setTimeout(() => setImageVisibleIndex(i), i * 1000)
      );
      return () => timers.forEach((t) => clearTimeout(t));
    } else {
      setImageVisibleIndex(-1);
    }
  }, [visible]);

  const fullBleedStyle = {
    position: 'relative',
    left: '50%',
    right: '50%',
    marginLeft: '-50vw',
    marginRight: '-50vw',
    width: '100vw',
    backgroundColor: '#d8ece7',
    zIndex: 0,
  };

  return (
    <section
      ref={sectionRef}
      id="about"
      aria-label="About Section"
      className="relative font-sans"
    >
      <div
        style={fullBleedStyle}
        className={`py-16 px-6 md:px-16 lg:px-32 text-center transform transition-all duration-[2000ms] ease-out ${
          visible
            ? 'opacity-100 translate-y-0 scale-100'
            : 'opacity-0 translate-y-10 scale-95'
        }`}
      >
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#115e59] mb-10 tracking-tight">
          Our Vision & Mission
        </h2>

        {/* Text */}
        <div className="max-w-4xl mx-auto text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed space-y-6 font-light">
          <p>
            We believe therapy should never feel intimidating or out of reach.
            Our <span className="font-semibold text-[#115e59]">vision</span> is to empower individuals to live an independent, pain-free, and fulfilling life by providing compassionate and personalized techniques that restore function, enhances quality of life, and supports long-term neurological and physical well-being. 
            
          </p>

          <p>
            Driven by a{' '}
            <span className="font-semibold text-[#115e59]">mission</span> to
            deliver high-quality, evidence-based mental health services, we aim to
            empower individuals to lead more balanced, fulfilling lives. By providing affordable healthcare, we are here to create a safe and inclusive space for you. Trust us to keep your journey towards independence an empathetic one.
          </p>
        </div>

        {/* Image Strip */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 w-full max-w-6xl mx-auto px-2">
          {['/abt1.jpeg', '/abt2.jpeg', '/gal2.jpeg'].map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Facility ${index + 1}`}
              className={`w-full h-56 sm:h-60 md:h-64 object-cover rounded-lg transform transition-all duration-[1600ms] ease-out ${
                imageVisibleIndex >= index
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
