import React, { useState } from 'react';
import './Contact.scss';
//import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

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

  // --- SECCIÓN MODIFICADA ---
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

      // 1. Interpreta la respuesta como un objeto JSON
      const data = await res.json();

      // 2. Usa el mensaje dentro del objeto JSON
      handleServerResponse(res.ok, data.message || 'Ocurrió un error.');
    
    } catch (error) {
      console.error('Error submitting form:', error);
      handleServerResponse(false, 'Ha ocurrido un error al enviar el mensaje.');
    }
  };
  // --- FIN DE LA SECCIÓN MODIFICADA ---

  return (
    <section className="contact-section" id="contact">
      <div className="contact-form-container">
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <h2 className="contact-form__title">Contacto</h2>
          <p className="contact-form__subtitle">
            
          </p>
          {/* ... (resto del formulario JSX se mantiene igual) ... */}
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

     
    </section>
  );
};

export default Contact;