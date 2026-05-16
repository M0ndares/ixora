const Usuario = require('../models/Usuarios.js');

exports.getAllUsuarios = (req, res) => {
  Usuario.getAllUsuarios((err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json(results);
  });
};

// Obtener Usuarios por estatus
exports.getUsuariosByEmail = (req, res) => {
  const { email } = req.params;
  Usuario.getUsuariosByEmail(email, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json(results);
  });
};


// Agregar un nuevo Usuario
exports.addUsuarios = (req, res) => {
  const newUsuario = req.body;
  Usuario.addUsuarios(newUsuario, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'Usuario agregada', id: result.insertId });
  });
};

// Modificar Usuario
exports.updateUsuarios = (req, res) => {
  const { email } = req.params;
  const updatedData = req.body;
  Usuario.updateUsuarios(email, updatedData, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json({ message: 'Usuario actualizado' });
  });
};

// Eliminar Usuario
exports.deleteUsuarios = (req, res) => {
  const { id } = req.params;
  Usuario.deleteUsuarios(id, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json({ message: 'Usuario eliminado'});
  });
};