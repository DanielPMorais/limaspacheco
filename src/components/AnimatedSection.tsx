import React from 'react';
import { useScrollAnimation } from '@/hooks/use-animation';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'left' | 'right' | 'scale';
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = '',
  delay = 0,
  direction = 'up'
}) => {
  const { ref, animationStyle } = useScrollAnimation({ delay, duration: 0.8 });

  const getAnimationClass = () => {
    switch (direction) {
      case 'left':
        return 'animate-slide-in-left';
      case 'right':
        return 'animate-slide-in-right';
      case 'scale':
        return 'animate-scale-in';
      default:
        return 'animate-fade-in-up';
    }
  };

  return (
    <div
      ref={ref}
      className={`${getAnimationClass()} ${className}`}
      style={animationStyle}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
