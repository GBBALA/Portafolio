// src/components/ParticlesBackground/particles-config.js

const particlesConfig = {
  particles: {
    number: {
      value: 60, // Menos partículas para un look más limpio
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: '#cccccc', // Color grisáceo para las partículas
    },
    shape: {
      type: 'circle',
    },
    opacity: {
      value: 0.5,
      random: true,
    },
    size: {
      value: 2,
      random: true,
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: '#cccccc', // Color de las líneas
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 1, // Movimiento lento
      direction: 'none',
      random: false,
      straight: false,
      out_mode: 'out',
      bounce: false,
    },
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: false, // Desactivado para no distraer
      },
      onclick: {
        enable: false, // Desactivado
      },
      resize: true,
    },
  },
  retina_detect: true,
};

export default particlesConfig;