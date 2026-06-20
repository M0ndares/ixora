const supabase = require('../config/db.js'); // Tu archivo de conexión a Supabase

// Obtener todos los Servicios
exports.getAllServicios = async (callback) => {
  try {
    const { data, error } = await supabase
      .from('servicioadicional')
      .select('*');

    if (error) return callback(error, null);
    callback(null, data);
  } catch (err) {
    callback(err, null);
  }
};

// Agregar un nuevo Servicio (Omitimos el id_servicio porque es autoincrementable)
exports.addServicio = async (servicioData, callback) => {
  try {
    const { data, error } = await supabase
      .from('servicioadicional')
      .insert([
        {
          nombre_servicio: servicioData.nombre_servicio,
          descripcion: servicioData.descripcion,
          precio: servicioData.precio,
          activo: servicioData.activo ?? true // Si no viene, lo ponemos activo por defecto
          // NOTA: Si en tu base de datos añadiste la columna 'categoria', descomenta la línea de abajo:
          // categoria: servicioData.categoria 
        }
      ])
      .select();

    if (error) return callback(error, null);
    callback(null, data);
  } catch (err) {
    callback(err, null);
  }
};

// Modificar un Servicio existente
exports.updateServicio = async (id_servicio, servicioData, callback) => {
  try {
    const { data, error } = await supabase
      .from('servicioadicional')
      .update({
        nombre_servicio: servicioData.nombre_servicio,
        descripcion: servicioData.descripcion,
        precio: servicioData.precio
        // activo: servicioData.activo (añádelo si lo vas a actualizar desde el front)
      })
      .eq('id_servicio', id_servicio)
      .select();

    if (error) return callback(error, null);
    callback(null, data);
  } catch (err) {
    callback(err, null);
  }
};

// Eliminar un Servicio
exports.deleteServicio = async (id_servicio, callback) => {
  try {
    const { data, error } = await supabase
      .from('servicioadicional')
      .delete()
      .eq('id_servicio', id_servicio)
      .select();

    if (error) return callback(error, null);
    callback(null, data);
  } catch (err) {
    callback(err, null);
  }
};