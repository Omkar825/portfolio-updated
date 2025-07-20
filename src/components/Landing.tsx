import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Float } from '@react-three/drei';
import { LinkedinIcon, GithubIcon, ChevronDown } from 'lucide-react';

const FloatingParticles: React.FC = () => {
  const meshRef = useRef<any>();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.3;
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef}>
        <torusGeometry args={[1, 0.3, 16, 100]} />
        <meshStandardMaterial color="#3b82f6" wireframe />
      </mesh>
    </Float>
  );
};

const Landing: React.FC = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="landing" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-royal-50 via-white to-gold-50">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
          <FloatingParticles />
        </Canvas>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 mb-12 lg:mb-0"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 bg-gradient-to-r from-royal-500 to-gold-500 rounded-full opacity-20 blur-xl"
              />
              <div className="relative w-80 h-80 mx-auto rounded-full overflow-hidden shadow-2xl border-4 border-white/30 backdrop-blur-sm">
                <img
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Omkara Anjaneya Kumar"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2 text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl lg:text-7xl font-bold text-royal-800 mb-6"
            >
              Omkara <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-royal-600 to-gold-600">
                Anjaneya Kumar
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl lg:text-2xl text-gray-600 mb-8 italic"
            >
              "Passionate about innovation, driven by impact."
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-lg text-gray-700 mb-8 max-w-2xl"
            >
              Computer Science Engineering Student | AI Enthusiast | Robotics Innovator
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex justify-center lg:justify-start gap-6"
            >
              <motion.a
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.linkedin.com/in/omkar-anjaneya-kumar/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-royal-600 text-white rounded-full shadow-lg hover:bg-royal-700 transition-colors duration-300"
              >
                <LinkedinIcon size={24} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/Omkar825"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-900 transition-colors duration-300"
              >
                <GithubIcon size={24} />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            onClick={scrollToAbout}
            className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-royal-600 hover:bg-white/30 transition-colors duration-300"
          >
            <ChevronDown size={32} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;