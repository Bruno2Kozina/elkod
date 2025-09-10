import styled from '@emotion/styled'
import { devices } from 'parameters/general'

export const MainContainer = styled.div`
	display: flex;
	justify-content: center;
	color: #fff;
	background-color: #141313;
	position: relative;
	padding-top: 180px;
	@media ${devices.laptop} {
		padding-top: 40px;
	}
`

export const ContentContainer = styled.div`
	width: 100%;
	padding: 40px 164px 140px;
	display: flex;
	max-width: 1440px;
	@media ${devices.laptop} {
		flex-direction: column;
		width: 100vw;
		padding: 16px 24px 64px;
		align-items: center;
	}
`

export const LeftContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 70%;
	gap: 32px;
	margin-bottom: 80px;

	h4 {
		font-weight: 400;
	}
	@media ${devices.laptop} {
		margin-bottom: 0px;
		align-items: center;
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
	gap: 16px;
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
		padding-bottom: 24px;
		width: 100vw;
	}
`
