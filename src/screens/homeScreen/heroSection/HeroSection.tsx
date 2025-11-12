import dynamic from 'next/dynamic'

// Dinamički import Lottie komponente, samo na clientu
import { ContentContainer, HeroDesc, LeftContainer, MainContainer, TitleDescContainer, Button, AnimationWrapper } from './HeroSection.style'

import animationData from 'Lottie export/Landing page - Hero/data.json'
import { H1 } from 'components/headings/Headings.style'
import { ArrowRightIcon } from 'icons'
import Link from 'next/link'
const LottieAnimation = dynamic(() => import('lottie-react'), { ssr: false })

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
							ELKOD Limitatori - <br /> Kontrola zvuka na najvišoj razini!
						</H1>
						<HeroDesc>
							Naši limitatori nivoa zvuka koriste se u klubovima, restoranima i poslovnim prostorima kako bi spriječili preglasnu reprodukciju.
							Certificirana tehnologija osigurava sigurnost, kvalitetu i poštivanje zakonskih regulativa.
						</HeroDesc>
					</TitleDescContainer>
					<Link href={''}>
						<Button onClick={() => handleScroll()}>
							Saznaj više <ArrowRightIcon />
						</Button>
					</Link>
				</LeftContainer>
				<AnimationWrapper>
					<LottieAnimation style={{ width: '100%', height: '100%' }} animationData={animationData} />
				</AnimationWrapper>
			</ContentContainer>
		</MainContainer>
	)
}
