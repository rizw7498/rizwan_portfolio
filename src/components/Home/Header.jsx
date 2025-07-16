"use client"
import React from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  Download,
  Linkedin,
  Github,
  Twitter,
  Instagram,
  Award,
  HeartHandshake,
  FolderCheck,
} from "lucide-react"; // Added more Lucide icons
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Header = () => {
  // Define your WhatsApp number here (include country code, no +, no spaces)
  const whatsappNumber = "923005645467"; // Example: "1234567890" for +1 (123) 456-7890

  // Function to open WhatsApp chat
  const openWhatsApp = () => {
    window.open(`https://wa.me/${whatsappNumber}`, "_blank");
  };

  // Function to handle resume download
  const handleDownloadResume = () => {
    // Create a temporary anchor element
    const link = document.createElement("a");
    link.href = "/Rizwan-Resume.pdf"; // Path to your resume in the public folder
    link.download = "Rizwan-Resume.pdf"; // Suggested filename for the download
    document.body.appendChild(link); // Append to the body
    link.click(); // Programmatically click the link to trigger download
    document.body.removeChild(link); // Remove the link after download
  };

  // Framer Motion Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 10 },
    },
  };

  // Image and its background halo animation
  const imageHaloVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 50, damping: 20, delay: 0.8 },
    },
    rotate: {
      rotate: 360,
      transition: { duration: 15, ease: "linear", repeat: Infinity },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut", delay: 1 },
    },
    hover: { scale: 1.02, rotate: 2 },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.2, yoyo: Infinity },
    },
    tap: { scale: 0.95 },
  };

  const statCardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 150, damping: 12, delay: 0.5 },
    },
    hover: { scale: 1.05, boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.2)" },
  };

  const socialIconVariants = {
    hidden: { opacity: 0, x: -20 }, // Slide from left for sidebar
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 150 },
    },
    hover: { scale: 1.2, color: "var(--hover-color-social)" },
  };

  // Typewriter effect for name
  const [nameText] = useTypewriter({
    words: ["Rizwan Ali.", "Passionate Developer.", "Your Next Hire."],
    loop: true,
    delaySpeed: 1500,
    typeSpeed: 70,
    deleteSpeed: 50,
  });

  // Typewriter effect for profession
  const [professionText] = useTypewriter({
    words: ["Web Developer", "MERN Stack Developer", "Quick Learner"],
    loop: true,
    delaySpeed: 2000,
    typeSpeed: 50,
    deleteSpeed: 60,
  });

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-24 pb-12 px-5 sm:px-3
                 bg-gradient-to-br from-blue-50 to-indigo-100
                 dark:from-gray-950 dark:to-gray-800
                 text-gray-900 dark:text-gray-100
                 font-poppins relative overflow-hidden transition-colors duration-700 ease-in-out"
    >
      {/* Background Shapes for visual interest */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-48 h-48 bg-blue-300 dark:bg-blue-800 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          delay: 1,
          duration: 2,
          repeat: Infinity,
          repeatType: "mirror",
        }}
      ></motion.div>
      <motion.div
        className="absolute top-1/2 right-1/4 w-48 h-48 bg-purple-300 dark:bg-purple-800 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          delay: 1.2,
          duration: 2,
          repeat: Infinity,
          repeatType: "mirror",
        }}
      ></motion.div>
      <motion.div
        className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-pink-300 dark:bg-pink-800 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          delay: 1.4,
          duration: 2,
          repeat: Infinity,
          repeatType: "mirror",
        }}
      ></motion.div>

      {/* Social Icons Sidebar */}
      <motion.div
        className="fixed left-0 top-1/2 -translate-y-1/2
                   h-auto w-8 md:w-14
                   bg-gray-50 dark:bg-gray-900
                   flex flex-col items-center space-y-4 py-4
                   shadow-lg z-30
                   flex transition-colors duration-500 rounded-r-xl
                   md:space-y-5 md:py-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* WhatsApp Icon */}
        <motion.button
          onClick={openWhatsApp}
          className="p-1 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700
                     text-gray-600 dark:text-gray-300 flex items-center justify-center"
          variants={socialIconVariants}
          whileHover="hover"
          style={{ "--hover-color-social": "#25D366" }} // WhatsApp Green
          aria-label="Chat on WhatsApp"
        >
          <img
            src="/whatsapp.png" // Path to your WhatsApp image
            alt="WhatsApp"
            className="w-5 h-5 md:w-7 md:h-7" // Match other icon sizes
            onError={(e) => {
              e.target.onerror = null; // Prevent infinite loop
            }}
          />
        </motion.button>

        {/* LinkedIn Icon */}
        <motion.a
          href="https://www.linkedin.com/in/rizwan-ali-79214a266" // Replace with your LinkedIn
          target="_blank"
          rel="noopener noreferrer"
          className="p-1 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700
                     text-gray-600 dark:text-gray-300" // Default color
          variants={socialIconVariants}
          whileHover="hover"
          style={{ "--hover-color-social": "#0A66C2" }} // LinkedIn Blue
          aria-label="LinkedIn Profile"
        >
          <Linkedin className="w-5 h-5 md:w-7 md:h-7" />
        </motion.a>

        {/* GitHub Icon */}
        <motion.a
          href="https://github.com/rizw7498" // Replace with your GitHub
          target="_blank"
          rel="noopener noreferrer"
          className="p-1 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700
                     text-gray-600 dark:text-gray-300" // Default color
          variants={socialIconVariants}
          whileHover="hover"
          style={{ "--hover-color-social": "#181717" }} // GitHub Black
          aria-label="GitHub Profile"
        >
          <Github className="w-5 h-5 md:w-7 md:h-7" />
        </motion.a>

        
      </motion.div>

      <motion.div
        className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12 max-w-7xl relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left Section: Text Content */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left md:w-1/2  pl-0 md:pl-20">
          <motion.p
            variants={textVariants}
            className="text-lg md:text-xl font-medium text-blue-700 dark:text-blue-300"
          >
            Hello there! I'm
          </motion.p>
          <motion.h1
            variants={textVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight
                       text-gray-900 dark:text-white py-3 "
          >
            {nameText}
            <Cursor cursorBlinking={true} cursorStyle="_" />
          </motion.h1>
          <motion.h2
            variants={textVariants}
            className="text-2xl md:text-3xl font-semibold text-purple-700 dark:text-purple-300 flex items-center justify-center md:justify-start min-h-[40px] md:min-h-[50px]"
          >
            <Sparkles className="w-8 h-8 mr-2 text-yellow-500" />{" "}
            {professionText}
            <Cursor cursorBlinking={true} cursorStyle="|" />
          </motion.h2>

          <motion.p
            variants={textVariants}
            className="text-base md:text-lg max-w-md text-gray-700 dark:text-gray-300 leading-relaxed"
          >
            Passionate and driven MERN Stack Developer with a solid foundation
            in web development and a strong eagerness to grow in a professional
            environment. I’m now seeking opportunities deepen my backend skills,
            collaborate with experienced teams, and contribute to real-world
            projects. I bring a positive attitude, strong problem-solving
            abilities, and a commitment to continuous learning and improvement.
          </motion.p>

          <motion.div
            variants={containerVariants}
            className="flex flex-col sm:flex-row gap-4 mt-8"
          >
            {/* <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-lg
                         hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75
                         dark:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-300"
            >
              Learn More <ArrowRight className="w-5 h-5 ml-2" />
            </motion.button> */}
            <motion.button
              onClick={handleDownloadResume} // Added onClick handler here
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="flex items-center px-8 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-full
                         hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-gray-700
                         focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75
                         transition-colors duration-300"
            >
              Download CV <Download className="w-5 h-5 ml-2" />
            </motion.button>
          </motion.div>
        </div>

        {/* Right Section: Image and Stat Cards */}
        <div className="relative flex justify-center items-center w-72 h-72 md:w-96 md:h-96 flex-shrink-0">
          {/* Animated Halo/Border behind the image */}
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 to-purple-400
                       dark:from-blue-600 dark:to-purple-600 blur-xl opacity-75"
            variants={imageHaloVariants}
            animate={["visible", "rotate"]} 
          ></motion.div>

          <motion.img
            src="/img.jpeg"
            alt="Rizwan Portrait"
            className="rounded-full object-cover w-full h-full shadow-xl dark:shadow-2xl z-10
                       border-4 border-white dark:border-gray-900 transition-colors duration-300" // Subtle border for image itself
            variants={imageVariants}
            whileHover="hover"
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
          />

          {/* Card 1: Experience Card (bottom-left) */}
          <motion.div
            className="absolute -bottom-10 -left-10 md:-bottom-16 md:-left-16 bg-white dark:bg-gray-800
                       rounded-xl p-3 md:p-4 shadow-lg flex items-center space-x-2 md:space-x-3 w-44 md:w-56 transition-colors duration-300 text-sm md:text-base"
            variants={statCardVariants}
            whileHover="hover"
          >
            <div className="p-2 md:p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
              <Award className="w-5 h-5 md:w-6 md:h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <span className="text-lg md:text-xl font-bold text-blue-700 dark:text-blue-300">
                6+
              </span>
              <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 leading-tight">
                Months <br /> Experience
              </p>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
};

export default Header;
