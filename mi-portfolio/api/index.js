// Importar dependencias
require('dotenv').config(); // Carga las variables de entorno desde .env
const express = require('express');
const cors = 'require'('cors');
const { Resend } = require('resend');

// Inicializar la aplicación Express
const app = express();

// Configurar Resend con la API Key
const resend = new Resend(process.env.RESEND_API_KEY);
const myEmail = process.env.MY_PERSONAL_EMAIL; // Tu email para recibir los mensajes

// Middlewares
// Habilitar CORS para permitir peticiones desde el frontend.
// Es crucial para la seguridad y el funcionamiento.
app.use(cors({ origin: process.env.FRONTEND_URL || 'http://localhost:5173' })); 
app.use(express.json()); // Permitir que Express parsee el body de las peticiones como JSON

// Ruta de Health Check (buena práctica para verificar que la API está viva)
app.get('/api', (req, res) => {
  res.status(200).send('API is running.');
});

// Endpoint para procesar el formulario de contacto
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // 1. Validación simple de los datos de entrada
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios.' });
    }

    // 2. Envío del correo electrónico usando Resend
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // Dominio por defecto de Resend, no cambiar
      to: [myEmail],
      subject: `Nuevo mensaje de contacto de ${name}`,
      reply_to: email, // Permite responder directamente al email del remitente
      html: `<p><strong>Nombre:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Mensaje:</strong></p>
             <p>${message}</p>`
    });

    if (error) {
      // Si Resend devuelve un error
      console.error({ error });
      return res.status(500).json({ error: 'Error al enviar el mensaje.' });
    }
    
    // 3. Respuesta de éxito al frontend
    res.status(200).json({ message: 'Mensaje enviado correctamente.' });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error interno del servidor.' });
  }
});

// Iniciar el servidor
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});