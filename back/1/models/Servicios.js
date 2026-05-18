const db = require('../config/db');

// Obtener todas las Servicios
exports.getAllServicios = (callback) => {
  const query = 'SELECT * FROM servicioadicional';
  db.query(query, callback);
};

// Agregar una nueva habitación
exports.addServicio = (servicioData, callback) => {
  const query = `
    INSERT INTO servicioadicional
    (id_servicio, nombre_servicio, descripcion, precio, categoria) 
    VALUES (?, ?, ?, ?, ?)
  `;
  
  // Pasamos los valores correspondientes a los signos de interrogación (?)
  db.query(query, [
    servicioData.id_servicio,
    servicioData.nombre_servicio,
    servicioData.descripcion,
    servicioData.precio,
    servicioData.categoria,
  ], callback);
};

// Modificar una habitación existente
exports.updateServicio = (id_servicio, servicioData, callback) => {
  const query = `
    UPDATE servicio 
    SET numero_servicio = ?, id_tipo_servicio = ?, piso = ?, estado_disponibilidad = ?, descripcion = ? 
    WHERE id_servicio = ?
  `;
  
  db.query(query, [
    servicioData.nombre_servicio,
    servicioData.descripcion,
    servicioData.precio,
    servicioData.categoria,
    id_servicio // El ID va al final porque corresponde al último '?' en el WHERE
  ], callback);
};

// Eliminar una habitación
exports.deleteServicio = (id_servicio, callback) => {
  const query = 'DELETE FROM servicio WHERE id_servicio = ?';
  db.query(query, [id_servicio], callback);
};