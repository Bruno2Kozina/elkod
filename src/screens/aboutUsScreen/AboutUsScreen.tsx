'use client'

import { DescriptionSection } from './descriptionSection'
import { HeroSection } from './heroSection'
import { PeopleSection } from './peopleSection'

export const AboutUsScreen = () => {
	return (
		<>
			<HeroSection />
			<DescriptionSection />
			<PeopleSection />
		</>
	)
}
