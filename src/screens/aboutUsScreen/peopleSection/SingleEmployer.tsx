import React from 'react'
import { SingleEmployerContainer } from './PeopleSection.style'
import personImg from 'public/images/personImg.png'
import Image from 'next/image'

interface SingleEmployerProps {
	name: string
	role: string
	imageUrl?: string
	degree: string
}

const SingleEmployer: React.FC<SingleEmployerProps> = ({ name, role, imageUrl, degree }) => {
	return (
		<SingleEmployerContainer>
			<Image src={personImg} alt={`${name}'s profile`} layout="responsive" style={{ maxWidth: '60%', height: 'auto' }} />
			<h3>{name}</h3>
			<p>{degree}</p>
			<span>{role}</span>
		</SingleEmployerContainer>
	)
}

export default SingleEmployer
