// src/components/Skills/Skills.jsx
import React from 'react';
import './Skills.scss';
import { FiChevronRight } from 'react-icons/fi'; // Usaremos un ícono de flecha

const skillsData = [
  'Java y Spring Framework para la construcción de APIs robustas y escalables.',
  'React para el desarrollo de interfaces de usuario interactivas y Single-Page Applications.',
  'Node.js y Express para la creación de servidores rápidos y eficientes.',
  'JavaScript (ES6+) y TypeScript para un código más seguro y mantenible.',
  'Bases de datos SQL (PostgreSQL, MySQL) y NoSQL (MongoDB).',
  'Desarrollo móvil nativo con Java para Android.',
  'Herramientas de control de versiones como Git y plataformas como GitHub.',
  'Principios de arquitectura de software, incluyendo MVC y Programación Orientada a Objetos.',
];

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <h2 className="section-title" style={{'--section-counter': "'03.'"}}>Mis Habilidades</h2>
      <div className="skills__content">
        <p className="skills__intro">
          A lo largo de mi carrera, he trabajado con diversas tecnologías tanto en el frontend como en el backend. Estas son algunas de las herramientas y lenguajes con los que tengo más experiencia:
        </p>
        <ul className="skills__list">
          {skillsData.map((skill, index) => (
            <li key={index}>
              <FiChevronRight className="skill__icon" /> {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;