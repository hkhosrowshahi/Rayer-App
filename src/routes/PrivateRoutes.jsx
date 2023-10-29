import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
	const isAuthenticated = () => {
		const tokenValue = !!localStorage.getItem('token');
		return tokenValue;
	};
	const authenticated = isAuthenticated();

	const logout = () => {
		localStorage.removeItem('token');
	};

	if (!authenticated) {
		logout();
	}
	return authenticated ? <Outlet /> : <Navigate to='./login' />;
};

export default PrivateRoute;
