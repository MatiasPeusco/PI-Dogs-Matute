const axios = require("axios");
const { Dog, Temperament } = require("./db");
const { API_KEY } = process.env;

// Función para obtener datos de la API
const fetchDataFromApi = async (endpoint, next) => {
    try {
        const url = `https://api.thedogapi.com/v1/${endpoint}?api_key=${API_KEY}`;
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        next(error); // Reenvía el error para ser manejado en otro lugar
    }
};

// Función para obtener datos de la base de datos
const fetchDataFromDb = async (req, res, next) => {
    try {
        // Consulta a la base de datos para obtener todos los perros
        const dogs = await Dog.findAll({
            include: {
                model: Temperament,
                attributes: ['name'],
                through: {
                    attributes: [],
                },
            },
        });
        return dogs; // Devuelve los perros obtenidos de la base de datos
    } catch (error) {
        next(error); // Maneja cualquier error que ocurra durante la consulta a la base de datos
    }
};

// Función para combinar datos de la API y de la base de datos
const fetchData = async (fetchDataFromApi, fetchDataFromDb, req, res, next) => {
    try {
        // Obtiene datos de la API y de la base de datos en paralelo
        const [apiData, dbData] = await Promise.all([
            fetchDataFromApi('breeds'), // Datos de la API
            fetchDataFromDb(req, res, next) // Datos de la base de datos
        ]);

        // Formatea los datos de la API
        const formattedApiData = apiData.map((res) => ({
            id: res.id,
            name: res.name,
            height: res.height.metric,
            weight: res.weight.metric,
            life_span: res.life_span,
            image_url: res.image.url,
            temperament: res.temperament,
            breed_group: res.breed_group,
        }));

        // Combina los datos de la API y de la base de datos
        const combinedData = [...formattedApiData, ...dbData];

        return combinedData;
    } catch (error) {
        next(error); // Maneja cualquier error durante el proceso
    }
};

module.exports = { fetchDataFromApi, fetchDataFromDb, fetchData };