import {
	BottomWrapper,
	Button,
	ContactSingleInfo,
	Container,
	FooterContainer,
	Header,
	MobileButton,
	Nav,
	NavItem,
	NavItemMobile,
	NavMobile,
	NavMobileContainer,
	Wrapper
} from './Navbar.style'
import Image from 'next/image'
import Link from 'next/link'
import logo from 'public/icons/logo.svg'
import { usePathname } from 'next/navigation'
import { useScreenSize } from 'hooks'
import { ArrowRightIcon, CloseIcon, HamburgerMenuIcon, MailIcon } from 'icons'
import { useState } from 'react'
import linkedInIcon from 'public/icons/LinkedIn.svg'
import euLogo from 'public/icons/euLogo.svg'

export default function Navbar() {
	const path = usePathname()
	const { width } = useScreenSize()
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen)
	}
	const hasBorder = width && width > 1024
	return (
		<Container hasBorder={hasBorder || false}>
			<Header>
				{width && width > 1024 && (
					<Link href="/" onClick={() => setIsMenuOpen(false)} style={{ height: '32px' }}>
						<Image src={logo} alt="Logo" />
					</Link>
				)}
				{width && width <= 1024 && (
					<Link href="/" onClick={() => setIsMenuOpen(false)}>
						<Image src={logo} alt="Logo" width={98} height={20} />
					</Link>
				)}
				{width && width > 1024 && (
					<Nav>
						<NavItem active={path === '/services'}>
							<Link href="/services">Services</Link>
						</NavItem>
						<NavItem active={path === '/approach'}>
							<Link href="/approach">Approach</Link>
						</NavItem>
						<Link href="https://calendly.com/nikola-bmbz/30min" target="_blank">
							<Button>Book a call</Button>
						</Link>
					</Nav>
				)}
				{width && width <= 1024 && (
					<div onClick={toggleMenu} style={{ height: '25px' }}>
						{isMenuOpen && <CloseIcon />}
						{!isMenuOpen && <HamburgerMenuIcon />}
					</div>
				)}
			</Header>
			{isMenuOpen && width && width <= 1024 && (
				<NavMobileContainer open={isMenuOpen}>
					<Wrapper>
						<NavMobile>
							<Link href="/">
								<NavItemMobile onClick={toggleMenu}>
									<span>Home</span>
									<ArrowRightIcon />
								</NavItemMobile>
							</Link>
							<Link href="/services">
								<NavItemMobile onClick={toggleMenu}>
									<span>Services</span>
									<ArrowRightIcon />
								</NavItemMobile>
							</Link>
							<Link href="/approach">
								<NavItemMobile onClick={toggleMenu} style={{ border: 'unset' }}>
									<span>Approach</span>
									<ArrowRightIcon />
								</NavItemMobile>
							</Link>
							<Link href="https://calendly.com/nikola-bmbz/30min" target="_blank">
								<MobileButton>Book a call</MobileButton>
							</Link>
						</NavMobile>
						<FooterContainer>
							<ContactSingleInfo>
								<MailIcon />
								<p>hello@readyscale.co</p>
							</ContactSingleInfo>
							<BottomWrapper>
								<ContactSingleInfo>
									<Image src={linkedInIcon} alt="LinkedInIcon" />
									<p>ReadyScale</p>
								</ContactSingleInfo>
								<ContactSingleInfo>
									<Image src={euLogo} alt="euLogo" />
									<p>EU based</p>
								</ContactSingleInfo>
							</BottomWrapper>
						</FooterContainer>
					</Wrapper>
				</NavMobileContainer>
			)}
		</Container>
	)
}
