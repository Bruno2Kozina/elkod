import styled from '@emotion/styled'
import { devices } from 'parameters/general'

export const MainContainer = styled.div`
	display: flex;
	justify-content: center;
	color: #fff;
	background-color: #141313;
	position: relative;
	@media ${devices.laptop} {
		padding-top: 60px;
	}
`

export const ContentContainer = styled.div`
	width: 100%;
	padding: 140px 164px;
	display: flex;
	gap: 40px;
	max-width: 1440px;
	@media ${devices.laptop} {
		flex-direction: column;
		width: 100vw;
		padding: 16px 32px 40px;
		align-items: center;
	}
`

export const LeftContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 70%;
	gap: 32px;
	h4 {
		font-weight: 400;
	}

	@media ${devices.laptop} {
		align-items: center;
		width: 100%;
	}
	a {
		text-decoration: none;
		width: 100%;
	}
`

export const HeroDesc = styled.span`
	font-size: 20px;
	font-weight: 400;
	line-height: 150%;
	@media ${devices.laptop} {
		font-size: 16px;
	}
`

export const TitleDescContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 40px;
	max-width: 640px;
	h4 {
		line-height: 150%;
		font-weight: 200;
	}
`
export const AnimationContainer = styled.div`
	position: absolute;
	bottom: -2px;

	@media ${devices.laptop} {
		position: relative;
		width: 160px;
	}
`

export const Button = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	width: 200px;
	font-size: 20px;
	cursor: pointer;
	padding: 13px 0px 13px 24px;
	transition: padding 0.2s ease-in-out, gap 0.2s ease-in-out, opacity 0.2s ease-in-out; /* Transition for padding, gap, and opacity */
	background: linear-gradient(to left, white 50%, #4c1ee8 50%);
	background-size: 200% 100%;
	background-position: right bottom;
	border: none;
	line-height: 24px;
	letter-spacing: 0.16px;
	gap: 0px;
	svg {
		opacity: 0; /* Initially hidden */
		transition: opacity 0.2s ease-in-out; /* Transition for opacity */
	}

	&:hover {
		padding: 13px 2px;
		gap: 12px;
		background-position: left bottom; /* Slide background from left to right */
		color: white;
		animation: slideBackground 0.2s linear forwards;
		svg {
			opacity: 1; /* Make SVG visible on hover */
		}
	}

	&:not(:hover) {
		padding: 13px 0px 13px 24px;
		gap: 0px; /* Reset gap when not hovered */
		background-position: right bottom; /* Slide background back from right to left when not hovered */
		animation: slideBackgroundReverse 0.2s linear forwards;
		svg {
			opacity: 0; /* Hide SVG when not hovered */
		}
	}

	@media ${devices.laptop} {
		width: 100%;
		max-width: 640px;
	}
`
