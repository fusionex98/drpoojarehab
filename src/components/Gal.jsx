'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const galleryItems = [
  {
    src: '/gallery/gal1.jpeg',
    caption: 'Rehabilitation in Progress',
    desc: 'Patients receiving guided physiotherapy under expert supervision for better recovery.',
  },
  {
    src: '/gallery/gal2.jpeg',
    caption: 'Therapy Room Setup',
    desc: 'State-of-the-art equipment designed to provide the best therapeutic experience.',
  },
  {
    src: '/gallery/gal3.jpeg',
    caption: 'Team Physiotherapy Session',
    desc: 'Our team works closely to ensure holistic recovery and consistent patient care.',
  },
  {
    src: '/gallery/gal4.jpeg',
    caption: 'Exercise and Stretching Routine',
    desc: 'Every session is customized to help restore mobility and improve strength.',
  },
  {
    src: '/gallery/clinic5.jpg',
    caption: 'Patient Progress Monitoring',
    desc: 'Regular follow-ups and progress tracking ensure long-term wellness.',
  },
  {
    src: '/gallery/clinic6.jpg',
    caption: 'Holistic Healing Environment',
    desc: 'A calm and friendly atmosphere designed to promote healing and motivation.',
  },
  {
    src: '/gallery/clinic7.jpg',
    caption: 'Sports Injury Care',
    desc: 'Advanced rehabilitation for athletes to regain peak performance quickly.',
  },
  {
    src: '/gallery/clinic8.jpg',
    caption: 'Personalized Recovery Plan',
    desc: 'Each treatment is customized to suit individual needs and medical history.',
  },
  {
    src: '/gallery/clinic9.jpg',
    caption: 'Balance & Coordination Training',
    desc: 'Exercises to improve stability and coordination after neurological injuries.',
  },
  {
    src: '/gallery/clinic10.jpg',
    caption: 'Dedicated Physiotherapy Zone',
    desc: 'Fully equipped space focused on comfort, safety, and effectiveness.',
  },
];

export default function Gal() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-24 px-6 md:px-16">
      {/* --- Title --- */}
      <motion.h1
        className="text-4xl md:text-5xl font-semibold text-center mb-16 text-gray-800"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Clinic <span className="text-pink-600">Gallery</span>
      </motion.h1>

      {/* --- Gallery Grid --- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {galleryItems.map((item, index) => (
          <motion.div
            key={index}
            className="group relative overflow-hidden rounded-3xl shadow-xl bg-white"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: index * 0.05 }}
            viewport={{ once: true }}
          >
            {/* --- Image --- */}
            <motion.div
              className="relative w-full h-72 md:h-80 overflow-hidden"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
            >
              <Image
                src={item.src}
                alt={item.caption}
                fill
                className="object-cover rounded-3xl transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <p className="text-white text-lg md:text-xl font-medium px-6 text-center">
                  {item.caption}
                </p>
              </div>
            </motion.div>

            {/* --- Description --- */}
            <motion.div
              className="p-6 text-center md:text-left"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.caption}</h3>
              <p className="text-gray-600 text-base leading-relaxed">{item.desc}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
