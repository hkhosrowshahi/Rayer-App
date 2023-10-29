import authAxios from '../Hooks/auth/authAxios';

const URLS = {
	election: 'http://dermpath.ir:3300/api/v1/Election',
};

export const CreateElectionService = async (electionData) => {
	let token = localStorage.getItem('token');
	try {
		const response = await authAxios.post(URLS.election, electionData, {
			headers: {
				Accept: 'application/json',
				Authorization: `Bearer ${token}`,
			},
		});

		return response.data;
	} catch (error) {
		if (error.response) {
			return error.response.data;
		}
	}
};

export const ElectionListService = async (page, size) => {
	try {
		const response = await authAxios.get(
			URLS.election + `?Page=${page}&Size=${size}`
		);
		return response.data;
	} catch (error) {
		if (error.response) {
			return error.response.data;
		}
	}
};
