const mysql = require('mysql2/promise'); // Importa la versión de promesas
require('dotenv').config(); // Carga las variables del .env

// Crear el pool de conexiones
const pool = mysql.createPool({
  host:'localhost',
  user: 'root',
  password: '',
  database: 'tp_example',
});

module.exports = pool;
