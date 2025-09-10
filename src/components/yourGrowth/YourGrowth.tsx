import { useState, useEffect, useRef } from 'react'
import { ContentContainer, MainContainer, TopTitle, BottomTitle, LeftContainer, Button } from './YourGrowth.style'
import Link from 'next/link'

export default function YourGrowth() {
	const [bgColor, setBgColor] = useState('#4C1EE8')
	const [isIntersecting, setIsIntersecting] = useState(false)
	const ref = useRef(null)

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				setIsIntersecting(entry.isIntersecting)
			},
			{
				threshold: 1 // Adjust the threshold as needed
			}
		)

		if (ref.current) {
			observer.observe(ref.current)
		}

		return () => {
			if (ref.current) {
				observer.unobserve(ref.current)
			}
		}
	}, [])

	useEffect(() => {
		if (isIntersecting) {
			// Smoothly change background color when component is in view
			setBgColor('#141313')
		} else {
			// Smoothly revert background color when component is out of view
			setBgColor('#4C1EE8')
		}
	}, [isIntersecting])

	return (
		<MainContainer bgColor={bgColor} ref={ref}>
			<ContentContainer>
				<LeftContainer>
					<TopTitle>Ready for the next phase?</TopTitle>
					<BottomTitle>Your growth starts here.</BottomTitle>
				</LeftContainer>
				<Link href="https://calendly.com/nikola-bmbz/30min" target="_blank">
					<Button active={isIntersecting}>Get started</Button>
				</Link>
			</ContentContainer>
		</MainContainer>
	)
}
