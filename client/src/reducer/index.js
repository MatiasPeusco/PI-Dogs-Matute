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

const inistialState = {
  dogs: [],
  allDogs: [],
  temperaments: [],
  details: [],
};

function rootReducer(state = inistialState, action) {
  switch (action.type) {
    case GET_DOGS:
      return {
        ...state,
        dogs: action.payload,
        allDogs: action.payload,
      };

    case GET_TEMPERAMENTS:
      return {
        ...state,
        temperaments: action.payload,
      };

    case GET_DETAIL:
      return {
        ...state,
        details: action.payload,
      };

    case SEARCH_BY_NAME:
      return {
        ...state,
        dogs: action.payload,
      };

    case FILTER_TEMPERAMENT:
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
      const allBreeds = state.dogs;
      const filterBreeds = allBreeds.filter(
        (f) =>
          f.breed_group.inclues(action.payload) ||
          f.breed_group.find((f) => f.breed_group === action.payload)
      );
      return{
        ...state,
        dogs: action.payload === "all" ? allBreeds : filterBreeds
      }

    case FILTER_CREATED:
      const filterCreated =
        action.payload === "created"
          ? state.allDogs.filter((f) => f.createdInDb)
          : state.allDogs.filter((f) => !f.createdInDb);
      return {
        ...state,
        dogs: action.payload === "all" ? [...state.allDogs] : filterCreated,
      };

    case ORDER_BY_NAME:
      let stateOrder = state.dogs;
      const sortDogs = stateOrder.sort((a, b) => {
        if (a.name > b.name) {
          return action.payload === "asc" ? 1 : -1;
        } else {
          return (action.payload = "desc" ? -1 : 1);
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
