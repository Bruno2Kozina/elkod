import { ContentContainer, ButtonContainer, LeftContainer, MainContainer, TitleDescContainer, Button } from './HeroSection.style'

import { H1 } from 'components/headings/Headings.style'
import Link from 'next/link'

export const HeroSection = () => {
	return (
		<MainContainer>
			<ContentContainer>
				<LeftContainer>
					<TitleDescContainer>
						<H1>KOZINA PROJEKTI</H1>
						<p>PROJEKTIRANJE – NADZOR</p>
					</TitleDescContainer>
					<ButtonContainer>
						<div style={{ width: 'fit-content' }}>
							<Link href="/contact">
								<Button transparentBG>KONTAKT</Button>
							</Link>
						</div>
						<div style={{ width: 'fit-content' }}>
							<Link href="/aboutUs">
								<Button>O NAMA</Button>
							</Link>
						</div>
					</ButtonContainer>
				</LeftContainer>
			</ContentContainer>
		</MainContainer>
	)
}
