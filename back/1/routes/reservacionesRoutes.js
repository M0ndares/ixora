
const express = require('express');
const router = express.Router();
const reservacionesController = require('../controllers/reservacionesController.js');


// Ruta para obtener todas los reservacionees
router.get('/reservaciones', reservacionesController.getAllReservaciones);

// Ruta para obtener reservaciones por email
router.get('/reservaciones/status/:email', reservacionesController.getReservacionesByEmail);

// Ruta para obtener reservaciones por email
router.get('/reservaciones/id/:id', reservacionesController.getReservacionesById);

// Ruta para agregar una nueva reservacione
router.post('/reservacion', reservacionesController.addReservacion);

// Ruta para modificar un reservacione existente
router.put('/reservaciones/actualizar/:email', reservacionesController.updateReservacion);

// Ruta para eliminar una reservacione
router.delete('/reservaciones/borrar/:id', reservacionesController.deleteReservacion);

module.exports = router;