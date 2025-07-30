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
        if (entry.isIntersecting && !hasIntersected) {
          setIsIntersecting(true);
          setHasIntersected(true);
        }
      },
      {
        threshold: 0.05, // Very low threshold for early detection
        rootMargin: '0px 0px -300px 0px', // Very large margin to prevent re-triggering
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

  // Always return true to prevent any animation triggering
  return [elementRef, true, true];
}; 