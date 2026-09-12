'use client';

import { useEffect, useRef, useState } from 'react';

export default function ScrollReveal({ 
  children, 
  animation = 'animate-fade-in-up', 
  delay = 0,
  threshold = 0.1,
  className = '' 
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const currentRef = ref.current;
    
    // Fallback if IntersectionObserver isn't supported
    if (typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once it's visible, we don't need to observe it anymore
          observer.unobserve(currentRef);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold,
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  const style = delay ? { animationDelay: `${delay}ms` } : {};

  return (
    <div 
      ref={ref} 
      className={`${className} ${isVisible ? animation : 'opacity-0'}`}
      style={style}
    >
      {children}
    </div>
  );
}
