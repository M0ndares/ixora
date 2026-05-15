
const express = require('express');
const router = express.Router();
const habitacionesController = require('../controllers/habitacionesController.js');


// Ruta para obtener todos los habitaciones
router.get('/habitaciones',habitacionesController.getAllStudents);

// Ruta para obtener habitaciones por estatus
router.get('/habitaciones/status/:estatus', habitacionesController.getStudentsByStatus);
// Ruta para agregar un nuevo habitacion
router.post('/habitacion', habitacionesController.addStudent);

// Ruta para modificar un habitacion existente
router.put('/actualizar/:id', habitacionesController.updateStudent);

// Ruta para eliminar un habitacion
router.delete('/borrar/:id', habitacionesController.deleteStudent);


module.exports = router;