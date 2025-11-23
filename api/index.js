require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { Resend } = require('resend');

const app = express();

// Inicializar Resend
const resend = new Resend(process.env.RESEND_API_KEY);

// Configuración de CORS
// Permitimos solicitudes desde tu dominio de producción y localhost
const allowedOrigins = [
  process.env.FRONTEND_URL, // Tu URL de Vercel (ej: https://tu-portfolio.vercel.app)
  'http://localhost:5173',  // Vite local default
  'http://localhost:3000'
];

app.use(cors({
  origin: (origin, callback) => {
    // Permitir requests sin origen (como Postman o server-to-server)
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));

app.use(express.json());

// Ruta de prueba para verificar que la API responde
app.get('/api', (req, res) => {
  res.json({ status: 'API Online', message: 'Backend funcionando correctamente' });
});

// Ruta de contacto
// Nota: Al usar el rewrite de vercel, la ruta base sigue llegando.
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Faltan campos obligatorios.' });
  }

  try {
    const data = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: [process.env.MY_PERSONAL_EMAIL], // Asegúrate que esta ENV exista
      reply_to: email,
      subject: `Nuevo contacto de: ${name}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px;">
          <h2>Nuevo Mensaje del Portfolio</h2>
          <p><strong>De:</strong> ${name} (${email})</p>
          <hr/>
          <p>${message}</p>
        </div>
      `
    });

    if (data.error) {
       console.error('Error Resend:', data.error);
       return res.status(500).json({ error: data.error.message });
    }

    return res.status(200).json({ message: 'Correo enviado exitosamente' });

  } catch (error) {
    console.error('Error interno:', error);
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
});

// Exportar app para Vercel
module.exports = app;

// Listener solo para desarrollo local
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 3001;
  app.listen(PORT, () => {
    console.log(`Servidor corriendo localmente en http://localhost:${PORT}`);
  });
}