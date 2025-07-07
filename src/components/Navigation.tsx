import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/education', label: 'Education' },
    { path: '/skills', label: 'Skills' },
    { path: '/projects', label: 'Projects' },
    { path: '/achievements', label: 'Achievements' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-primary-900/90 backdrop-blur-md border-b border-primary-200/30 dark:border-primary-700/30 shadow-sm transition-colors duration-30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center"
          >
            <Link to="/" className="flex items-center">
            <motion.div
              whileHover={{ scale: 1.1, y: -1 }}
              transition={{ duration: 0.2 }}
              className="text-lg md:text-xl font-serif font-bold bg-clip-text text-transparent bg-gradient-to-r from-accent-600 to-primary-600 dark:from-accent-400 dark:to-primary-400"
            >
  Omkara
</motion.div>

            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <motion.div key={item.path}>
                <Link
                  to={item.path}
                  className={`px-4 py-2 rounded-full transition-all duration-300 font-medium ${
                    location.pathname === item.path
                      ? 'bg-accent-600 text-white shadow-lg'
                      : 'text-primary-700 dark:text-primary-200 hover:bg-primary-100 dark:hover:bg-primary-800 hover:text-primary-900 dark:hover:text-white'
                  }`}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-primary-700 dark:text-primary-200 hover:bg-primary-100 dark:hover:bg-primary-800"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 border-t border-primary-200/30 dark:border-primary-700/30"
          >
            {navItems.map((item, index) => (
              <motion.div
                key={item.path}
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block w-full text-left px-4 py-3 rounded-lg mb-2 transition-all duration-300 font-medium ${
                    location.pathname === item.path
                      ? 'bg-accent-600 text-white'
                      : 'text-primary-700 dark:text-primary-200 hover:bg-primary-100 dark:hover:bg-primary-800'
                  }`}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navigation;
