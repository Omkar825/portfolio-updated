import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Wrench, BarChart3, Users, Brain, Database } from 'lucide-react';

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code size={32} />,
      skills: ["Java", "Python", "HTML", "CSS", "JavaScript"],
      color: "royal"
    },
    {
      title: "Development Tools",
      icon: <Wrench size={32} />,
      skills: ["Git", "GitHub", "VS Code", "Colab", "Jupyter"],
      color: "gold"
    },
    {
      title: "Data & Analytics",
      icon: <BarChart3 size={32} />,
      skills: ["Power BI", "Data Analysis", "Machine Learning"],
      color: "royal"
    },
    {
      title: "Soft Skills",
      icon: <Users size={32} />,
      skills: ["Leadership", "Teamwork", "Adaptability", "Creativity"],
      color: "gold"
    },
    {
      title: "Core Topics",
      icon: <Brain size={32} />,
      skills: ["AI", "Robotics", "DBMS", "OOPS", "DSA"],
      color: "royal"
    },
    {
      title: "Systems",
      icon: <Database size={32} />,
      skills: ["Operating Systems", "Computer Networks", "IoT"],
      color: "gold"
    }
  ];

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
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-royal-800 mb-6">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-royal-600 to-gold-600">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-royal-600 to-gold-600 mx-auto mb-8" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive toolkit of technologies and skills developed through hands-on projects and continuous learning
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                rotate: Math.random() * 2 - 1,
                transition: { duration: 0.2 }
              }}
              className="group"
            >
              <div className={`
                bg-gradient-to-br p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border
                ${category.color === 'royal' 
                  ? 'from-royal-50 to-royal-100 border-royal-200 hover:border-royal-300' 
                  : 'from-gold-50 to-gold-100 border-gold-200 hover:border-gold-300'
                }
              `}>
                <div className={`
                  inline-flex p-3 rounded-xl mb-6 text-white
                  ${category.color === 'royal' ? 'bg-royal-600' : 'bg-gold-600'}
                `}>
                  {category.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-royal-800 mb-6 group-hover:text-royal-900 transition-colors duration-300">
                  {category.title}
                </h3>
                
                <motion.div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      variants={skillVariants}
                      initial="hidden"
                      animate={inView ? "visible" : "hidden"}
                      transition={{ delay: skillIndex * 0.1 }}
                      className={`
                        inline-block px-4 py-2 rounded-full text-sm font-medium m-1 transition-all duration-300
                        ${category.color === 'royal'
                          ? 'bg-royal-200 text-royal-800 hover:bg-royal-300'
                          : 'bg-gold-200 text-gold-800 hover:bg-gold-300'
                        }
                      `}
                    >
                      {skill}
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skill Level Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-royal-50 to-gold-50 p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-royal-800 mb-4">
              Continuous Learning & Growth
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Constantly expanding my skill set through practical projects, online courses, and hands-on experimentation with emerging technologies in AI, robotics, and software development.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;