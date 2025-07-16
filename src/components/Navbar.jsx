"use client"
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, User, Briefcase, Mail, Code, Sun, Moon, GraduationCap } from 'lucide-react'; // Importing Lucide React icons

// Navigation links data
const navLinks = [
  { name: 'Home', href: '#home', icon: <Home className="w-5 h-5" /> },
  { name: 'About', href: '#about', icon: <User className="w-5 h-5" /> },
      { name: 'Education', href: '#education', icon: <GraduationCap className="w-5 h-5" /> },
  { name: 'Projects', href: '#projects', icon: <Code className="w-5 h-5" /> },
  { name: 'Experience', href: '#experience', icon: <Briefcase className="w-5 h-5" /> },
  { name: 'Contact', href: '#contact', icon: <Mail className="w-5 h-5" /> },

];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Initialize dark mode from local storage or default to false
    if (typeof window !== 'undefined') {
      const savedMode = localStorage.getItem('theme');
      console.log(`Saved theme mode: ${savedMode}`);
      return savedMode === 'dark';
    }
    return false;
  });

  // Effect to apply dark/light class to the body and save preference
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      console.log('Dark mode is enabled');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      console.log('Dark mode is disabled');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
    console.log(`Dark mode is now ${!isDarkMode ? 'enabled' : 'disabled'}`);
  };

  // Function to handle smooth scrolling to a section
  const handleScrollToSection = (id) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start', // Scroll to the top of the element
      });
    }
    setIsMobileMenuOpen(false); // Close mobile menu after clicking a link
  };

  // Framer Motion variants for the mobile menu
  const menuVariants = {
    hidden: {
      x: '100%', // Start off-screen to the right
      opacity: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
      },
    },
    visible: {
      x: '0%', // Slide into view
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
      },
    },
  };

  // Framer Motion variants for individual menu items
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-700 dark:from-gray-900 dark:to-gray-800 p-4 shadow-lg dark:shadow-xl fixed w-full z-50 rounded-b-xl transition-colors duration-500 ease-in-out">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo/Brand Name */}
        <motion.a
          href="#home"
          onClick={() => handleScrollToSection('#home')} // Smooth scroll for logo
          className="text-white dark:text-blue-200 text-2xl font-bold tracking-wide flex items-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Code className="w-7 h-7 mr-2 text-blue-200 dark:text-blue-400" />
          MyPortfolio
        </motion.a>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center space-x-6">
          {navLinks.map((link, index) => (
            <motion.li
              key={link.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
            >
              <a
                href={link.href} // Keep href for accessibility/fallback, but onClick handles scroll
                onClick={(e) => {
                  e.preventDefault(); // Prevent default anchor jump
                  handleScrollToSection(link.href);
                }}
                className="text-white dark:text-gray-300 hover:text-blue-200 dark:hover:text-blue-400 transition duration-300 ease-in-out font-medium flex items-center p-2 rounded-lg hover:bg-blue-700 dark:hover:bg-gray-700"
              >
                {link.icon}
                <span className="ml-2">{link.name}</span>
              </a>
            </motion.li>
          ))}
          {/* Dark Mode Toggle for Desktop */}
          <li>
            <motion.button
              onClick={toggleDarkMode}
              className="text-white dark:text-gray-300 focus:outline-none p-2 rounded-md hover:bg-blue-700 dark:hover:bg-gray-700 transition duration-300"
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <Sun className="w-6 h-6 text-yellow-400" />
              ) : (
                <Moon className="w-6 h-6 text-gray-200" />
              )}
            </motion.button>
          </li>
        </ul>

        {/* Mobile Menu Button and Dark Mode Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <motion.button
            onClick={toggleDarkMode}
            className="text-white dark:text-gray-300 focus:outline-none p-2 rounded-md hover:bg-blue-700 dark:hover:bg-gray-700 transition duration-300"
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? (
              <Sun className="w-6 h-6 text-yellow-400" />
            ) : (
              <Moon className="w-6 h-6 text-gray-200" />
            )}
          </motion.button>
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white dark:text-gray-300 focus:outline-none p-2 rounded-md hover:bg-blue-700 dark:hover:bg-gray-700 transition duration-300"
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-7 h-7" />
            ) : (
              <Menu className="w-7 h-7" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden fixed inset-0 bg-blue-900 bg-opacity-95 dark:bg-gray-950 dark:bg-opacity-95 flex flex-col items-center justify-center z-40 p-4 rounded-b-xl transition-colors duration-500 ease-in-out"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
          >
            <motion.button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-4 right-4 text-white dark:text-gray-300 focus:outline-none p-2 rounded-md hover:bg-blue-700 dark:hover:bg-gray-700 transition duration-300"
              whileTap={{ scale: 0.9 }}
              aria-label="Close mobile menu"
            >
              <X className="w-8 h-8" />
            </motion.button>
            <ul className="space-y-6 text-center">
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: index * 0.1 + 0.3 }} // Staggered animation for items
                >
                  <a
                    href={link.href} // Keep href for accessibility/fallback
                    onClick={(e) => {
                      e.preventDefault(); // Prevent default anchor jump
                      handleScrollToSection(link.href);
                    }} // Smooth scroll and close menu on link click
                    className="text-white dark:text-gray-300 text-3xl font-semibold hover:text-blue-200 dark:hover:text-blue-400 transition duration-300 ease-in-out flex items-center justify-center p-3 rounded-lg hover:bg-blue-800 dark:hover:bg-gray-800"
                  >
                    {link.icon}
                    <span className="ml-4">{link.name}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
