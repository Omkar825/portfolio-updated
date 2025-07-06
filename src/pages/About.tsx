import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Brain, Cpu, Users } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const highlights = [
    {
      icon: <Code size={32} />,
      title: "Passionate Learner",
      description: "Always eager to learn and grow, I stay curious and keep exploring new technologies to improve my skills."
    },
    {
      icon: <Brain size={32} />,
      title: "Creative Problem Solver",
      description: "I enjoy finding smart and simple ways to solve tough problems. I look at challenges from different angles and come up with solutions that are both efficient and easy to understand."
    },
    {
      icon: <Cpu size={32} />,
      title: "Technical Innovator",
      description: "I like to think ahead and create new solutions that make a real difference. I enjoy turning ideas into useful technology that helps people and improves how things work."
    },
    {
      icon: <Users size={32} />,
      title: "Code Craftsman",
      description: "I take pride in writing clean, well-organized code. My focus is on building apps that are strong, scalable, and easy to maintain, paying attention to even the small details."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white to-primary-50 dark:from-primary-900 dark:to-primary-800 min-h-screen pt-32 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl lg:text-5xl font-serif font-bold text-primary-900 dark:text-white mb-6"
          >
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-600 to-primary-600">Me</span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-accent-600 to-primary-600 mx-auto mb-8"
          />
        </motion.div>

        {/* Main Content - Image and Journey Side by Side */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-col md:flex-row items-center gap-12 mb-16"
        >
          {/* Profile Image */}
          <motion.div
            variants={itemVariants}
            className="w-full md:w-1/2"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <div className="relative w-full max-w-md mx-auto">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-4 bg-gradient-to-r from-accent-300 to-primary-300 dark:from-accent-600 dark:to-primary-600 rounded-xl opacity-20 blur-xl"
                />
                <img
                  src="/Omkar.png"
                  alt="Omkara Anjaneya Kumar"
                  className="relative w-full h-96 object-cover rounded-xl shadow-2xl border-4 border-white/80 dark:border-primary-700/80 backdrop-blur-sm transition-transform duration-300"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* My Journey Content */}
          <motion.div
            variants={itemVariants}
            className="w-full md:w-1/2 text-left"
          >
            <div className="bg-white dark:bg-primary-800 p-8 rounded-2xl shadow-xl border border-primary-200 dark:border-primary-700 transition-colors duration-300 text-justify">
              <h3 className="text-3xl font-serif font-bold text-primary-900 dark:text-white mb-6">
                My Journey
              </h3>
              <p className="text-lg text-primary-700 dark:text-primary-200 leading-relaxed mb-6">
              I'm a Computer Science Engineering undergraduate with a passion for innovation, AI, and building solutions that make an impact. My journey is fueled by curiosity, persistence, and a drive to solve real-world problems through technology.
              </p>
              <p className="text-lg text-primary-700 dark:text-primary-200 leading-relaxed">
              From an early age, I've been fascinated by how technology can transform our lives. This curiosity led me to explore various domains within computer science, from artificial intelligence to robotics and software development. Through continuous learning and hands-on projects, I've developed a diverse skill set that allows me to approach problems from multiple angles and create innovative solutions that are both technically sound and user-friendly.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Contact Information Card */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-16"
        >
          <div className="bg-white dark:bg-primary-800 p-8 rounded-2xl shadow-lg border border-primary-200 dark:border-primary-700 max-w-4xl mx-auto transition-colors duration-300">
            <h4 className="text-2xl font-serif font-semibold text-primary-900 dark:text-white mb-6 text-center">Contact Information</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center flex justify-center items-center w-full mt-8">
              <div className="space-y-2">
                <h5 className="font-semibold text-primary-900 dark:text-white">Phone</h5>
                <p className="text-primary-600 dark:text-primary-300">+91 8328669439</p>
              </div>
              <div className="space-y-2">
                <h5 className="font-semibold text-primary-900 dark:text-white">Email</h5>
                <p className="text-primary-600 dark:text-primary-300 break-all">omkarratnala2565@gmail.com</p>
              </div>
              <div className="space-y-2">
                <h5 className="font-semibold text-primary-900 dark:text-white">Location</h5>
                <p className="text-primary-600 dark:text-primary-300">Palakollu, Andhra Pradesh</p>
              </div>
              <div className="space-y-2">
                <h5 className="font-semibold text-primary-900 dark:text-white">Current Location</h5>
                <p className="text-primary-600 dark:text-primary-300">Krishnan Kovil, Tamil Nadu</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Highlights Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, rotate: 1 }}
              className="bg-white dark:bg-primary-800 p-6 rounded-xl shadow-lg border border-primary-200 dark:border-primary-700 hover:shadow-2xl transition-all duration-300 "
            >
              <div className="text-accent-600 dark:text-accent-400 mb-4 flex justify-center text-justify">
                {highlight.icon}
              </div>
              <h4 className="text-lg font-serif font-semibold text-primary-900 dark:text-white mb-2 text-center">
                {highlight.title}
              </h4>
              <p className="text-primary-600 dark:text-primary-300 text-sm text-center text-justify">
                {highlight.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;