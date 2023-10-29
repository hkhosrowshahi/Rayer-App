import React from 'react'

const Home = () => {
	return (
		<>
      <div>صفحه اصلی</div>
      <br />
			<div>
				<Job salary={90000} position=' Senior SDE ' company=' Amazon' />
				<Job salary={12000} position=' Junior SDE ' company=' Google' />
				<Job salary={10000} position=' Project Manager ' company=' Netflix' />
			</div>
		</>
	)
}

const Job = ({ salary, position, company }) => {
	return (
		<div>
			<h1>{salary}</h1>
			<h1> {position}</h1>
			<h1> {company}</h1>
		</div>
	)
}
export default Home
