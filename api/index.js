// 1. Cargar las variables de entorno para desarrollo local
require('dotenv').config();

// 2. Importar dependencias
const express = require('express');
const cors = require('cors');
const { Resend } = require('resend');

// 3. Inicializar
const app = express();
const resend = new Resend(process.env.RESEND_API_KEY); 
const myEmail = process.env.MY_PERSONAL_EMAIL;
const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:5173';

// 4. Middlewares
app.use(express.json());
app.use(cors({ origin: frontendUrl }));

// 5. Definir la ruta de la API
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios.' });
    }

    await resend.emails.send({
      from: 'Portfolio Contact Form <onboarding@resend.dev>',
      to: [myEmail],
      subject: `Nuevo mensaje de tu Portfolio de: ${name}`,
      reply_to: email,
      html: `<h1>Contacto desde Portfolio</h1><p><strong>Nombre:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Mensaje:</strong> ${message}</p>`
    });

    res.status(200).json({ message: "Mensaje enviado con éxito." });

  } catch (serverError) {
    console.error(serverError);
    res.status(500).json({ error: 'Error interno del servidor.' });
  }
});

// 6. Iniciar el servidor (SOLO PARA DESARROLLO LOCAL)
// Vercel ignorará esta parte
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`API Server escuchando en http://localhost:${PORT}`);
});

// 7. Exportar la app (SOLO PARA VERCEL)
module.exports = app;