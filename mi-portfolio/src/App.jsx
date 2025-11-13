// src/App.jsx

import React from 'react';

// Estilos globales
import './assets/styles/main.scss';

// Importación de todos los componentes
// -- La línea de error ha sido eliminada de aquí --
import ParticlesBackground from './components/ParticlesBackground/ParticlesBackground.jsx';
import Header from './components/Header/Header.jsx';
import Hero from './components/Hero/Hero.jsx';
import About from './components/About/About.jsx';
import Skills from './components/Skills/Skills.jsx'; 
import Projects from './components/Projects/Projects.jsx';
import Contact from './components/Contact/Contact.jsx';
import Footer from './components/Footer/Footer.jsx';
import FadeInWrapper from './components/FadeInWrapper/FadeInWrapper.jsx';
import SocialSidebar from './components/SocialSidebar/SocialSidebar.jsx'; // Añadí esta porque la necesitaremos

function App() {
  return (
    <>
      <SocialSidebar />
      <ParticlesBackground />
      <Header />
      <main>
        {/* ... el resto del código ... */}
      </main>
      <Footer />
    </>
  );
}

export default App;