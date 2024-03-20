const { Router } = require("express");
const { Op } = require("sequelize");
const axios = require("axios");
const { Temperament } = require("../db");
const errorHandler = require("../middlewares/errorHandler");
const { fetchDataFromApi } = require("../apiUtils");
const { API_KEY } = process.env;
require("dotenv").config();

const router = Router();

router.get('/', async (req, res, next) => {
  try {
    // Obtener todos los perros de la API
    const dogs = await fetchDataFromApi('breeds');

    // Crear un conjunto para almacenar temperamentos únicos
    const uniqueTemperaments = new Set();

    // Obtener los temperamentos de cada perro y agregarlos al conjunto
    dogs.forEach(dog => {
      if (dog.temperament) {
        const dogTemperaments = dog.temperament.split(',').map(t => t.trim());
        dogTemperaments.forEach(t => uniqueTemperaments.add(t));
      }
    });

    // Convertir el conjunto a un array y ordenarlo
    const sortedTemperaments = Array.from(uniqueTemperaments).sort();

    // Sincronizar cada temperamento con la base de datos o crearlo si no existe
    const savedTemperaments = await Promise.all(sortedTemperaments.map(async temperament => {
      const [savedTemperament] = await Temperament.findOrCreate({ where: { name: temperament } });
      return savedTemperament;
    }));

    // Retornar los temperamentos desde la base de datos
    res.json(savedTemperaments);
  } catch (error) {
    next(error);
  }
});

module.exports = router;

