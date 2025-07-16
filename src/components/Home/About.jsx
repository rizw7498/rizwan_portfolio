"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Code, Rocket, BrainCircuit, Users } from 'lucide-react'; // No CheckCircle needed here

const About = () => {
  // Framer Motion Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 120,
        damping: 15,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, x: -50 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
        delay: 0.3,
      },
    },
    // Adding a subtle hover effect if desired, even without border radius
    hover: {
      scale: 1.02,
      boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.3)", // More pronounced shadow on hover
      transition: { duration: 0.2 }
    }
  };

  const skillBadgeVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 12,
      },
    },
    hover: {
      scale: 1.05, // Slightly less scale than rounded version
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", // More subtle shadow for rectangular badges
      backgroundColor: 'var(--hover-bg-color)', // For dynamic hover color
      transition: { duration: 0.2 },
    },
  };

  const serviceCardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
      },
    },
    hover: {
      y: -5,
      boxShadow: "0px 12px 25px rgba(0, 0, 0, 0.2)", // More pronounced shadow for square cards
      transition: { duration: 0.2 },
    },
  };

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20 px-5 sm:px-3
                 bg-gradient-to-br from-gray-50 to-blue-50
                 dark:from-gray-800 dark:to-gray-900
                 text-gray-900 dark:text-gray-100
                 font-poppins transition-colors duration-700 ease-in-out"
    >
      <motion.div
        className="container mx-auto max-w-7xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-5xl font-extrabold text-center mb-12
                     bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"
        >
          About Me
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-20">
          {/* Left Section: Image - NOW RECTANGULAR/SQUARE */}
       <motion.div
  variants={imageVariants}
  whileHover="hover"
  className="w-64 h-72 md:w-80 md:h-96 flex-shrink-0 relative overflow-visible shadow-2xl
             border-4 border-white dark:border-gray-700
             flex items-center justify-center"
>
  <div className="absolute w-full h-full">
    <img
      src="/mern.png"
      alt="Mern stack"
      className="object-contain w-full h-full "
    />
  </div>
</motion.div>


          {/* Right Section: Text Content */}
          <div className="md:w-1/2 space-y-6 text-center md:text-left">
          
            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed"
            >
I'm a passionate full-stack developer specializing in building dynamic and responsive user interfaces with <span className='font-bold'>React.js</span>, powerful server-side applications using <span className='font-bold'>Node.js</span>  and <span className='font-bold'>Express.js</span>, and efficient data management with <span className='font-bold'>MongoDb</span>. I thrive on creating seamless, user-friendly web experiences and love bringing ideas to life through clean, maintainable code.

With a strong commitment to continuous learning, I stay up-to-date with the latest technologies and best practices to ensure every project I work on is modern, scalable, and performance-driven. Whether it's frontend, backend, or database design—I'm all about delivering smart solutions that make a real impact.            </motion.p>

            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">What I Do</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <motion.div
                  variants={serviceCardVariants}
                  whileHover="hover"
                  className="flex items-center space-x-3 p-4 bg-white dark:bg-gray-800 shadow-md border border-gray-200 dark:border-gray-700
                             // Removed rounded-lg here"
                >
                  <Code className="w-6 h-6 text-blue-500" />
                  <span className="font-semibold text-gray-800 dark:text-gray-200">Full-Stack Development</span>
                </motion.div>
                <motion.div
                  variants={serviceCardVariants}
                  whileHover="hover"
                  className="flex items-center space-x-3 p-4 bg-white dark:bg-gray-800 shadow-md border border-gray-200 dark:border-gray-700
                             // Removed rounded-lg here"
                >
                  <Rocket className="w-6 h-6 text-purple-500" />
                  <span className="font-semibold text-gray-800 dark:text-gray-200">Responsive UI/UX Design</span>
                </motion.div>
                <motion.div
                  variants={serviceCardVariants}
                  whileHover="hover"
                  className="flex items-center space-x-3 p-4 bg-white dark:bg-gray-800 shadow-md border border-gray-200 dark:border-gray-700
                             // Removed rounded-lg here"
                >
                  <Lightbulb className="w-6 h-6 text-yellow-500" />
                  <span className="font-semibold text-gray-800 dark:text-gray-200">API Development & Integration</span>
                </motion.div>
                <motion.div
                  variants={serviceCardVariants}
                  whileHover="hover"
                  className="flex items-center space-x-3 p-4 bg-white dark:bg-gray-800 shadow-md border border-gray-200 dark:border-gray-700
                             // Removed rounded-lg here"
                >
                  <BrainCircuit className="w-6 h-6 text-red-500" />
                  <span className="font-semibold text-gray-800 dark:text-gray-200">Problem Solving & Debugging</span>
                </motion.div>
              </div>
            </motion.div>

            {/* <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-4 mt-6 text-gray-800 dark:text-gray-200">My Key Skills</h3>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                {['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Git', 'RESTful APIs'].map((skill, index) => (
                  <motion.span
                    key={skill}
                    variants={skillBadgeVariants}
                    whileHover="hover"
                    className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm font-medium px-4 py-2 shadow-sm
                               transition-all duration-200 cursor-pointer // Removed rounded-full here
                               "
                    style={{ '--hover-bg-color': 'var(--color-skill-hover-blue)' }} // Example dynamic hover color
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div> */}

            <motion.div variants={itemVariants} className="pt-8">
              <a href="#contact" className="inline-block">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0px 8px 15px rgba(0,0,0,0.2)" }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center px-8 py-3 bg-blue-600 text-white font-semibold shadow-lg
                             hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75
                             dark:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-300 // Removed rounded-full here"
                >
                  Let's Connect <Users className="w-5 h-5 ml-2" />
                </motion.button>
              </a>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;