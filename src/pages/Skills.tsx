import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Wrench, BarChart3, Users, Brain, Database } from 'lucide-react';

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code size={32} />,
      skills: ["Java", "Python","C","C++","HTML","CSS","JavaScript"],
      color: "accent"
    },
    {
      title: "Development Tools",
      icon: <Wrench size={32} />,
      skills: ["Git", "GitHub", "VS Code", "Colab", "Jupyter"],
      color: "primary"
    },
    {
      title: "Data & AI Tools",
      icon: <BarChart3 size={32} />,
      skills: ["Power BI", "TensorFlow", "OpenCV","MongoDB"],
      color: "accent"
    },
    {
      title: "Soft Skills",
      icon: <Users size={32} />,
      skills: ["Leadership", "Teamwork", "Adaptability", "Creativity","Time Management","Problem Solving","Critical Thinking"],
      color: "primary"
    },
    {
      title: "Core Topics",
      icon: <Brain size={32} />,
      skills: ["AI", "Robotics", "DBMS", "OOPS", "DSA"],
      color: "accent"
    },
    {
      title: "Systems",
      icon: <Database size={32} />,
      skills: ["Operating Systems", "Computer Networks", "IoT"],
      color: "primary"
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
    <section className="py-20 bg-gradient-to-br from-accent-50 to-white dark:from-primary-900 dark:to-primary-800 min-h-screen pt-32 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-primary-900 dark:text-white mb-6">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-600 to-primary-600">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-600 to-primary-600 mx-auto mb-8" />
          <p className="text-xl text-primary-600 dark:text-primary-300 max-w-3xl mx-auto text-justify">
          Through consistent learning and real-world projects, I’ve gained strong skills in multiple programming languages, tools, and technologies. Here’s a quick look at my technical toolkit ....
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
              <div className="bg-white dark:bg-primary-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-primary-200 dark:border-primary-700">
                <div className={`
                  inline-flex p-3 rounded-xl mb-6 text-white
                  ${category.color === 'accent' ? 'bg-accent-600' : 'bg-primary-600'}
                `}>
                  {category.icon}
                </div>
                
                <h3 className="text-2xl font-serif font-bold text-primary-900 dark:text-white mb-6 group-hover:text-primary-800 dark:group-hover:text-primary-100 transition-colors duration-300 break-words">
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
                        inline-block px-4 py-2 rounded-full text-sm font-medium m-1 transition-all duration-300 break-words
                        ${category.color === 'accent'
                          ? 'bg-accent-100 dark:bg-accent-900 text-accent-800 dark:text-accent-200 hover:bg-accent-200 dark:hover:bg-accent-800'
                          : 'bg-primary-100 dark:bg-primary-700 text-primary-800 dark:text-primary-200 hover:bg-primary-200 dark:hover:bg-primary-600'
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
          <div className="bg-white dark:bg-primary-800 p-8 rounded-2xl shadow-lg border border-primary-200 dark:border-primary-700 transition-colors duration-300">
            <h3 className="text-2xl font-serif font-bold text-primary-900 dark:text-white mb-4">
              Continuous Learning & Growth
            </h3>
            <p className="text-primary-600 dark:text-primary-300 max-w-2xl mx-auto break-words text-justify">
              Constantly expanding my skill set through practical projects, online courses, and hands-on experimentation with emerging technologies in AI, robotics, and software development.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;