import {
	Container,
	RightSection,
	Wrapper,
	RightBox,
	BoxWrapper,
	MainContainer,
	Separator,
	BottomFooter,
	ContentContainer,
	LogoWrapper
} from './Footer.style'
import { LogoElkod } from 'icons'

export default function Footer() {
	return (
		<MainContainer>
			<ContentContainer>
				<Container>
					<Wrapper>
						<LogoWrapper>
							<LogoElkod />
						</LogoWrapper>
						<RightSection>
							<RightBox>
								<BoxWrapper>
									<p style={{ fontWeight: 600 }}>ELKOD d.o.o.</p>
									<p>ULICA SV. MIHOVILA 28</p>
									<p>21240 Trilj</p>
									<p>OIB: 05532514124</p>
									<p>MBS: 91066336</p>
								</BoxWrapper>
							</RightBox>
							<RightBox>
								<BoxWrapper>
									<p>Žiro račun: IBAN: HR2824070001100575905</p>
									<p>Otvoren kod OTP banka Hrvatska d.d.</p>
									<p>Trgovački sud u Splitu</p>
									<p>član uprave: Damir Kozina</p>
									<p>temeljni kapital 2,654€ uplaćen u cijelosti</p>
								</BoxWrapper>
							</RightBox>
						</RightSection>
					</Wrapper>
				</Container>
				<Separator />
				<BottomFooter>
					<p>Copyright © 2025 Elkod</p>
				</BottomFooter>
			</ContentContainer>
		</MainContainer>
	)
}
