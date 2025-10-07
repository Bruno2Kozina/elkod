import Lottie from 'lottie-react'
import {
	DescriptionContainer,
	TextWrapper,
	DescSectionTitle,
	DescSectionDesc,
	ContentContainer,
	MainContainer,
	AnimationWrapper,
	DescSectionMainTitle,
	TitlesContainer
} from './DescriptionSection.style'
import animationData from 'Lottie export/Discover/data.json'
import animationData2 from 'Lottie export/Strategize/data.json'
import animationData3 from 'Lottie export/Measure/data.json'
import animationData4 from 'Lottie export/Optimize/data.json'

export const DescriptionSection = () => {
	return (
		<MainContainer>
			<ContentContainer>
				<DescriptionContainer isReverseFlex={false}>
					<AnimationWrapper></AnimationWrapper>
					<TextWrapper>
						<TitlesContainer>
							<DescSectionMainTitle>Discover</DescSectionMainTitle>
							<DescSectionTitle>What&apos;s holding you back?</DescSectionTitle>
						</TitlesContainer>
						<DescSectionDesc>
							Before we can guide you towards growth, we need to know where you&apos;re starting. Our discovery phase involves a deep dive into your
							business. We examine your data, conduct competitive research and assess your alignment with the industry&apos;s best practices. It helps
							us <b>detect opportunities and identify barriers</b> that are hindering your business&apos;s potential. We don&apos;t just look at where
							you&apos;re standing; we investigate why you&apos;re standing there and what&apos;s keeping you from advancing.
						</DescSectionDesc>
					</TextWrapper>
				</DescriptionContainer>
			</ContentContainer>
		</MainContainer>
	)
}
