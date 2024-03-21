const { Dog, conn } = require('../../src/db.js');
const { expect } = require('chai');

// Describir las pruebas para el modelo Dog
describe('Dog model', () => {
  // Antes de todas las pruebas, verificar la autenticación con la base de datos
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));

  // Describir las pruebas para los validadores del modelo Dog
  describe('Validators', () => {
    // Antes de cada prueba, sincronizar el modelo Dog y forzar la eliminación de datos
    beforeEach(() => Dog.sync({ force: true }));

    // Describir las pruebas para el atributo 'name'
    describe('name', () => {
      // Prueba: debería lanzar un error si el nombre es nulo
      it('should throw an error if name is null', (done) => {
        Dog.create({})
          .then(() => done(new Error('It requires a valid name'))) // Se espera que la creación falle y se lance un error
          .catch(() => done()); // Se espera que se maneje el error correctamente
      });

      // Prueba: debería funcionar cuando el nombre es válido
      it('should work when its a valid name', () => {
        Dog.create({ name: 'Pug' }); // Se espera que la creación tenga éxito con un nombre válido
      });
    });
  });
});