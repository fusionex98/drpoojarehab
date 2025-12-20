'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});

const treatments = [
  {
    id: 'orthopedic',
    title: 'Orthopedic Conditions',
    desc: `We specialize in complete rehabilitation for fractures, joint replacements, arthritis, ligament injuries, and post-surgical recovery. Our expert physiotherapists design evidence-based programs that include manual therapy, strengthening, and balance training to restore your mobility and reduce chronic pain.
    
We also offer postural correction and preventive care for people with back or neck pain caused by sedentary lifestyles. Whether you’re an athlete or recovering from surgery, we help you regain strength, confidence, and pain-free movement for daily life.`,
    img: '/ortho.jpeg',
  },
  {
    id: 'paediatric',
    title: 'Paediatric Conditions',
    desc: `Our paediatric physiotherapy services are tailored for children with delayed milestones, cerebral palsy, Down syndrome, muscular dystrophy, and other developmental challenges. We use play-based and sensory-motor techniques to enhance movement, coordination, and cognitive growth.
    
Early intervention helps your child build essential motor skills, improve posture, and develop independence. Parents are guided throughout the process to continue therapy effectively at home in a fun and engaging way.`,
    img: '/oc2.jpeg',
  },
  {
    id: 'neurological',
    title: 'Neurological Conditions',
    desc: `We provide comprehensive neuro-rehabilitation for stroke, spinal cord injuries, multiple sclerosis, Parkinson’s disease, and peripheral nerve disorders. Our advanced therapy focuses on retraining the brain and body through repetitive, goal-driven exercises that improve balance, coordination, and functional independence.
    
Using evidence-based occupational therapy, we aim to restore lost functions and improve overall quality of life. Our sessions emphasize gradual progress, motivation, and confidence in everyday activities.`,
    img: '/neuro.jpeg',
  },
  {
    id: 'oncological',
    title: 'Oncological (Cancer) Conditions',
    desc: `Cancer and its treatments can lead to fatigue, pain, muscle weakness, and limited mobility. Our oncological physiotherapy focuses on improving strength, endurance, and quality of life during and after cancer treatment.
    
We help patients manage lymphedema, regain energy, and reduce treatment side effects with gentle, progressive exercises and relaxation therapies. Our approach ensures every session is safe, empowering, and customized to each patient’s unique recovery journey.`,
    img: '/onco.jpg',
  },
];

export default function Treat() {
  return (
    <section
      className={`pt-28 pb-20 px-6 md:px-16 bg-gray-50 ${poppins.className}`}
    >
      <motion.h2
        className="text-3xl md:text-4xl font-semibold text-center mb-20 text-gray-800 tracking-wide"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        What We Treat
      </motion.h2>

      <div className="space-y-44">
        {treatments.map((item, index) => (
          <div key={index}>
            <motion.div
              id={item.id}
              className={`flex flex-col md:flex-row items-center justify-between gap-14 ${
                index % 2 !== 0 ? 'md:flex-row-reverse' : ''
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* --- Text Section --- */}
              <div className="md:w-1/2">
                <motion.h3
                  className="text-2xl md:text-3xl font-semibold text-pink-600 mb-5"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  {item.title}
                </motion.h3>
                <motion.p
                  className="text-gray-700 leading-relaxed text-base md:text-lg whitespace-pre-line"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {item.desc}
                </motion.p>
              </div>

              {/* --- Image Section (Fixed for Mobile) --- */}
              <motion.div
                className="md:w-1/2 w-full relative rounded-2xl overflow-hidden shadow-xl flex justify-center items-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05, rotate: 1 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <div className="relative w-full h-[260px] sm:h-[300px] md:h-[400px] rounded-2xl overflow-hidden">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover rounded-2xl"
                    priority
                  />
                </div>
                <motion.div
                  className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-40 transition-opacity duration-500 rounded-2xl"
                  whileHover={{ opacity: 0.4 }}
                />
              </motion.div>
            </motion.div>

            {/* --- Connecting Line Between Sections --- */}
            {index < treatments.length - 1 && (
              <motion.div
                className="w-full flex justify-center mt-24"
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                <div className="w-1 h-32 bg-pink-400 rounded-full"></div>
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
