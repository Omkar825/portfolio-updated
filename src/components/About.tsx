import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Brain, Cpu, Users } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
      title: "Software Development",
      description: "Strong foundation in programming languages and development practices"
    },
    {
      icon: <Brain size={32} />,
      title: "AI & Data Analysis",
      description: "Experience with machine learning and data-driven solutions"
    },
    {
      icon: <Cpu size={32} />,
      title: "Robotics & IoT",
      description: "Hands-on experience with robotic systems and IoT applications"
    },
    {
      icon: <Users size={32} />,
      title: "Leadership",
      description: "Proven track record of leading innovative projects and teams"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
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
            className="text-4xl lg:text-5xl font-bold text-royal-800 mb-6"
          >
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-royal-600 to-gold-600">Me</span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-royal-600 to-gold-600 mx-auto mb-8"
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-royal-50 to-gold-50 p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-semibold text-royal-800 mb-4">
                Passionate Innovator & Problem Solver
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                A highly motivated and detail-oriented Computer Science Engineering student with a strong foundation in software development, data analysis, and emerging technologies such as Generative AI and robotics. Demonstrated leadership and innovation through successful projects including a dual-mode robotic arm and Green Guardian Go.
              </p>
            </div>

            <motion.div
              variants={itemVariants}
              className="bg-white p-6 rounded-xl shadow-lg border border-royal-100"
            >
              <h4 className="text-xl font-semibold text-royal-800 mb-3">Contact Information</h4>
              <div className="space-y-2 text-gray-600">
                <p><strong>Phone:</strong> +91 8328669439</p>
                <p><strong>Email:</strong> omkarratnala2565@gmail.com</p>
                <p><strong>Location:</strong> Palakollu, Andhra Pradesh</p>
                <p><strong>Portfolio:</strong> <a href="https://omkaraanjaneyakumar.netlify.app/" target=\"_blank" rel="noopener noreferrer\" className="text-royal-600 hover:underline">omkaraanjaneyakumar.netlify.app</a></p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, rotate: 1 }}
                className="bg-white p-6 rounded-xl shadow-lg border border-royal-100 hover:shadow-2xl transition-all duration-300"
              >
                <div className="text-royal-600 mb-4">
                  {highlight.icon}
                </div>
                <h4 className="text-lg font-semibold text-royal-800 mb-2">
                  {highlight.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;