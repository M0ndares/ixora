const Reservacion = require('../models/Reservaciones.js');

exports.getAllReservaciones = (req, res) => {
  Reservacion.getAllReservaciones((err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json(results);
  });
};

// Obtener Reservacions por estatus
exports.getReservacionesByEmail= (req, res) => {
  const { email } = req.params;
  Reservacion.getReservacionesByEmail(email, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json(results);
  });
};

exports.getReservacionesById= (req, res) => {
  const { id_reservacion } = req.params;
  Reservacion.getReservacionesById(id_reservacion, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json(results);
  });
};

exports.contarReservacionesOcupadas = (req, res) => {
  const { fecha_inicio, fecha_salida, id_habitacion } = req.body;

  if (!fecha_inicio || !fecha_salida || !id_habitacion) {
    return res.status(400).json({ error: "Todos los campos (fecha_inicio, fecha_salida, id_habitacion) son obligatorios." });
  }

  if (new Date(fecha_inicio) > new Date(fecha_salida)) {
    return res.status(400).json({ error: "La fecha de inicio debe ser anterior a la de salida." });
  }

  Reservacion.contarReservacionesEnBD(fecha_inicio, fecha_salida, id_habitacion, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    const cantidadOcupadas = results[0].total_ocupadas;
    res.status(200).send(String(cantidadOcupadas));
  });
};

// Agregar un nuevo Reservacion
exports.addReservacion = (req, res) => {
  const newReservacion = req.body;
  Reservacion.addReservacion(newReservacion, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'Reservacion agregada', id: result.insertId });
  });
};

// Modificar Reservacion
exports.updateReservacion = (req, res) => {
  const { id_reservacion } = req.params;
  const {estadoReservacion} = req.body;
  Reservacion.updateReservacion(id_reservacion, estadoReservacion, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json({ message: 'Reservacion actualizada' });
  });
};

// Eliminar Reservacion
exports.deleteReservacion = (req, res) => {
  const { id } = req.params;
  Reservacion.deleteReservacion(id, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json({ message: 'Reservacion eliminada' });
  });
};