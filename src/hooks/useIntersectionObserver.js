import { useEffect, useRef, useState } from 'react';

export const useIntersectionObserver = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          setHasIntersected(true);
        } else {
          // Only set to false if we haven't intersected yet
          // This prevents reloading animations
          if (!hasIntersected) {
            setIsIntersecting(false);
          }
        }
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px',
        ...options
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [options, hasIntersected]);

  // Return hasIntersected instead of isIntersecting to prevent reloading
  return [elementRef, hasIntersected, hasIntersected];
}; 