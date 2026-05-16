const db = require('../config/db');

// Obtener todas las usuarios
exports.getAllUsuarios = (callback) => {
  const query = 'SELECT * FROM usuario';
  db.query(query, callback);
};

// Consultar usuarios por estado de disponibilidad (Equivalente al "estatus")
// Ejemplo de estados: 'Disponible', 'Ocupada', 'Mantenimiento'
exports.getUsuariosByStatus = (estado_disponibilidad, callback) => {
  const query = 'SELECT * FROM usuario WHERE activo = ?';
  db.query(query, [estado_disponibilidad], callback);
};

exports.updateUsuariosActivos = (id_usuarios, activo, callback) => {
  const query = `
    UPDATE usuario 
    SET activo = ?
    WHERE id_usuario = ?
  `;
  db.query(query, [activo, id_usuarios], callback);
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
exports.updateUsuarios = (id_usuarios, usuariosData, callback) => {
  const query = `
    UPDATE usuario 
    SET nombre_usuario = ?, email = ?, password = ?, fecha_registro = ?, ultimo_acceso = ?, activo = ?
    WHERE id_usuario = ?
  `;
  
  db.query(query, [
    usuariosData.nombre_usuario,
    usuariosData.email,
    usuariosData.password,
    usuariosData.fecha_registro,
    usuariosData.ultimo_acceso,
    usuariosData.activo,
    id_usuarios // El ID va al final porque corresponde al último '?' en el WHERE
  ], callback);
};

// Eliminar una habitación
exports.deleteUsuarios = (id_usuarios, callback) => {
  const query = 'DELETE FROM usuarios WHERE id_usuario = ?';
  db.query(query, [id_usuarios], callback);
};