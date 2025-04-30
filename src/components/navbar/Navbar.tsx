import {
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
import logo from 'public/images/KPlogo.png'
import { usePathname } from 'next/navigation'
import { useScreenSize } from 'hooks'
import { ArrowRightIcon, CloseIcon, HamburgerMenuIcon, MailIcon } from 'icons'
import { useEffect, useState } from 'react'

export default function Navbar() {
	const path = usePathname()
	const { width } = useScreenSize()
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	useEffect(() => {
		if (isMenuOpen) {
			document.body.style.overflow = 'hidden' // Disable scroll
		} else {
			document.body.style.overflow = 'auto' // Enable scroll
		}

		return () => {
			document.body.style.overflow = 'auto' // Cleanup when component unmounts
		}
	}, [isMenuOpen])

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen)
	}
	const hasBorder = width && width > 1024
	return (
		<Container hasBorder={hasBorder || false}>
			<Header>
				{width && width > 1024 && (
					<Link href="/" onClick={() => setIsMenuOpen(false)} style={{ height: '32px' }}>
						<Image src={logo} alt="Logo" width={180} height={46} />
					</Link>
				)}
				{width && width <= 1024 && (
					<Link href="/" onClick={() => setIsMenuOpen(false)}>
						<Image src={logo} alt="Logo" width={160} height={41} />
					</Link>
				)}
				{width && width > 1024 && (
					<Nav>
						<NavItem active={path === '/'}>
							<Link href="/">Naslovna</Link>
						</NavItem>
						<NavItem active={path === '/aboutUs'}>
							<Link href="/aboutUs">O nama</Link>
						</NavItem>
						<NavItem active={path === '/references'}>
							<Link href="/references">Reference</Link>
						</NavItem>
						<NavItem active={path === '/contact'}>
							<Link href="/contact">Kontakt</Link>
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
									<span>Naslovna</span>
									<ArrowRightIcon />
								</NavItemMobile>
							</Link>
							<Link href="/aboutUs">
								<NavItemMobile onClick={toggleMenu}>
									<span>O nama</span>
									<ArrowRightIcon />
								</NavItemMobile>
							</Link>
							<Link href="/references">
								<NavItemMobile onClick={toggleMenu}>
									<span>Reference</span>
									<ArrowRightIcon />
								</NavItemMobile>
							</Link>
							<Link href="/contact">
								<NavItemMobile onClick={toggleMenu} style={{ border: 'unset' }}>
									<span>Kontakt</span>
									<ArrowRightIcon />
								</NavItemMobile>
							</Link>
						</NavMobile>
						<FooterContainer>
							<ContactSingleInfo>
								<MailIcon />
								<p>kozinaprojekti@kozinaprojekti.hr</p>
							</ContactSingleInfo>
						</FooterContainer>
					</Wrapper>
				</NavMobileContainer>
			)}
		</Container>
	)
}
