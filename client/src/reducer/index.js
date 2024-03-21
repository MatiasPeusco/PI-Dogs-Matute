import {
  FILTER_TEMPERAMENT,
  GET_DETAIL,
  GET_DOGS,
  GET_TEMPERAMENTS,
  SEARCH_BY_NAME,
  ORDER_BY_NAME,
  FILTER_CREATED,
  FILTER_BREED_GROUP,
} from "../actions";

// Definición del estado inicial del store
const initialState = {
  dogs: [],
  allDogs: [],
  temperaments: [],
  details: [],
};

// Reducer principal que maneja las acciones y actualiza el estado en consecuencia
function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_DOGS:
      // Actualiza el estado con la lista completa de perros
      return {
        ...state,
        dogs: action.payload,
        allDogs: action.payload,
      };

    case GET_TEMPERAMENTS:
      // Actualiza el estado con la lista de temperamentos
      return {
        ...state,
        temperaments: action.payload,
      };

    case GET_DETAIL:
      // Actualiza el estado con los detalles de un perro específico
      return {
        ...state,
        details: action.payload,
      };

    case SEARCH_BY_NAME:
      // Actualiza el estado con los perros filtrados por nombre de búsqueda
      return {
        ...state,
        dogs: action.payload,
      };

    case FILTER_TEMPERAMENT:
      // Filtra los perros por temperamento y actualiza el estado
      const allDogs = state.allDogs;
      const filterTemperament = allDogs.filter(
        (f) =>
          f.temperament?.includes(action.payload) ||
          f.temperaments?.find((f) => f.name === action.payload)
      );
      return {
        ...state,
        dogs: action.payload === "all" ? allDogs : filterTemperament,
      };

    case FILTER_BREED_GROUP:
      // Filtra los perros por grupo de raza y actualiza el estado
      const allBreeds = state.dogs;
      const filterBreeds = allBreeds.filter(
        (f) =>
          f.breed_group.includes(action.payload) ||
          f.breed_group.find((f) => f.breed_group === action.payload)
      );
      return {
        ...state,
        dogs: action.payload === "all" ? allBreeds : filterBreeds,
      };

    case FILTER_CREATED:
      // Filtra los perros creados o externos y actualiza el estado
      const filterCreated =
        action.payload === "created"
          ? state.allDogs.filter((f) => f.createdInDb)
          : state.allDogs.filter((f) => !f.createdInDb);
      return {
        ...state,
        dogs: action.payload === "all" ? [...state.allDogs] : filterCreated,
      };

    case ORDER_BY_NAME:
      // Ordena los perros por nombre ascendente o descendente y actualiza el estado
      let stateOrder = state.dogs;
      const sortDogs = stateOrder.sort((a, b) => {
        if (a.name > b.name) {
          return action.payload === "asc" ? 1 : -1;
        } else {
          return action.payload === "desc" ? -1 : 1;
        }
      });
      return {
        ...state,
        dogs: sortDogs,
      };

    default:
      return state;
  }
}

export default rootReducer;
