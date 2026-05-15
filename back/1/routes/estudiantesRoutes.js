
const express = require('express');
const router = express.Router();
const estudiantesController = require('../controllers/estudiantesController.js');


// Ruta para obtener todos los estudiantes
router.get('/estudiantes',estudiantesController.getAllStudents);

// Ruta para obtener estudiantes por estatus
router.get('/estudiantes/status/:estatus', estudiantesController.getStudentsByStatus);
// Ruta para agregar un nuevo estudiante
router.post('/estudiante', estudiantesController.addStudent);

// Ruta para modificar un estudiante existente
router.put('/actualizar/:id', estudiantesController.updateStudent);

// Ruta para eliminar un estudiante
router.delete('/borrar/:id', estudiantesController.deleteStudent);


module.exports = router;