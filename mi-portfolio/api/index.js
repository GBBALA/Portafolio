// 1. Cargar las variables de entorno desde el archivo .env
require('dotenv').config();

// 2. Importar las dependencias necesarias
const express = require('express');
const cors = require('cors');
const { Resend } = require('resend');

// 3. Inicializar Express y Resend
const app = express();
const resend = new Resend(process.env.RESEND_API_KEY); 
const myEmail = process.env.MY_PERSONAL_EMAIL;

// 4. Configurar Middlewares
app.use(express.json());
app.use(cors({ origin: process.env.FRONTEND_URL }));

// ======================================================================
//      AQUÍ ESTÁ LA RUTA DE HEALTH CHECK QUE FALTABA
// ======================================================================
app.get('/api', (req, res) => {
  res.status(200).send('API is running.');
});
// ======================================================================


// 5. Definir la ruta que manejará el envío del formulario
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios.' });
    }

    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact Form <onboarding@resend.dev>',
      to: [myEmail],
      subject: `Nuevo mensaje de tu Portfolio de: ${name}`,
      reply_to: email,
      html: `
        <h1>Nuevo Contacto desde tu Portfolio</h1>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <hr>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      `
    });

    if (error) {
      console.error({ error });
      return res.status(500).json({ error: 'Hubo un error al intentar enviar el email.' });
    }

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