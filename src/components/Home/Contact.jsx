"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, Send } from 'lucide-react'; // Lucide icons

const ContactSection = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // State for form submission status
  const [submissionStatus, setSubmissionStatus] = useState(null); // 'idle', 'loading', 'success', 'error'
  const [errorMessage, setErrorMessage] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmissionStatus('loading');
    setErrorMessage('');

    // Basic client-side validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setErrorMessage('Please fill in all required fields.');
      setSubmissionStatus('error');
      return;
    }

    // Email validation (simple regex)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage('Please enter a valid email address.');
      setSubmissionStatus('error');
      return;
    }

    // --- IMPORTANT: Backend/Email Service Integration ---
    // A client-side React app cannot directly send emails due to security restrictions.
    // You need a backend server (Node.js, Python, PHP, etc.) or a third-party email service.
    //
    // Example using Formspree.io (a popular service for static sites):
    // 1. Go to Formspree.io, create an account, and set up a new form.
    // 2. You'll get a unique form endpoint URL (e.g., https://formspree.io/f/YOUR_FORMSPREE_FORM_ID).
    // 3. Replace 'YOUR_FORMSPREE_FORM_ID' below with your actual Formspree ID.
    //
    // For a custom backend, you would send a POST request to your own API endpoint:
    // const response = await fetch('/api/send-email', { ... });

    try {
      const response = await fetch('https://formspree.io/f/xvgryyny', { // <<< REPLACE THIS WITH YOUR FORMSPREE ID
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json', // Important for Formspree
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmissionStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form
      } else {
        const data = await response.json();
        setErrorMessage(data.error || 'Oops! Something went wrong. Please try again.');
        setSubmissionStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setErrorMessage('Network error or server issue. Please try again later.');
      setSubmissionStatus('error');
    } finally {
      // Reset status after a short delay to show message
      setTimeout(() => setSubmissionStatus('idle'), 5000);
    }
  };

  // Framer Motion variants for section entry
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  // Variants for individual elements within the section
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center py-20 px-5 sm:px-3
                 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-zinc-950
                 text-gray-900 dark:text-gray-100
                 font-sans transition-colors duration-700 ease-in-out relative overflow-hidden"
    >
      <motion.div
        className="container mx-auto max-w-6xl"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center mb-16
                      bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-blue-600 dark:from-teal-300 dark:to-blue-400"
          variants={itemVariants}
        >
          Let's Connect
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column: Contact Info & Map */}
          <div className="flex flex-col gap-8">
            <motion.div
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700"
              variants={itemVariants}
            >
              <h3 className="text-2xl font-bold mb-6 text-indigo-700 dark:text-indigo-300">Get in Touch</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                Have a question, a project idea, or just want to say hello? Feel free to reach out through any of these channels. I'm always open to new opportunities and collaborations.
              </p>

              <div className="space-y-5">
                <div className="flex items-center text-lg text-gray-800 dark:text-gray-200">
                  <Mail size={24} className="text-blue-500 dark:text-blue-400 mr-4 flex-shrink-0" />
                  <span>rizw.4546ali@gmail.com</span>
                </div>
                <div className="flex items-center text-lg text-gray-800 dark:text-gray-200">
                  <Phone size={24} className="text-green-500 dark:text-green-400 mr-4 flex-shrink-0" />
                  <span>+92 3005645467</span>
                </div>
                <div className="flex items-start text-lg text-gray-800 dark:text-gray-200">
                  <MapPin size={24} className="text-red-500 dark:text-red-400 mr-4 flex-shrink-0 mt-1" />
                  <span>Muslim Town, Lahore , Punjab, Pakistan</span>
                </div>
              </div>

              <div className="flex mt-8 space-x-6">
                <motion.a
                  href="https://www.linkedin.com/in/rizwan-ali-79214a266" // Replace with your LinkedIn
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={30} />
                </motion.a>
                <motion.a
                  href="https://github.com/rizw7498" // Replace with your GitHub
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="GitHub Profile"
                >
                  <Github size={30} />
                </motion.a>
              
              </div>
            </motion.div>

            {/* Map Placeholder */}
            <motion.div
              className="w-full h-64 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700"
              variants={itemVariants}
            >
              <iframe
              title="FairForse CRM Location"
              width="100%"
              height="100%"
              frameBorder="0"
              scrolling="no"
              marginHeight={0}
              marginWidth={0}
              src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=Madina%20tower%20Lahore+(FairForse%20for%20CRM)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              className="w-full h-full"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            </motion.div>
          </div>

          {/* Right Column: Contact Form */}
          <motion.div
            className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-bold mb-6 text-indigo-700 dark:text-indigo-300">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100
                             focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100
                             focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100
                             focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100
                             focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-y transition-colors"
                  required
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-lg
                           shadow-lg hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800
                           transition-all duration-300 flex items-center justify-center gap-2"
                disabled={submissionStatus === 'loading'}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {submissionStatus === 'loading' ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} /> Send Message
                  </>
                )}
              </motion.button>

              {submissionStatus === 'success' && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 text-center text-green-600 dark:text-green-400 font-medium"
                >
                  Your message has been sent successfully!
                </motion.p>
              )}
              {submissionStatus === 'error' && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 text-center text-red-600 dark:text-red-400 font-medium"
                >
                  {errorMessage || 'Failed to send message. Please try again.'}
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
