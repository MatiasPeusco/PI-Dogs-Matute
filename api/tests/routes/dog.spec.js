/* eslint-disable import/no-extraneous-dependencies */
// Importar las dependencias necesarias
const { expect } = require('chai');
const session = require('supertest-session'); // Importar supertest-session para simular sesiones de prueba
const app = require('../../src/app.js'); // Importar la aplicación Express
const { Dog, conn } = require('../../src/db.js'); // Importar el modelo Dog y la conexión a la base de datos

// Crear una instancia de sesión para la aplicación
const agent = session(app);

// Definir un objeto dog para ser creado y utilizado en las pruebas
const dog = {
  name: 'Pug',
};

// Describir las pruebas relacionadas con las rutas de los videojuegos
describe('Videogame routes', () => {
  // Antes de todas las pruebas, autenticar la conexión a la base de datos
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));

  // Antes de cada prueba, sincronizar el modelo Dog y crear un nuevo perro en la base de datos
  beforeEach(() => Dog.sync({ force: true })
    .then(() => Dog.create(dog)));

  // Describir la prueba para la ruta GET /dogs
  describe('GET /dogs', () => {
    it('should get 200', () =>
      agent.get('/dogs').expect(200) // Realizar una solicitud GET a la ruta /dogs y esperar un código de estado 200
    );
  });
});
