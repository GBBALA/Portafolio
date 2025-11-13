import React from 'react';
import './Contact.scss';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2 className="section-title" style={{'--section-counter': "'03.'"}}>Contacto</h2>
      <h3 className="contact__tagline">¿Interesado en Colaborar?</h3>
      <p className="contact__text">
        Actualmente estoy abierto a nuevas oportunidades y mi bandeja de entrada está siempre disponible. Si tienes alguna pregunta, una propuesta o simplemente quieres saludar, ¡no dudes en escribirme! Haré todo lo posible por responderte.
      </p>
      <a 
        href="mailto:quiroga.diaz.javier.ed@gmail.com" 
        className="button button--primary contact__button"
      >
        ¡Saluda!
      </a>
    </section>
  );
};

export default Contact;