const Estudiante = require('../models/Estudiantes.js');

// Obtener todos los estudiantes
exports.getAllStudents = (req, res) => {
  Estudiante.getAllStudents((err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json(results);
  });
};

// Obtener estudiantes por estatus
exports.getStudentsByStatus = (req, res) => {
  const { estatus } = req.params;
  Estudiante.getStudentsByStatus(estatus, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json(results);
  });
};


// Agregar un nuevo estudiante
exports.addStudent = (req, res) => {
  const newStudent = req.body;
  Estudiante.addStudent(newStudent, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'Estudiante agregado', id: result.insertId });
  });
};

// Modificar estudiante
exports.updateStudent = (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;
  Estudiante.updateStudent(id, updatedData, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json({ message: 'Estudiante actualizado' });
  });
};

// Eliminar estudiante
exports.deleteStudent = (req, res) => {
  const { id } = req.params;
  Estudiante.deleteStudent(id, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json({ message: 'Estudiante eliminado' });
  });
};