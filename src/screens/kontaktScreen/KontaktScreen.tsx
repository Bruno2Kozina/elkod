'use client'

import { DescriptionSection } from './descriptionSection'
import { HeroSection } from './heroSection'
import { MapConsent } from 'components/cookieConsent'

export const KontaktScreen = () => {
	return (
		<>
			<HeroSection />
			<DescriptionSection />
			<MapConsent />
		</>
	)
}
