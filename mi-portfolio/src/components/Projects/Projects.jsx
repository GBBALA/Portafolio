import React from 'react';
import './Projects.scss';
// Vamos a usar íconos para los enlaces
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projectData = [
  // PROYECTO 1: GAMERSTORE (ACTUALIZADO PARA COINCIDIR CON EL STACK ORIGINAL)
  {
    id: 1,
    title: 'Plataforma E-commerce "GamerStore Genezis"',
    description: 'Aplicación móvil de comercio electrónico de videojuegos, desarrollada con un enfoque Full-Stack. Permite a los usuarios explorar, buscar y comprar juegos, gestionar el carrito y realizar procesos de pago. Fue el proyecto base del grupo Genezis.',
    tags: ['React Native', 'Node.js', 'Express', 'MongoDB', 'E-commerce'],
    liveUrl: null, // No se proporcionó URL en vivo
    repoUrl: 'https://github.com/PowerSystem2024/Genezis-Repo-Frontend-Ecommerce', // Asumiendo este repo contiene la base
    image: '/projects/gamerstore-project.webp' // Usa la imagen original
  },
  // PROYECTO 2: SISTEMA INTEGRAL DE TURNOS MÉDICOS
  {
    id: 2,
    title: 'Sistema Integral de Turnos Médicos',
    description: 'Aplicación de escritorio con arquitectura MVC para la gestión centralizada de turnos. Incluye módulos diferenciados por rol (Pacientes, Médicos, Instituciones y Administradores). Destaca por la gestión de agenda médica, prevención de superposición de horarios y reportes de gestión.',
    tags: ['Python 3.12', 'Tkinter', 'PostgreSQL', 'Supabase', 'MVC'],
    liveUrl: null,
    repoUrl: 'https://github.com/PowerSystem2024/PowerSystem2024-App-StartUp-Genezis',
    image: '/projects/medical-appointment-project.webp' // Placeholder para nueva imagen
  },
  // PROYECTO 3: JUEGO DE COMBATE AVATAR
  {
    id: 3,
    title: 'Juego de Combate: La Leyenda de Aang',
    description: 'Juego web interactivo de combate por turnos. Implementa la lógica con Programación Orientada a Objetos (Clases en JS) para modelar personajes con fortalezas, debilidades y un sistema de daño variable, incluyendo animaciones de selección.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'POO', 'Juego Web'],
    liveUrl: null,
    image: '/projects/avatar-game-project.webp' // Placeholder para nueva imagen
  },
  // PROYECTO 4: PROYECTO PERN: AUTENTICACIÓN Y TAREAS
  {
    id: 4,
    title: 'PROYECTO PERN: Autenticación y Tareas',
    description: 'Aplicación web Full-Stack desarrollada con el Stack PERN. Implementa un sistema completo de Autenticación de Usuarios (Registro y Login seguro con JWT) y un módulo de Gestión de Tareas que permite realizar las operaciones CRUD (Crear, Leer, Actualizar, Eliminar) de forma segura.',
    tags: ['PostgreSQL', 'Express.js', 'React', 'Node.js', 'CRUD'],
    liveUrl: null,
    image: '/projects/pern-tasks-project.webp' // Placeholder para nueva imagen
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      {/* Usando un estilo para el contador de sección basado en CSS */}
      <h2 className="section-title" style={{'--section-counter': "'02.'"}}>Proyectos Destacados</h2> 
      <div className="projects__list">
        {projectData.map((project, index) => (
          // Alternar la clase project--reversed para cambiar el orden en cada proyecto
          <div key={project.id} className={`project ${index % 2 === 1 ? 'project--reversed' : ''}`}>
            <div className="project__image-container">
              <a href={project.liveUrl || project.repoUrl} target="_blank" rel="noopener noreferrer">
                {/* Nota: Asegúrate de que las rutas de imagen sean correctas en tu carpeta /public */}
                <img src={project.image} alt={`Captura de pantalla del proyecto ${project.title}`} className="project__image" /> 
              </a>
            </div>
            <div className="project__content">
              <p className="project__featured">Proyecto Destacado</p>
              <h3 className="project__title">{project.title}</h3>
              <div className="project__description">
                {/* La descripción va dentro de un <div> para mejor control de estilos */}
                <p>{project.description}</p>
              </div>
              <ul className="project__tags">
                {project.tags.map(tag => <li key={tag}>{tag}</li>)}
              </ul>
              <div className="project__links">
                <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" title="Ver código en GitHub"><FiGithub /></a>
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" title="Ver demo en vivo"><FiExternalLink /></a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;