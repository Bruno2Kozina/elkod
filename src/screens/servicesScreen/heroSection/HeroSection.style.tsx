import styled from '@emotion/styled'
import { devices } from 'parameters/general'

export const MainContainer = styled.div`
	display: flex;
	justify-content: center;
	color: #fff;
	background-color: #141313;
	position: relative;
`

export const ContentContainer = styled.div`
	width: 100%;
	padding: 140px 164px;
	display: flex;
	flex-direction: column;
	gap: 40px;
	max-width: 1440px;
	@media ${devices.laptop} {
		padding: 100px 24px 40px;
	}
`

export const LeftContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 70%;
	gap: 32px;
	@media ${devices.laptop} {
		width: 100%;
	}
	h4 {
		font-weight: 400;
	}
`

export const BottomContainer = styled.div`
	display: flex;
	justify-content: space-between;
`

export const BottomRightContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 80%;
	gap: 20px;
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

	@media ${devices.laptop} {
		gap: 16px;
		h1 {
			font-size: 32px;
		}
	}
`
export const SingleService = styled.a`
	color: white;
	text-decoration: none;
	cursor: pointer;
	display: flex;
	align-items: center;
	padding-bottom: 20px;
	border-bottom: 1px solid white;
	width: 42%;
	margin-right: 36px;
	font-size: 24px;
	box-sizing: border-box;
`

export const LeftWrapper = styled.div`
	width: 10%;
	font-size: 16px;
`

export const RightWrapper = styled.div`
	width: 90%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	transition: padding 0.3s ease-in-out;

	&:hover {
		padding: 0 12px;
	}
`
