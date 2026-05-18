const Servicio = require('../models/Servicios.js');

exports.getAllServicios = (req, res) => {
  Servicio.getAllServicios((err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json(results);
  });
};

// Agregar un nuevo Servicio
exports.addServicio = (req, res) => {
  const newServicio = req.body;
  Servicio.addServicio(newServicio, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'Servicio agregada', id: result.insertId });
  });
};

// Modificar Servicio
exports.updateServicio = (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;
  Servicio.updateServicio(id, updatedData, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json({ message: 'Servicio actualizada' });
  });
};

// Eliminar Servicio
exports.deleteServicio = (req, res) => {
  const { id } = req.params;
  Servicio.deleteServicio(id, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json({ message: 'Servicio eliminada' });
  });
};