import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const Education: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
    <section id="education" className="py-20 bg-gradient-to-br from-royal-50 to-gold-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-royal-800 mb-6">
            Educational <span className="text-transparent bg-clip-text bg-gradient-to-r from-royal-600 to-gold-600">Journey</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-royal-600 to-gold-600 mx-auto mb-8" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A progressive academic journey building strong foundations in computer science and engineering
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
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gradient-to-b from-royal-600 to-gold-600" />

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
                <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-royal-600 rounded-full border-4 border-white shadow-lg z-10" />

                {/* Content Card */}
                <motion.div
                  whileHover={{ scale: 1.02, rotate: index % 2 === 0 ? 1 : -1 }}
                  className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                  }`}
                >
                  <div className="bg-white p-8 rounded-2xl shadow-xl border border-royal-100 hover:shadow-2xl transition-all duration-300">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="text-royal-600 mt-1">
                        {edu.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-royal-800 mb-2">
                          {edu.institution}
                        </h3>
                        <h4 className="text-lg font-semibold text-gray-700 mb-2">
                          {edu.degree}
                        </h4>
                        <div className="flex flex-wrap gap-2 mb-3">
                          <span className="bg-royal-100 text-royal-800 px-3 py-1 rounded-full text-sm font-medium">
                            {edu.duration}
                          </span>
                          <span className="bg-gold-100 text-gold-800 px-3 py-1 rounded-full text-sm font-medium">
                            {edu.grade}
                          </span>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
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