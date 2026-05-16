
const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosController.js');


// Ruta para obtener todas los Usuarioes
router.get('/usuarios', usuariosController.getAllUsuarios);

// Ruta para obtener Usuarios por email
router.get('/usuarios/status/:email', usuariosController.getUsuariosByEmail);

// Ruta para agregar una nueva Usuario
router.post('/usuario', usuariosController.addUsuarios);

// Ruta para modificar un Usuario existente
router.put('/usuarios/actualizar/:email', usuariosController.updateUsuarios);

// Ruta para eliminar una Usuario
router.delete('/usuarios/borrar/:id', usuariosController.deleteUsuarios);

module.exports = router;