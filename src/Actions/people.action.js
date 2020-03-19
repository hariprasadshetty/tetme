import * as apiServices from '../Helpers/axiosHelper';
import * as actionTypes from '../Constants/actionType';
const DEFAULT_URL = `${actionTypes.API_SERVER}/people/`;

export const peoplesFetchStart = () => {
	return {
		type: actionTypes.PEOPLES_STARTS
	};
};

export const peoplesFetchSuccess = (data) => {
	return {
		type: actionTypes.PEOPLES_SUCCESS,
		payload: data.data
	};
};

export const peoplesScrollFetchSuccess = (data) => {
	return {
		type: actionTypes.PEOPLES_NEXT_SUCCESS,
		payload: data.data
	};
};

export const peoplesFetchFailure = (msg) => {
	return {
		type: actionTypes.PEOPLES_FAILURE,
		payload: msg
	};
};

export const fetchPeoples = () => {
	return (dispatch) => {
		dispatch(peoplesFetchStart());

		apiServices.getRequest(DEFAULT_URL)
			.then(function (response) {
				dispatch(peoplesFetchSuccess(response));
			})
			.catch(function (error) {
				dispatch(peoplesFetchFailure(error));
			});
	};
};


export const scrollFetchPeoples = (url) => {
	return (dispatch) => {
		dispatch(peoplesFetchStart());

		apiServices.getRequest(url)
			.then(function (response) {
				dispatch(peoplesScrollFetchSuccess(response));
			})
			.catch(function (error) {
				dispatch(peoplesFetchFailure(error));
			});
	};
};

export const searchFetchPeoples = (val) => {
	return (dispatch) => {
		dispatch(peoplesFetchStart());
        const url = `${DEFAULT_URL}?search=${val}`;
		apiServices.getRequest(url)
			.then(function (response) {
				dispatch(peoplesFetchSuccess(response));
			})
			.catch(function (error) {
				dispatch(peoplesFetchFailure(error));
			});
	};
};