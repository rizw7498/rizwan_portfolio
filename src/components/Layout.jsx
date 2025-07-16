"use client"
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react"; // Make sure lucide-react is installed: npm install lucide-react

import Navbar from "./Navbar"; 
import Footer from "./Footer"; // You need to create this component
import { Outlet } from "react-router-dom"; // Make sure react-router-dom is installed: npm install react-router-dom

const Layout = () => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 }); // State for custom cursor position
  const cursorRef = useRef(null); // Ref for the custom cursor element

  // Function to handle scrolling to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll animation
    });
  };

  // Effect to add and remove scroll and mousemove event listeners
  useEffect(() => {
    const handleScroll = () => {
      // Show scroll-to-top button if scrolled down more than 300px (adjust as needed)
      if (window.scrollY > 300) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Framer Motion variants for the scroll-to-top button
  const buttonVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 10 },
    },
    exit: {
      opacity: 0,
      y: 50,
      scale: 0.8,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Custom Neon Cursor */}
      <motion.div
        ref={cursorRef}
        className="fixed pointer-events-none z-[9999] rounded-full mix-blend-multiply filter blur-md opacity-70 transition-all duration-100 ease-out
                   w-8 h-8 md:w-10 md:h-10
                   bg-[var(--neon-cursor-light)] dark:bg-[var(--neon-cursor-dark)]"
        animate={{
          x:
            mousePosition.x -
            (cursorRef.current ? cursorRef.current.offsetWidth / 2 : 0),
          y:
            mousePosition.y -
            (cursorRef.current ? cursorRef.current.offsetHeight / 2 : 0),
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />

      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollToTop && (
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-4 rounded-full text-white shadow-lg z-40
                       focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800
                       transition-all duration-300 flex items-center justify-center
                       bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600" // Added more direct Tailwind classes
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            whileHover={{ scale: 1.1 }} // Scale only, background color handled by Tailwind
            whileTap={{ scale: 0.9 }}
            aria-label="Scroll to top"
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Layout;
