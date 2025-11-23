// src/components/Hero/Hero.jsx

import React from 'react';
import Typewriter from 'typewriter-effect';
import './Hero.scss';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero__container">
        <p className="hero__greeting">Hola, mi nombre es Javier.</p>
        
        <h1 className="hero__typewriter">
          <Typewriter
            options={{
              strings: [
                'Desarrollador Java Full Stack.',
                'Especialista en React y Spring Boot.',
                'Creador de Soluciones Web.',
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 50,
              delay: 75,
            }}
          />
        </h1>

        <p className="hero__description">
          Técnico Universitario en Programación con enfoque en desarrollo de software (backend y frontend) y mantenimiento de hardware computacional
        </p>
        
        <div className="hero__actions">
          <a href="#contact" className="button button--primary">Contáctame</a>
          <a href="/Javier-Quiroga-CV.pdf" target="_blank" rel="noopener noreferrer" className="button button--secondary">Descargar CV</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;