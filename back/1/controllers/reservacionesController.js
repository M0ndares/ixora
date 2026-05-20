const Reservacion = require('../models/Reservaciones.js');

exports.getAllReservaciones = (req, res) => {
  Reservacion.getAllReservaciones((err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json(results);
  });
};

// Obtener Reservacions por estatus
exports.getReservacionesByEmail= (req, res) => {
  const { email } = req.params;
  Reservacion.getReservacionesByEmail(email, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json(results);
  });
};

// Agregar un nuevo Reservacion
exports.addReservacion = (req, res) => {
  const newReservacion = req.body;
  Reservacion.addReservacion(newReservacion, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'Reservacion agregada', id: result.insertId });
  });
};

// Modificar Reservacion
exports.updateReservacion = (req, res) => {
  const { id } = req.params;
  const {updatedData} = req.body;
  Reservacion.updateReservacion(id, updatedData, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json({ message: 'Reservacion actualizada' });
  });
};

// Eliminar Reservacion
exports.deleteReservacion = (req, res) => {
  const { id } = req.params;
  Reservacion.deleteReservacion(id, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json({ message: 'Reservacion eliminada' });
  });
};