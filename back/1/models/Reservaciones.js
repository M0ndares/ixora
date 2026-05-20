const db = require('../config/db');

// Obtener todas las Reservaciones
exports.getAllReservaciones = (callback) => {
  const query = 'SELECT * FROM Reservacion';
  db.query(query, callback);
};

exports.getReservacionesByEmail = (email, callback) => {
  const query = 'SELECT * FROM reservacion INNER JOIN usuario ON usuario.id_usuario=reservacion.id_usuario WHERE email= ?';
  db.query(query, [email], callback);
};

exports.addReservacion = (reservacionData, callback) => {
  const query = `
    INSERT INTO Reservacion 
    (id_reservacion, id_usuario, id_habitacion, id_estado_reservacion, fecha_reserva, fecha_entrada, fecha_salida, cantidad_huespedes, subtotal, impuestos, total, servicios) 
    VALUES ((SELECT IFNULL(MAX(r .id_reservacion), 0) + 1 FROM reservacion r), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;
  
  // Pasamos los valores correspondientes a los signos de interrogación (?)
  db.query(query, [
    reservacionData.id_usuario,
    reservacionData.id_habitacion,
    reservacionData.id_estado_reservacion,
    reservacionData.fecha_reserva,
    reservacionData.fecha_entrada,
    reservacionData.fecha_salida,
    reservacionData.cantidad_huespedes,
    reservacionData.subtotal,
    reservacionData.impuestos,
    reservacionData.total,
    reservacionData.servicios
  ], callback);
};

exports.updateReservacion = (id_reservacion, estadoReservacion, callback) => {
  const query = `
    UPDATE Reservacion 
    SET id_estado_reservacion = ?
    WHERE id_reservacion = ?
  `;
  
  db.query(query, [estadoReservacion, id_reservacion], callback);
};


exports.deleteReservacion = (id_reservacion, callback) => {
  const query = 'DELETE FROM reservacion WHERE id_reservacion = ?';
  db.query(query, [id_reservacion], callback);
};