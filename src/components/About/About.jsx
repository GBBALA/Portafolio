import React from 'react';
import './About.scss';
import { FaLaptopCode, FaServer, FaChartLine } from 'react-icons/fa';
import profileImage from '../../assets/images/profile.jpg'; 

const About = () => {
  return (
    <section id="about" className="about">
      <h2 className="section-title" style={{'--section-counter': "''"}}>Sobre Mí</h2>
      
      <div className="about__content">
        <div className="about__text">
          
          <p>
            <strong><FaLaptopCode className="about__inline-icon" /> Desarrollo de Software:</strong><br />
            Soy <strong>Técnico Universitario en Programación Egresado (UTN)</strong>. Me especializo en el desarrollo de soluciones tecnológicas integrales, abarcando diseño de sistemas, arquitectura de bases de datos, lógica de negocio y construcción de interfaces modernas.Trabajo sobre el ciclo completo del software, desde el análisis de requerimientos hasta la implementación y optimización.
          </p>

          <p>
            <strong><FaServer className="about__inline-icon" /> Infraestructura y Hardware:</strong><br />
            Poseo amplia experiencia práctica en mantenimiento, diagnóstico y reparación de equipos informáticos y dispositivos móviles. Realizo instalación de sistemas operativos, optimización de rendimiento, reemplazo de componentes y resolución de fallas técnicas.
          </p>

          <p>
            <strong><FaChartLine className="about__inline-icon" /> Gestión y Mentalidad Analítica:</strong><br />
            Mi background analítico y mi experiencia en gestión administrativa me han otorgado una visión estructurada y orientada a procesos. Me destaco en la resolución lógica de problemas, la mejora continua y la coordinación de tareas, combinando un fuerte pensamiento técnico con la eficiencia operativa en equipos de trabajo.
          </p>

          <div style={{ marginTop: '2rem' }}>
            <a href="/Javier-Quiroga-CV.pdf" target="_blank" rel="noopener noreferrer" className="btn">
              Descargar CV
            </a>
          </div>

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