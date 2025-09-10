'use client'

import { ClientFeedback } from './clientFeedback'
import { DescriptionSection } from './descriptionSection'
import { HeroSection } from './heroSection'
import { KeyTools } from './keyTools'
import { ServicesSection } from './servicesSection'

export const HomeScreen = () => {
	return (
		<>
			<HeroSection />
			<DescriptionSection />
			<ServicesSection />
			<ClientFeedback />
			<KeyTools />
		</>
	)
}
