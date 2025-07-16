// components/Projects.jsx
"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Info, X, CheckCircle } from 'lucide-react'; // Removed Github, ExternalLink as they are not used

// --- Project Data ---
const projectsData = [
    {
        id: '1',
        title: 'Auction and Bidding System',
        shortDescription: 'A full-stack auction platform with real-time bidding, user authentication, and payment integration using Stripe.',
        longDescription: 'Built a dynamic auction and bidding system using the MERN stack. Features include user registration/login with JWT, product listing, live bidding system, secure payments via Stripe, and an admin panel for managing products and users. State was managed with Redux, and all transactions were secured. This project demonstrates expertise in real-time interaction, authentication, and scalable architecture.',
        thumbnail: '/Auction.png',
        fullImage: '/Auction.png',
        technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Redux', 'Stripe', 'Tailwind CSS'],
    },
    {
        id: '2',
        title: 'Expense Tracking System',
        shortDescription: 'A full-stack expense tracker app to monitor daily and monthly expenses with charts and data filtering.',
        longDescription: 'Developed a complete expense tracking application using React, Node.js, Express, and MongoDB. Users can add, update, and delete expenses, categorize them, and view analytics through interactive charts. Context API was used for state management. The app includes authentication, secure routing, and persistent storage of user data, aiming to enhance financial awareness and budgeting.',
        thumbnail: '/expense.png',
        fullImage: '/expense.png',
        technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Context API', 'Axios'],
    },
    {
        id: '3',
        title: 'CRM Dashboard',
        shortDescription: 'A full-featured CRM analytics dashboard to manage leads, tasks, and user activities with dynamic charts.',
        longDescription: 'Built a CRM dashboard application for managing leads, contacts, tasks, and reporting. Integrated ApexCharts for data visualization and used REST APIs to fetch dynamic CRM data. Features include user authentication, real-time lead updates, filterable task lists, and responsive UI. This project showcases effective state management, performance optimization, and dashboard UX design.',
        thumbnail: '/crm.PNG',
        fullImage: '/crm.PNG',
        technologies: ['React', 'ApexCharts.js', 'REST APIs', 'Tailwind CSS', 'Styled Components'],
    },
    {
        id: '4',
        title: 'Personal Portfolio Website',
        shortDescription: 'A modern, responsive portfolio site built with React and Tailwind to showcase my projects and skills.',
        longDescription: 'A personal portfolio website developed using React and Tailwind CSS to highlight my professional work and projects. Integrated Framer Motion for smooth animations, Lucide React for clean iconography, and dark/light theme switching. The site is fully responsive and SEO-optimized, with modular components for easy scalability.',
        thumbnail: '/portfolio.PNG',
        fullImage: '/portfolio.PNG',
        technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Lucide React'],
    },
    {
        id: '5',
        title: 'WhatsApp Chat Automation',
        shortDescription: 'A real-time WhatsApp-like chat app with authentication, group chats, and Socket.IO integration.',
        longDescription: 'Built a real-time chat application using the Baileys library (unofficial WhatsApp Web API) for WhatsApp integration. Features include authentication, chat history, group conversations, message status indicators, and typing indicators. Backend built with Node.js/Express and real-time updates powered by Socket.IO. MongoDB was used for chat persistence.',
        thumbnail: '/whatsappweb.avif',
        fullImage: '/whatsappweb.avif',
        technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.IO', 'Baileys'],
    },
    {
        id: '6',
        title: 'CRM Website (Next.js)',
        shortDescription: 'A CRM web application built with Next.js to manage leads, tasks, and customers, featuring dark/light themes.',
        longDescription: 'Designed and developed a CRM web app using Next.js and Tailwind CSS. Integrated Framer Motion for interactive UI transitions and dark/light theme switching. Features include lead management, task tracking, and modular components for scalability. Optimized for performance and responsiveness, this app serves as the frontend for a CRM solution integrated with backend APIs.',
        thumbnail: '/crm-web.PNG',
        fullImage: '/crm-web.PNG',
        technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Lucide Icons', 'Dark/Light Theme'],
    },
];

