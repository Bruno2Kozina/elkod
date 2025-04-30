import { Container, RightSection, Wrapper, RightBox, BoxWrapper, MainContainer, Separator, BottomFooter, ContentContainer } from './Footer.style'
import Image from 'next/image'
import logoAlt from 'public/images/KPlogoAlt.png'
import { useScreenSize } from 'hooks'

export default function Footer() {
	const { width } = useScreenSize()

	return (
		<MainContainer>
			<ContentContainer>
				<Container>
					<Wrapper>
						<div>
							{width && width > 1024 && <Image src={logoAlt} alt="Logo" width={192} height={96} />}
							{width && width <= 1024 && <Image src={logoAlt} alt="Logo" width={160} height={75} />}
						</div>
						<RightSection>
							<RightBox>
								<BoxWrapper>
									<p style={{ fontWeight: 600 }}>KOZINA PROJEKTI d.o.o.</p>
									<p>Vinkovačka 21 </p>
									<p>Ured {'(Domovinskog rata 104c)'} </p>
									<p>21000 Split</p>
									<p>OIB: 34862845293</p>
									<p>MBS: 060185473</p>
								</BoxWrapper>
							</RightBox>
							<RightBox>
								<BoxWrapper>
									<p>Žiro račun: IBAN: HR2824070001100575905</p>
									<p>Otvoren kod OTP banka Hrvatska d.d.</p>
									<p>Trgovački sud u Splitu</p>
									<p>član uprave: Boško Kozina</p>
									<p>temeljni kapital 2,654€ uplaćen u cijelosti</p>
								</BoxWrapper>
							</RightBox>
						</RightSection>
					</Wrapper>
				</Container>
				<Separator />
				<BottomFooter>
					<p>Copyright © 2025 KOZINA PROJEKTI</p>
				</BottomFooter>
			</ContentContainer>
		</MainContainer>
	)
}
