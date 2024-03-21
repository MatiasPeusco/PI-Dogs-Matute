// Importar los módulos necesarios
const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');

// Importar las rutas y el middleware de manejo de errores
const routes = require('./routes/index.js');
const errorHandler = require('./middlewares/errorHandler.js');

// Importar la configuración y conexión de la base de datos
require('./db.js');

// Crear una instancia de Express
const server = express();

// Configuración del servidor
server.name = 'API';

// Configurar middleware
server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev'));

// Configurar cabeceras CORS
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // Actualizar según el dominio desde el que se realizará la solicitud
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

// Configurar las rutas de la aplicación
server.use('/', routes);

// Configurar el middleware de manejo de errores
server.use(errorHandler);

// Middleware de captura de errores
server.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

// Exportar el servidor Express configurado
module.exports = server;
