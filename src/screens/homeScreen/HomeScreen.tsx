'use client'

import { useRef } from 'react'
import { DescriptionSection } from './descriptionSection'
import { HeroSection } from './heroSection'

export const HomeScreen = () => {
	const scrollRef = useRef<HTMLDivElement | null>(null)
	const handleScroll = () => {
		setTimeout(() => {
			scrollRef.current?.scrollIntoView({ behavior: 'smooth' })
		}, 50)
	}
	return (
		<>
			<HeroSection handleScroll={handleScroll} />
			<DescriptionSection scrollRef={scrollRef} />
		</>
	)
}
