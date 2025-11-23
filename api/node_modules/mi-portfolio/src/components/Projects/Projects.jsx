import React from 'react';
import './Projects.scss';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

// --- Iconos de Tecnología (Importamos todos los necesarios) ---
import { 
  SiNodedotjs, SiExpress, SiPostgresql, SiJsonwebtokens, SiSwagger, 
  SiReact, SiReactrouter, SiSass, SiGooglegemini, SiCloudinary, SiJavascript,
  SiPython, SiSupabase, SiHtml5, SiCss3
} from 'react-icons/si';
import { FaDatabase, FaShieldAlt, FaFilePdf, FaCreditCard, FaDesktop, FaCodeBranch, FaCube, FaPencilAlt } from 'react-icons/fa';

// --- Definiciones de Tecnologías para cada Proyecto ---

const gamerStoreTechnologies = [
  { name: 'Node.js', icon: <SiNodedotjs />, color: '#8CC84B' },
  { name: 'Express.js', icon: <SiExpress />, color: '#FFFFFF' },
  { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#336791' },
  { name: 'JWT', icon: <SiJsonwebtokens />, color: '#D63AFF' },
  { name: 'Cloudinary', icon: <SiCloudinary />, color: '#3448C5' },
  { name: 'Google Gemini', icon: <SiGooglegemini />, color: '#8E44AD' },
  { name: 'React', icon: <SiReact />, color: '#61DAFB' },
  { name: 'SASS/SCSS', icon: <SiSass />, color: '#CF649A' },
  { name: 'Mercado Pago', icon: <FaCreditCard />, color: '#00B1EA' },
];

const medicalSystemTechnologies = [
  { name: 'Python 3.12', icon: <SiPython />, color: '#3776AB' },
  { name: 'Tkinter', icon: <FaDesktop />, color: '#FFD43B' },
  { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#336791' },
  { name: 'Supabase', icon: <SiSupabase />, color: '#3ECF8E' },
  { name: 'MVC', icon: <FaCodeBranch />, color: '#F05032' },
];

const avatarGameTechnologies = [
  { name: 'HTML5', icon: <SiHtml5 />, color: '#E34F26' },
  { name: 'CSS3', icon: <SiCss3 />, color: '#1572B6' },
  { name: 'JavaScript', icon: <SiJavascript />, color: '#F7DF1E' },
  { name: 'POO', icon: <FaCube />, color: '#FFFFFF' },
];

const pernStackTechnologies = [
  { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#336791' },
  { name: 'Express.js', icon: <SiExpress />, color: '#FFFFFF' },
  { name: 'React', icon: <SiReact />, color: '#61DAFB' },
  { name: 'Node.js', icon: <SiNodedotjs />, color: '#8CC84B' },
  { name: 'CRUD', icon: <FaPencilAlt />, color: '#A0A0A0' },
];

const projectData = [
  {
    id: 1,
    title: 'Plataforma E-commerce "GamerStore Genezis"',
    description: 'E-commerce full-stack con lógica de negocio compleja: autenticación por roles (JWT), gestión de inventario, panel de administración, flujo de pago transaccional con Mercado Pago y generación de especificaciones de productos mediante IA (Google Gemini).',
    technologies: gamerStoreTechnologies,
    liveUrl: 'https://gamerstore-genezis.vercel.app/',
    repoUrl: 'https://github.com/GBBALA/GAMERSTORE-GENEZIS',
    image: '/projects/gamerstore-project.webp'
  },
  {
    id: 2,
    title: 'Sistema Integral de Turnos Médicos',
    description: 'Aplicación de escritorio con arquitectura MVC para la gestión centralizada de turnos. Incluye módulos por rol, gestión de agenda médica, prevención de superposición de horarios y reportes de gestión.',
    technologies: medicalSystemTechnologies,
    liveUrl: null,
    repoUrl: 'https://github.com/PowerSystem2024/PowerSystem2024-App-StartUp-Genezis',
    image: '/projects/medical-appointment-project.webp'
  },
  {
    id: 3,
    title: 'Juego de Combate: La Leyenda de Aang',
    description: 'Juego web interactivo de combate por turnos. Implementa lógica con POO (Clases en JS) para modelar personajes con fortalezas, debilidades y un sistema de daño variable.',
    technologies: avatarGameTechnologies,
    liveUrl: null, // Si tienes un deploy, pon la URL aquí
    repoUrl: 'https://github.com/GBBALA/MOKEPON', // Asumo que este es el repo
    image: '/projects/avatar-game-project.webp'
  },
  {
    id: 4,
    title: 'PROYECTO PERN: Autenticación y Tareas',
    description: 'Aplicación web Full-Stack con Stack PERN. Implementa un sistema completo de autenticación de usuarios (JWT) y un módulo de gestión de tareas con operaciones CRUD seguras.',
    technologies: pernStackTechnologies,
    liveUrl: null, // Si tienes un deploy, pon la URL aquí
    repoUrl: 'https://github.com/GBBALA/PERN-Task-manager', // Asumo que este es el repo
    image: '/projects/pern-tasks-project.webp'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Proyectos Destacados</h2> 
        <div className="projects__list">
          {projectData.map((project, index) => (
            <div key={project.id} className={`project ${index % 2 === 1 ? 'project--reversed' : ''}`}>
              <div className="project__image-container">
                <a href={project.liveUrl || project.repoUrl} target="_blank" rel="noopener noreferrer">
                  <img src={project.image} alt={`Captura de pantalla del proyecto ${project.title}`} className="project__image" /> 
                </a>
              </div>
              <div className="project__content">
                <p className="project__featured">Proyecto Destacado</p>
                <h3 className="project__title">{project.title}</h3>
                <div className="project__description">
                  <p>{project.description}</p>
                </div>
                {/* --- SECCIÓN DE TECNOLOGÍAS CON ICONOS --- */}
                <ul className="project__technologies">
                  {project.technologies.map(tech => (
                    <li key={tech.name} className="tech-item" style={{'--tech-color': tech.color}}>
                      {tech.icon && <span className="tech-item__icon">{tech.icon}</span>}
                      <span className="tech-item__name">{tech.name}</span>
                    </li>
                  ))}
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
      </div>
    </section>
  );
};

export default Projects;