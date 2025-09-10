import styled from '@emotion/styled'
import { devices } from 'parameters/general'

export const Container = styled.div<{ hasBorder: boolean }>`
	position: fixed;
	display: flex;
	justify-content: center;
	background-color: #141313;
	width: 100%;
	z-index: 100000;
	border-bottom: ${({ hasBorder }) => (hasBorder ? ' 1px solid #fff' : 'none')};
`

export const Header = styled.header`
	display: flex;
	align-items: center;
	width: 100%;
	justify-content: space-between;
	align-items: center;
	padding: 17px 164px;
	height: auto;
	color: #fff;
	font-size: 16px;
	max-width: 1440px;

	@media ${devices.laptop} {
		height: 56px;
		padding: 16px 24px;
		a {
			height: 20px;
		}
	}
`

export const Nav = styled.ul`
	display: flex;
	gap: 56px;
`

export const NavItem = styled.li<{ active?: boolean }>`
	display: flex;
	align-items: center;
	a {
		text-decoration: ${({ active }) => (active ? 'underscore' : 'none')};
		font-weight: ${({ active }) => (active ? '700' : '500')};
		color: #fff;
	}
`

export const Button = styled.button`
	position: relative;
	font-size: 16px;
	cursor: pointer;
	padding: 8px 32px;
	transition: color 0.3s ease-in-out;
	background: linear-gradient(to left, white 50%, #4c1ee8 50%);
	background-size: 200% 100%;
	background-position: right bottom;
	border: none;
	line-height: 24px;
	letter-spacing: 0.16px;

	&:hover {
		background-position: left bottom; /* Slide background from left to right */
		color: white;
		animation: slideBackground 0.2s linear forwards;
	}

	&:not(:hover) {
		background-position: right bottom; /* Slide background back from right to left when not hovered */
		animation: slideBackgroundReverse 0.3s linear forwards;
	}

	&::after {
		content: '';
		position: absolute;
		width: 0;
		height: 0;
		border-style: solid;
		border-width: 6px;
		border-color: transparent transparent #141313 #141313;
		bottom: 2px;
		right: 2px;
		transform: rotate(270deg);
		transition: right 0.3s ease-in-out, bottom 0.3s ease-in-out, border-color 0.3s ease-in-out; /* Smooth transition for right, bottom, and border-color properties */
	}

	&:hover::after {
		bottom: -8px; /* Move the triangle outside the button area */
		right: -8px; /* Move the triangle outside the button area */
		border-color: transparent; /* Make the triangle disappear smoothly */
	}

	@keyframes slideBackground {
		from {
			background-position: right bottom;
		}
		to {
			background-position: left bottom;
		}
	}

	@keyframes slideBackgroundReverse {
		from {
			background-position: left bottom;
		}
		to {
			background-position: right bottom;
		}
	}
`

export const NavMobileContainer = styled.div<{ open: boolean }>`
	background-color: #eeebe5;
	position: absolute;
	top: 56px;
	height: calc(100vh - 56px);
	width: 100%;
	padding: 40px 32px;
`

export const NavMobile = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 24px;
	width: 100%;

	a {
		width: 100%;
		text-decoration: none;
	}
`

export const NavItemMobile = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 32px 0;
	border-bottom: 1px solid #141313;
	color: #141313;
	font-size: 24px;
	font-weight: 500;
`

export const MobileButton = styled.button`
	width: 100%;
	padding: 20px 32px;
	color: #fff;
	background-color: #4c1ee8;
	border: none;
	font-size: 16px;
`

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 100%;
`

export const FooterContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
`

export const BottomWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`

export const ContactSingleInfo = styled.div`
	display: flex;
	align-items: center;
	gap: 8px;
`
