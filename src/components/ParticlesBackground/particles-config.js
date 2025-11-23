// src/components/ParticlesBackground/particles-config.js

const particlesConfig = {
  background: {
    color: {
      value: "transparent", // El color de fondo lo da el CSS del body
    },
  },
  fpsLimit: 120,
  particles: {
    color: {
      value: "#ffffff", // Estrellas blancas
    },
    move: {
      direction: "none",
      enable: true,
      outModes: {
        default: "out",
      },
      random: true,
      speed: 0.3, // Movimiento muy lento y sutil
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 100, // Cantidad de estrellas
    },
    opacity: {
      value: 0.5,
      animation: { // Animación de parpadeo
        enable: true,
        minimumValue: 0.1,
        speed: 1,
        sync: false,
      }
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 1, max: 2.5 }, // Estrellas de diferentes tamaños pequeños
    },
  },
  detectRetina: true,
};

export default particlesConfig;