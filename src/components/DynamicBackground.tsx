import React, { useEffect, useState, useMemo } from 'react';
import { useTheme } from '../hooks/useTheme';

// Light Mode - Optimized Cloudy & Raining Background
const LightModeBackground: React.FC = () => {
  // Memoize cloud configurations for better performance
  const cloudConfigs = useMemo(() => ({
    large: Array.from({ length: 6 }, (_, i) => ({
      id: `bg-cloud-${i}`,
      top: Math.random() * 70 + 10,
      delay: i * 4,
      duration: 30 + Math.random() * 10,
      width: 120 + Math.random() * 60,
      height: 60 + Math.random() * 30,
    })),
    medium: Array.from({ length: 4 }, (_, i) => ({
      id: `med-cloud-${i}`,
      top: Math.random() * 60 + 15,
      delay: i * 6,
      duration: 40 + Math.random() * 15,
      width: 100 + Math.random() * 40,
      height: 50 + Math.random() * 20,
    })),
    small: Array.from({ length: 6 }, (_, i) => ({
      id: `small-cloud-${i}`,
      top: Math.random() * 80 + 10,
      delay: i * 3,
      duration: 25 + Math.random() * 8,
      width: 60 + Math.random() * 30,
      height: 30 + Math.random() * 15,
    })),
    rain: Array.from({ length: 30 }, (_, i) => ({
      id: `rain-${i}`,
      left: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 1.8 + Math.random() * 0.7,
    })),
  }), []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Large Background Clouds */}
      <div className="absolute inset-0">
        {cloudConfigs.large.map((cloud) => (
          <div
            key={cloud.id}
            className="absolute animate-cloud-drift opacity-15"
            style={{
              top: `${cloud.top}%`,
              left: `-200px`,
              animationDelay: `${cloud.delay}s`,
              animationDuration: `${cloud.duration}s`,
              willChange: 'transform',
            }}
          >
            <svg 
              width={cloud.width} 
              height={cloud.height} 
              viewBox="0 0 150 80" 
              className="text-gray-300"
            >
              <ellipse cx="35" cy="45" rx="30" ry="20" fill="currentColor" />
              <ellipse cx="70" cy="35" rx="40" ry="25" fill="currentColor" />
              <ellipse cx="110" cy="45" rx="35" ry="20" fill="currentColor" />
            </svg>
          </div>
        ))}
      </div>

      {/* Medium Clouds */}
      <div className="absolute inset-0">
        {cloudConfigs.medium.map((cloud) => (
          <div
            key={cloud.id}
            className="absolute animate-cloud-drift-slow opacity-20"
            style={{
              top: `${cloud.top}%`,
              left: `-150px`,
              animationDelay: `${cloud.delay}s`,
              animationDuration: `${cloud.duration}s`,
              willChange: 'transform',
            }}
          >
            <svg 
              width={cloud.width} 
              height={cloud.height} 
              viewBox="0 0 120 70" 
              className="text-gray-400"
            >
              <ellipse cx="25" cy="35" rx="22" ry="18" fill="currentColor" />
              <ellipse cx="50" cy="25" rx="30" ry="22" fill="currentColor" />
              <ellipse cx="80" cy="35" rx="25" ry="18" fill="currentColor" />
            </svg>
          </div>
        ))}
      </div>

      {/* Small Fast Clouds */}
      <div className="absolute inset-0">
        {cloudConfigs.small.map((cloud) => (
          <div
            key={cloud.id}
            className="absolute animate-cloud-drift opacity-12"
            style={{
              top: `${cloud.top}%`,
              left: `-100px`,
              animationDelay: `${cloud.delay}s`,
              animationDuration: `${cloud.duration}s`,
              willChange: 'transform',
            }}
          >
            <svg 
              width={cloud.width} 
              height={cloud.height} 
              viewBox="0 0 80 50" 
              className="text-gray-200"
            >
              <ellipse cx="20" cy="25" rx="15" ry="12" fill="currentColor" />
              <ellipse cx="40" cy="20" rx="20" ry="15" fill="currentColor" />
              <ellipse cx="60" cy="25" rx="18" ry="12" fill="currentColor" />
            </svg>
          </div>
        ))}
      </div>

      {/* Optimized Rain Effect */}
      <div className="absolute inset-0">
        {cloudConfigs.rain.map((drop) => (
          <div
            key={drop.id}
            className="absolute w-px h-4 bg-blue-200 opacity-15 animate-rain-fall"
            style={{
              left: `${drop.left}%`,
              top: `-20px`,
              animationDelay: `${drop.delay}s`,
              animationDuration: `${drop.duration}s`,
              willChange: 'transform',
            }}
          />
        ))}
      </div>

      {/* Soft Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/8 via-transparent to-gray-100/15" />
    </div>
  );
};

// Dark Mode - Optimized Stars & Falling Star Background
const DarkModeBackground: React.FC = () => {
  const [showShootingStar, setShowShootingStar] = useState(false);

  // Memoize star configurations
  const starConfigs = useMemo(() => ({
    small: Array.from({ length: 80 }, (_, i) => ({
      id: `star-${i}`,
      top: Math.random() * 100,
      left: Math.random() * 100,
      delay: Math.random() * 3,
      duration: 2 + Math.random() * 2,
    })),
    medium: Array.from({ length: 25 }, (_, i) => ({
      id: `drift-star-${i}`,
      top: Math.random() * 100,
      left: Math.random() * 100,
      delay: i * 2.5,
      duration: 60 + i * 3,
    })),
    bright: Array.from({ length: 15 }, (_, i) => ({
      id: `bright-star-${i}`,
      top: Math.random() * 100,
      left: Math.random() * 100,
      delay: Math.random() * 4,
      duration: 3 + Math.random() * 2,
    })),
  }), []);

  useEffect(() => {
    // Optimized shooting star interval
    const interval = setInterval(() => {
      setShowShootingStar(true);
      setTimeout(() => setShowShootingStar(false), 2500);
    }, 18000 + Math.random() * 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Small Twinkling Stars */}
      <div className="absolute inset-0">
        {starConfigs.small.map((star) => (
          <div
            key={star.id}
            className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
            style={{
              top: `${star.top}%`,
              left: `${star.left}%`,
              animationDelay: `${star.delay}s`,
              animationDuration: `${star.duration}s`,
              willChange: 'opacity, transform',
            }}
          />
        ))}
      </div>

      {/* Medium Drifting Stars */}
      <div className="absolute inset-0">
        {starConfigs.medium.map((star) => (
          <div
            key={star.id}
            className="absolute animate-star-drift opacity-60"
            style={{
              top: `${star.top}%`,
              left: `${star.left}%`,
              animationDelay: `${star.delay}s`,
              animationDuration: `${star.duration}s`,
              willChange: 'transform',
            }}
          >
            <svg width="4" height="4" viewBox="0 0 4 4" className="text-blue-200">
              <circle cx="2" cy="2" r="1" fill="currentColor" />
            </svg>
          </div>
        ))}
      </div>

      {/* Large Bright Stars */}
      <div className="absolute inset-0">
        {starConfigs.bright.map((star) => (
          <div
            key={star.id}
            className="absolute animate-pulse"
            style={{
              top: `${star.top}%`,
              left: `${star.left}%`,
              animationDelay: `${star.delay}s`,
              animationDuration: `${star.duration}s`,
              willChange: 'opacity',
            }}
          >
            <svg width="8" height="8" viewBox="0 0 8 8" className="text-yellow-200">
              <path
                d="M4 0 L5 2.5 L8 4 L5 5.5 L4 8 L3 5.5 L0 4 L3 2.5 Z"
                fill="currentColor"
              />
            </svg>
          </div>
        ))}
      </div>

      {/* Optimized Shooting Star */}
      {showShootingStar && (
        <div className="absolute top-1/4 left-0 w-full h-px" style={{ willChange: 'transform' }}>
          <div className="relative w-full h-full">
            <div className="absolute top-0 left-0 w-2 h-px bg-gradient-to-r from-transparent via-yellow-300 to-transparent animate-shooting-star" />
          </div>
        </div>
      )}

      {/* Half Moon - Positioned below navbar */}
      <div className="absolute top-24 right-8 z-10">
        <div className="relative w-14 h-14" style={{ willChange: 'transform' }}>
          <div className="absolute inset-0 bg-yellow-200 rounded-full opacity-70 animate-moon-glow" />
          <div className="absolute inset-0 bg-primary-900 rounded-full" style={{ clipPath: 'inset(0 0 0 50%)' }} />
        </div>
      </div>

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-900/15 via-transparent to-primary-800/8" />
    </div>
  );
};

// Main Dynamic Background Component
const DynamicBackground: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className="absolute inset-0 transition-opacity duration-500" style={{ willChange: 'opacity' }}>
      {theme === 'light' ? <LightModeBackground /> : <DarkModeBackground />}
    </div>
  );
};

export default DynamicBackground;