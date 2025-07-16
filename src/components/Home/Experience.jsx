"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react'; // Icons for job details

// --- Experience Data (mimicking the structure in your image) ---
const experienceData = [

  {
    id: 'exp1',
    title: 'Frontend Developer',
    company: 'Bclix Tech',
    duration: '2023 - 2024',
    description:
      'Developed responsive user interfaces using HTML, CSS, JavaScript, and Bootstrap, delivering clean and efficient frontend solutions.',
  },
  {
    id: 'exp2',
    title: 'React.js Developer Intern',
    company: 'Megma Solutions',
    duration: 'May 2024 - June 2024',
    description:
      'Completed internship focusing on building reusable React components, managing state effectively, and integrating APIs to enhance web applications.',
  },
  {
    id: 'exp3',
    title: 'MERN Stack Intern & CRM Developer',
    company: 'Fairchance',
    duration: 'Feb 2025 - June 2025',
    description:
      'Gained hands-on experience in full-stack development using MongoDB, Express, React, and Node.js. Developed and maintained CRM modules to optimize client workflows.',
  },
];

const ExperienceSection = () => {
  // Framer Motion Variants for section heading
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  // Variants for individual experience entries
  const entryVariants = {
    hidden: { opacity: 0, x: -50 }, // Animate from left for these entries
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 12,
        duration: 0.5,
      },
    },
    hover: {
      scale: 1.01,
      // boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.15)", // Subtle shadow on hover
      transition: { duration: 0.2 },
    },
  };

  return (
    <section
      id="experience"
      className="min-h-screen flex flex-col items-center justify-center py-20 px-5 sm:px-3
                 bg-gray-50 dark:bg-gray-900
                 text-gray-900 dark:text-gray-100
                 font-sans transition-colors duration-700 ease-in-out relative overflow-hidden"
    >
      <motion.div
        className="container mx-auto max-w-4xl" // Adjusted max-width to allow space for a potential second column
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-left mb-10 text-teal-600 dark:text-teal-400" // Aligned left
        >
          EXPERIENCE
        </motion.h2>

        {/* Experience Timeline Column */}
        <div className="relative w-full">
          {/* Vertical Line */}
          <div className="absolute left-3.5 top-0 h-full w-0.5 bg-gray-300 dark:bg-gray-700"></div>

          {experienceData.map((entry, index) => (
            <motion.div
              key={entry.id}
              className="mb-10 flex items-start relative pl-10" // Padding for content to clear line/node
              variants={entryVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, amount: 0.5 }}
            >
              {/* Timeline Node (Circle) */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-teal-500 dark:bg-teal-400 border-4 border-gray-50 dark:border-gray-900 z-10 flex items-center justify-center">
                {/* Optional: Add a small icon inside the circle if desired */}
                {/* <Briefcase size={14} className="text-white" /> */}
              </div>

              {/* Experience Card Content */}
              <div className="flex-1 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
                <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2 flex items-center">
                  <Calendar size={14} className="mr-1" /> {entry.duration}
                </p>
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-1">{entry.title}</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  {entry.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ExperienceSection;