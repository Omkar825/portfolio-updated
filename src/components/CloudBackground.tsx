import React from 'react';

const CloudBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large Clouds */}
      <div className="absolute inset-0">
        {[...Array(4)].map((_, i) => (
          <div
            key={`large-${i}`}
            className="absolute animate-cloud-drift opacity-20"
            style={{
              top: `${10 + i * 15}%`,
              animationDelay: `${i * 8}s`,
              animationDuration: `${30 + i * 5}s`,
            }}
          >
            <svg 
              width="120" 
              height="60" 
              viewBox="0 0 120 60" 
              className="text-primary-300"
            >
              <ellipse cx="30" cy="35" rx="25" ry="15" fill="currentColor" />
              <ellipse cx="55" cy="25" rx="30" ry="18" fill="currentColor" />
              <ellipse cx="85" cy="35" rx="28" ry="15" fill="currentColor" />
            </svg>
          </div>
        ))}
      </div>

      {/* Medium Clouds */}
      <div className="absolute inset-0">
        {[...Array(3)].map((_, i) => (
          <div
            key={`medium-${i}`}
            className="absolute animate-cloud-drift-slow opacity-15"
            style={{
              top: `${20 + i * 20}%`,
              animationDelay: `${i * 12}s`,
              animationDuration: `${45 + i * 8}s`,
            }}
          >
            <svg 
              width="80" 
              height="40" 
              viewBox="0 0 80 40" 
              className="text-accent-200"
            >
              <ellipse cx="20" cy="25" rx="18" ry="12" fill="currentColor" />
              <ellipse cx="40" cy="18" rx="22" ry="14" fill="currentColor" />
              <ellipse cx="60" cy="25" rx="20" ry="12" fill="currentColor" />
            </svg>
          </div>
        ))}
      </div>

      {/* Small Clouds */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <div
            key={`small-${i}`}
            className="absolute animate-cloud-drift opacity-10"
            style={{
              top: `${5 + i * 18}%`,
              animationDelay: `${i * 6}s`,
              animationDuration: `${25 + i * 3}s`,
            }}
          >
            <svg 
              width="60" 
              height="30" 
              viewBox="0 0 60 30" 
              className="text-primary-200"
            >
              <ellipse cx="15" cy="20" rx="12" ry="8" fill="currentColor" />
              <ellipse cx="30" cy="15" rx="15" ry="10" fill="currentColor" />
              <ellipse cx="45" cy="20" rx="13" ry="8" fill="currentColor" />
            </svg>
          </div>
        ))}
      </div>

      {/* Gradient Overlay for Depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent" />
    </div>
  );
};

export default CloudBackground;