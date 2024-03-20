const axios = require("axios");
const { Dog, Temperament } = require("./db");
const { API_KEY } = process.env;

const fetchDataFromApi = async (endpoint, next) => {
  try {
      const url = `https://api.thedogapi.com/v1/${endpoint}?api_key=${API_KEY}`;
      const response = await axios.get(url);
      return response.data;
  } catch (error) {
      next(error); // Reenvía el error para ser manejado donde se invoque la función
  }
};

// Definir la función fetchDataFromDb para obtener datos de la base de datos
const fetchDataFromDb = async (req, res, next) => {
  try {
      // Realiza una consulta a la base de datos para obtener todos los perros
      const dogs = await Dog.findAll(
          {
              include: {
                  model: Temperament,
                  attributes: ['name'],
                  through: {
                      attributes: [],
                  },
              },
          }
      );

      // Devuelve los perros obtenidos de la base de datos
      return dogs;
  } catch (error) {
      // Maneja cualquier error que pueda ocurrir durante la consulta a la base de datos
      next(error);
  }
};

const fetchData = async (fetchDataFromApi, fetchDataFromDb, req, res, next) => {
  try {
      // Obtiene los datos de la API y de la base de datos en paralelo
      const [apiData, dbData] = await Promise.all([
          fetchDataFromApi('breeds'), // Obtener datos de la API
          fetchDataFromDb(req, res, next) // Obtener datos de la base de datos
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
      // Maneja cualquier error que pueda ocurrir durante el cálculo de combinedData
      next(error);
  }
};

module.exports = { fetchDataFromApi, fetchDataFromDb , fetchData };
