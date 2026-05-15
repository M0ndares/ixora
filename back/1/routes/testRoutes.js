const express = require('express');
const router = express.Router();
const testController = require('../controllers/testController.js');

// Ruta para probar la conexión a la base de datos, pueden analizar, es lo mismo que con el listado de estudiantes.
router.get('/test-db', testController.testDatabase);

module.exports = router;