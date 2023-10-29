// import React, { useEffect, useState } from 'react';
// import Form from 'react-bootstrap/Form';
// import { ElectionListService } from '../../services/electionServices';

// const EelectionList = () => {
// 	const [page, setPage] = useState(1);
// 	const [size, setSize] = useState(10);

// 	useEffect(() => {
// 		const response = async () => {
//       const result = await ElectionListService(page, size);
//       const ali = result?.data

// 			console.log(ali);
// 		};

// 		response().catch(console.error);
// 	}, []);

// 	return (
// 		<React.Fragment>
// 			<Form>
// 				<Form.Group>
// 					<Form.Label></Form.Label>
// 					<Form.Control type='text' />
// 				</Form.Group>
// 				<Form.Group>
// 					<Form.Label></Form.Label>
// 					<Form.Control type='text' />
// 				</Form.Group>
// 			</Form>
// 		</React.Fragment>
// 	);
// };

// export default EelectionList;
