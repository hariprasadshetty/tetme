
import * as apiServices from '../Helpers/axiosHelper';
import * as actionTypes from '../Constants/actionType';
const DEFAULT_URL = `${actionTypes.API_SERVER}/vehicles/`;

export const starshipsFetchStart = () => {
    return {
        type: actionTypes.VECHICLES_STARTS
    };
};

export const starshipsFetchSuccess = (data) => {
    return {
        type: actionTypes.VECHICLES_SUCCESS,
        payload: data.data
    };
};

export const starshipsScrollFetchSuccess = (data) => {
    return {
        type: actionTypes.VECHICLES_NEXT_SUCCESS,
        payload: data.data
    };
};

export const starshipsFetchFailure = (msg) => {
    return {
        type: actionTypes.VECHICLES_FAILURE,
        payload: msg
    };
};

export const fetchVechicles = () => {
    return (dispatch) => {
        dispatch(starshipsFetchStart());

        apiServices.getRequest(DEFAULT_URL)
            .then(function (response) {
                dispatch(starshipsFetchSuccess(response));
            })
            .catch(function (error) {
                dispatch(starshipsFetchFailure(error));
            });
    };
};

export const scrollFetchVechicles = (url) => {
    return (dispatch) => {
        dispatch(starshipsFetchStart());

        apiServices.getRequest(url)
            .then(function (response) {
                dispatch(starshipsScrollFetchSuccess(response));
            })
            .catch(function (error) {
                dispatch(starshipsFetchFailure(error));
            });
    };
};

export const searchFetchVechicles = (val) => {
    return (dispatch) => {
        dispatch(starshipsFetchStart());
        const url = `${DEFAULT_URL}?search=${val}`;
        apiServices.getRequest(url)
            .then(function (response) {
                dispatch(starshipsFetchSuccess(response));
            })
            .catch(function (error) {
                dispatch(starshipsFetchFailure(error));
            });
    };
};