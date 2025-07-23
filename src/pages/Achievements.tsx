import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Trophy, Award, FileText, Lightbulb, Target, Star } from 'lucide-react';

const Achievements: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
    rootMargin: '50px 0px',
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Force show content after a short delay if inView hasn't triggered
  const [forceShow, setForceShow] = React.useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setForceShow(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  const shouldShow = inView || forceShow;

  const achievements = [
    {
      title: "Finalist - Launchpad '25",
      organization: "BITS Pilani",
      description: "SSelected as a finalist for the Green Guardian Go project, competing among top innovators.",
      icon: <Target size={32} />,
      date: "2025",
      type: "Competition",
      color: "accent"
    },
    {
      title: "Winner - IEEE RAS Project Showcase",
      organization: "Robotics Competition",
      description: "Recognized for innovation and technical excellence for the Dual Mode Robotic Arm project.",
      icon: <Trophy size={32} />,
      date: "2024",
      type: "Award",
      color: "primary"
    },
    {
      title: "Patent: Stair Water Bottle",
      organization: "Innovation Patent",
      description: "Patented design for an ergonomic water bottle specifically designed for staircase usage.",
      icon: <Lightbulb size={32} />,
      date: "2023",
      type: "Patent",
      color: "accent"
    },
    {
      title: "Patent: Laptop Stand Design",
      organization: "Design Patent",
      description: "Innovative laptop stand design that improves ergonomics and cooling efficiency.",
      icon: <Award size={32} />,
      date: "2023",
      type: "Patent",
      color: "primary"
    },
    {
      title: "Research Publication",
      organization: "ICICNIS 2024",
      description: "Published research paper on 'IoT Enabled Device-to Device Communication for Smart City Application' in IEEE conference.",
      icon: <FileText size={32} />,
      date: "2024",
      type: "Publication",
      color: "accent",
      doi: "10.1109/ICICNIS64247.2024.10823329"
    },    
    {
      title: "Research Publication",
      organization: "ICCRTEE 2025",
      description: "Published research paper on 'Dual-Mode Robotic Arm for Manufacturing Industries' integrating Mimic Control and YOLOv8-based Automated Object Detection in IEEE ICCRTEE 2025 conference.",
      icon: <FileText size={32} />,
      date: "2025",
      type: "Publication",
      color: "primary",
      doi: "10.1109/ICCRTEE64519.2025.11053040"
    },
    {
      title: "Research Publication",
      organization: "ICICI 2025",
      description: "Published research paper on 'Smart Attendance System using Facial Recognition' in IEEE conference, showcasing an efficient, secure, and real-time attendance solution using OpenCV and face recognition integrated with MongoDB.",
      icon: <FileText size={32} />,
      date: "2025",
      type: "Publication",
      color: "accent",
      doi: "10.1109/ICICI65870.2025.11069930"
    }
  ];

  const stats = [
    { number: "5+", label: "Major Achievements", icon: <Star size={24} /> },
    { number: "2", label: "Patents Granted", icon: <Lightbulb size={24} /> },
    { number: "2", label: "Research Paper", icon: <FileText size={24} /> },
    { number: "3", label: "Competition Wins", icon: <Trophy size={24} /> }
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

  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900 dark:to-primary-800 min-h-screen pt-32 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={shouldShow ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-primary-900 dark:text-white mb-6">
            Achievements & <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-600 to-primary-600">Recognition</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-600 to-primary-600 mx-auto mb-8" />
          <p className="text-xl text-primary-600 dark:text-primary-300 max-w-3xl mx-auto text-justify">
          Here are some of my proudest achievements, awards, and patents. They represent the milestones in my journey of innovation and the recognition I’ve received for my contributions in technology and engineering.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={shouldShow ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white dark:bg-primary-800 p-6 rounded-2xl text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-primary-200 dark:border-primary-700"
            >
              <div className="text-accent-600 dark:text-accent-400 mb-3 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-3xl font-serif font-bold text-primary-900 dark:text-white mb-2">{stat.number}</div>
              <div className="text-primary-600 dark:text-primary-300 font-medium break-words">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Timeline */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={shouldShow ? "visible" : "hidden"}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gradient-to-b from-accent-600 to-primary-600" />

          <div className="space-y-12">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 bg-gradient-to-r from-accent-600 to-primary-600 rounded-full border-4 border-white dark:border-primary-800 shadow-lg z-10" />

                {/* Achievement Card */}
                <motion.div
                  whileHover={{ 
                    scale: 1.02, 
                    rotate: index % 2 === 0 ? 1 : -1,
                    transition: { duration: 0.2 }
                  }}
                  className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                  }`}
                >
                  <div className="bg-white dark:bg-primary-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-primary-200 dark:border-primary-700">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`
                        p-3 rounded-xl text-white
                        ${achievement.color === 'accent' ? 'bg-accent-600' : 'bg-primary-600'}
                      `}>
                        {achievement.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2 flex-wrap">
                          <span className={`
                            px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide
                            ${achievement.color === 'accent'
                              ? 'bg-accent-100 dark:bg-accent-900 text-accent-800 dark:text-accent-200'
                              : 'bg-primary-100 dark:bg-primary-700 text-primary-800 dark:text-primary-200'
                            }
                          `}>
                            {achievement.type}
                          </span>
                          <span className="text-primary-500 dark:text-primary-400 text-sm font-medium">
                            {achievement.date}
                          </span>
                        </div>
                        <h3 className="text-xl font-serif font-bold text-primary-900 dark:text-white mb-2 break-words">
                          {achievement.title}
                        </h3>
                        <h4 className="text-md font-semibold text-primary-700 dark:text-primary-200 mb-3 break-words">
                          {achievement.organization}
                        </h4>
                        <p className="text-primary-600 dark:text-primary-300 leading-relaxed mb-4 break-words">
                          {achievement.description}
                        </p>
                        {achievement.doi && (
                          <div className="bg-primary-50 dark:bg-primary-700 p-3 rounded-lg border border-primary-200 dark:border-primary-600">
                            <span className="text-sm font-medium text-primary-700 dark:text-primary-200">DOI: </span>
                            <span className="text-sm text-accent-600 dark:text-accent-400 font-mono break-all">{achievement.doi}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={shouldShow ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-accent-600 to-primary-600 p-8 rounded-2xl shadow-xl text-white">
            <h3 className="text-2xl font-serif font-bold mb-4">
              Driving Innovation Through Technology
            </h3>
            <p className="text-lg opacity-90 max-w-2xl mx-auto break-words text-justify">
              Committed to pushing the boundaries of technology and creating meaningful impact through innovative solutions in AI, robotics, and software development.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
