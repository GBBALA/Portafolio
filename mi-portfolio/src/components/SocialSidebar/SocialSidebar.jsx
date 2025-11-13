// src/components/SocialSidebar/SocialSidebar.jsx

import React from 'react';
import './SocialSidebar.scss';

const SocialSidebar = () => {
  return (
    <div className="social-sidebar">
      <ul>
        <li>
          <a href="https://github.com/GBBALA" target="_blank" rel="noopener noreferrer" title="GitHub">
            {/* Aquí puedes usar un ícono SVG si lo deseas */}
            GH
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/javier-quiroga-045940379/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
            LI
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialSidebar;