import Lottie from 'lottie-react'
import { ContentContainer, HeroDesc, LeftContainer, MainContainer, TitleDescContainer, AnimationContainer, Button } from './HeroSection.style'

import animationData from 'Lottie export/Landing page - Hero/data.json'
import animationDataMobile from 'Lottie export/Readyscale - Mobile/Landing page - Hero - Mobile/data.json'
import { H1 } from 'components/headings/Headings.style'
import { ArrowRightIcon } from 'icons'
import { useScreenSize } from 'hooks'
import Link from 'next/link'

export const HeroSection = () => {
	const { width } = useScreenSize()

	return (
		<MainContainer>
			<ContentContainer>
				<AnimationContainer>
					{width && width < 1024 && <Lottie animationData={animationDataMobile} />}
					{width && width >= 1024 && <Lottie animationData={animationData} />}
				</AnimationContainer>
				<LeftContainer>
					<TitleDescContainer>
						<H1>Get to the next level by supercharging your growth</H1>
						<HeroDesc>
							Your challenges are not new to us - we’ve tackled them before. Attain your goals using our proven Lead generation and Growth marketing
							methods.
						</HeroDesc>
					</TitleDescContainer>
					<Link href="https://calendly.com/nikola-bmbz/30min" target="_blank">
						<Button>
							Book a call <ArrowRightIcon />
						</Button>
					</Link>
				</LeftContainer>
			</ContentContainer>
		</MainContainer>
	)
}
