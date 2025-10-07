import {
	Container,
	LeftSection,
	RightSection,
	Wrapper,
	RightBox,
	ContactSingleInfo,
	BoxWrapper,
	MainContainer,
	Separator,
	BottomFooter,
	ContentContainer
} from './Footer.style'
import Image from 'next/image'
import euLogo from 'public/icons/euLogo.svg'
import Link from 'next/link'
import { LinkedInIcon, LogoBlack, MailIcon } from 'icons'

export default function Footer() {
	return (
		<MainContainer>
			<ContentContainer>
				<Container>
					<Wrapper>
						<LeftSection>LOGO</LeftSection>
						<RightSection>
							<RightBox>
								<h6>Adresa</h6>
								<BoxWrapper>
									<p>Svetog Mihovila 28, 21240, Trilj</p>
									<ContactSingleInfo>
										<Image src={euLogo} alt="euLogo" />
										<p>EU based</p>
									</ContactSingleInfo>
								</BoxWrapper>
							</RightBox>
							<RightBox>
								<h6>Kontakt</h6>
								<BoxWrapper>
									<ContactSingleInfo>
										<div style={{ width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
											<MailIcon />
										</div>
										<p>hello@elkod.hr</p>
									</ContactSingleInfo>
									{/* <ContactSingleInfo>
										<Image src={phoneCallIcon} alt="PhoneCall icon" />
										<p>(270) 555-0117</p>
									</ContactSingleInfo> */}
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
