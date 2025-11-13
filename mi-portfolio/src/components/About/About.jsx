import React from 'react';
import './About.scss';
// Asumo que tu foto optimizada está en esta ruta
import profileImage from '../../assets/images/profile.webp'; 

const About = () => {
  return (
    <section id="about" className="about">
      {/* Usamos la clase y el contador CSS para el título "01. Sobre Mí" */}
      <h2 className="section-title" style={{'--section-counter': "''"}}>Sobre Mí</h2>
      
      <div className="about__content">
        <div className="about__text">
          <p>
            Soy un desarrollador de software con sede en Argentina, apasionado por la tecnología y la resolución de problemas. Mi formación como <strong>Técnico Superior en Programación</strong> en la Universidad Tecnológica Nacional (UTN) me ha proporcionado una base sólida en los principios de la ingeniería de software y el ciclo de vida del desarrollo.
          </p>
          <p>
            Mi experiencia se centra en el desarrollo de aplicaciones web full-stack, con un fuerte dominio del ecosistema <strong>Java y Spring Boot</strong> para la construcción de APIs RESTful robustas y escalables, y <strong>React</strong> para la creación de interfaces de usuario dinámicas e interactivas.
          </p>
          <p>
            Mi background previo en hardware y atención al cliente me ha dotado de una excelente capacidad para la comunicación y la resolución metódica de problemas, habilidades que aplico en cada proyecto para entregar soluciones eficientes y de alta calidad.
          </p>
          
          {/* 
            -- BOTÓN DE DESCARGA DE CV --
            - href="/Javier-Quiroga-CV.pdf": Enlaza directamente al archivo en la carpeta /public.
            - target="_blank": Abre el PDF en una nueva pestaña en lugar de navegar fuera del portafolio.
            - rel="noopener noreferrer": Es una medida de seguridad importante para enlaces que abren nuevas pestañas.
            - className="button ...": Le da el estilo de nuestros botones.
          */}
          <a 
            href="/Javier-Quiroga-CV.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="button button--primary"
          >
            Descargar CV
          </a>
        </div>

        <div className="about__image-container">
          <div className="about__image-wrapper">
            <img src={profileImage} alt="Retrato de Javier Quiroga" className="about__image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;