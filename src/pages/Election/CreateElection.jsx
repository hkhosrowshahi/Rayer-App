import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CreateElectionService } from '../../services/electionServices';
import { DatePicker } from 'zaman';

const CreateElection = () => {
	const [name, setName] = useState('');
	const [startDate, setStartDate] = useState(new Date());
	const [endDate, setEndDate] = useState(new Date());
	const [candidateCount, setCandidateCount] = useState('');
	const [userVoteCount, setUserVoteCount] = useState('');
	const [isEnabled, setIsEnabled] = useState(false);
	const [isVoterHidden, setIsVoterHidden] = useState(false);

	console.log(startDate);

	const nameHandler = (e) => {
		setName(e.target.value);
	};
	const startDateHandler = (e) => {
		setStartDate(e.value);
	};

	const endDateHandler = (e) => {
		setEndDate(e.value);
	};

	const candidateCountHandler = (e) => {
		setCandidateCount(e.target.value);
	};

	const userVoteCountHandler = (e) => {
		setUserVoteCount(e.target.value);
	};

	const isEnabledHandler = (e) => {
		setIsEnabled(true);
	};

	const isVoterHiddenHandler = (e) => {
		setIsVoterHidden(true);
	};

	const submitHandler = (e) => {
		e.preventDefault();

		const electionData = {
			name: name,
			startDate: startDate,
			endDate: endDate,
			candidateCount: candidateCount,
			userVoteCount: userVoteCount,
			isEnabled: isEnabled,
			isVoterHidden: isVoterHidden,
		};

		const response = async () => {
			const result = await CreateElectionService(electionData);
			console.log(result);
			if (result.statusCode === 'Success') {
				alert('Create Election Successfully');
			} else {
				alert(result.message);
			}
		};
		response().catch(console.error);
	};

	return (
		<React.Fragment>
			<Form className='d-grid gap-2' onSubmit={submitHandler}>
				<Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
					<Form.Label className='d-flex'>نام انتخابات</Form.Label>
					<Form.Control type='text' onChange={nameHandler} />
				</Form.Group>
				<Form.Group>
					<Form.Label className='d-flex'>تاریخ برگزاری</Form.Label>
					<DatePicker onChange={startDateHandler} />
				</Form.Group>
				<Form.Group>
					<Form.Label className='d-flex'>تعداد کاندیداها</Form.Label>
					<Form.Control
						size='sm'
						type='number'
						onChange={candidateCountHandler}
					/>
				</Form.Group>
				<Form.Group>
					<Form.Label className='d-flex'>تعداد رأی برای هر کاربر</Form.Label>
					<Form.Control
						size='sm'
						type='number'
						onChange={userVoteCountHandler}
					/>
				</Form.Group>
				<Form.Group>
					<Form.Label className='d-flex'>تاریخ پایان</Form.Label>
					<DatePicker onChange={endDateHandler} />
				</Form.Group>
				<Form.Group className='d-grid gap-2' />
				<Link to='/home'>
					<Button variant='outline-primary'>تعیین کاندیداها</Button>
				</Link>
				<Link to='/home'>
					<Button variant='outline-primary'>تعیین افراد رأی دهنده</Button>
				</Link>
				<Link to='/home'>
					<Button variant='outline-primary'>تعیین ناظر انتخابات</Button>
				</Link>
				<Form.Group />
				<Form.Check // prettier-ignore
					onChange={isEnabledHandler}
					type='switch'
					id='custom-switch'
					label='غیرفعال'
				/>
				<Form.Check // prettier-ignore
					onChange={isVoterHiddenHandler}
					type='switch'
					id='custom-switch'
					label='رأی آشکار'
				/>
				<Button type='submit' className='m-1'>
					ثبت کردن
				</Button>
			</Form>
			<Form className='d-flex justify-content-end'></Form>
		</React.Fragment>
	);
};

export default CreateElection;
