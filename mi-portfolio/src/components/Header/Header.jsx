import React from 'react';
import './Header.scss'; // Importamos los estilos del componente
import { useScrollDirection } from '../../hooks/useScrollDirection'; // Importamos el hook

const Header = () => {
  // 1. Llamamos al hook para obtener la dirección del scroll
  const scrollDirection = useScrollDirection();

  // 2. Usamos la variable scrollDirection para aplicar la clase condicional
  const headerClass = `header ${scrollDirection === "down" ? "header--hidden" : ""}`;

  return (
    // 3. Aplicamos la clase condicional al elemento <header>
    <header className={headerClass}>
      <div className="header__container">
        <a href="#hero" className="header__logo">[Javier Quiroga]</a> {/* Logo o nombre del portafolio */}
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <a href="#about" className="header__nav-link">Sobre Mí</a>
            </li>
            <li className="header__nav-item">
              <a href="#projects" className="header__nav-link">Proyectos</a>
            </li>
            <li className="header__nav-item">
              <a href="#contact" className="header__nav-link button button--primary">Contacto</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;