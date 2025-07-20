import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed top-24 right-8 z-50 p-3 bg-white/20 backdrop-blur-md border border-white/30 rounded-full shadow-lg hover:bg-white/30 transition-all duration-300"
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'dark' ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {theme === 'light' ? (
          <Sun size={24} className="text-yellow-600" />
        ) : (
          <Moon size={24} className="text-blue-200" />
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;