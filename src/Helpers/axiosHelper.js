import axios from 'axios';

export const getRequest = ( url) => {
	const options = {
		url
	};
	return axios(options);
};

