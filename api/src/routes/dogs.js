const { Router } = require("express");
const { Op } = require("sequelize");
const { Dog, Temperament } = require("../db");
const errorHandler = require("../middlewares/errorHandler");
const { fetchDataFromApi } = require("../apiUtils");
const { fetchDataFromDb } = require("../apiUtils");
const { fetchData } = require("../apiUtils");
require("dotenv").config();

const router = Router();

router.get('/', async (req, res, next) => {
    try {
        const combinedData = await fetchData(fetchDataFromApi, fetchDataFromDb, req, res, next);

        // Filtrar por nombre si se proporciona en la consulta
        const { name } = req.query;
        if (name) {
            const filteredData = combinedData.filter(dog =>
                dog.name.toLowerCase().includes(name.toLowerCase())
            );
            res.json(filteredData);
        } else {
            res.json(combinedData);
        }
    } catch (error) {
        // Maneja cualquier error que pueda ocurrir
        next(error);
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        const id = req.params.id; // Obtiene el ID de la URL
        // Realiza la lógica para obtener los datos específicos basados en el ID
        const data = await fetchData(fetchDataFromApi, fetchDataFromDb, req, res, next);
        // Devuelve los datos específicos basados en el ID como respuesta
        const filteredData = data.filter(dog => dog.id === parseInt(id) || dog.id === id);
        //console.log(filteredData);
        res.json(filteredData);
    } catch (error) {
        // Maneja los errores
        next(error)
    }
});

// Endpoint para crear un perro
router.post('/', async (req, res, next) => {
    try {
        // Extrae los datos del cuerpo de la solicitud
        const {
            name,
            height,
            weight,
            life_span,
            image_url,
            temperament,
            createdInDb
        } = req.body;

        // Crea el perro en la base de datos
        const newDog = await Dog.create({
            name,
            height,
            weight,
            life_span,
            image_url,
            temperament,
            createdInDb
        });

        let temperamentDb = await Temperament.findAll({
            where: { name: temperament },
        })

        newDog.addTemperament(temperamentDb);

        // Devuelve el perro creado como respuesta
        res.status(201).json(newDog);
    } catch (error) {
        // Maneja los errores
        next(error);
    }
});

module.exports = router;
