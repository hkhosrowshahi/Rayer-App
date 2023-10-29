import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Navigation from './components/Navbar/Navigation';
import Home from './pages/Home/Home';
import Services from './pages/Services/Services';
import Voting from './pages/Voting/Voting';
import AboutUs from './pages/AboutUs/AboutUs';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Otp from './pages/Register/otp/otp';
import CreateElection from './pages/Election/CreateElection';
import PrivateRoute from './routes/PrivateRoutes';
// import EelectionList from './pages/Election/EelectionList.jsx';

function App() {
	return (
		<BrowserRouter>
			<Navigation />
			<Routes>
				<Route path='/services' element={<Services />} />
				<Route path='/voting' element={<Voting />} />
				<Route path='/about' element={<AboutUs />} />
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
				<Route path='/otp' element={<Otp />} />
				<Route path='/login' element={<Login />} />
				<Route path='/home' element={<Home />} />
				<Route element={<PrivateRoute />}>
					<Route path='/election' element={<CreateElection />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
