import React, { useState } from 'react';
import './Contact.scss';
// Importamos los mismos iconos que usas en el sidebar para consistencia de diseño
import { FiGithub, FiLinkedin } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleServerResponse = (ok, msg) => {
    setStatus({
      submitted: ok,
      submitting: false,
      info: { error: !ok, msg: msg },
    });
    if (ok) {
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status.submitting) return;

    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));

    const apiUrl = `${import.meta.env.VITE_API_URL || ''}/api/contact`;

    try {
      const res = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      handleServerResponse(res.ok, data.message || 'Ocurrió un error.');
    
    } catch (error) {
      console.error('Error submitting form:', error);
      handleServerResponse(false, 'Ha ocurrido un error al enviar el mensaje.');
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-form-container">
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <h2 className="contact-form__title">Contacto</h2>
          {/* Eliminé el subtítulo vacío para limpiar el DOM */}
          
          <div className="contact-form__field">
            <label htmlFor="name" className="contact-form__label">Nombre</label>
            <input
              id="name"
              type="text"
              name="name"
              className="contact-form__input"
              onChange={handleChange}
              value={formData.name}
              required
            />
          </div>

          <div className="contact-form__field">
            <label htmlFor="email" className="contact-form__label">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              className="contact-form__input"
              onChange={handleChange}
              value={formData.email}
              required
            />
          </div>

          <div className="contact-form__field">
            <label htmlFor="message" className="contact-form__label">Mensaje</label>
            <textarea
              id="message"
              name="message"
              className="contact-form__textarea"
              onChange={handleChange}
              value={formData.message}
              required
              rows="5"
            ></textarea>
          </div>

          <div className="contact-form__footer">
            <button type="submit" className="contact-form__button" disabled={status.submitting}>
              {status.submitting ? 'Enviando...' : 'Enviar'}
            </button>
          </div>
          
          {status.info.msg && (
            <div
              className={`contact-form__status-message ${status.info.error ? 'contact-form__status-message--error' : 'contact-form__status-message--success'}`}
            >
              {status.info.msg}
            </div>
          )}
        </form>
      </div>

      {/* --- NUEVA SECCIÓN DE REDES SOCIALES --- */}
      {/* Utiliza las clases .social-links ya definidas en tu SCSS */}
      <div className="social-links">
        <h3 className="social-links__title">Conéctate conmigo</h3>
        <div className="social-links__icons">
          <a 
            href="https://github.com/GBBALA" 
            target="_blank" 
            rel="noopener noreferrer"
            title="Ver perfil de GitHub"
          >
            <FiGithub />
          </a>
          <a 
            href="https://www.linkedin.com/in/javier-quiroga-045940379/" 
            target="_blank" 
            rel="noopener noreferrer"
            title="Conectar en LinkedIn"
          >
            <FiLinkedin />
          </a>
        </div>
      </div>
      {/* --- FIN NUEVA SECCIÓN --- */}

    </section>
  );
};

export default Contact;