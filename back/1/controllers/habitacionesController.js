const Habitacion = require('../models/Habitaciones.js');

exports.getAllHabitaciones = (req, res) => {
  Habitacion.getAllHabitaciones((err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json(results);
  });
};

// Obtener Habitacions por estatus
exports.getHabitacionesByStatus = (req, res) => {
  const { estatus } = req.params;
  Habitacion.getHabitacionesByStatus(estatus, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json(results);
  });
};


// Agregar un nuevo Habitacion
exports.addStudent = (req, res) => {
  const newStudent = req.body;
  Habitacion.addStudent(newStudent, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'Habitacion agregada', id: result.insertId });
  });
};

// Modificar Habitacion
exports.updateStudent = (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;
  Habitacion.updateStudent(id, updatedData, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json({ message: 'Habitacion actualizada' });
  });
};

// Eliminar Habitacion
exports.deleteStudent = (req, res) => {
  const { id } = req.params;
  Habitacion.deleteStudent(id, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json({ message: 'Habitacion eliminada' });
  });
};