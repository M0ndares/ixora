
const express = require('express');
const router = express.Router();
const serviciosController = require('../controllers/serviciosController.js');


// Ruta para obtener todas los servicios
router.get('/servicios',serviciosController.getAllServicios);

// Ruta para agregar una nueva servicio
router.post('/servicio', serviciosController.addServicio);

// Ruta para modificar una servicio existente
router.put('/servicio/actualizar/:id', serviciosController.updateServicio);

// Ruta para eliminar una servicio
router.delete('/servicio/borrar/:id', serviciosController.deleteServicio);


module.exports = router;