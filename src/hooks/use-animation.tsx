import { useEffect, useState } from 'react';

interface UseAnimationOptions {
  delay?: number;
  duration?: number;
  threshold?: number;
}

export const useAnimation = (options: UseAnimationOptions = {}) => {
  const { delay = 0, duration = 0.8, threshold = 0.1 } = options;
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      setHasAnimated(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  const animationStyle = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
    transition: `all ${duration}s cubic-bezier(0.16, 1, 0.3, 1)`,
  };

  return {
    isVisible,
    hasAnimated,
    animationStyle,
  };
};

export const useScrollAnimation = (options: UseAnimationOptions = {}) => {
  const { delay = 0, duration = 0.8, threshold = 0.1 } = options;
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [ref, setRef] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setTimeout(() => {
            setIsVisible(true);
            setHasAnimated(true);
          }, delay);
        }
      },
      { threshold }
    );

    observer.observe(ref);

    return () => observer.disconnect();
  }, [ref, delay, threshold, hasAnimated]);

  const animationStyle = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
    transition: `all ${duration}s cubic-bezier(0.16, 1, 0.3, 1)`,
  };

  return {
    ref: setRef,
    isVisible,
    hasAnimated,
    animationStyle,
  };
};
