const { DataTypes } = require("sequelize");

// Definir el modelo de temperamento
module.exports = (sequelize) => {
    sequelize.define('temperament', {
        // Definir el atributo 'name' como una cadena no nula
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });
};