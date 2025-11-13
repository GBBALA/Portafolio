import React from 'react';
import './Skills.scss';

// Array de datos corregido y completo para que coincida con tus archivos en public/logos/
const skillsData = [
  // Backend
  { name: 'Java', logo: '/logos/java.svg' },
  { name: 'Spring', logo: '/logos/spring.svg' },
  { name: 'Node.js', logo: '/logos/node.svg' }, // Corregido de 'nodedotjs.svg' a 'node.svg'
  { name: 'Python', logo: '/logos/python.svg' }, // Añadido
  
  // Frontend
  { name: 'React', logo: '/logos/react.svg' },
  { name: 'JavaScript', logo: '/logos/javascript.svg' },
  { name: 'HTML5', logo: '/logos/html5.svg' },
  { name: 'CSS3', logo: '/logos/css3.svg' }, // Añadido
  { name: 'Sass', logo: '/logos/sass.svg' },
  { name: 'Bootstrap', logo: '/logos/bootstrap.svg' },
  
  // Bases de Datos
  { name: 'MySQL', logo: '/logos/mysql.svg' },
  { name: 'PostgreSQL', logo: '/logos/postgresql.svg' }, // Añadido
  
  // Herramientas y DevOps
  { name: 'Git', logo: '/logos/git.svg' },
  { name: 'GitHub', logo: '/logos/github.svg' }, // Añadido
  { name: 'Docker', logo: '/logos/docker.svg' }, // Añadido
  { name: 'Vercel', logo: '/logos/vercel.svg' },
];

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="skills__container">
        {/* Título actualizado: Usando section-title con contador '02.' */}
        <h2 
          className="section-title" 
          style={{'--section-counter': "'02.'"}}
        >
          Habilidades
        </h2>
        <div className="skills__grid">
          {skillsData.map((skill) => (
            <div key={skill.name} className="skill-card">
              <img src={skill.logo} alt={`${skill.name} logo`} className="skill-card__logo" />
              <p className="skill-card__name">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;