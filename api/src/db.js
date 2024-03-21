require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');

// Extraer variables de entorno para la configuración de la base de datos
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

// Crear una instancia de Sequelize para la conexión a la base de datos
const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/dogs`, {
  logging: false, // Desactivar la visualización de las consultas SQL en la consola
  native: false, // Desactivar el uso de pg-native para mayor velocidad
});

// Obtener el nombre del archivo actual
const basename = path.basename(__filename);

// Arreglo para almacenar los modelos definidos
const modelDefiners = [];

// Leer todos los archivos de la carpeta Models y requerirlos
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

// Inyectar la conexión (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));

// Capitalizar los nombres de los modelos
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

// Definir las relaciones entre los modelos
const { Dog, Temperament } = sequelize.models;
Dog.belongsToMany(Temperament, { through: "DogTemperament" });
Temperament.belongsToMany(Dog, { through: "DogTemperament" });

// Exportar los modelos y la conexión
module.exports = {
  ...sequelize.models, // Permite importar los modelos directamente
  conn: sequelize,     // Permite importar la conexión a la base de datos
};