import {
	BottomWrapper,
	ContactSingleInfo,
	Container,
	FooterContainer,
	Header,
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
	return (
		<Container>
			<Header>
				{width && width > 1024 && (
					<Link href="/" onClick={() => setIsMenuOpen(false)} style={{ height: '32px' }}>
						<span>ELKOD</span>
					</Link>
				)}
				{width && width <= 1024 && (
					<Link href="/" onClick={() => setIsMenuOpen(false)}>
						<span>ELKOD</span>
					</Link>
				)}
				{width && width > 1024 && (
					<Nav>
						<NavItem active={path === '/'}>
							<Link href="/">Naslovna</Link>
						</NavItem>
						<NavItem active={path === '/reference'}>
							<Link href="/reference">Reference</Link>
						</NavItem>
						<NavItem active={path === '/oNama'}>
							<Link href="/oNama">O nama</Link>
						</NavItem>
						<NavItem active={path === '/kontakt'}>
							<Link href="/kontakt">Kontakt</Link>
						</NavItem>
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
							<Link href="/reference">
								<NavItemMobile onClick={toggleMenu}>
									<span>Reference</span>
									<ArrowRightIcon />
								</NavItemMobile>
							</Link>
							<Link href="/oNama">
								<NavItemMobile onClick={toggleMenu}>
									<span>O nama</span>
									<ArrowRightIcon />
								</NavItemMobile>
							</Link>
							<Link href="/kontakt">
								<NavItemMobile onClick={toggleMenu} style={{ border: 'unset' }}>
									<span>Kontakt</span>
									<ArrowRightIcon />
								</NavItemMobile>
							</Link>
						</NavMobile>
						<FooterContainer>
							<ContactSingleInfo>
								<MailIcon />
								<p>hello@elkod.hr</p>
							</ContactSingleInfo>
							<BottomWrapper>
								<ContactSingleInfo>
									<Image src={linkedInIcon} alt="LinkedInIcon" />
									<p>Elkod</p>
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
