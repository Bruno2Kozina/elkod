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
	ReverseDescriptionContainer
} from './DescriptionSection.style'
import animationData from 'Lottie export/USP 1/data.json'
import animationData2 from 'Lottie export/USP 2/data.json'
import Link from 'next/link'
interface Props {
	scrollRef: React.RefObject<HTMLDivElement>
}
export const DescriptionSection = ({ scrollRef }: Props) => {
	return (
		<MainContainer ref={scrollRef}>
			<ContentContainer>
				<DescriptionContainer>
					<AnimationWrapper>
						<Lottie animationData={animationData} />
					</AnimationWrapper>
					<TextWrapper>
						<DescSectionTitle>EL10-2</DescSectionTitle>
						<DescSectionDesc>
							Model EL10-2 limitator nivoa zvuka namijenjen ograničavanju razine zvuka u ugostiteljskim i drugim objektima koje za ozvučenje koriste
							pojačala ili muzičku liniju sa dva izlaza za zvučnike.
						</DescSectionDesc>
					</TextWrapper>
				</DescriptionContainer>
				<ReverseDescriptionContainer>
					<TextWrapper>
						<DescSectionTitle>EL10-4</DescSectionTitle>
						<DescSectionDesc>
							Model EL10-4 limitator nivoa zvuka namijenjen ograničavanju razine zvuka u ugostiteljskim i drugim objektima koji za ozvučenje koriste
							pojačalo ili muzičku liniju sa četiri izlaza za zvučnike.
						</DescSectionDesc>
					</TextWrapper>
					<AnimationWrapper>
						<Lottie animationData={animationData2} />
					</AnimationWrapper>
				</ReverseDescriptionContainer>
				<DescriptionContainer>
					<AnimationWrapper>
						<Lottie animationData={animationData} />
					</AnimationWrapper>
					<TextWrapper>
						<DescSectionTitle>EL18</DescSectionTitle>
						<DescSectionDesc>
							Model EL18 limitator nivoa zvuka namijenjen ograničavanju razine zvuka u ugostiteljskim i drugim objektima koji za ozvučenje koriste
							kompliciranije razglasne sisteme. Odnosno više pojačala, aktivne zvučnike ili pak kombinaciju aktivnih i pasivnih zvučnika.
						</DescSectionDesc>
					</TextWrapper>
				</DescriptionContainer>
				<ReverseDescriptionContainer>
					<TextWrapper>
						<DescSectionTitle>EL18T</DescSectionTitle>
						<DescSectionDesc>
							Model EL18T limitator nivoa zvuka namijenjen ograničavanju razine zvuka u ugostiteljskim i drugim objektima koji za ozvučenje koriste
							kompliciranije razglasne sisteme. Odnosno više pojačala, aktivne zvučnike ili pak kombinaciju aktivnih i pasivnih zvučnika.
						</DescSectionDesc>
					</TextWrapper>
					<AnimationWrapper>
						<Lottie animationData={animationData2} />
					</AnimationWrapper>
				</ReverseDescriptionContainer>
			</ContentContainer>
		</MainContainer>
	)
}
