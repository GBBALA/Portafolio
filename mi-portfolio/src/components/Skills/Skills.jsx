// src/components/Skills/Skills.jsx
import React from 'react';
import './Skills.scss';

// Datos agrupados por categoría
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
  return (
    <section id="skills" className="skills">
      <h2 className="section-title" style={{'--section-counter': "''"}}>Tecnologías que Domino</h2>
      <div className="skills__categories">
        {skillsByCategory.map(({ category, skills }) => (
          <div key={category} className="skill-category">
            <h3 className="skill-category__title">{category}</h3>
            <div className="skill-category__grid">
              {skills.map((skill) => (
                <div key={skill.name} className="skill-card">
                  <img src={skill.logo} alt={`${skill.name} logo`} className="skill-card__logo" />
                  <p className="skill-card__name">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;