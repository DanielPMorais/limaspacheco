import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useScrollToTop } from '@/hooks/use-scroll-to-top';

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(true);
  
  // Hook para scroll automático
  useScrollToTop();

  useEffect(() => {
    setIsVisible(false);
    
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300); // Timing mais rápido e consistente

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div
      className={`page-transition ${
        isVisible ? 'page-transition-enter' : 'page-transition-exit'
      }`}
      style={{
        minHeight: '100vh',
        width: '100%'
      }}
    >
      {children}
    </div>
  );
};

export default PageTransition;
