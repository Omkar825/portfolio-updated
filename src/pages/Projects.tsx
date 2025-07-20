import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Bot, Leaf, Users, Coffee } from 'lucide-react';

const Projects: React.FC = () => {
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

  const projects = [
    {
      title: "Dual Mode Robotic Arm",
      description: "The Dual Mode Robotic Arm is an innovative robotics project that seamlessly combines manual and autonomous control modes. It features six degrees of freedom and offers both precision manual control through a haptic interface and intelligent autonomous operation for repetitive tasks.",
      icon: <Bot size={48} />,
      image: "/Robotic_arm.jpeg",
      tags: ["C++", "Arduino", "Servo Motors", "IMU Sensors","Machine Learning","ROS"],
      features: ["Six degrees of freedom for complex manipulation tasks", "Haptic feedback for enhanced manual control precision", "RMachine learning-based motion planning for autonomous mode", "Task recording and playback functionality","Real-time obstacle detection and avoidance"],
      color: "accent",
      demo: "https://dual-mode-robotic-arm.netlify.app/",
      github: "https://github.com/Omkar825/Dual-Mode-Robotic-Arm-with-Mimic-control-and-Object-Detection"
    },
    {
      title: "Green Guardian GO",
      description: "Green Guardian Go is an AI-powered Reverse Vending Machine designed to incentivize plastic recycling through an intelligent reward system. Using computer vision and machine learning, it can accurately identify different types of plastic waste and calculate appropriate rewards based on the material, weight, and recyclability.",
      icon: <Leaf size={48} />,
      image: "/GGG-1.jpeg",
      tags: ["Python", "TensorFlow", "OpenCV", "Raspberry Pi","MQTT","Flutter","Cloud Database"],
      features: ["Real-time plastic type detection using CNN-based models", "Weight calculation system for precise reward allocation", "Mobile app integration for reward tracking and redemption","Gamification features to encourage consistent recycling habits","Remote monitoring dashboard for waste collection analytics"],
      color: "primary",
      demo: "https://green-guardian-go.netlify.app/",
      github: "https://github.com/Omkar825"
    },
    {
      title: "Smart Attendance System",
      description: "The Smart Attendance System leverages facial recognition technology to automate attendance tracking in educational institutions and businesses. It eliminates manual attendance processes, reduces errors, and provides real-time analytics through an intuitive web dashboard.",
      icon: <Users size={48} />,
      image: "/s-a-s.png",
      tags: ["Python", "OpenCV", "MongoDB", "Flask","JavaScript","HTML/CSS","Twilio API"],
      features: ["PyReal-time facial recognition with 99% accuracython", "Automated attendance marking and reporting", "Admin dashboard with comprehensive analytics", "Email and SMS notifications for absentees","Exportable reports in multiple formats"],
      color: "accent",
      demo: "https://github.com/Omkar825",
      github: "https://github.com/Omkar825"
    },
    {
      title: "Stair Water Bottle",
      description: "The Stair Water Bottle is a patented design innovation that addresses the everyday challenge of drinking water while navigating stairs. The ergonomic design features a unique base that enables stable placement on stair steps, preventing spills and improving accessibility.",
      icon: <Coffee size={48} />,
      image: "/bottle.png",
      tags: ["CAD Design", "3D Printing", "Materials Engineering", "Thermodynamics","Ergonomics"],
      features: ["Patented base design for stair step stability", "Ergonomic grip for comfortable handling", "Leak-proof mechanism for secure portability", "Sustainable materials reducing environmental impact","Temperature retention technology"],
      color: "primary",
      demo: "https://stair-water-bottle.netlify.app/",
      github: "https://github.com/Omkar825"
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
    <>
      <section className="py-20 bg-gradient-to-br from-white to-primary-50 dark:from-primary-900 dark:to-primary-800 pt-32 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={shouldShow ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-primary-900 dark:text-white mb-6">
              Academic <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-600 to-primary-600">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-accent-600 to-primary-600 mx-auto mb-8" />
            <p className="text-xl text-primary-600 dark:text-primary-300 max-w-3xl mx-auto text-justify">
              Take a look at some of my academic projects. They highlight my technical skills, creative thinking, and passion for turning ideas into real, working solutions. Each project is a step forward in my journey as a developer.
            </p>
          </motion.div>

          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={shouldShow ? "visible" : "hidden"}
            className="space-y-16"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } items-center gap-12`}
              >
                {/* Project Image */}
                <motion.div
                  whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 2 : -2 }}
                  className="lg:w-1/2"
                >
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-80 object-cover"
                    />
                    <div className={`
                      absolute inset-0 bg-gradient-to-t opacity-20
                      ${project.color === 'accent' ? 'from-accent-900' : 'from-primary-900'}
                    `} />
                    <div className="absolute top-4 right-4">
                      <div className={`
                        p-3 rounded-full text-white shadow-lg
                        ${project.color === 'accent' ? 'bg-accent-600' : 'bg-primary-600'}
                      `}>
                        {project.icon}
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Project Content */}
                <div className="lg:w-1/2 space-y-6 text-justify">
                  <motion.h3
                    whileHover={{ x: 10 }}
                    className="text-3xl lg:text-4xl font-serif font-bold text-primary-900 dark:text-white break-words"
                  >
                    {project.title}
                  </motion.h3>
                  
                  <p className="text-lg text-primary-700 dark:text-primary-200 leading-relaxed break-words">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className={`
                          px-3 py-1 rounded-full text-sm font-medium break-words
                          ${project.color === 'accent'
                            ? 'bg-accent-100 dark:bg-accent-900 text-accent-800 dark:text-accent-200'
                            : 'bg-primary-100 dark:bg-primary-700 text-primary-800 dark:text-primary-200'
                          }
                        `}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold text-primary-900 dark:text-white">Key Features:</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-1 gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={shouldShow ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ delay: featureIndex * 0.1 }}
                          className="flex items-center gap-2 text-primary-600 dark:text-primary-300 break-words"
                        >
                          <div className={`
                            w-2 h-2 rounded-full flex-shrink-0
                            ${project.color === 'accent' ? 'bg-accent-600' : 'bg-primary-600'}
                          `} />
                          <span className="break-words">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-4">
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`
                        flex items-center gap-2 px-6 py-3 rounded-full font-medium text-white shadow-lg transition-colors duration-300
                        ${project.color === 'accent'
                          ? 'bg-accent-600 hover:bg-accent-700'
                          : 'bg-primary-600 hover:bg-primary-700'
                        }
                      `}
                    >
                      <ExternalLink size={18} />
                      View Demo
                    </motion.a>
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-6 py-3 rounded-full font-medium text-primary-700 dark:text-primary-200 bg-white dark:bg-primary-700 border border-primary-300 dark:border-primary-600 hover:bg-primary-50 dark:hover:bg-primary-600 shadow-lg transition-colors duration-300"
                    >
                      <Github size={18} />
                      Source Code
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* Visual Divider */}
      <div className="flex items-center justify-center my-16">
        <div className="flex-grow border-t border-primary-200 dark:border-primary-700" />
        <span className="mx-6 text-primary-400 dark:text-primary-500 font-serif font-semibold text-lg select-none">Personal Projects</span>
        <div className="flex-grow border-t border-primary-200 dark:border-primary-700" />
      </div>
      {/* --- Beyond the Books Section --- */}
      <section className="py-20 pb-32 bg-gradient-to-br from-white to-primary-50 dark:from-primary-900 dark:to-primary-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-primary-900 dark:text-white mb-6">
              Beyond the Books
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-accent-600 to-primary-600 mx-auto mb-8" />
            <p className="text-xl text-primary-600 dark:text-primary-300 max-w-3xl mx-auto text-justify">
              Projects built with passion, beyond academic boundaries.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* DhanRaksha Card */}
            <motion.div
              whileHover={{ scale: 1.03, y: -4 }}
              className="bg-white dark:bg-primary-800 rounded-2xl shadow-xl border border-primary-200 dark:border-primary-700 p-8 flex flex-col justify-between transition-all duration-300"
            >
              <div>
                <h3 className="text-2xl font-serif font-bold text-primary-900 dark:text-white mb-4 flex items-center gap-2">
                  DhanRaksha
                  <span className="ml-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide bg-accent-100 dark:bg-accent-900 text-accent-800 dark:text-accent-200">Personal</span>
                </h3>
                <p className="text-primary-700 dark:text-primary-200 mb-6 text-lg text-justify">
                  DhanRaksha is a personalized finance management web app that helps individuals (like parents or solo lenders) maintain digital records of personal loans. It automates interest calculation, displays payment statuses (Pending, Paid, Overdue), and uses Supabase for real-time sync and Google Authentication. Its Reports section offers insights and filters based on loan status, helping users manage informal lending transparently and professionally.
                </p>
              </div>
              <div className="flex gap-4 mt-4">
                <a
                  href="https://dhanraksha.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-full font-medium text-white bg-accent-600 hover:bg-accent-700 shadow-lg transition-colors duration-300"
                >
                  Live Demo
                </a>
              </div>
            </motion.div>
            {/* VidyaMitra Card */}
            <motion.div
              whileHover={{ scale: 1.03, y: -4 }}
              className="bg-white dark:bg-primary-800 rounded-2xl shadow-xl border border-primary-200 dark:border-primary-700 p-8 flex flex-col justify-between transition-all duration-300"
            >
              <div>
                <h3 className="text-2xl font-serif font-bold text-primary-900 dark:text-white mb-4 flex items-center gap-2">
                  VidyaMitra
                  <span className="ml-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide bg-accent-100 dark:bg-accent-900 text-accent-800 dark:text-accent-200">Personal</span>
                </h3>
                <p className="text-primary-700 dark:text-primary-200 mb-6 text-lg text-justify">
                  VidyaMitra is an AI-powered personalized education planner that provides tailored learning paths based on user preferences, skills, and goals. It analyzes student performance and generates adaptive course roadmaps using smart ML agents and YouTube-integrated APIs. The project focuses on improving education quality, retention, and engagement through hyper-personalized pathways.
                </p>
              </div>
              <div className="flex gap-4 mt-4">
                <a
                  href="https://vidyamitraai.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-full font-medium text-white bg-accent-600 hover:bg-accent-700 shadow-lg transition-colors duration-300"
                >
                  Live Demo
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
