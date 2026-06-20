const supabase = require('../config/db.js'); // Tu archivo de conexión a Supabase

// Obtener todos los usuarios
exports.getAllUsuarios = async (callback) => {
  try {
    const { data, error } = await supabase
      .from('usuario')
      .select('*');

    if (error) return callback(error, null);
    callback(null, data);
  } catch (err) {
    callback(err, null);
  }
};

// Consultar usuario por Email
exports.getUsuariosByEmail = async (email, callback) => {
  try {
    const { data, error } = await supabase
      .from('usuario')
      .select('*')
      .eq('email', email);

    if (error) return callback(error, null);
    callback(null, data);
  } catch (err) {
    callback(err, null);
  }
};

// Agregar un nuevo usuario (Dejamos que Postgres asigne el ID de forma autoincrementable)
exports.addUsuarios = async (usuariosData, callback) => {
  try {
    const { data, error } = await supabase
      .from('usuario')
      .insert([
        {
          nombre_usuario: usuariosData.nombre_usuario,
          email: usuariosData.email,
          password: usuariosData.password,
          fecha_registro: usuariosData.fecha_registro || new Date(),
          ultimo_acceso: usuariosData.ultimo_acceso || null,
          activo: usuariosData.activo !== undefined ? usuariosData.activo : true
        }
      ])
      .select();

    if (error) return callback(error, null);
    callback(null, data);
  } catch (err) {
    callback(err, null);
  }
};

// Modificar un usuario existente por su Email
exports.updateUsuarios = async (email_usuarios, usuariosData, callback) => {
  try {
    // Armamos un objeto dinámico solo con los campos que no vengan vacíos
    const updateData = {};
    if (usuariosData.nombre_usuario) updateData.nombre_usuario = usuariosData.nombre_usuario;
    if (usuariosData.email) updateData.email = usuariosData.email;
    if (usuariosData.password) updateData.password = usuariosData.password;
    if (usuariosData.fecha_registro) updateData.fecha_registro = usuariosData.fecha_registro;
    if (usuariosData.ultimo_acceso) updateData.ultimo_acceso = usuariosData.ultimo_acceso;
    if (usuariosData.activo !== undefined) updateData.activo = usuariosData.activo;

    const { data, error } = await supabase
      .from('usuario')
      .update(updateData)
      .eq('email', email_usuarios)
      .select();

    if (error) return callback(error, null);
    callback(null, data);
  } catch (err) {
    callback(err, null);
  }
};

// Eliminar un usuario (Corregido el nombre de la tabla que decía 'usuarios')
exports.deleteUsuarios = async (id_usuarios, callback) => {
  try {
    const { data, error } = await supabase
      .from('usuario')
      .delete()
      .eq('id_usuario', id_usuarios)
      .select();

    if (error) return callback(error, null);
    callback(null, data);
  } catch (err) {
    callback(err, null);
  }
};