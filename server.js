// server.js

const express   = require('express');
const sqlite3   = require('sqlite3').verbose();
const path      = require('path');

const app  = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Plan B: base de datos interna en memoria
const memoriaUsuarios = [];

// Conexión a SQLite
const db = new sqlite3.Database('./miarchivo.db', err => {
  if (err) console.error('Error al conectar SQLite:', err.message);
  else console.log('Conexión exitosa a miarchivo.db');
});
console.log('Abriendo DB en:', path.resolve('./miarchivo.db'));

// Crear tabla si no existe 
db.run(`
  CREATE TABLE IF NOT EXISTS usuarios (
    id_usuario     INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre_usuario TEXT    NOT NULL,
    correo         TEXT    NOT NULL UNIQUE,
    contrasena     TEXT    NOT NULL
  )
`);

// Endpoint de registro (Plan A + Plan B)
app.post('/api/usuarios', (req, res) => {
  console.log('POST /api/usuarios - body:', req.body);

  const { nombre_usuario, correo, contrasena } = req.body;
  if (!nombre_usuario || !correo || !contrasena) {
    return res
      .status(400)
      .json({ error: 'Debes enviar nombre_usuario, correo y contrasena' });
  }

  const sql = `
    INSERT INTO usuarios (nombre_usuario, correo, contrasena)
    VALUES (?, ?, ?)
  `;
  db.run(sql, [nombre_usuario, correo, contrasena], function(err) {
    if (err) {
      console.error('Error SQLite:', err.message);

      // Plan B: guardar en memoria
      memoriaUsuarios.push({
        id_respaldo: memoriaUsuarios.length + 1,
        nombre_usuario,
        correo,
        contrasena,
      });
      console.log('Memoria:', memoriaUsuarios);

      return res
        .status(200)
        .json({ mensaje: 'Usuario registrado en Plan B (memoria interna)' });
    }

    // Si SQLite funciona
    res.status(200).json({
      mensaje: 'Usuario registrado exitosamente en SQLite',
      id: this.lastID
    });
  });
});

// Endpoint para listar registros de Plan B
app.get('/api/backup', (req, res) => {
  res.json(memoriaUsuarios);
});

// Migrar registros de Plan B a SQLite
function migrarPlanB() {
  memoriaUsuarios.forEach(u => {
    const sql = `
      INSERT OR IGNORE INTO usuarios
      (nombre_usuario, correo, contrasena)
      VALUES (?, ?, ?)
    `;
    const params = [u.nombre_usuario, u.correo, u.contrasena];
    db.run(sql, params, err => {
      if (err) console.error('Error al migrar usuario de Plan B:', err.message);
    });
  });
  console.log(`Migrados ${memoriaUsuarios.length} registros de Plan B`);
  memoriaUsuarios.length = 0;
}

// Endpoint para disparar la migración de Plan B
app.post('/api/backup/migrate', (req, res) => {
  migrarPlanB();
  res.json({ mensaje: 'Migración de Plan B completada' });
});

// Arranque del servidor
app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});


// Funcionalidad para enviar el formulario de contacto usando Formspree

const form = document.getElementById('formRegistro');

form.addEventListener('submit', async e => {
  e.preventDefault();

  // Captura valores del form
  const nombre_usuario = document.getElementById('nombre_usuario').value;
  const correo         = document.getElementById('correo').value;
  const contrasena     = document.getElementById('contrasena').value;

  try {
    // Petición al servidor
    const res = await fetch('/api/usuarios', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nombre_usuario, correo, contrasena })
    });

    const data = await res.json();

    // Mostrar id o mensaje en dbStatus
    document.getElementById('dbStatus').textContent =
      data.id
        ? `Usuario registrado con ID ${data.id}`
        : data.mensaje;

  } catch (err) {
    // Error de red o JS
    document.getElementById('dbStatus').textContent =
      `Usuario registrado: ${err.mensaje}`;
  }
});