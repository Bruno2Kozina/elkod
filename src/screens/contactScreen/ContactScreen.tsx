'use client'

import { DescriptionSection } from './descriptionSection'
import { HeroSection } from './heroSection'
import styled from '@emotion/styled'

export const ContactScreen = () => {
	return (
		<>
			<HeroSection />
			<DescriptionSection />
			<MapContainer>
				<iframe
					width="100%"
					height="400"
					style={{ border: 0, borderRadius: '8px' }}
					loading="lazy"
					allowFullScreen
					referrerPolicy="no-referrer-when-downgrade"
					src="https://www.google.com/maps?q=Ulica+Domovinskog+Rata+104C,+21000,+Split&z=12&output=embed"></iframe>
			</MapContainer>
		</>
	)
}
const MapContainer = styled.div`
	position: relative;
	width: 100%;
	margin: 20px auto;
	border-radius: 8px;
	overflow: hidden;

	iframe {
		filter: grayscale(100%) contrast(100%);
		transition: filter 0.3s ease;
	}

	:hover iframe {
		filter: grayscale(0%) contrast(100%);
	}
`