const Projects = () => {
    // --- STATE MANAGEMENT ---
    const [selectedProject, setSelectedProject] = useState(null);

    // Project Modal Handlers
    const openModal = (project) => {
        setSelectedProject(project);
    };

    const closeModal = () => {
        setSelectedProject(null);
    };

    // --- FRAMER MOTION VARIANTS ---
    const projectsSectionVariants = {
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    const projectCardVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.95 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 100, damping: 10, delay: 0.1 } },
        hover: {
            y: -10, // More pronounced lift
            boxShadow: "0px 18px 35px rgba(0, 0, 0, 0.2), 0px 0px 0px 3px rgba(99, 102, 241, 0.6)", // Stronger shadow and gradient border effect
            transition: { duration: 0.3, ease: "easeOut" },
        },
        tap: { scale: 0.98 },
    };

    const imageOverlayVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.3 } },
    };

    const overlayTitleVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { delay: 0.15, duration: 0.3 } },
    };

    const buttonVariants = {
        hover: {
            scale: 1.05,
            boxShadow: "0px 8px 15px rgba(0,0,0,0.2)",
            transition: { duration: 0.2 },
        },
        tap: { scale: 0.95 },
    };

    const modalBackdropVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    const modalContentVariants = {
        hidden: { y: "-100vh", opacity: 0 },
        visible: {
            y: "0",
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
            },
        },
        exit: {
            y: "100vh",
            opacity: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
            },
        },
    };

    // --- NESTED COMPONENTS ---
    const ProjectCard = ({ project, onViewDetails }) => {
        const [isHovered, setIsHovered] = useState(false);

        return (
            <motion.div
                className="break-inside-avoid-column px-3 sm:p-4"
                variants={projectCardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                whileTap="tap"
                viewport={{ once: true, amount: 0.1 }}
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
            >
                <div
                    className="bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700
                                overflow-hidden h-full flex flex-col transition-all duration-300 ease-in-out
                                rounded-xl cursor-pointer relative"
                    onClick={() => onViewDetails(project)}
                >
                    <div className="relative w-full h-auto overflow-hidden">
                        <img
                            src={project.thumbnail}
                            alt={project.title}
                            className="object-cover w-full h-full transition-transform duration-500 hover:scale-110 rounded-t-xl"
                            onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x250/cccccc/333333?text=Project+Image'; }}
                        />
                        <AnimatePresence>
                            {isHovered && (
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-5 rounded-t-xl"
                                    variants={imageOverlayVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="hidden"
                                >
                                    <motion.h3
                                        className="text-2xl font-bold text-white drop-shadow-lg"
                                        variants={overlayTitleVariants}
                                    >
                                        {project.title}
                                    </motion.h3>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                    <div className="p-5 flex flex-col flex-grow">
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 line-clamp-2">
                            {project.shortDescription}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.technologies.slice(0, 3).map((tech, idx) => (
                                <span
                                    key={idx}
                                    className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs px-2.5 py-1 font-medium shadow-sm rounded-full"
                                >
                                    {tech}
                                </span>
                            ))}
                            {project.technologies.length > 3 && (
                                <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs px-2.5 py-1 font-medium shadow-sm rounded-full">
                                    +{project.technologies.length - 3} more
                                </span>
                            )}
                        </div>
                        <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-100 dark:border-gray-700">
                            <motion.button
                                onClick={() => onViewDetails(project)}
                                className="flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-200 transition-colors duration-200 font-semibold px-4 py-2 rounded-lg bg-indigo-50 dark:bg-indigo-900/50 hover:bg-indigo-100 dark:hover:bg-indigo-900"
                                variants={buttonVariants}
                                whileHover="hover"
                                whileTap="tap"
                                aria-label={`View details for ${project.title}`}
                            >
                                <Info className="w-5 h-5 mr-2" /> View Details
                            </motion.button>
                        </div>
                    </div>
                </div>
            </motion.div>
        );
    };

    const ProjectModal = ({ project, onClose }) => {
        if (!project) return null;

        return (
            <AnimatePresence>
                <motion.div
                    className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
                    variants={modalBackdropVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    onClick={onClose}
                >
                    <motion.div
                        className="bg-white dark:bg-gray-800 shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto
                                 border border-gray-200 dark:border-gray-700 relative flex flex-col rounded-lg"
                        variants={modalContentVariants}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 text-gray-700 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 p-2 transition-colors duration-200 z-10 bg-white dark:bg-gray-700 rounded-full shadow-md"
                            aria-label="Close modal"
                        >
                            <X className="w-7 h-7" />
                        </button>

                        <div className="relative w-full h-64 md:h-96 overflow-hidden">
                            <img
                                src={project.fullImage || project.thumbnail}
                                alt={project.title}
                                className="object-cover object-center w-full h-full rounded-t-lg"
                                onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/800x450/cccccc/333333?text=Project+Image'; }}
                            />
                        </div>

                        <div className="p-6 flex flex-col flex-grow">
                            <h2 className="text-3xl md:text-4xl font-extrabold mb-3 text-gray-900 dark:text-gray-100">
                                {project.title}
                            </h2>
                            <p className="text-indigo-600 dark:text-indigo-400 text-lg font-semibold mb-4">
                                {project.shortDescription}
                            </p>
                            <p className="text-gray-700 dark:text-gray-300 text-base mb-6 flex-grow leading-relaxed">
                                {project.longDescription}
                            </p>

                            <div className="mb-6">
                                <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">Technologies Used:</h3>
                                <div className="flex flex-wrap gap-3">
                                    {project.technologies.map((tech, idx) => (
                                        <span
                                            key={idx}
                                            className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm px-4 py-2 font-medium shadow-sm flex items-center rounded-full transition-colors duration-200 hover:bg-blue-200 dark:hover:bg-blue-800"
                                        >
                                            <CheckCircle className="w-4 h-4 mr-2" /> {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            {/* Removed the GitHub/Live Demo links section from here */}
                        </div>
                    </motion.div>
                </motion.div>
            </AnimatePresence>
        );
    };

    return (
        <section
            id="projects"
            className="min-h-screen flex flex-col items-center justify-center py-20 px-6 sm:px-10
                       bg-gradient-to-br from-gray-50 to-indigo-100
                       dark:from-gray-950 dark:to-gray-800
                       text-gray-900 dark:text-gray-100
                       font-poppins transition-colors duration-700 ease-in-out relative overflow-hidden"
        >
            <motion.div
                className="container mx-auto max-w-7xl"
                variants={projectsSectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                <motion.h2
                    className="text-4xl md:text-5xl font-extrabold text-center mb-16
                                bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"
                >
                    My Projects
                </motion.h2>

                {/* Masonry Columns Container */}
                <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-8">
                    {projectsData.map((project) => (
                        <ProjectCard key={project.id} project={project} onViewDetails={openModal} />
                    ))}
                </div>
            </motion.div>

            {/* Project Details Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <ProjectModal project={selectedProject} onClose={closeModal} />
                )}
            </AnimatePresence>
        </section>
    );
};

export default Projects;