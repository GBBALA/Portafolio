// src/components/Hero/Hero.jsx
import React from 'react';
import './Hero.scss';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero__container">
        <p className="hero__intro">Hola, mi nombre es</p>
        <h1 className="hero__name">Javier Quiroga.</h1>
        <h2 className="hero__tagline">Construyo aplicaciones para la web.</h2>
        <p className="hero__description">
          Soy un desarrollador Full-Stack con base en Argentina, especializado en crear soluciones web robustas y escalables, desde APIs de alto rendimiento en Java hasta interfaces de usuario dinámicas con React.
        </p>
        <a href="#contact" className="button button--primary hero__button">
          ¡Contactame!
        </a>
      </div>
    </section>
  );
};

export default Hero;