const supabase = require('../config/db.js'); // Tu archivo de conexión a Supabase

exports.getAllReservaciones = async (callback) => {
  try {
    const { data, error } = await supabase
      .from('reservacion')
      .select('*');

    if (error) return callback(error, null);
    callback(null, data);
  } catch (err) {
    callback(err, null);
  }
};

exports.getReservacionesByEmail = async (email, callback) => {
  try {
    const { data, error } = await supabase
      .from('reservacion')
      .select(`
        *,
        usuario!inner(*)
      `) 
      .eq('usuario.email', email);

    if (error) return callback(error, null);
    callback(null, data);
  } catch (err) {
    callback(err, null);
  }
};

exports.getReservacionesById = async (id_reservacion, callback) => {
  try {
    const { data, error } = await supabase
      .from('reservacion')
      .select('*')
      .eq('id_reservacion', id_reservacion)
      .single();

    if (error) return callback(error, null);
    callback(null, data);
  } catch (err) {
    callback(err, null);
  }
};

// Contar reservaciones que se cruzan en un rango de fechas (Disponibilidad)
exports.contarReservacionesEnBD = async (fecha_inicio, fecha_salida, id_habitacion, callback) => {
  try {
    const { count, error } = await supabase
      .from('reservacion')
      .select('*', { count: 'exact', head: true })
      .eq('id_habitacion', id_habitacion)
      .gt('fecha_salida', fecha_inicio)   // gt es "Greater Than" (>) -> fecha_salida > fecha_inicio
      .lt('fecha_entrada', fecha_salida);  // lt es "Less Than" (<) -> fecha_entrada < fecha_salida

    if (error) return callback(error, null);
    
    // Retornamos el conteo simulando el alias "total_ocupadas" de MySQL
    callback(null, [{ total_ocupadas: count || 0 }]);
  } catch (err) {
    callback(err, null);
  }
};

// Agregar una nueva reservación
exports.addReservacion = async (reservacionData, callback) => {
  try {
    const { data, error } = await supabase
      .from('reservacion')
      .insert([
        {
          id_usuario: reservacionData.id_usuario,
          id_habitacion: reservacionData.id_habitacion,
          id_estado_reservacion: reservacionData.id_estado_reservacion,
          fecha_reserva: reservacionData.fecha_reserva || new Date(),
          fecha_entrada: reservacionData.fecha_entrada,
          fecha_salida: reservacionData.fecha_salida,
          cantidad_huespedes: reservacionData.cantidad_huespedes,
          subtotal: reservacionData.subtotal,
          impuestos: reservacionData.impuestos,
          total: reservacionData.total
          // NOTA: Si guardas 'servicios' adicionales, asegúrate de que esa columna exista en Supabase
        }
      ])
      .select();

    if (error) return callback(error, null);
    callback(null, data);
  } catch (err) {
    callback(err, null);
  }
};

// Modificar el estado de una reservación
exports.updateReservacion = async (id_reservacion, estadoReservacion, callback) => {
  try {
    const { data, error } = await supabase
      .from('reservacion')
      .update({ id_estado_reservacion: estadoReservacion })
      .eq('id_reservacion', id_reservacion)
      .select();

    if (error) return callback(error, null);
    callback(null, data);
  } catch (err) {
    callback(err, null);
  }
};

// Eliminar una reservación
exports.deleteReservacion = async (id_reservacion, callback) => {
  try {
    const { data, error } = await supabase
      .from('reservacion')
      .delete()
      .eq('id_reservacion', id_reservacion)
      .select();

    if (error) return callback(error, null);
    callback(null, data);
  } catch (err) {
    callback(err, null);
  }
};