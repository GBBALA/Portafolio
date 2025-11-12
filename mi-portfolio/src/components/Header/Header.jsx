import React from 'react';
import './Header.scss'; // Importamos los estilos del componente

const Header = () => {
  return (
    <header className="header">
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