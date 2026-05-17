const Habitacion = require('../models/Habitaciones.js');

exports.getAllHabitaciones = (req, res) => {
  Habitacion.getAllHabitaciones((err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json(results);
  });
};

// Obtener Habitacions por estatus
exports.getHabitacionesByTipo = (req, res) => {
  const { idTipo } = req.params;
  Habitacion.getHabitacionesByTipo(idTipo, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json(results);
  });
};

exports.getTotalHabitacionesByTipo = (req, res) => {
  const { idTipo } = req.params;
  Habitacion.getTotalHabitacionesByTipo(idTipo, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json(results);
  });
};

// Agregar un nuevo Habitacion
exports.addHabitacion = (req, res) => {
  const newHabitacion = req.body;
  Habitacion.addHabitacion(newHabitacion, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'Habitacion agregada', id: result.insertId });
  });
};

// Modificar Habitacion
exports.updateHabitacion = (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;
  Habitacion.updateHabitacion(id, updatedData, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json({ message: 'Habitacion actualizada' });
  });
};

// Eliminar Habitacion
exports.deleteHabitacion = (req, res) => {
  const { id } = req.params;
  Habitacion.deleteHabitacion(id, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json({ message: 'Habitacion eliminada' });
  });
};