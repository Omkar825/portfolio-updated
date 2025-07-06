import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Bot, Leaf, Users, Coffee } from 'lucide-react';

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: "Dual Mode Robotic Arm",
      description: "Advanced robotic arm system featuring both manual and autonomous operation modes with precision control and real-time feedback systems.",
      icon: <Bot size={48} />,
      image: "https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Robotics", "Arduino", "Automation", "Control Systems"],
      features: ["Manual Control Mode", "Autonomous Operation", "Real-time Feedback", "Precision Movement"],
      color: "royal"
    },
    {
      title: "Green Guardian GO",
      description: "AI-powered Reverse Vending Machine with plastic detection capabilities and integrated mobile application for environmental sustainability.",
      icon: <Leaf size={48} />,
      image: "https://images.pexels.com/photos/802221/pexels-photo-802221.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["AI", "Computer Vision", "Mobile App", "Sustainability"],
      features: ["Plastic Detection AI", "Mobile Integration", "User Rewards System", "Environmental Impact Tracking"],
      color: "gold"
    },
    {
      title: "Smart Attendance System",
      description: "Face recognition-based attendance management system with MongoDB integration for real-time logging and comprehensive analytics.",
      icon: <Users size={48} />,
      image: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Computer Vision", "MongoDB", "Real-time", "Analytics"],
      features: ["Face Recognition", "Real-time Logging", "Analytics Dashboard", "Cloud Storage"],
      color: "royal"
    },
    {
      title: "Stair Water Bottle",
      description: "Innovative ergonomic water bottle design with patented stair-like structure for improved grip and functionality.",
      icon: <Coffee size={48} />,
      image: "https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Design", "Patent", "Ergonomics", "Innovation"],
      features: ["Ergonomic Design", "Patented Technology", "Improved Grip", "Unique Structure"],
      color: "gold"
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
    <section id="projects" className="py-20 bg-gradient-to-br from-royal-50 to-gold-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-royal-800 mb-6">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-royal-600 to-gold-600">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-royal-600 to-gold-600 mx-auto mb-8" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Innovative solutions combining technology, creativity, and practical impact
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
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
                    ${project.color === 'royal' ? 'from-royal-900' : 'from-gold-900'}
                  `} />
                  <div className="absolute top-4 right-4">
                    <div className={`
                      p-3 rounded-full text-white shadow-lg
                      ${project.color === 'royal' ? 'bg-royal-600' : 'bg-gold-600'}
                    `}>
                      {project.icon}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Project Content */}
              <div className="lg:w-1/2 space-y-6">
                <motion.h3
                  whileHover={{ x: 10 }}
                  className="text-3xl lg:text-4xl font-bold text-royal-800"
                >
                  {project.title}
                </motion.h3>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className={`
                        px-3 py-1 rounded-full text-sm font-medium
                        ${project.color === 'royal'
                          ? 'bg-royal-100 text-royal-800'
                          : 'bg-gold-100 text-gold-800'
                        }
                      `}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Features */}
                <div className="space-y-2">
                  <h4 className="text-lg font-semibold text-royal-800">Key Features:</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ delay: featureIndex * 0.1 }}
                        className="flex items-center gap-2 text-gray-600"
                      >
                        <div className={`
                          w-2 h-2 rounded-full
                          ${project.color === 'royal' ? 'bg-royal-600' : 'bg-gold-600'}
                        `} />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`
                      flex items-center gap-2 px-6 py-3 rounded-full font-medium text-white shadow-lg transition-colors duration-300
                      ${project.color === 'royal'
                        ? 'bg-royal-600 hover:bg-royal-700'
                        : 'bg-gold-600 hover:bg-gold-700'
                      }
                    `}
                  >
                    <ExternalLink size={18} />
                    View Demo
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-6 py-3 rounded-full font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 shadow-lg transition-colors duration-300"
                  >
                    <Github size={18} />
                    Source Code
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;