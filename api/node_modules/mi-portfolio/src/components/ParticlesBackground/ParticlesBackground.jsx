// src/components/ParticlesBackground/ParticlesBackground.jsx

import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import particlesConfig from './particles-config'; // Importaremos la configuración

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    // Inicia el motor de tsparticles
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={particlesConfig}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1, // ¡Crucial! Lo pone detrás de todo el contenido
      }}
    />
  );
};

export default ParticlesBackground;