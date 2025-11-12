import React from 'react';
import './Hero.scss';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero__container">
        <h1 className="hero__title">
          Hola, soy <span className="hero__name">[Javier Quiroga]</span>
        </h1>
        <p className="hero__subtitle">
          Desarrollador Full-Stack especializado en la creación de aplicaciones web robustas y escalables.
        </p>
        <div className="hero__links">
          <a href="#projects" className="button button--primary">Ver mis Proyectos</a>
          <a href="https://github.com/tu-usuario" target="_blank" rel="noopener noreferrer" className="button button--secondary">GitHub</a>
          <a href="https://linkedin.com/in/tu-usuario" target="_blank" rel="noopener noreferrer" className="button button--secondary">LinkedIn</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;