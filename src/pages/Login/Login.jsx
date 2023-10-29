import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { LoginUser } from '../../services/userServices';

const Login = () => {
	const [username, setUserName] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();

	const submitHandler = (e) => {
		e.preventDefault();

		const userData = {
			username: username,
			password: password,
		};

		const response = async () => {
			const result = await LoginUser(userData);

			if (result.access_token) {
				localStorage.setItem('token', result.access_token);
				navigate('/election');
			} else {
				alert(result.message);
				response().catch(console.error);
			}
		};
		response();
		console.log(response());
	};
	
	const usernameHandler = (e) => {
		setUserName(e.target.value);
	};

	const passwordHandler = (e) => {
		setPassword(e.target.value);
	};
	return (
		<>
			<Form onSubmit={submitHandler}>
				<Form.Label htmlFor='basic-url'>کد ملی</Form.Label>
				<InputGroup className='mb-3'>
					<Form.Control
						onChange={usernameHandler}
						aria-label='Example text with button addon'
						aria-describedby='basic-addon1'
					/>
				</InputGroup>
				<Form.Label htmlFor='basic-url'>رمزعبور</Form.Label>
				<InputGroup className='mb-3'>
					<Form.Control
						onChange={passwordHandler}
						aria-label="Recipient's username"
						aria-describedby='basic-addon2'
					/>
				</InputGroup>
				<Button type='submit'>ورود</Button>
			</Form>
		</>
	);
};

export default Login;
