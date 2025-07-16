"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, Twitter, Mail, Phone, MapPin, Code } from 'lucide-react'; // Icons for social media and contact

// Re-using navLinks for consistency, or define a subset for the footer
const footerNavLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

const Footer = () => {
  // Framer Motion variants for staggered animation
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.footer
      className="bg-gradient-to-r from-blue-700 to-purple-800 dark:from-gray-900 dark:to-black text-white dark:text-gray-300 py-12 px-6 md:px-5 sm:px-3
                 shadow-inner dark:shadow-none rounded-t-xl transition-colors duration-500 ease-in-out"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="container mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-center md:items-start gap-10">

        {/* Brand/Logo & Copyright */}
        <motion.div className="flex flex-col items-center md:items-start text-center md:text-left" variants={itemVariants}>
          <a
            href="#home"
            className="text-white dark:text-blue-200 text-3xl font-bold tracking-wide flex items-center mb-4"
          >
            <Code className="w-8 h-8 mr-3 text-blue-200 dark:text-blue-400" />
            MyPortfolio
          </a>
          <p className="text-sm text-gray-200 dark:text-gray-400 leading-relaxed">
            &copy; {new Date().getFullYear()} Rizwan Ali portfolio. All rights reserved.
          </p>
          <p className="text-xs text-gray-300 dark:text-gray-500 mt-1">
            Designed & Developed with Passion.
          </p>
        </motion.div>

        {/* Navigation Links */}
        <motion.div className="text-center md:text-left" variants={itemVariants}>
          <h3 className="text-xl font-semibold mb-4 text-blue-200 dark:text-blue-400">Quick Links</h3>
          <ul className="space-y-2">
            {footerNavLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-gray-200 dark:text-gray-400 hover:text-blue-100 dark:hover:text-blue-300 transition-colors duration-300 text-base"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div className="text-center md:text-left" variants={itemVariants}>
          <h3 className="text-xl font-semibold mb-4 text-blue-200 dark:text-blue-400">Contact Info</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-center md:justify-start text-gray-200 dark:text-gray-400">
              <Mail size={20} className="mr-3 text-blue-300 dark:text-blue-500" />
              <span>rizw.4546ali@gmail.com</span>
            </div>
            <div className="flex items-center justify-center md:justify-start text-gray-200 dark:text-gray-400">
              <Phone size={20} className="mr-3 text-green-300 dark:text-green-500" />
              <span>+92 3005645467</span>
            </div>
            <div className="flex items-start justify-center md:justify-start text-gray-200 dark:text-gray-400">
              <MapPin size={20} className="mr-3 text-red-300 dark:text-red-500 mt-1" />
              <span>Muslim Town, Lahore, Punjab, Pakistan</span>
            </div>
          </div>
        </motion.div>

        {/* Social Media Links */}
        <motion.div className="text-center md:text-left" variants={itemVariants}>
          <h3 className="text-xl font-semibold mb-4 text-blue-200 dark:text-blue-400">Follow Me</h3>
          <div className="flex justify-center md:justify-start space-x-5">
            <motion.a
              href="https://www.linkedin.com/in/rizwan-ali-79214a266" // Replace with your LinkedIn
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 dark:text-gray-400 hover:text-blue-400 dark:hover:text-blue-300 transition-colors"
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={28} />
            </motion.a>
            <motion.a
              href="https://github.com/rizw7498" // Replace with your GitHub
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 dark:text-gray-400 hover:text-white dark:hover:text-gray-100 transition-colors"
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
              aria-label="GitHub Profile"
            >
              <Github size={28} />
            </motion.a>
           
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
