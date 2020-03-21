import * as apiServices from '../Helpers/axiosHelper';
import axios from 'axios';
import * as actionTypes from '../Constants/actionType';
const DEFAULT_URL = `${actionTypes.API_SERVER}/films/`;


export const filmsFetchStart = () => {
    return {
        type: actionTypes.FILMS_STARTS
    };
};

export const filmsClickFetchStart = () => {
    return {
        type: actionTypes.FILMS_CLICK_STARTS
    };
};

export const filmsFetchSuccess = (data) => {
    return {
        type: actionTypes.FILMS_SUCCESS,
        payload: data.data
    };
};

export const filmsScrollFetchSuccess = (data) => {
    return {
        type: actionTypes.FILMS_NEXT_SUCCESS,
        payload: data.data
    };
};

export const filmsClickFetchSuccess = (data) => {
    return {
        type: actionTypes.FILMS_CLICK_SUCCESS,
        payload: data.data
    };
};

export const filmsFetchFailure = (msg) => {
    return {
        type: actionTypes.FILMS_FAILURE,
        payload: msg
    };
};

export const fetchFilms = () => {
    return (dispatch) => {
        dispatch(filmsFetchStart());

        apiServices.getRequest(DEFAULT_URL)
            .then(function (response) {
                dispatch(filmsFetchSuccess(response));
            })
            .catch(function (error) {
                dispatch(filmsFetchFailure(error));
            });
    };
};

export const scrollFetchFilms = (url) => {
    return (dispatch) => {
        dispatch(filmsFetchStart());

        apiServices.getRequest(url)
            .then(function (response) {
                dispatch(filmsScrollFetchSuccess(response));
            })
            .catch(function (error) {
                dispatch(filmsFetchFailure(error));
            });
    };
};

export const searchFetchFilms = (val) => {
    return (dispatch) => {
        dispatch(filmsFetchStart());
        const url = `${DEFAULT_URL}?search=${val}`;
        apiServices.getRequest(url)
            .then(function (response) {
                dispatch(filmsFetchSuccess(response));
            })
            .catch(function (error) {
                dispatch(filmsFetchFailure(error));
            });
    };
};

export const clickFetchFilms = (urls) => {
    return (dispatch) => {
        dispatch(filmsClickFetchStart());

        let promises = [];

        for (let i = 0; i < urls.length; i++) {
            promises.push(apiServices.getRequest(urls[i]));
        }
        axios.all(promises)
        .then(axios.spread((...args) => {
            for (let i = 0; i < args.length; i++) {
                dispatch(filmsClickFetchSuccess(args[i]));
            }
        }))
    };
};
