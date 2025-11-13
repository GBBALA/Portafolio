import React, { useState } from 'react';
import './Contact.scss'; // Asegúrate de que la importación del SCSS es correcta.

const Contact = () => {
  // Estado para los datos del formulario
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Estado para gestionar el proceso de envío
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });

  // Handler para actualizar el estado cuando el usuario escribe
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handler para gestionar la respuesta del servidor
  const handleServerResponse = (ok, msg) => {
    setStatus({
      submitted: ok,
      submitting: false,
      info: { error: !ok, msg: msg },
    });
    // Si el envío fue exitoso, resetea el formulario
    if (ok) {
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    }
  };

  // Handler para el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status.submitting) return;

    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));

    try {
      // La URL debe apuntar a tu endpoint del backend que usa Resend.
      // Si tu backend está en el mismo proyecto (ej. en una carpeta /api), esta ruta relativa funciona.
      // Si está en otro dominio, deberás usar la URL completa y configurar CORS.
      const res = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // Asumimos que tu API devuelve un mensaje en formato de texto.
      const responseMessage = await res.text();
      handleServerResponse(res.ok, responseMessage);
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
              aria-required="true"
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
              aria-required="true"
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
              aria-required="true"
              rows="5"
            ></textarea>
          </div>

          <div className="contact-form__footer">
            <button type="submit" className="contact-form__button" disabled={status.submitting}>
              {status.submitting ? 'Enviando...' : 'Enviar Mensaje'}
            </button>
          </div>

          {status.info.msg && (
            <div
              className={`contact-form__status-message ${status.info.error ? 'contact-form__status-message--error' : 'contact-form__status-message--success'}`}
              aria-live="assertive"
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