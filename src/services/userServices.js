import axios from 'axios';

export const URLS = {
	register: 'http://dermpath.ir:3300/api/v1/Users/Register',
	activateUser: 'http://dermpath.ir:3300/api/v1/Users/ActivateUser',
	login: 'http://dermpath.ir:3300/api/v1/Users/Token',
};

export const registerService = async (userData) => {
	try {
		const response = await axios.post(URLS.register, userData);

		return response.data;
	} catch (error) {
		if (error.response) {
			return error.response.data;
		}
	}
};

export const ActivateUser = async (otpNumber, phoneNumber) => {
	try {
		const response = await axios.get(
			URLS.activateUser + `?phoneNumber=${phoneNumber}&otpCode=${otpNumber}`
		);
		return response.data;
	} catch (error) {
		if (error.response) {
			return error.response.data;
		}
	}
};

export const LoginUser = async (userData) => {

	let form_data = new FormData();
	let extendedUserData = { grant_type: 'password', ...userData };
	for (let key in extendedUserData) {
		form_data.append(key, extendedUserData[key]);
	}
	try {
		const response = await axios.post(URLS.login, form_data);
		return response.data;
	} catch (error) {
		if (error.response) {
			return error.response.data;
		}
	}
};
// export const logout = () => {
// 	localStorage.removeItem('token');
// };

// export const isAuthenticated = () => {
// 	return !!localStorage.getItem('token');
// };
