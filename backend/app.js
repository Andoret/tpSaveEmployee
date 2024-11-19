const express = require('express');
const cors = require('cors');  // Importa el paquete CORS
const app = express();

app.use(cors());
// Middleware para trabajar con JSON
app.use(express.json());

// Importar y usar las rutas
app.use((err, req, res, next) => {
    console.error(err); // Esto muestra el error en la consola
    res.status(500).send('Internal Server Error');
  });
const userRoutes = require('./routes/userRoutes');
app.use('/user', userRoutes); // Prefijo para las rutas de usuarios

module.exports = app;
