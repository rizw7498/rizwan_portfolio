"use client"
import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Code, Server, Database, Palette, GitBranch, Type, Zap, Cloud } from 'lucide-react'; // More relevant icons

// --- Skill Data ---
const skillsData = [
    {
        id: 's1',
        title: 'Frontend Development',
        image: '/react.png', // Placeholder for React
        description: 'Expert in React.js, modern JavaScript (ES6+), HTML5, and CSS3 for building responsive and interactive user interfaces.',
        side: 'left',
    },
    {
        id: 's2',
        title: 'Backend Development',
        image: 'node.png', // Placeholder for Node.js
        description: 'Proficient in Node.js and Express.js for developing robust, scalable, and secure server-side applications and RESTful APIs.',
        side: 'right',
    },
    {
        id: 's3',
        title: 'Database Management',
        image: '/mongodb.png', // Placeholder for MongoDB
        description: 'Experienced with MongoDB for efficient NoSQL database design, management, and optimization.',
        side: 'left',
    },
    {
        id: 's4',
        title: 'UI/UX Design',
        image: '/ui.png', // Placeholder for Tailwind CSS or general UI
        description: 'Skilled in creating intuitive and visually appealing user experiences with Tailwind CSS and modern design principles.',
        side: 'right',
    },
    {
        id: 's5',
        title: 'Version Control',
        image: '/github.png', // Placeholder for Git
        description: 'Proficient in Git and GitHub for collaborative development, code management, and version control.',
        side: 'left',
    },
    {
        id: 's6',
        title: 'API Integration',
        image: '/api.png', // Placeholder for API
        description: 'Seamlessly integrating third-party APIs and developing custom API endpoints for various applications.',
        side: 'right',
    },
    {
        id: 's7',
        title: 'Cloud Deployment',
        image: '/cloud.png', // Placeholder for Cloud
        description: 'Experience with deploying web applications on platforms like Vercel and Netlify.',
        side: 'left',
    },
];

