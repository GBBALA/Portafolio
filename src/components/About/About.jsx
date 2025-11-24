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
            Soy un desarrollador de software de Argentina, graduado como <strong>Técnico Universitario en Programación</strong> en la UTN. Mi formación me habilita para <strong>analizar problemas de procesamiento de datos</strong> y resolverlos mediante la selección de los algoritmos adecuados, desarrollando programas correctamente estructurados y eficientes.
          </p>
          <p>
            En el ámbito profesional, aplico estos conocimientos en el desarrollo Full Stack, especializándome en la elaboración y corrección de software utilizando <strong>Java y Spring Boot</strong> para el backend y <strong>React</strong> para interfaces dinámicas. Poseo la capacidad para interpretar tareas definidas por Analistas de Sistemas y transformar requerimientos funcionales en soluciones de código robustas.
          </p>
          <p>
            Adicionalmente, cuento con una sólida práctica técnica en <strong>hardware</strong>, especializándome en el <strong>armado, diagnóstico y reparación de computadoras</strong>, asegurando el correcto funcionamiento y rendimiento de los equipos informáticos.
          </p>
          
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