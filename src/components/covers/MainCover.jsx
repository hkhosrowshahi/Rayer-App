import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'

import mainCoverImage '../../assets/main-cover-cover.png'
const MainCover = () => {
	return (
		<Image 
			src={coverImage}
			alt='main cover'
			fluid
			/>
	)
}

export default MainCover
