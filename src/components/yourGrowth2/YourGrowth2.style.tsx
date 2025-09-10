import styled from '@emotion/styled'
import { devices } from 'parameters/general'

export const MainContainer = styled.div<{ bgColor: string }>`
	display: flex;
	justify-content: center;
	background-color: ${({ bgColor }) => bgColor};
	transition: 0.3s ease-in-out;
	height: 480px;

	@media ${devices.laptop} {
		height: unset;
	}
`

export const ContentContainer = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 120px 164px;
	max-width: 1440px;
	a {
		text-decoration: none;
	}
	@media ${devices.laptop} {
		a {
			width: 100%;
		}
		flex-direction: column;
		padding: 80px 24px;
		gap: 40px;
	}
`

export const LeftContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
	@media ${devices.laptop} {
		align-self: flex-start;
	}
`

export const TopTitle = styled.span`
	color: rgba(255, 255, 255, 0.52);
	font-size: 20px;
	line-height: 30px;
	letter-spacing: 2px;
	text-transform: uppercase;

	@media ${devices.laptop} {
		font-size: 14px;
	}
`

export const BottomTitle = styled.span`
	font-size: 40px;
	color: #fff;
	@media ${devices.laptop} {
		font-size: 24px;
	}
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

export const Button = styled.button<{ active?: boolean }>`
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	width: 200px;
	height: 56px;
	font-size: 16px;
	font-weight: 700;
	cursor: pointer;
	transition: color 0.2s ease-in-out, padding 0.2s ease-in-out, gap 0.2s ease-in-out, opacity 0.2s ease-in-out; /* Transition for padding, gap, and opacity */
	background: ${({ active }) => (active ? 'linear-gradient(to left, white 50%, #141313 50%)' : 'linear-gradient(to left, white 50%, #4c1ee8 50%)')};
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
		animation: slideBackgroundReverse 0.2s linear forwards;
	}
	margin-top: 10px;
	@media ${devices.laptop} {
		width: 100%;
		margin: unset;
	}
`
