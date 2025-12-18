// src/hooks/useScrollAnimation.ts
import { useEffect, useState } from 'react';

export const useScrollAnimation = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!hasAnimated && window.scrollY > 100) {
        setIsVisible(true);
        setHasAnimated(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasAnimated, threshold]);

  return { isVisible, hasAnimated };
};