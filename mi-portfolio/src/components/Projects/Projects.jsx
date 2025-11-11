import React from 'react';
import './Projects.scss'; // Asegúrate de crear este archivo SCSS

// Datos de ejemplo. Idealmente, esto vendría de una API o un archivo JSON.
const projectData = [
  {
    id: 1,
    title: 'Sistema de Gestión de Clientes',
    description: 'Una aplicación web full-stack desarrollada con Node.js, Express, React y PostgreSQL. Permite la gestión de clientes, facturación y reportes.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Express'],
    liveUrl: '#',
    repoUrl: '#'
  },
  {
    id: 2,
    title: 'E-commerce de Ropa Deportiva',
    description: 'Plataforma de comercio electrónico con pasarela de pago Stripe, autenticación de usuarios y un panel de administración para gestionar productos.',
    tags: ['Vue.js', 'Stripe', 'MongoDB', 'SCSS'],
    liveUrl: '#',
    repoUrl: '#'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="projects__title">Proyectos Destacados</h2>
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
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="button button--primary">Ver Demo</a>
                <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="button button--secondary">Ver Código</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;