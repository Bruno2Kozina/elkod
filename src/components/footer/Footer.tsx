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
						<LeftSection>
							<LogoBlack />
						</LeftSection>
						<RightSection>
							<RightBox>
								<h6>Address</h6>
								<BoxWrapper>
									<p>Gajnice 5, 10 000 Zagreb</p>
									<ContactSingleInfo>
										<Image src={euLogo} alt="euLogo" />
										<p>EU based</p>
									</ContactSingleInfo>
								</BoxWrapper>
							</RightBox>
							<RightBox>
								<h6>Contact</h6>
								<BoxWrapper>
									<ContactSingleInfo>
										<div style={{ width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
											<MailIcon />
										</div>
										<p>hello@readyscale.co</p>
									</ContactSingleInfo>
									{/* <ContactSingleInfo>
										<Image src={phoneCallIcon} alt="PhoneCall icon" />
										<p>(270) 555-0117</p>
									</ContactSingleInfo> */}
									<Link
										href="https://www.linkedin.com/company/readyscale"
										style={{ textDecoration: 'none', color: '#141313', cursor: 'pointer' }}
										target="_blank">
										<ContactSingleInfo>
											<div style={{ width: '24px', height: '24px' }}>
												<LinkedInIcon />
											</div>
											<p>ReadyScale</p>
										</ContactSingleInfo>
									</Link>
								</BoxWrapper>
							</RightBox>
						</RightSection>
					</Wrapper>
				</Container>
				<Separator />
				<BottomFooter>
					<p>©2024, All rights reserved.</p>
				</BottomFooter>
			</ContentContainer>
		</MainContainer>
	)
}
