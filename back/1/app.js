require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3000;

app.use(cors({
    origin: ['http://127.0.0.1:5500', 'https://ixora-4tb9.onrender.com', 'https://m0ndares.github.io/'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

// Aquí debemos importar las rutas que definamos
const habitacionesRoutes = require('./routes/habitacionesRoutes');
const usuariosRoutes = require('./routes/usuariosRoutes');
const serviciosRoutes = require('./routes/serviciosRoutes');
const reservacionesRoutes = require('./routes/reservacionesRoutes');
const testRoutes = require('./routes/testRoutes');  // Ruta de prueba
app.use(express.json());

app.use('/prueba', (req,res) => {
   res.send('Esto es un ruta de prueba, puedo definir una ruta o algo aquí');
});  

app.use('/api', habitacionesRoutes);
app.use('/api', usuariosRoutes);
app.use('/api', serviciosRoutes);
app.use('/api', reservacionesRoutes)

//probar la conexión a la base de datos
app.use('/test', testRoutes);

//Respuesta con formato con html tiene que ir al final por que si no se ejecuta primero y no tienen acceso a las rutas
app.use((req, res) => {
  res.status(404).send('<h1>Error 404</h1><p>La ruta que intentas acceder no existe.</p>');
})

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});