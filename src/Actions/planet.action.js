import * as apiServices from '../Helpers/axiosHelper';
import * as actionTypes from '../Constants/actionType';
const DEFAULT_URL = `${actionTypes.API_SERVER}/planets/`;

export const planetsFetchStart = () => {
    return {
        type: actionTypes.PLANETS_STARTS
    };
};

export const planetsFetchSuccess = (data) => {
    return {
        type: actionTypes.PLANETS_SUCCESS,
        payload: data.data
    };
};

export const planetsScrollFetchSuccess = (data) => {
    return {
        type: actionTypes.PLANETS_NEXT_SUCCESS,
        payload: data.data
    };
};

export const planetsFetchFailure = (msg) => {
    return {
        type: actionTypes.PLANETS_FAILURE,
        payload: msg
    };
};

export const fetchPlanets = () => {
    return (dispatch) => {
        dispatch(planetsFetchStart());

        apiServices.getRequest(DEFAULT_URL)
            .then(function (response) {
                dispatch(planetsFetchSuccess(response));
            })
            .catch(function (error) {
                dispatch(planetsFetchFailure(error));
            });
    };
};


export const scrollFetchPlanets = (url) => {
    return (dispatch) => {
        dispatch(planetsFetchStart());

        apiServices.getRequest(url)
            .then(function (response) {
                dispatch(planetsScrollFetchSuccess(response));
            })
            .catch(function (error) {
                dispatch(planetsFetchFailure(error));
            });
    };
};

export const searchFetchPlanets = (val) => {
    return (dispatch) => {
        dispatch(planetsFetchStart());
        const url = `${DEFAULT_URL}?search=${val}`;
        apiServices.getRequest(url)
            .then(function (response) {
                dispatch(planetsFetchSuccess(response));
            })
            .catch(function (error) {
                dispatch(planetsFetchFailure(error));
            });
    };
};
