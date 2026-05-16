
const express = require('express');
const router = express.Router();
const habitacionesController = require('../controllers/habitacionesController.js');


// Ruta para obtener todas los habitaciones
router.get('/habitaciones',habitacionesController.getAllHabitaciones);

// Ruta para obtener habitaciones por estatus
router.get('/habitaciones/status/:estatus', habitacionesController.getHabitacionesByStatus);
// Ruta para agregar una nueva habitacion
router.post('/habitacion', habitacionesController.addHabitacion);

// Ruta para modificar una habitacion existente
router.put('/habitaciones/actualizar/:id', habitacionesController.updateHabitacion);

// Ruta para eliminar una habitacion
router.delete('/habitaciones/borrar/:id', habitacionesController.deleteHabitacion);


module.exports = router;