'use client'
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
									<p style={{ fontWeight: 600 }}>ELKOD - obrt za elektrotehniku</p>
									<p>ULICA SV. MIHOVILA 28</p>
									<p>21240 Trilj</p>
									<p>OIB: 05532514124</p>
								</BoxWrapper>
							</RightBox>
							<RightBox>
								<BoxWrapper>
									<p>Žiro račun: IBAN: HR2924070001100605957</p>
									<p>Otvoren kod OTP banka Hrvatska d.d.</p>
									<p>Trgovački sud u Splitu</p>
									<p>Vl. Damir Kozina dipl. ing</p>
								</BoxWrapper>
							</RightBox>
						</RightSection>
					</Wrapper>
				</Container>
				<Separator />
				<BottomFooter>
					<p>Copyright © 2025 ELKOD</p>
				</BottomFooter>
			</ContentContainer>
		</MainContainer>
	)
}
