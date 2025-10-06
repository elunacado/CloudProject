const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Configuración CORS
app.use(cors({
  origin: 'https://quotes-front-one.vercel.app', // tu frontend
  methods: ['GET','POST','PUT','DELETE','OPTIONS'],
  allowedHeaders: ['Content-Type']
}));

app.use(express.json());

// Conexión a MySQL
const db = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  connectTimeout: 30000
});

// Crear tabla si no existe
db.query(`
CREATE TABLE IF NOT EXISTS frases (
  id INT AUTO_INCREMENT PRIMARY KEY,
  texto VARCHAR(255) NOT NULL
)
`, (err) => {
  if (err) console.log(err);
});

// Endpoints
app.get('/frases', (req, res) => {
  db.query('SELECT * FROM frases', (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
});

app.post('/frases', (req, res) => {
  const { texto } = req.body;
  db.query('INSERT INTO frases (texto) VALUES (?)', [texto], (err, results) => {
    if (err) return res.status(500).json(err);
    res.json({ id: results.insertId, texto });
  });
});

// Servidor
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Servidor escuchando en puerto ${PORT}`));
