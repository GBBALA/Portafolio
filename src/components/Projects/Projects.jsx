import React from 'react';
import './Projects.scss';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

// --- Iconos de Tecnología ---
import { 
  SiNodedotjs, SiExpress, SiPostgresql, SiJsonwebtokens, SiSwagger, 
  SiReact, SiReactrouter, SiSass, SiGooglegemini, SiCloudinary, SiJavascript,
  SiPython, SiSupabase, SiHtml5, SiCss3
} from 'react-icons/si';
import { 
  FaDatabase, FaShieldAlt, FaFilePdf, FaCreditCard, FaDesktop, FaCodeBranch, FaCube, FaPencilAlt 
} from 'react-icons/fa';

// --- 1. Definiciones de Tecnologías para cada Proyecto ---

const bomberosTechnologies = [
  { name: 'React', icon: <SiReact />, color: '#61DAFB' },
  { name: 'Supabase', icon: <SiSupabase />, color: '#3ECF8E' },
  { name: 'SASS/SCSS', icon: <SiSass />, color: '#CF649A' },
  { name: 'Cloudinary', icon: <SiCloudinary />, color: '#3448C5' },
];

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

const pernStackTechnologies = [
  { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#336791' },
  { name: 'Express.js', icon: <SiExpress />, color: '#FFFFFF' },
  { name: 'React', icon: <SiReact />, color: '#61DAFB' },
  { name: 'Node.js', icon: <SiNodedotjs />, color: '#8CC84B' },
  { name: 'CRUD', icon: <FaPencilAlt />, color: '#A0A0A0' },
];

const medicalSystemTechnologies = [
  { name: 'Python 3.12', icon: <SiPython />, color: '#3776AB' },
  { name: 'Tkinter', icon: <FaDesktop />, color: '#FFD43B' },
  { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#336791' },
  { name: 'Supabase', icon: <SiSupabase />, color: '#3ECF8E' },
  { name: 'MVC', icon: <FaCodeBranch />, color: '#F05032' },
];



// --- 2. Integración de Datos (Array Principal) ---
// Nota: Cambié 'tech' por 'technologies' y ajusté 'repoUrl' / 'liveUrl' para que coincida con tu JSX.
const projectData = [
  {
    id: 1,
    title: "Bomberos Central 27 - Sistema Integral",
    description: "Desarrollo Full Stack end-to-end de un portal público y un Dashboard administrativo con rutas protegidas. Implementación de autenticación segura, CRUD complejo para gestión de personal/inventario, y procesamiento de imágenes en el cliente.",
    image: "/projects/bomberos-project.webp", 
    technologies: bomberosTechnologies,
    repoUrl: "https://github.com/gbbala/bomberos-central-27",
    liveUrl: "https://bomberosbuta.com" // Reemplaza con tu Vercel si existe
  },
    {
    id: 2,
    title: "GamerStore",
    description: "Simulación de e-commerce de productos tecnológicos. Incluye catálogo dinámico, filtrado de productos y un carrito de compras gestionado mediante el Context API de React.",
    image: "/projects/gamerstore-project.webp",
    technologies: gamerStoreTechnologies,
    repoUrl: "https://github.com/gbbala/GamerStore",
    liveUrl: "https://gamerstore-genezis.vercel.app "
  },
  {
    id: 3,
    title: "Medical Appointments",
    description: "Gestor de turnos médicos interactivo. Destaca por el manejo de estado complejo en el lado del cliente y la validación estricta de formularios para una mejor experiencia de usuario.",
    image: "/projects/medical-appointment-project.webp",
    technologies: medicalSystemTechnologies,
    repoUrl: "https://github.com/gbbala/citas-medicas",
    liveUrl: ""
  },
  {
    id: 4,
    title: "PERN Stack Tasks",
    description: "Aplicación de gestión de tareas Full Stack. Arquitectura RESTful robusta que permite operaciones CRUD completas y conexión eficiente entre el cliente y el servidor de base de datos.",
    image: "/projects/pern-tasks-project.webp",
    technologies: pernStackTechnologies,
    repoUrl: "https://github.com/gbbala/PERN-tasks",
    liveUrl: "" // Dejar vacío si no hay demo, el botón se ocultará automáticamente
  },
];

// --- 3. Componente de Renderizado ---
const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Proyectos Destacados</h2> 
        <div className="projects__list">
          {projectData.map((project, index) => (
            <div key={project.id} className={`project ${index % 2 === 1 ? 'project--reversed' : ''}`}>
              <div className="project__image-container">
                {/* Fallback de link en imagen: Si no hay liveUrl, redirige al repoUrl */}
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
                  <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" title="Ver código en GitHub">
                    <FiGithub />
                  </a>
                  {/* Renderizado condicional: El botón de demo solo aparece si liveUrl tiene texto */}
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" title="Ver demo en vivo">
                      <FiExternalLink />
                    </a>
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