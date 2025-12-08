'use client';

import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Meet() {
  const fullBleedStyle = {
    position: 'relative',
    left: '50%',
    right: '50%',
    marginLeft: '-50vw',
    marginRight: '-50vw',
    width: '100vw',
    backgroundColor: '#ffffff',
    overflowX: 'hidden',
  };

  // refs for each section
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);

  const section1InView = useInView(section1Ref, { threshold: 0.3 });
  const section2InView = useInView(section2Ref, { threshold: 0.3 });

  const fadeLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: 'easeOut' },
    },
    exit: { opacity: 0, x: -60, transition: { duration: 0.8, ease: 'easeIn' } },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: 'easeOut' },
    },
    exit: { opacity: 0, x: 60, transition: { duration: 0.8, ease: 'easeIn' } },
  };

  return (
    <section aria-label="Meet section" style={fullBleedStyle}>
      {/* --- SECTION 1 --- */}
      <div
        ref={section1Ref}
        className="mx-auto max-w-[1200px] px-6 md:px-12 py-20 grid md:grid-cols-2 gap-10 items-center"
      >
        {/* Image (fade left) */}
        <motion.div
          className="relative w-full h-[420px] overflow-hidden rounded-2xl group"
          variants={fadeLeft}
          initial="hidden"
          animate={section1InView ? 'visible' : 'hidden'}
        >
          <Image
            src="/ms1.jpeg"
            alt="Meet our expert"
            fill
            className="object-cover rounded-2xl transform transition-transform duration-500 ease-in-out group-hover:scale-108"
            priority
          />
        </motion.div>

        {/* Text */}
        <motion.div
          variants={fadeRight}
          initial="hidden"
          animate={section1InView ? 'visible' : 'hidden'}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-4xl md:text-5xl font-serif text-[#1e2b27] mb-5">
            Meet Our Specialists
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
           Dr. Pooja Gaikwad is an Occupational Therapist with over nine years of experience, holding BOT (Hons) and MOTH (Neuro) degrees from Sion Hospital. She is Sion Hospital Certified, part of the Tata Memorial Hospital Panel
          </p>
          <button className="px-6 py-3 rounded-full bg-[#f2d89c] text-[#1e2b27] font-serif font-medium hover:bg-[#eacb83] transition-colors duration-300">
            Let’s Talk
          </button>
        </motion.div>
      </div>

      {/* --- SECTION 2 --- */}
      <div
        ref={section2Ref}
        className="mx-auto max-w-[1200px] px-6 md:px-12 pb-20 grid md:grid-cols-2 gap-10 items-center"
      >
        {/* Text */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          animate={section2InView ? 'visible' : 'hidden'}
        >
          {/* <p className="text-sm uppercase tracking-wider text-gray-500 mb-3">
            Our Mission
          </p> */}
          <h2 className="text-4xl md:text-5xl font-serif text-[#1e2b27] mb-5">
            Certifications
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
           She is a certified Manual Osteopath and Chiropractic Therapist with multiple advanced certifications and has treated international patients from Africa, Bangladesh, Russia, and Boston. She has presented case studies at national and international conferences and was invited as Guest Faculty at Tata Memorial Hospital for a session on “The Role of Occupational Therapy in Neurological Conditions.” 
          </p>
          <button className="px-6 py-3 rounded-full bg-[#f2d89c] text-[#1e2b27] font-serif font-medium hover:bg-[#eacb83] transition-colors duration-300">
            More About Us
          </button>
        </motion.div>

        {/* Image */}
        <motion.div
          className="relative w-full h-[420px] overflow-hidden rounded-2xl group"
          variants={fadeRight}
          initial="hidden"
          animate={section2InView ? 'visible' : 'hidden'}
          transition={{ delay: 0.3 }}
        >
          <Image
            src="/ms2.jpeg"
            alt="Mental wellness session"
            fill
            className="object-cover rounded-2xl transform transition-transform duration-500 ease-in-out group-hover:scale-108"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
