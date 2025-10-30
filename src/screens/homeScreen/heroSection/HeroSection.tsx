import Lottie from 'lottie-react'
import { ContentContainer, HeroDesc, LeftContainer, MainContainer, TitleDescContainer, Button, AnimationWrapper } from './HeroSection.style'

import animationData from 'Lottie export/Landing page - Hero/data.json'
import { H1 } from 'components/headings/Headings.style'
import { ArrowRightIcon } from 'icons'
import Link from 'next/link'

interface Props {
	handleScroll: () => void
}

export const HeroSection = ({ handleScroll }: Props) => {
	return (
		<MainContainer>
			<ContentContainer>
				<LeftContainer>
					<TitleDescContainer>
						<H1>
							Elkod Limitatori - <br /> Kontrola zvuka na najvišoj razini!
						</H1>
						<HeroDesc>
							Naši limitatori buke koriste se u klubovima, restoranima i poslovnim prostorima kako bi spriječili preglasnu reprodukciju. Certificirana
							tehnologija osigurava sigurnost, kvalitetu i poštivanje zakonskih regulativa.
						</HeroDesc>
					</TitleDescContainer>
					<Link href={''}>
						<Button onClick={() => handleScroll()}>
							Saznaj više <ArrowRightIcon />
						</Button>
					</Link>
				</LeftContainer>
				<AnimationWrapper>
					<Lottie style={{ width: '100%', height: '100%' }} animationData={animationData} />
				</AnimationWrapper>
			</ContentContainer>
		</MainContainer>
	)
}
