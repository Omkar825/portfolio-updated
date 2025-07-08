import React from 'react';
import { motion } from 'framer-motion';
import { LinkedinIcon, GithubIcon, ChevronDown, Download, FolderOpen, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import DynamicBackground from '../components/DynamicBackground';

const Home: React.FC = () => {
  const handleResumeDownload = () => {
    try {
      // Create a temporary link element to trigger download
      const link = document.createElement('a');
      link.href = '/99220041567_Resume.pdf';
      link.download = 'Omkara_Anjaneya_Kumar_Resume.pdf';
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      
      // Append to body, click, and remove
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Fallback: Open in new tab if download fails
      setTimeout(() => {
        window.open('/99220041567_Resume.pdf', '_blank', 'noopener,noreferrer');
      }, 100);
    } catch (error) {
      console.error('Download failed:', error);
      // Fallback: Open in new tab
      window.open('/99220041567_Resume.pdf', '_blank', 'noopener,noreferrer');
    }
  };

  const scrollToProjects = () => {
    // Smooth scroll to projects section or navigate to projects page
    const projectsElement = document.getElementById('projects');
    if (projectsElement) {
      projectsElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If projects section doesn't exist on current page, navigate to projects page
      window.location.href = '/projects';
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-primary-50 to-accent-50 dark:from-primary-900 dark:via-primary-800 dark:to-primary-900 transition-colors duration-300">
      <DynamicBackground />

      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 mb-12 lg:mb-0"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 bg-gradient-to-r from-accent-300 to-primary-300 dark:from-accent-600 dark:to-primary-600 rounded-full opacity-20 blur-xl"
              />
              <div className="relative w-80 h-80 mx-auto rounded-full overflow-hidden shadow-2xl border-4 border-white/80 dark:border-primary-700/80 backdrop-blur-sm">
                <img
                  src="/Omkar.png"
                  alt="Omkara Anjaneya Kumar"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2 text-center lg:text-left"
          >
            {/* Responsive Name Display with Proper Wrapping */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-6 w-full max-w-full"
            >
              <h1 className="font-serif font-bold text-primary-900 dark:text-white leading-tight break-words overflow-wrap-anywhere text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-600 to-primary-600 dark:from-accent-400 dark:to-primary-400">
                  Omkara Anjaneya Kumar
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl lg:text-2xl text-primary-600 dark:text-primary-300 mb-8 italic font-serif break-words text-justify"
            >
              "Patience is not about waiting — it's the quiet strength to persist, adapt, and create, even when results take time."
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-lg text-primary-700 dark:text-primary-200 mb-8 max-w-2xl font-medium break-words"
            >
              Engineer | Innovator | Problem Solver
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-8"
            >
              {/* Download Resume Button */}
              <motion.button
                onClick={handleResumeDownload}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-accent-600 to-primary-600 text-white font-semibold rounded-full shadow-lg hover:from-accent-700 hover:to-primary-700 transition-all duration-300 overflow-hidden"
                aria-label="Download Resume PDF"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Download size={20} className="relative z-10" />
                <span className="relative z-10">Download Resume</span>
              </motion.button>

              {/* View Projects Button */}
              <motion.button
                onClick={scrollToProjects}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white dark:bg-primary-800 text-primary-700 dark:text-primary-200 font-semibold rounded-full shadow-lg border-2 border-primary-200 dark:border-primary-600 hover:bg-primary-50 dark:hover:bg-primary-700 hover:border-primary-300 dark:hover:border-primary-500 transition-all duration-300 overflow-hidden"
                aria-label="View Projects Section"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-accent-50 dark:from-accent-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <FolderOpen size={20} className="relative z-10" />
                <span className="relative z-10">View Projects</span>
              </motion.button>
            </motion.div>

            {/* Social Media Icons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex justify-center lg:justify-start gap-4 mb-8"
            >
              <motion.a
                whileHover={{ scale: 1.1, rotate: 5, y: -3 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.linkedin.com/in/omkar-anjaneya-kumar/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon size={24} />
                <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.a>
              
              <motion.a
                whileHover={{ scale: 1.1, rotate: -5, y: -3 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/Omkar825"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-4 bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                aria-label="GitHub Profile"
              >
                <GithubIcon size={24} />
                <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.1, rotate: 5, y: -3 }}
                whileTap={{ scale: 0.95 }}
                href="https://x.com/omkar_ratnala"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-4 bg-sky-500 hover:bg-sky-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                aria-label="Twitter Profile"
              >
                <Twitter size={24} />
                <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.a>
            </motion.div>

            {/* Explore Journey Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="flex justify-center lg:justify-start"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/about"
                  className="group relative inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-100 to-accent-100 dark:from-primary-800 dark:to-primary-700 text-primary-700 dark:text-primary-200 font-semibold rounded-full shadow-md hover:shadow-lg border border-primary-200 dark:border-primary-600 hover:border-primary-300 dark:hover:border-primary-500 transition-all duration-300 overflow-hidden"
                  aria-label="Navigate to About Page"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-accent-200/50 to-primary-200/50 dark:from-accent-800/30 dark:to-primary-800/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative z-10">Explore My Journey</span>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;
