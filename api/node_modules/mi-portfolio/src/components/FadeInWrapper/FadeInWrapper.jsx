// src/components/FadeInWrapper/FadeInWrapper.jsx

import React from 'react';
// ¡Ya no importamos de 'react-intersection-observer'!
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'; // Importamos nuestro hook
import './FadeInWrapper.scss';

const FadeInWrapper = ({ children }) => {
  // Usamos nuestro hook personalizado. La API es la misma.
  const [ref, inView] = useIntersectionObserver({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
  });

  return (
    <div ref={ref} className={`fade-in-section ${inView ? 'is-visible' : ''}`}>
      {children}
    </div>
  );
};

export default FadeInWrapper;