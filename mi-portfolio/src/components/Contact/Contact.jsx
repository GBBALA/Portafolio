import React, { useState } from 'react';
import './Contact.scss';
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

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

    try {
      const res = await fetch('/api/send', { // Asegúrate que este endpoint es correcto
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const responseMessage = await res.text();
      handleServerResponse(res.ok, responseMessage || (res.ok ? 'Mensaje enviado con éxito.' : 'Ocurrió un error.'));
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
          <p className="contact-form__subtitle">
            ¿Tienes alguna pregunta o propuesta? No dudes en escribirme.
          </p>

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

      <div className="social-links">
        <h3 className="social-links__title">Conecta conmigo</h3>
        <div className="social-links__icons">
          {/* Enlace a GitHub (ya estaba correcto) */}
          <a href="https://github.com/GBBALA" target="_blank" rel="noopener noreferrer" aria-label="Visita mi perfil de GitHub">
            <FaGithub />
          </a>
          
          {/* Enlace a LinkedIn (ACTUALIZADO) */}
          <a href="https://www.linkedin.com/in/javier-quiroga-045940379/" target="_blank" rel="noopener noreferrer" aria-label="Visita mi perfil de LinkedIn">
            <FaLinkedin />
          </a>
          
          {/* Enlace a Instagram (ACTUALIZADO) */}
          <a href="https://www.instagram.com/javiidq/" target="_blank" rel="noopener noreferrer" aria-label="Visita mi perfil de Instagram">
            <FaInstagram />
          </a>
          
          {/* Enlace a Facebook (ACTUALIZADO) */}
          <a href="https://www.facebook.com/profile.php?id=100008261436576&locale=es_LA" target="_blank" rel="noopener noreferrer" aria-label="Visita mi perfil de Facebook">
            <FaFacebook />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;