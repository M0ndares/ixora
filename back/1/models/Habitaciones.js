const db = require('../config/db');

// Obtener todas las habitaciones
exports.getAllHabitaciones = (callback) => {
  const query = 'SELECT * FROM Habitacion';
  db.query(query, callback);
};

// Consultar habitaciones por estado de disponibilidad (Equivalente al "estatus")
// Ejemplo de estados: 'Disponible', 'Ocupada', 'Mantenimiento'
exports.getHabitacionesByTipo = (tipo, callback) => {
  const query = 'SELECT * FROM tipohabitacion WHERE id_tipo_habitacion = ?';
  db.query(query, [tipo], callback);
};

// Agregar una nueva habitación
exports.addHabitacion = (habitacionData, callback) => {
  const query = `
    INSERT INTO Habitacion 
    (id_habitacion, numero_habitacion, id_tipo_habitacion, piso, estado_disponibilidad, descripcion) 
    VALUES (?, ?, ?, ?, ?, ?)
  `;
  
  // Pasamos los valores correspondientes a los signos de interrogación (?)
  db.query(query, [
    habitacionData.id_habitacion,
    habitacionData.numero_habitacion,
    habitacionData.id_tipo_habitacion,
    habitacionData.piso,
    habitacionData.estado_disponibilidad,
    habitacionData.descripcion
  ], callback);
};

// Modificar una habitación existente
exports.updateHabitacion = (id_habitacion, habitacionData, callback) => {
  const query = `
    UPDATE Habitacion 
    SET numero_habitacion = ?, id_tipo_habitacion = ?, piso = ?, estado_disponibilidad = ?, descripcion = ? 
    WHERE id_habitacion = ?
  `;
  
  db.query(query, [
    habitacionData.numero_habitacion,
    habitacionData.id_tipo_habitacion,
    habitacionData.piso,
    habitacionData.estado_disponibilidad,
    habitacionData.descripcion,
    id_habitacion // El ID va al final porque corresponde al último '?' en el WHERE
  ], callback);
};

// Eliminar una habitación
exports.deleteHabitacion = (id_habitacion, callback) => {
  const query = 'DELETE FROM Habitacion WHERE id_habitacion = ?';
  db.query(query, [id_habitacion], callback);
};