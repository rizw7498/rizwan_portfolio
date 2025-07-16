"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, GraduationCap, CalendarDays, MapPin } from 'lucide-react'; // Icons for education details

// Data for education entries
const educationEntries = [
  {
  degree: 'Intermediate in Pre-Engineering',
  institution: 'Govt. Post Graduate College, Bahawalnagar',
  years: '2018 – 2021',
  details: 'Focused on core science and engineering fundamentals, achieving strong academic performance while developing analytical and problem-solving skills.',
  gpa: 'Scored 80%',
  location: 'Bahawalnagar, Pakistan',
},
  {
  degree: 'Bachelor of Science in Computer Science',
  institution: 'The Islamia University of Bahawalpur',
  years: '2021 – 2025 (Fresh Graduate)',
  details: 'Graduated with a strong academic record, specializing in Computer Science with a focus on advanced algorithms, distributed systems, and modern software engineering practices.',
  gpa: 'CGPA: 3.69 / 4.0',
  location: 'Bahawalpur, Pakistan',
}

  // {
  //   degree: 'F.Sc. Pre-Engineering',
  //   institution: 'Punjab Group of Colleges',
  //   years: '2016 - 2018',
  //   details: 'Achieved excellent grades in Physics, Chemistry, and Mathematics.',
  //   location: 'Lahore, Pakistan',
  // },
];

const Education = () => {
  // Framer Motion variants for the section title
  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  // Framer Motion variants for individual education cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 }, // Animate from bottom with slight scale down
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 80, damping: 12 } },
    hover: { scale: 1.03, rotateZ: 1, boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.25)" }, // Enhanced shadow and subtle rotation on hover
  };

  return (
    <section id="education" className="py-16 px-3 sm:px-3 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-950 dark:to-gray-800 transition-colors duration-500 ease-in-out">
      <div className="max-w-[90%] w-full mx-auto">
        <motion.h2
          className="text-4xl font-extrabold text-center mb-12 text-gray-900 dark:text-white relative"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          My Education
          <span className="block w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mt-4 rounded-full"></span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {educationEntries.map((entry, index) => (
            <motion.div
              key={index}
              className="relative bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 flex flex-col items-start
                         transition-all duration-300 overflow-hidden
                         border-b-4 border-blue-500 dark:border-blue-600
                         hover:border-blue-700 dark:hover:border-blue-400"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Decorative corner element */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-bl-xl opacity-70"></div>

              <div className="flex items-center mb-4 z-10">
                <div className="p-3 bg-blue-600 dark:bg-blue-400 rounded-full shadow-md mr-4">
                  <GraduationCap className="w-7 h-7 text-white dark:text-gray-900" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{entry.degree}</h3>
              </div>

              <p className="text-lg text-gray-700 dark:text-gray-300 mb-2 flex items-center z-10">
                <BookOpen className="w-5 h-5 text-gray-500 dark:text-gray-400 mr-2" />
                {entry.institution}
              </p>
              <p className="text-md text-gray-600 dark:text-gray-400 mb-2 flex items-center z-10">
                <CalendarDays className="w-5 h-5 text-gray-500 dark:text-gray-400 mr-2" />
                {entry.years}
              </p>
              <p className="text-md text-gray-600 dark:text-gray-400 mb-4 flex items-center z-10">
                <MapPin className="w-5 h-5 text-gray-500 dark:text-gray-400 mr-2" />
                {entry.location}
              </p>
              <p className="text-base text-gray-800 dark:text-gray-200 leading-relaxed z-10">
                {entry.details}
              </p>
              {entry.gpa && (
                <p className="text-sm font-semibold text-blue-700 dark:text-blue-300 mt-3 z-10">
                  GPA: {entry.gpa}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
