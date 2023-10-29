import React, { useEffect, useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { useLocation, useNavigate } from 'react-router-dom'
import { ActivateUser } from '../../../services/userServices'

const Otp = () => {
	const [otpNumber, setOtpNumber] = useState('')
	const navigate = useNavigate();

	const location = useLocation()

	const handleSubmit = (e) => {
		e.preventDefault()

		const response = async () => {
			const result = await ActivateUser(otpNumber, location.state.phoneNumber)

			if (result.access_token) {
				localStorage.setItem('token', result.access_token)
				
				debugger
				navigate('/home', {replace: true})
			}
		}
		response().catch(console.error)
	}

	console.log(location.state.phoneNumber)

	return (
		<>
			<Form onSubmit={handleSubmit}>
				<Form.Group as={Row} className='mb-3' controlId='formPlaintextPassword'>
					<Form.Label column sm='2'>
						کد ارسال شده را وارد کنید
					</Form.Label>
					<Col sm='10'>
						<Form.Control
							onChange={(e) => setOtpNumber(e.target.value)}
							value={otpNumber}
							type='password'
							placeholder='Password'
						/>
						<Button variant='outline-primary' type='submit'>
							ارسال
						</Button>
					</Col>
				</Form.Group>
			</Form>
		</>
	)
}

export default Otp
