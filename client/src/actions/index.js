import axios from 'axios';

export const GET_DOGS = "GET_DOGS";
export const GET_TEMPERAMENTS = "GET_TEMPERAMENTS";
export const GET_DETAIL = "GET_DETAIL";
export const SEARCH_BY_NAME = "SEARCH_BY_NAME";
export const CREATE_DOG = "CREATE_DOG";
export const FILTER_TEMPERAMENT = "FILTER_TEMPERAMENT";
export const FILTER_CREATED = "FILTER_CREATED";
export const ORDER_BY_NAME = "ORDER_BY_NAME";
export const FILTER_BREED_GROUP = "FILTER_BREED_GROUP";

export const getDogs = () => {
    return async function(dispatch){
        const response = await axios.get(`http://localhost:3001/dogs`);
        return dispatch({
            type: GET_DOGS,
            payload: response.data
        })
    }
}

export const getDogsTemperament = () => {
    return async function(dispatch){
        const response = await axios.get(`http://localhost:3001/temperament`);
        return dispatch({
            type: GET_TEMPERAMENTS,
            payload: response.data
        })
    }
}

export const getSearchByName = (name) => {
    return async function(dispatch){
        const response = await axios.get(`http://localhost:3001/dogs?name=${name}`);
        return dispatch({
            type: SEARCH_BY_NAME,
            payload: response.data,
        })
    }
}

export const getDetail = (id) => {
    return async function(dispatch){
        const response = await axios.get(`http://localhost:3001/dogs/${id}`);
        return dispatch({
            type: GET_DETAIL,
            payload: response.data
        })
    }
}

export const postDog = (payload) => async (dispatch) => {
    const response = await axios.post(`http://localhost:3001/dogs`, payload);
    return response
}

export const filterTemperament = (payload) =>{
    return{
        type: FILTER_TEMPERAMENT,
        payload
    }
}

export const filterCreated = (payload) => {
    return{
        type: FILTER_CREATED,
        payload
    }
}

export const orderByName = (payload) => {
    return{
        type: ORDER_BY_NAME,
        payload
    }
}

export const filterBreedGroup = (payload) => {
    return{
        type: FILTER_BREED_GROUP,
        payload
    }
}