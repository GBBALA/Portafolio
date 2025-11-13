import React from 'react';
import './Projects.scss';

// Datos de los proyectos. Mantener los datos separados de la lógica de renderizado es una buena práctica.
const projectData = [
  {
    id: 1,
    title: 'Plataforma E-commerce "GamerStore Genezis"',
    description: 'Proyecto full-stack que simula una tienda de productos gamer. Desarrollé una API RESTful con Java y Spring Boot para gestionar productos, usuarios y órdenes, y un frontend dinámico y responsivo con React. El sistema incluye autenticación de usuarios y roles.',
    tags: ['React', 'Java', 'Spring Boot', 'MySQL', 'API REST', 'Vercel'],
    liveUrl: 'https://gamerstore-genezis.vercel.app/',
    repoUrl: 'https://github.com/PowerSystem2024/Genezis-Repo-Frontend-Ecommerce'
  },
  {
    id: 2,
    title: 'Aplicación Móvil Nativa para Android',
    description: 'Desarrollo de una aplicación Android nativa utilizando Java. La aplicación demuestra mis habilidades en el ecosistema móvil, incluyendo la gestión del ciclo de vida de actividades, diseño de interfaces de usuario y consumo de datos.',
    tags: ['Android', 'Java', 'Mobile'],
    liveUrl: '#', // No hay demo en vivo
    repoUrl: 'https://github.com/PowerSystem2024/PowerSystem2024-App-StartUp-Genezis'
  },
  {
    id: 3,
    title: 'Sistema de Gestión de Escritorio',
    description: 'Aplicación de escritorio desarrollada en Java como parte de un proyecto académico. El proyecto se enfoca en la lógica de negocio, la interacción con bases de datos y los principios de la POO.',
    tags: ['Java', 'Desktop App', 'OOP'],
    liveUrl: '#', // Sin demo en vivo
    repoUrl: 'https://github.com/PowerSystem2024/Genezis-Repo-Cuarto-Semestre'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="container">
        {/* Título actualizado: Usando section-title con contador '03.' */}
        <h2 
          className="section-title" 
          style={{'--section-counter': "'03.'"}}
        >
          Proyectos Destacados
        </h2>
        <div className="projects__grid">
          {projectData.map(project => (
            <div key={project.id} className="card">
              <h3 className="card__title">{project.title}</h3>
              <p className="card__description">{project.description}</p>
              <ul className="card__tags">
                {project.tags.map(tag => (
                  <li key={tag} className="card__tag">{tag}</li>
                ))}
              </ul>
              <div className="card__links">
                {/* Lógica de renderizado condicional:
                  El operador '&&' en JSX funciona como un "if" corto.
                  Si la condición (project.liveUrl && project.liveUrl !== '#') es verdadera,
                  el elemento a la derecha del '&&' será renderizado. Si es falsa, no se renderizará nada.
                */}
                {project.liveUrl && project.liveUrl !== '#' && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="button button--primary">
                    Ver Demo
                  </a>
                )}
                <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="button button--secondary">
                  Ver Código
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;