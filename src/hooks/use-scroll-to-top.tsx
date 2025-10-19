import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Hook para fazer scroll automático para o topo da página
 * sempre que a rota mudar
 */
export const useScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll para o topo da página sempre que a rota mudar
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [location.pathname]);
};

export default useScrollToTop;
