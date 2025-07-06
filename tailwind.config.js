/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      colors: {
        // Clean white and black base with subtle accents
        primary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        accent: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        success: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'cloud-drift': 'cloudDrift 25s linear infinite',
        'cloud-drift-slow': 'cloudDriftSlow 35s linear infinite',
        'fade-in': 'fadeIn 1s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'rain': 'rain 2s linear infinite',
        'rain-drop': 'rainDrop 1.5s linear infinite',
        'rain-fall': 'rainFall 2s linear infinite',
        'twinkle': 'twinkle 2.5s ease-in-out infinite',
        'star-drift': 'starDrift 50s linear infinite',
        'shooting-star': 'shootingStar 2.5s ease-out',
        'moon-glow': 'moonGlow 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        cloudDrift: {
          '0%': { transform: 'translateX(-200px) translateY(0px)' },
          '100%': { transform: 'translateX(calc(100vw + 200px)) translateY(-8px)' },
        },
        cloudDriftSlow: {
          '0%': { transform: 'translateX(-300px) translateY(3px)' },
          '100%': { transform: 'translateX(calc(100vw + 300px)) translateY(-3px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        rain: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { transform: 'translateY(20px)', opacity: '0' },
        },
        rainDrop: {
          '0%': { transform: 'translateY(0px)', opacity: '1' },
          '100%': { transform: 'translateY(30px)', opacity: '0' },
        },
        rainFall: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '10%': { opacity: '0.6' },
          '90%': { opacity: '0.6' },
          '100%': { transform: 'translateY(100vh)', opacity: '0' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.2', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.1)' },
        },
        starDrift: {
          '0%': { transform: 'translateX(-8px) translateY(0px)' },
          '100%': { transform: 'translateX(8px) translateY(-3px)' },
        },
        shootingStar: {
          '0%': { transform: 'translateX(-100px) translateY(0px)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateX(calc(100vw + 100px)) translateY(-40px)', opacity: '0' },
        },
        moonGlow: {
          '0%, 100%': { boxShadow: '0 0 15px rgba(254, 240, 138, 0.4)' },
          '50%': { boxShadow: '0 0 25px rgba(254, 240, 138, 0.6)' },
        },
      },
    },
  },
  plugins: [],
};