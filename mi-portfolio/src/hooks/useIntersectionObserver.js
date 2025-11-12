// src/hooks/useIntersectionObserver.js

import { useState, useEffect, useRef } from 'react';

export const useIntersectionObserver = (options) => {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      // Solo actualizamos si el elemento está en la vista
      if (entry.isIntersecting) {
        setInView(true);
        // Opcional: desconectar el observador después de la primera vez
        if (options.triggerOnce) {
          observer.disconnect();
        }
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);

  return [ref, inView];
};