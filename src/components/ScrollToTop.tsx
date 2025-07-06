import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Immediate scroll to top without smooth behavior for better performance
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' as ScrollBehavior
    });
    
    // Fallback for older browsers
    if (window.scrollY !== 0) {
      window.scrollTo(0, 0);
    }
    
    // Clear any pending scroll animations
    document.documentElement.style.scrollBehavior = 'auto';
    setTimeout(() => {
      document.documentElement.style.scrollBehavior = 'smooth';
    }, 100);
  }, [pathname]);

  return null;
};

export default ScrollToTop;