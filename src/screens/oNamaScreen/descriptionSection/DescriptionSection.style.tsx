import styled from '@emotion/styled'
import { devices } from 'parameters/general'

export const MainContainer = styled.div`
	background-color: #f0f0f6;
	display: flex;
	justify-content: center;
	align-items: center;
`

export const DescriptionContainer = styled.div`
	background-color: #f0f0f6;
	display: flex;
	justify-content: center;
	align-items: center;
	max-width: 1440px;
	padding: 80px 164px;

	p {
		line-height: 1.8;
		font-size: 1.05rem;
		color: rgb(72, 76, 81);
	}

	@media ${devices.laptop} {
		p {
			font-size: 1.1rem;
		}
		padding: 80px 40px;
	}
`
