import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { LinkedinIcon, GithubIcon, Mail, Phone, MapPin, ChevronUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      icon: <LinkedinIcon size={24} />,
      href: "https://www.linkedin.com/in/omkar-anjaneya-kumar/",
      label: "LinkedIn",
      color: "hover:text-blue-400"
    },
    {
      icon: <GithubIcon size={24} />,
      href: "https://github.com/Omkar825",
      label: "GitHub",
      color: "hover:text-gray-400"
    }
  ];

  const quickLinks = [
    { name: "About", path: "/about" },
    { name: "Education", path: "/education" },
    { name: "Skills", path: "/skills" },
<<<<<<< HEAD
    { name: "Academic Projects", path: "/projects" },
=======
    { name: "Projects", path: "/projects" },
>>>>>>> 5e5f7adca5c170a7cff1ea25675501e4faef82a7
    { name: "Achievements", path: "/achievements" },
    { name: "Contact", path: "/contact" }
  ];

  const contactDetails = [
    {
      icon: <Phone size={16} />,
      text: "+91 8328669439",
      href: "tel:+918328669439"
    },
    {
      icon: <Mail size={16} />,
      text: "omkarratnala2565@gmail.com",
      href: "mailto:omkarratnala2565@gmail.com"
    },
    {
      icon: <MapPin size={16} />,
      text: "Palakollu, Andhra Pradesh",
      href: null
    }
  ];

  return (
    <footer className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-accent-500/10 to-primary-500/10" />
        <div className="absolute top-20 left-20 w-64 h-64 bg-accent-400 rounded-full blur-3xl opacity-10" />
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-primary-400 rounded-full blur-3xl opacity-10" />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand & Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              {/* Logo and Brand */}
              <div className="flex items-center gap-4 mb-4">
                <motion.img
                  className="h-12 w-auto filter brightness-0 invert drop-shadow-[0_0_8px_rgba(147,51,234,0.3)]"
                  whileHover={{ 
                    scale: 1.1,
                    filter: "brightness-0 invert drop-shadow(0 0 12px rgba(147,51,234,0.5))"
                  }}
                  transition={{ duration: 0.2 }}
                />
                <h3 className="text-2xl font-serif font-bold text-accent-400">
                  Omkara Anjaneya Kumar
                </h3>
              </div>
              <p className="text-primary-200 leading-relaxed mb-6 max-w-md">
              Every project is a canvas, and I paint it with purpose, clarity, and precision.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-3 bg-white/10 rounded-full backdrop-blur-sm border border-white/20 text-primary-200 ${link.color} transition-all duration-300 hover:bg-white/20`}
                    aria-label={link.label}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-lg font-serif font-semibold text-accent-400 mb-4">Contact</h4>
              <div className="space-y-3">
                {contactDetails.map((detail, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="text-accent-400 flex-shrink-0">
                      {detail.icon}
                    </div>
                    {detail.href ? (
                      <a
                        href={detail.href}
                        className="text-primary-200 hover:text-accent-400 transition-colors duration-300 text-sm"
                      >
                        {detail.text}
                      </a>
                    ) : (
                      <span className="text-primary-200 text-sm">{detail.text}</span>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="text-primary-300 text-sm text-center md:text-left"
              >
                © 2025 Omkara Anjaneya Kumar.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex items-center gap-4 text-sm text-primary-300"
              >
                <span>Designed & Built with ❤️</span>
                <div className="w-px h-4 bg-primary-600" />
                <a 
                  href="https://omkaraanjaneyakumar.netlify.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-accent-400 transition-colors duration-300"
                >
                  View Portfolio
                </a>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <motion.button
          onClick={scrollToTop}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-accent-500 to-accent-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <ChevronUp size={24} />
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;