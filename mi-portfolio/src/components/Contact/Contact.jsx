import React, { useState } from 'react';
import './Contact.scss';

// La URL de tu API. Usamos una variable de entorno para flexibilidad.
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(''); // Para mostrar mensajes de éxito o error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Enviando...');

    try {
      const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Algo salió mal.');
      }
      
      setStatus('¡Mensaje enviado con éxito!');
      setFormData({ name: '', email: '', message: '' }); // Limpiar formulario

    } catch (error) {
      setStatus(`Error: ${error.message}`);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="contact__title">Contacto</h2>
        <form name="contact" onSubmit={handleSubmit} className="contact__form">
          {/* ... (tus inputs y labels no cambian) ... */}
          <div className="form-group">
            <label htmlFor="name">Nombre</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Correo Electrónico</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Mensaje</label>
            <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} required></textarea>
          </div>
          <button type="submit" className="button button--primary">Enviar Mensaje</button>
        </form>
        {status && <p className="contact__status">{status}</p>}
      </div>
    </section>
  );
};

export default Contact;