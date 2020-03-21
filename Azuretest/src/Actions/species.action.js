import * as apiServices from '../Helpers/axiosHelper';
import * as actionTypes from '../Constants/actionType';
const DEFAULT_URL = `${actionTypes.API_SERVER}/species/`;

export const speciesFetchStart = () => {
    return {
        type: actionTypes.SPECIES_STARTS
    };
};

export const speciesFetchSuccess = (data) => {
    return {
        type: actionTypes.SPECIES_SUCCESS,
        payload: data.data
    };
};

export const speciesScrollFetchSuccess = (data) => {
    return {
        type: actionTypes.SPECIES_NEXT_SUCCESS,
        payload: data.data
    };
};

export const speciesFetchFailure = (msg) => {
    return {
        type: actionTypes.SPECIES_FAILURE,
        payload: msg
    };
};

export const fetchSpecies = () => {
    return (dispatch) => {
        dispatch(speciesFetchStart());

        apiServices.getRequest(DEFAULT_URL)
            .then(function (response) {
                dispatch(speciesFetchSuccess(response));
            })
            .catch(function (error) {
                dispatch(speciesFetchFailure(error));
            });
    };
};

export const scrollFetchSpecies = (url) => {
    return (dispatch) => {
        dispatch(speciesFetchStart());

        apiServices.getRequest(url)
            .then(function (response) {
                dispatch(speciesScrollFetchSuccess(response));
            })
            .catch(function (error) {
                dispatch(speciesFetchFailure(error));
            });
    };
};

export const searchFetchSpecies = (val) => {
    return (dispatch) => {
        dispatch(speciesFetchStart());
        const url = `${DEFAULT_URL}?search=${val}`;
        apiServices.getRequest(url)
            .then(function (response) {
                dispatch(speciesFetchSuccess(response));
            })
            .catch(function (error) {
                dispatch(speciesFetchFailure(error));
            });
    };
};