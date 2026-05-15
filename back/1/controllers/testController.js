const db = require('../config/db');

const testDatabase = (req, res) => {
    db.query("SELECT VERSION() AS version, @@plugin_dir AS pluginDirectory, @@innodb_version AS innodbVersion", (err, results) => {
        if (err) {
      return res.status(500).json({ error: 'Error al conectar con la base de datos', details: err.message });
    }
    res.status(200).json({
        message: 'Conexión a la base de datos exitosa',
        mysqlInfo: {
          version: results[0].version,
          pluginDirectory: results[0].pluginDirectory,
          innodbVersion: results[0].innodbVersion
        }
      });
  });
};

module.exports = {
  testDatabase
};