import styled from '@emotion/styled'
import { devices } from 'parameters/general'

export const MainContainer = styled.div`
	background-color: #f2efe9;
	display: flex;
	justify-content: center;
	align-items: center;
`

export const ContentContainer = styled.div`
	max-width: 1440px;
	padding: 120px 164px;
	display: flex;
	gap: 160px;
	flex-direction: column;
	@media ${devices.laptop} {
		padding: 40px 24px;
		gap: 40px;
	}
`

export const DescriptionContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 100px;

	@media ${devices.laptop} {
		flex-direction: column;
		position: unset;
		gap: 24px;
	}
`
export const BottomDescriptionContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 100px;

	@media ${devices.laptop} {
		flex-direction: column-reverse;
		position: unset;
		gap: 24px;
	}
`

export const TextWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 40px;
	width: 50%;
	a {
		text-decoration: none;
	}
	@media ${devices.laptop} {
		width: 100%;
	}
`

export const DescSectionTitle = styled.span`
	font-size: 32px;
	line-height: 120%;
	@media ${devices.laptop} {
		font-size: 24px;
	}
`

export const DescSectionDesc = styled.span`
	font-size: 20px;
	font-weight: 300;
	line-height: 150%;
	@media ${devices.laptop} {
		font-size: 16px;
		b {
			color: #4c1ee8;
		}
	}
`

export const AnimationWrapper = styled.div`
	width: 40%;
	@media ${devices.laptop} {
		width: 100%;
	}
`

export const Button = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	width: 250px;
	height: 56px;
	font-size: 16px;
	cursor: pointer;
	border: none;
	line-height: 24px;
	background-color: #141313;
	color: white;
	&:hover {
		background-color: #4c1ee8;
	}

	@media ${devices.laptop} {
		width: 100%;
	}
`
