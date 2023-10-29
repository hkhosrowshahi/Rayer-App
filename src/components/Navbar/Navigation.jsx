import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, Container } from 'react-bootstrap'

const Navigation = () => {
	return (
		
			<Navbar collapseOnSelect fixed='top' expand='sm' bg='dark' variant='dark'>
				<Container>
					<Navbar.Toggle aria-controls='responsive-navbar-nav' />
					<Navbar.Collapse id='responsive-navbar-nav'>
						<Nav>
							<Nav.Link>
								<Link to='/home'>صفحه اصلی</Link>
							</Nav.Link>
							<Nav.Link>
								<Link to='/services'>خدمات</Link>
							</Nav.Link>
							<Nav.Link>
								<Link to='/election'>انتخابات جدید</Link>
							</Nav.Link>
							<Nav.Link>
								<Link to='/voting'>رأی دادن</Link>
							</Nav.Link>
							<Nav.Link>
								<Link to='/about'>درباره ما</Link>
							</Nav.Link>
							<Nav.Link className='d-flex justify-content-around'>
								<Link to='/login'>ورود</Link>
							</Nav.Link>
							<Nav.Link className='d-flex justify-content-around'>
								<Link to='/register'>ثبت نام</Link>
							</Nav.Link>
						</Nav>
						<Nav></Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		
	)
}

export default Navigation
