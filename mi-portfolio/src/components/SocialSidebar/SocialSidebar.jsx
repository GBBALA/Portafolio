import React from 'react';
import './SocialSidebar.scss';
// Recuerda instalar react-icons: npm install react-icons
import { FiGithub, FiLinkedin } from 'react-icons/fi';

const SocialSidebar = () => {
  return (
    <div className="social-sidebar">
      <ul>
        <li>
          <a href="https://github.com/GBBALA" target="_blank" rel="noopener noreferrer" title="GitHub">
            <FiGithub />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/javier-quiroga-diaz/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <FiLinkedin />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialSidebar;