import * as apiServices from '../Helpers/axiosHelper';
import * as actionTypes from '../Constants/actionType';
const DEFAULT_URL = `${actionTypes.API_SERVER}/starships/`;

export const starshipsFetchStart = () => {
    return {
        type: actionTypes.STARSHIPS_STARTS
    };
};

export const starshipsFetchSuccess = (data) => {
    return {
        type: actionTypes.STARSHIPS_SUCCESS,
        payload: data.data
    };
};

export const starshipsScrollFetchSuccess = (data) => {
    return {
        type: actionTypes.STARSHIPS_NEXT_SUCCESS,
        payload: data.data
    };
};


export const starshipsFetchFailure = (msg) => {
    return {
        type: actionTypes.STARSHIPS_FAILURE,
        payload: msg
    };
};

export const fetchStarships = () => {
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

export const scrollFetchStarships = (url) => {
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

export const searchFetchStarships = (val) => {
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