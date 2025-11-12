import React from 'react';
import './About.scss';
// Asumiendo que has puesto tu foto en src/assets/images/profile.jpg
import profileImage from '../../assets/images/profile.jpg'; 

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about__container">
        <h2 className="about__title">Sobre Mí</h2>
        <div className="about__content">
          <div className="about__image-container">
            <img src={profileImage} alt="Retrato profesional de [Tu Nombre]" className="about__image" />
          </div>
          <div className="about__text">
            <h3>Desarrollador Full-Stack especializado en ecosistemas Java y JavaScript.</h3>
            <p>
              Con una sólida trayectoria en el desarrollo de software, mi experiencia se centra en la construcción de soluciones robustas y escalables. Me especializo en el desarrollo de APIs RESTful de alto rendimiento con <strong>Java y Spring Boot</strong>, y en la creación de interfaces de usuario interactivas y modernas con <strong>React</strong>.
            </p>
            <p>
              Mi enfoque se basa en la escritura de código limpio, la aplicación de patrones de diseño y la búsqueda constante de la mejor herramienta para cada desafío. Disfruto llevando un proyecto desde la concepción inicial hasta su despliegue final.
            </p>
            {/* 
              Crea un archivo PDF con tu CV y ponlo en la carpeta /public.
              Por ejemplo: public/CV-TuNombre.pdf
            */}
            <a 
              href="/CV-TuNombre.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="button button--primary"
            >
              Descargar CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;