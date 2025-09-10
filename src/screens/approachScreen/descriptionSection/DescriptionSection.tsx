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
					<AnimationWrapper>
						<Lottie animationData={animationData} />
					</AnimationWrapper>
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
				<DescriptionContainer isReverseFlex={true}>
					<TextWrapper>
						<TitlesContainer>
							<DescSectionMainTitle>Strategize</DescSectionMainTitle>
							<DescSectionTitle>How can we help you grow?</DescSectionTitle>
						</TitlesContainer>
						<DescSectionDesc>
							Once we understand your current landscape, we establish the strategy. We don&apos;t make 5 year plans, but we navigate toward our goal
							with focus. A series of individual successes can scatter if not properly directed. So we
							<b> actively steer progress toward your objectives. </b>
							We set targets, highlight the challenges, pick the methods and plan the roadmap. Crafting the blueprint of your growth.
						</DescSectionDesc>
					</TextWrapper>
					<AnimationWrapper>
						<Lottie animationData={animationData2} />
					</AnimationWrapper>
				</DescriptionContainer>
				<DescriptionContainer isReverseFlex={false}>
					<AnimationWrapper>
						<Lottie animationData={animationData3} />
					</AnimationWrapper>
					<TextWrapper>
						<TitlesContainer>
							<DescSectionMainTitle>Measure</DescSectionMainTitle>
							<DescSectionTitle>Are we on the right track?</DescSectionTitle>
						</TitlesContainer>
						<DescSectionDesc>
							Taking shots in the dark is bad business. You can have a game plan, but you have to make sure it&apos;s working. That&apos;s where data
							steps in. You make the calls, and the data is here to help you evaluate. <b>No drowning in numbers, only metrics that matter.</b> It is
							a win-win. If the move is good, you will receive a confirmation. If it is bad, you would prefer to know it in time. Let&apos;s turn data
							into your advantage.
						</DescSectionDesc>
					</TextWrapper>
				</DescriptionContainer>
				<DescriptionContainer isReverseFlex={true}>
					<TextWrapper>
						<TitlesContainer>
							<DescSectionMainTitle>Optimize</DescSectionMainTitle>
							<DescSectionTitle>Let&apos;s turn progress into habit</DescSectionTitle>
						</TitlesContainer>
						<DescSectionDesc>
							Our approach to digital optimization is simple – learn, adjust, improve, repeat. By figuring out what your customers love and what they
							don&apos;t, we keep refining your online presence. We
							<b> fix your weaknesses, tweak what&apos;s average, and highlight your strengths.</b> The result? An online experience that&apos;s a cut
							above the rest.
						</DescSectionDesc>
					</TextWrapper>
					<AnimationWrapper>
						<Lottie animationData={animationData4} />
					</AnimationWrapper>
				</DescriptionContainer>
			</ContentContainer>
		</MainContainer>
	)
}
