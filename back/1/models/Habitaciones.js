const supabase = require('../config/db.js'); // Tu archivo de conexión a Supabase configurado

// Obtener todas las habitaciones
exports.getAllHabitaciones = async (callback) => {
  try {
    const { data, error } = await supabase
      .from('habitacion')
      .select('*');

    if (error) return callback(error, null);
    callback(null, data);
  } catch (err) {
    callback(err, null);
  }
};

// Consultar habitaciones por capacidad (Tu consulta original buscaba en tipohabitacion)
exports.getHabitacionesByTipo = async (tipo, callback) => {
  try {
    const { data, error } = await supabase
      .from('tipohabitacion')
      .select('*')
      .eq('capacidad', tipo); // .eq() equivale al WHERE capacidad = ?

    if (error) return callback(error, null);
    callback(null, data);
  } catch (err) {
    callback(err, null);
  }
};

// Contar habitaciones disponibles por tipo
exports.getTotalHabitacionesByTipo = async (tipo, callback) => {
  try {
    // En Supabase podemos usar count para optimizar el rendimiento sin traer filas
    const { count, error } = await supabase
      .from('habitacion')
      .select('*', { count: 'exact', head: true }) 
      .eq('estado_disponibilidad', 'Disponible')
      .eq('id_tipo_habitacion', tipo);

    if (error) return callback(error, null);
    
    // Devolvemos el conteo simulando el formato que entregaría MySQL para mantener compatibilidad
    callback(null, [{ "count(id_habitacion)": count || 0 }]);
  } catch (err) {
    callback(err, null);
  }
};

// Agregar una nueva habitación
exports.addHabitacion = async (habitacionData, callback) => {
  try {
    const { data, error } = await supabase
      .from('habitacion')
      .insert([
        {
          id_habitacion: habitacionData.id_habitacion,
          numero_habitacion: habitacionData.numero_habitacion,
          id_tipo_habitacion: habitacionData.id_tipo_habitacion,
          piso: habitacionData.piso,
          estado_disponibilidad: habitacionData.estado_disponibilidad,
          descripcion: habitacionData.descripcion
        }
      ])
      .select(); // Requerido en Supabase para retornar el registro creado

    if (error) return callback(error, null);
    callback(null, data);
  } catch (err) {
    callback(err, null);
  }
};

// Modificar una habitación existente
exports.updateHabitacion = async (id_habitacion, habitacionData, callback) => {
  try {
    const { data, error } = await supabase
      .from('habitacion')
      .update({
        numero_habitacion: habitacionData.numero_habitacion,
        id_tipo_habitacion: habitacionData.id_tipo_habitacion,
        piso: habitacionData.piso,
        estado_disponibilidad: habitacionData.estado_disponibilidad,
        descripcion: habitacionData.descripcion
      })
      .eq('id_habitacion', id_habitacion)
      .select();

    if (error) return callback(error, null);
    callback(null, data);
  } catch (err) {
    callback(err, null);
  }
};

// Eliminar una habitación
exports.deleteHabitacion = async (id_habitacion, callback) => {
  try {
    const { data, error } = await supabase
      .from('habitacion')
      .delete()
      .eq('id_habitacion', id_habitacion)
      .select();

    if (error) return callback(error, null);
    callback(null, data);
  } catch (err) {
    callback(err, null);
  }
};