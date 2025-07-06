import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const Education: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const educationData = [
    {
      institution: "Kalasalingam Academy of Research and Education",
      degree: "B.Tech in Computer Science Engineering",
      duration: "2022 - 2026",
      grade: "CGPA: 8.2",
      description: "Specializing in AI, Machine Learning, and Software Development with hands-on experience in robotics and IoT projects.",
      icon: <GraduationCap size={32} />
    },
    {
      institution: "Tirumala Educational Institutions",
      degree: "Class XII (Intermediate)",
      duration: "2020 - 2022",
      grade: "92.7% | JEE Mains: 93 percentile",
      description: "Mathematics, Physics, Chemistry with strong foundation in analytical thinking and problem-solving.",
      icon: <Award size={32} />
    },
    {
      institution: "Montessori's English Medium School",
      degree: "10th Standard (SSC)",
      duration: "2019 - 2020",
      grade: "95.3%",
      description: "Comprehensive secondary education with excellence in mathematics and science subjects.",
      icon: <Calendar size={32} />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900 dark:to-primary-800 min-h-screen pt-32 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-primary-900 dark:text-white mb-6">
            Educational <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-600 to-primary-600">Journey</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-600 to-primary-600 mx-auto mb-8" />
          <p className="text-xl text-primary-600 dark:text-primary-300 max-w-3xl mx-auto text-justify">
          My educational journey has provided me with a solid foundation in computer science, mathematics, and problem-solving. Each step has shaped my skills and passion for technology. Here’s a timeline of my academic background
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gradient-to-b from-accent-600 to-primary-600 " />

          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-accent-600 rounded-full border-4 border-white dark:border-primary-800 shadow-lg z-10" />

                {/* Content Card */}
                <motion.div
                  whileHover={{ scale: 1.02, rotate: index % 2 === 0 ? 1 : -1 }}
                  className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                  }`}
                >
                  <div className="bg-white dark:bg-primary-800 p-8 rounded-2xl shadow-xl border border-primary-200 dark:border-primary-700 hover:shadow-2xl transition-all duration-300 ">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="text-accent-600 dark:text-accent-400 mt-1">
                        {edu.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-serif font-bold text-primary-900 dark:text-white mb-2 break-words">
                          {edu.institution}
                        </h3>
                        <h4 className="text-lg font-semibold text-primary-700 dark:text-primary-200 mb-2 break-words">
                          {edu.degree}
                        </h4>
                        <div className="flex flex-wrap gap-2 mb-3">
                          <span className="bg-accent-100 dark:bg-accent-900 text-accent-800 dark:text-accent-200 px-3 py-1 rounded-full text-sm font-medium">
                            {edu.duration}
                          </span>
                          <span className="bg-success-100 dark:bg-success-900 text-success-800 dark:text-success-200 px-3 py-1 rounded-full text-sm font-medium">
                            {edu.grade}
                          </span>
                        </div>
                        <p className="text-primary-600 dark:text-primary-300 leading-relaxed break-words text-justify">
                          {edu.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;