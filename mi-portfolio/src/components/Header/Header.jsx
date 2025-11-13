// src/components/Header/Header.jsx

import React from 'react';
import './Header.scss';
import { useScrollDirection } from '../../hooks/useScrollDirection';

const Header = () => {
  const scrollDirection = useScrollDirection();

  return (
    // La clase 'header--hidden' seguirá funcionando para ocultar/mostrar al hacer scroll
    <header className={`header ${scrollDirection === 'down' ? 'header--hidden' : ''}`}>
      <div className="header__container">
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <a href="#about" className="header__nav-link">Sobre Mí</a>
            </li>
            <li className="header__nav-item">
              <a href="#projects" className="header__nav-link">Proyectos</a>
            </li>
            <li className="header__nav-item">
              <a href="#skills" className="header__nav-link">Habilidades</a>
            </li>
            <li className="header__nav-item">
              <a href="#contact" className="header__nav-link">Contacto</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;