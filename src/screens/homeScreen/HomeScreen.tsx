'use client'

import { useRef } from 'react'
import { DescriptionSection } from './descriptionSection'
import { HeroSection } from './heroSection'

export const HomeScreen = () => {
	const scrollRef = useRef<HTMLDivElement | null>(null)
	return (
		<>
			<HeroSection scrollRef={scrollRef} />
			<DescriptionSection scrollRef={scrollRef} />
		</>
	)
}
