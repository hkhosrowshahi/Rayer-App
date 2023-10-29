import axios from 'axios';

const authAxios = axios.create();

authAxios.interceptors.request.use(
	(config) => {
		const token = localStorage.getItem('token');
		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}
		return config;
	},
	(error) => Promise.reject(error)
);

authAxios.interceptors.response.use(
	(response) => {
		return res;
	},
	async (error) => {
		if (error.response) {
			if (error.response.status === 401) {
				localStorage.clear();
				window.location.href = '/login';
			}
			if (error.response.status === ANOTHER_STATUS_CODE) {
				return Promise.reject(error.response.data);
			}
		}
		return Promise.reject(error);
	}
);

export default authAxios;
