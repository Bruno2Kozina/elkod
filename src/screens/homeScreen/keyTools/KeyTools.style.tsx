import styled from '@emotion/styled'
import { devices } from 'parameters/general'

export const MainContainer = styled.div`
	background-color: #d6d1c8;
	display: flex;
	justify-content: center;
`

export const ContentContainer = styled.div`
	width: 100%;
	display: flex;
	padding: 120px 164px;
	flex-direction: column;
	gap: 56px;
	max-width: 1440px;
	@media ${devices.laptop} {
		padding: 32px 24px;
	}
`

export const Title = styled.span`
	font-size: 40px;
	@media ${devices.laptop} {
		font-size: 32px;
	}
`

export const SingleLogo = styled.div`
	width: 200px;
	height: 96px;
	display: flex;
	align-items: center;
	justify-content: center;
	color: #9d9483;
	:hover {
		color: #141313;
	}

	@media ${devices.laptop} {
		width: 100px;
		height: 50px;

		svg {
			width: 80px;
			height: 16px;
		}
	}
`

export const LogosContainer = styled.div`
	display: flex;
	justify-content: center;
	flex-flow: row wrap;
	gap: 24px;

	@media ${devices.laptop} {
		gap: 12px;
	}
`