const Skills = () => {
    const scrollRef = useRef(null); // Ref for the section to track scroll progress
    const { scrollYProgress } = useScroll({
        target: scrollRef,
        offset: ["start center", "end center"] // Start animation when center of section enters, end when it leaves
    });

    // State to track if dark mode is active
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Effect to check the theme on mount and update state
    useEffect(() => {
        // Function to check the theme class on the document element
        const checkTheme = () => {
            setIsDarkMode(document.documentElement.classList.contains('dark'));
        };

        // Initial check when the component mounts
        checkTheme();

        // Set up a MutationObserver to watch for changes to the 'class' attribute on the html element
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                    checkTheme(); // Re-check theme if the class attribute changes
                }
            });
        });

        // Start observing the html element for attribute changes
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

        // Clean up the observer when the component unmounts
        return () => observer.disconnect();
    }, []); // Empty dependency array means this runs once on mount

    // Transform scroll progress to scale the main vertical line from 0 to 1
    const mainLineScaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

    // Framer Motion Variants
    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    // Variants for individual skill cards
    const skillCardVariants = {
        hiddenLeft: { opacity: 0, x: -100 }, // Initial state for left cards
        hiddenRight: { opacity: 0, x: 100 }, // Initial state for right cards
        visible: {
            opacity: 1,
            x: 0,
            // Set initial background color based on current theme
            backgroundColor: isDarkMode ? "#1f2937" : "#ffffff",
            transition: {
                type: 'spring',
                stiffness: 80,
                damping: 12,
                duration: 0.5
            },
        },
        // Light mode specific highlight animation
        highlight: {
            backgroundColor: ["#ffffff", "#e0f2fe"], // white to light blue-50
            transition: { duration: 0.4, delay: 0.2 },
        },
        // Dark mode specific highlight animation
        highlightDark: {
            backgroundColor: ["#1f2937", "#172554"], // gray-800 to dark blue-950
            transition: { duration: 0.4, delay: 0.2 },
        },
        hover: {
            scale: 1.03,
            boxShadow: "0px 12px 24px rgba(0, 0, 0, 0.25)",
            transition: { duration: 0.3, ease: "easeOut" },
        },
    };

    // Variants for the timeline nodes (circles)
    const nodeVariants = {
        hidden: { opacity: 0, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            // Set initial background color based on current theme
            backgroundColor: isDarkMode ? "#374151" : "#e5e7eb",
            transition: {
                type: 'spring',
                stiffness: 150,
                damping: 15,
                delay: 0.1 // Appear slightly before or with the card
            },
        },
        // Light mode specific highlight animation
        highlight: {
            backgroundColor: ["#e5e7eb", "#3b82f6"], // gray-200 to blue-500
            transition: { duration: 0.4, delay: 0.2 },
        },
        // Dark mode specific highlight animation
        highlightDark: {
            backgroundColor: ["#374151", "#60a5fa"], // gray-700 to blue-400
            transition: { duration: 0.4, delay: 0.2 },
        },
    };

    return (
        <section
            id="skills"
            ref={scrollRef} // Attach ref to the section for scroll tracking
            className="min-h-screen flex flex-col items-center justify-center py-20 px-3 sm:px-3
                       bg-gradient-to-br from-gray-50 to-blue-50
                       dark:from-gray-900 dark:to-gray-950
                       text-gray-900 dark:text-gray-100
                       font-sans transition-colors duration-700 ease-in-out relative overflow-hidden"
        >
            <motion.div
                className="container mx-auto max-w-7xl"
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                <motion.h2
                    className="text-4xl md:text-5xl font-extrabold text-center mb-16
                                bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500"
                >
                    My Skills
                </motion.h2>

                <div className="relative flex flex-col items-center w-full max-w-4xl mx-auto">
                    {/* Central Vertical Line */}
                    <div className="absolute left-1/2 -translate-x-1/2 h-full w-1.5 bg-gray-300 dark:bg-gray-700 z-0 rounded-full">
                        <motion.div
                            className="absolute inset-x-0 bottom-0 bg-blue-500 dark:bg-blue-400 origin-bottom rounded-full"
                            style={{ scaleY: mainLineScaleY }}
                        ></motion.div>
                    </div>

                    {/* Timeline Items */}
                    <div className="w-full">
                        {skillsData.map((skill, index) => (
                            <div
                                key={skill.id}
                                className={`relative flex items-center mb-16 last:mb-0
                                            ${skill.side === 'left' ? 'md:justify-start' : 'md:justify-end'}
                                            justify-center`}
                            >
                                {/* Timeline Node (Circle with Image) */}
                                <motion.div
                                    className={`absolute top-1/2 -translate-y-1/2 flex items-center justify-center z-10
                                                w-12 h-12 rounded-full shadow-md transition-colors duration-300 ease-in-out
                                                bg-gray-200 dark:bg-gray-900
                                                md:left-[47.5%] md:-translate-x-1/2
                                                left-0 -translate-x-1/2 sm:left-4`}
                                    variants={nodeVariants}
                                    initial="hidden"
                                    // Conditionally apply highlight variant based on theme
                                    whileInView={isDarkMode ? ["visible", "highlightDark"] : ["visible", "highlight"]}
                                    viewport={{ once: true, amount: 0.6 }}
                                >
                                    <img
                                        src={skill.image}
                                        alt={skill.title}
                                        className="w-7 h-7 object-contain"
                                        onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/28x28/cccccc/333333?text=Icon'; }} // Fallback for images
                                    />
                                </motion.div>

                                {/* Skill Card */}
                                <motion.div
                                    className={`w-full max-w-md p-6 rounded-xl shadow-lg border
                                                flex items-center gap-4 transition-colors duration-300 ease-in-out
                                                bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700

                                                ${skill.side === 'left' ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'}
                                                md:w-[calc(50%-40px)]
                                                relative z-10`}
                                    variants={skillCardVariants}
                                    initial={skill.side === 'left' ? 'hiddenLeft' : 'hiddenRight'}
                                    // Conditionally apply highlight variant based on theme
                                    whileInView={isDarkMode ? ["visible", "highlightDark"] : ["visible", "highlight"]}
                                    viewport={{ once: true, amount: 0.6 }}
                                    whileHover="hover"
                                >
                                    <img
                                        src={skill.image}
                                        alt={skill.title}
                                        className="w-16 h-16 object-contain flex-shrink-0 rounded-md p-1 bg-gray-100 dark:bg-gray-700"
                                        onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/64x64/cccccc/333333?text=Logo'; }} // Fallback for images
                                    />
                                    <div className="flex-grow">
                                        <h3 className="text-xl font-bold mb-1 text-gray-800 dark:text-gray-100">{skill.title}</h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-300">{skill.description}</p>
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Skills;


