import React, { useState } from 'react';
import './Skills.scss';

const skillsByCategory = [
  {
    category: 'Backend',
    skills: [
      { name: 'Java', logo: '/logos/java.svg' },
      { name: 'Spring', logo: '/logos/spring.svg' },
      { name: 'Node.js', logo: '/logos/node.svg' },
      { name: 'Python', logo: '/logos/python.svg' },
    ],
  },
  {
    category: 'Frontend',
    skills: [
      { name: 'React', logo: '/logos/react.svg' },
      { name: 'JavaScript', logo: '/logos/javascript.svg' },
      { name: 'HTML5', logo: '/logos/html5.svg' },
      { name: 'Sass', logo: '/logos/sass.svg' },
      { name: 'Bootstrap', logo: '/logos/bootstrap.svg' },
    ],
  },
  {
    category: 'Bases de Datos',
    skills: [
      { name: 'MySQL', logo: '/logos/mysql.svg' },
      { name: 'PostgreSQL', logo: '/logos/postgresql.svg' },
    ],
  },
  {
    category: 'Herramientas y DevOps',
    skills: [
      { name: 'Git', logo: '/logos/git.svg' },
      { name: 'GitHub', logo: '/logos/github.svg' },
      { name: 'Docker', logo: '/logos/docker.svg' },
      { name: 'Vercel', logo: '/logos/vercel.svg' },
    ],
  },
];

const Skills = () => {
  // Estado para controlar la pestaña activa. Por defecto, la primera ('Backend').
  const [activeTab, setActiveTab] = useState(skillsByCategory[0].category);

  return (
    <section id="skills" className="skills">
      <h2 className="section-title" style={{ '--section-counter': "''" }}>Tecnologías</h2>
      
      <div className="skills__container">
        {/* Lista de Pestañas / Navegación */}
        <div className="skills__tabs">
          {skillsByCategory.map(({ category }) => (
            <button
              key={category}
              className={`skills__tab ${activeTab === category ? 'skills__tab--active' : ''}`}
              onClick={() => setActiveTab(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Contenido de las Pestañas */}
        <div className="skills__content">
          {skillsByCategory.map(({ category, skills }) => (
            <div
              key={category}
              className={`skills__grid ${activeTab === category ? 'skills__grid--active' : ''}`}
            >
              {skills.map((skill) => (
                <div key={skill.name} className="skill-card">
                  <img src={skill.logo} alt={`${skill.name} logo`} className="skill-card__logo" />
                  <p className="skill-card__name">{skill.name}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;