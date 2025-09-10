import Lottie from 'lottie-react'
import { ContentContainer, HeroDesc, LeftContainer, MainContainer, TitleDescContainer, AnimationContainer } from './HeroSection.style'

import animationData from 'Lottie export/Approach page - Hero/data.json'
import animationDataMobile from 'Lottie export/Readyscale - Mobile/Approach page - Hero - Mobile/data.json'
import { H1 } from 'components/headings/Headings.style'
import { useScreenSize } from 'hooks'

export const HeroSection = () => {
	const { width } = useScreenSize()
	return (
		<MainContainer>
			<ContentContainer>
				<AnimationContainer>
					{width && width >= 1024 && <Lottie animationData={animationData} />}
					{width && width < 1024 && <Lottie animationData={animationDataMobile} />}
				</AnimationContainer>
				<LeftContainer>
					<TitleDescContainer>
						<H1>
							Our Approach,
							<br /> established by action.
						</H1>
						<HeroDesc>Through our client work, we&apos;ve learned what separates a good project from a great one.</HeroDesc>
					</TitleDescContainer>
				</LeftContainer>
			</ContentContainer>
		</MainContainer>
	)
}
