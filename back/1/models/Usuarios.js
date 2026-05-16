const db = require('../config/db');

// Obtener todas las usuarios
exports.getAllUsuarios = (callback) => {
  const query = 'SELECT * FROM usuario';
  db.query(query, callback);
};

// Consultar usuarios por estado de disponibilidad (Equivalente al "estatus")
// Ejemplo de estados: 'Disponible', 'Ocupada', 'Mantenimiento'
exports.getUsuariosByEmail = (email, callback) => {
  const query = 'SELECT * FROM usuario WHERE email = ?';
  db.query(query, [email], callback);
};


// Agregar una nueva habitación
exports.addUsuarios = (usuariosData, callback) => {
  const query = `
    INSERT INTO usuario 
    (id_usuario, nombre_usuario, email, password, fecha_registro, ultimo_acceso, activo) 
    VALUES ((SELECT IFNULL(MAX(u.id_usuario), 0) + 1 FROM usuario u), ?, ?, ?, ?, ?, ?)
  `;
  db.query(query, [
    usuariosData.nombre_usuario,
    usuariosData.email,
    usuariosData.password,
    usuariosData.fecha_registro,
    usuariosData.ultimo_acceso,
    usuariosData.activo
  ], callback);
};

// Modificar un usuario existente
exports.updateUsuarios = (email_usuarios, usuariosData, callback) => {
  const query = `
    UPDATE usuario 
    SET 
      nombre_usuario = COALESCE(?, nombre_usuario), 
      email = COALESCE(?, email), 
      password = COALESCE(?, password), 
      fecha_registro = COALESCE(?, fecha_registro), 
      ultimo_acceso = COALESCE(?, ultimo_acceso), 
      activo = COALESCE(?, activo)
    WHERE email = ?
  `;
  
  db.query(query, [
    usuariosData.nombre_usuario || null,
    usuariosData.email || null,
    usuariosData.password || null,
    usuariosData.fecha_registro || null,
    usuariosData.ultimo_acceso || null,
    usuariosData.activo !== undefined ? usuariosData.activo : null, // Evita que el 0 se confunda con vacío
    email_usuarios
  ], callback);
};

// Eliminar una habitación
exports.deleteUsuarios = (id_usuarios, callback) => {
  const query = 'DELETE FROM usuarios WHERE id_usuario = ?';
  db.query(query, [id_usuarios], callback);
};