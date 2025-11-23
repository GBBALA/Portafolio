import React from 'react';
import './assets/styles/main.scss';

// Importación de componentes de Layout
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import SocialSidebar from './components/SocialSidebar/SocialSidebar.jsx';
import FadeInWrapper from './components/FadeInWrapper/FadeInWrapper.jsx';
import ParticlesBackground from './components/ParticlesBackground/ParticlesBackground.jsx';

// Importación de componentes de Sección
import Hero from './components/Hero/Hero.jsx';
import About from './components/About/About.jsx';
import Skills from './components/Skills/Skills.jsx'; 
import Projects from './components/Projects/Projects.jsx';
import Contact from './components/Contact/Contact.jsx';

function App() {
  return (
    <div className="app-layout"> 
      <ParticlesBackground />
      <SocialSidebar />
      <Header />

      {/* Este es el contenedor principal que centra todo el contenido */}
      <div className="main-content"> 
        <main>
          <Hero />
          
          <FadeInWrapper>
            <About />
          </FadeInWrapper>
          
          <FadeInWrapper>
            <Skills />
          </FadeInWrapper>

          <FadeInWrapper>
            <Projects /> {/* <-- VERIFICA QUE ESTA LÍNEA ESTÉ PRESENTE */}
          </FadeInWrapper>

          <FadeInWrapper>
            <Contact />
          </FadeInWrapper>
        </main>
        
        <Footer />
      </div>
    </div>
  );
}

export default App;