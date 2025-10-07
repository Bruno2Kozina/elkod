import styled from '@emotion/styled'
import { devices } from 'parameters/general'

export const MainContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	color: #fff;
	background-image: url('/images/bgImage.png');
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	position: relative;
	padding-top: 180px;
	min-height: fit-content;
	@media ${devices.laptop} {
		padding-top: 100px;
	}
`
export const ContentContainer = styled.div`
	width: 100%;
	padding: 40px 164px 164px;
	display: flex;
	justify-content: center;
	align-items: center;
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
	max-width: 640px;
	gap: 40px;
	h4 {
		font-weight: 400;
	}

	@media ${devices.tablet} {
		align-items: center;
		width: 100%;
	}
	a {
		text-decoration: none;
	}
`

export const ButtonContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 60px;

	@media ${devices.laptop} {
		align-items: center;
		flex-direction: column;
		width: 100%;
		gap: 20px;
	}
`

export const TitleDescContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 32px;
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

export const Button = styled.button<{ transparentBG?: boolean }>`
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	width: 152px;
	font-size: 12px;
	letter-spacing: 2px;
	cursor: pointer;
	color: ${({ transparentBG }) => (transparentBG === true ? '#fff' : '#196b7b')};
	padding: 16px 40px;
	transition: 0.2s ease-in-out;
	background-color: ${({ transparentBG }) => (transparentBG === true ? 'transparent' : '#fff')};
	border: ${({ transparentBG }) => (transparentBG === true ? '2px solid #fff' : '2px solid #fff')};

	&:hover {
		color: #fff;
		background-color: #196b7b;
		border: 2px solid #196b7b;
	}
`
