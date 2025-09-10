import Lottie from 'lottie-react'
import {
	DescriptionContainer,
	TextWrapper,
	DescSectionTitle,
	DescSectionDesc,
	ContentContainer,
	MainContainer,
	AnimationWrapper,
	Button,
	BottomDescriptionContainer
} from './DescriptionSection.style'
import animationData from 'Lottie export/USP 1/data.json'
import animationData2 from 'Lottie export/USP 2/data.json'
import Link from 'next/link'

export const DescriptionSection = () => {
	return (
		<MainContainer>
			<ContentContainer>
				<DescriptionContainer>
					<AnimationWrapper>
						<Lottie animationData={animationData} />
					</AnimationWrapper>
					<TextWrapper>
						<DescSectionTitle>
							A <b>360-degree</b> scaling approach
						</DescSectionTitle>
						<DescSectionDesc>
							<b>We know what startups and mid-sized companies need to scale</b>, and we’re here to guide you through that process. From Paid
							advertising and Lead generation to Customer engagement campaigns and Deal closing, we provide a full-spectrum growth approach.
						</DescSectionDesc>
					</TextWrapper>
				</DescriptionContainer>
				<BottomDescriptionContainer>
					<TextWrapper>
						<DescSectionTitle>
							Seamless Onboarding: <br /> <b>Plug-and-Play success.</b>
						</DescSectionTitle>
						<DescSectionDesc>
							Start your growth journey with ReadyScale in no time. Our streamlined onboarding process ensures a seamless transition, allowing you to
							<b> quickly benefit from our expertise and experience rapid results.</b>
						</DescSectionDesc>
						<Link href="/approach">
							<Button>Discover more</Button>
						</Link>
					</TextWrapper>
					<AnimationWrapper>
						<Lottie animationData={animationData2} />
					</AnimationWrapper>
				</BottomDescriptionContainer>
			</ContentContainer>
		</MainContainer>
	)
}
