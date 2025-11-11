// 1. Cargar las variables de entorno desde el archivo .env
require('dotenv').config();

// 2. Importar las dependencias necesarias
const express = require('express');
const cors = require('cors');
const { Resend } = require('resend');

// 3. Inicializar Express y Resend
const app = express();
// Aquí leemos la clave secreta desde process.env (cargada desde .env)
const resend = new Resend(process.env.RESEND_API_KEY); 
const myEmail = process.env.MY_PERSONAL_EMAIL;

// 4. Configurar Middlewares
app.use(express.json()); // Para poder leer JSON en el body de la petición
// Leemos la URL del frontend desde las variables de entorno para configurar CORS
app.use(cors({ origin: process.env.FRONTEND_URL }));

// 5. Definir la ruta que manejará el envío del formulario
app.post('/api/contact', async (req, res) => {
  try {
    // Extraemos los datos enviados desde el formulario en el frontend
    const { name, email, message } = req.body;

    // Validación básica en el servidor
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios.' });
    }

    // ESTA ES LA LÓGICA PARA ENVIAR EL EMAIL
    // Se ejecuta solo cuando se recibe una petición POST en esta ruta.
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact Form <onboarding@resend.dev>',
      to: [myEmail], // El email se lee de tus variables de entorno
      subject: `Nuevo mensaje de tu Portfolio de: ${name}`,
      reply_to: email, // El email del usuario que llenó el formulario
      html: `
        <h1>Nuevo Contacto desde tu Portfolio</h1>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <hr>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      `
    });

    // Manejo de errores de la API de Resend
    if (error) {
      console.error({ error });
      return res.status(500).json({ error: 'Hubo un error al intentar enviar el email.' });
    }

    // Si todo fue exitoso, enviamos una respuesta positiva al frontend
    res.status(200).json({ message: 'Mensaje enviado con éxito.' });

  } catch (serverError) {
    console.error(serverError);
    res.status(500).json({ error: 'Error interno del servidor.' });
  }
});

// 6. Iniciar el servidor
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`API Server escuchando en http://localhost:${PORT}`);
});