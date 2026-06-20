/* 
const mysql = require('mysql2');
const conexion= mysql.createConnection({
  host: 'localhost',   
  user: 'root', // Cambia esto por tu usuario de MySQL
  password: '1234', // Cambia esto por tu contraseña de MySQL
  database: 'ixora', // Cambia esto por el nombre de tu base de datoss
  port: 3306   //revisar el puerto, por defecto es 3306
});

const express = require('express');
const app = express();
app.use(express.json());

conexion.connect((err) => {
  if (err) {
    console.error('Error de conexión a MySQL:', err);
    return;
  }
  console.log('Conectado a MySQL.');
});
========================================================== */

require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;