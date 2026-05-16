
const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosController.js');


// Ruta para obtener todas los Usuarioes
router.get('/usuarios', usuariosController.getAllUsuarios);

// Ruta para obtener Usuarioes por estatus
router.get('/usuarios/status/:estatus', usuariosController.getUsuariosByStatus);

router.post('/usuario/activo/', usuariosController.getUsuariosByStatus);

// Ruta para agregar una nueva Usuario
router.post('/usuario', usuariosController.addUsuarios);

// Ruta para modificar una Usuario existente
router.put('/usuarios/actualizar/:id', usuariosController.updateUsuarios);

// Ruta para eliminar una Usuario
router.delete('/usuarios/borrar/:id', usuariosController.deleteUsuarios);


module.exports = router;