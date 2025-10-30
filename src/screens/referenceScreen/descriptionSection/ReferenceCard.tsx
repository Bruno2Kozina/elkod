'use client'

import Image from 'next/image'
import { Card, ImageWrapper, Overlay, TextContainer } from './ReferencesSection.style'
import { Referenca } from 'types/types'

interface ReferenceCardProps {
	data: Referenca
}
export const ReferenceCard = (data: ReferenceCardProps) => {
	const { title, type, image, imageAlt, location } = data.data
	return (
		<Card>
			<ImageWrapper>
				<Image src={image} alt={imageAlt} fill style={{ objectFit: 'cover' }} />
				<Overlay>
					<TextContainer>
						<h3>{title}</h3>
						<p>{type}</p>
						<p>{location}</p>
					</TextContainer>
				</Overlay>
			</ImageWrapper>
		</Card>
	)
}
