'use client'

import { DescriptionSection } from './descriptionSection'
import { HeroSection } from './heroSection'
import styled from '@emotion/styled'

export const KontaktScreen = () => {
	return (
		<>
			<HeroSection />
			<DescriptionSection />
			<MapContainer>
				<iframe
					width="100%"
					height="400"
					style={{ border: 0 }}
					loading="lazy"
					allowFullScreen
					referrerPolicy="no-referrer-when-downgrade"
					src="https://www.google.com/maps?q=Svetog+Mihovila+28,+Trilj&z=15&output=embed"></iframe>
			</MapContainer>
		</>
	)
}
const MapContainer = styled.div`
	position: relative;
	width: 100%;
	margin: 0px auto -6px;
	overflow: hidden;

	iframe {
		filter: grayscale(100%) contrast(100%);
		transition: filter 0.3s ease;
	}

	:hover iframe {
		filter: grayscale(0%) contrast(100%);
	}
`
