const db = require('../config/db');
/*  Pueden usarlo así, pero no es necesario y exportar los métodos con exports 
//module .exports = Estudiante;
const Estudiante = {
  getAll: (callback) => {
    const query = 'SELECT * FROM estudiantes';
    db.query(query, (err, results) => {
      if (err) {
        return callback(err);
      }
      callback(null, results);
    });
  }
};
*/

// Obtener todos los estudiantes
exports.getAllStudents = (callback) => {
  const query = 'SELECT * FROM estudiantes';
  db.query(query, callback);
};


// Consultar estudiantes por estatus
exports.getStudentsByStatus = (estatus, callback) => {
  const query = 'SELECT * FROM estudiantes WHERE estatus = ?';
  db.query(query, [estatus], callback);
};

// Agregar un nuevo estudiante
exports.addStudent = (studentData, callback) => {
  const query = 'INSERT INTO estudiantes (id, correo, nombre) VALUES (?, ?, ?)';
  db.query(query, [studentData.id, studentData.nombre, studentData.correo], callback);

};

// Modificar un estudiante existente
exports.updateStudent = (id, studentData, callback) => {
  const query = 'UPDATE estudiantes SET nombre_estudiante = ?, grado = ?, estatus = ? WHERE id = ?';
  db.query(query, [studentData.nombre_estudiante, studentData.grado, studentData.estatus, id], callback);
};


// Eliminar un estudiante
exports.deleteStudent = (id, callback) => {
  const query = 'DELETE FROM estudiantes WHERE id= ?';
  db.query(query, [id], callback);
};

/*module.exports = Estudiante;*/