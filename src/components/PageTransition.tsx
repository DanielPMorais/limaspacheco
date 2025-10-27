import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setIsVisible(false);
    
    const timer = setTimeout(() => {
      setIsVisible(true);
      // Scroll para o topo após a animação de entrada terminar
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      }, 50); // Pequeno delay para garantir que a animação terminou
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
