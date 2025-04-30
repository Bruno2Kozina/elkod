import React from 'react'
import { ImageContainer, InfoContainer, InfoWrapper, SingleReferenceContainer } from './SingleReferences.style'
import Image from 'next/image'
import { Reference } from 'contentful/types/CustomTypes'

export const SingleReference: React.FC<{ data: Reference; onClick: () => void }> = ({ data, onClick }) => {
	const imageUrl = data.images[0].startsWith('//') ? 'https:' + data.images[0] : data.images[0]
	return (
		<SingleReferenceContainer onClick={onClick}>
			<ImageContainer>
				<Image
					src={imageUrl}
					layout="responsive"
					alt="name"
					width={360}
					height={200}
					style={{ objectFit: 'cover', maxHeight: '200px', minHeight: '200px' }}
				/>
			</ImageContainer>
			<InfoContainer>
				<InfoWrapper>
					<h4>{data.projectName}</h4>
					<span>Lokacija: {data.projectLocation}</span>
				</InfoWrapper>
				<p>Više...</p>
			</InfoContainer>
		</SingleReferenceContainer>
	)
}
