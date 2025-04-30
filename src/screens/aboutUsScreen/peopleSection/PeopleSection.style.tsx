import styled from '@emotion/styled'
import { devices } from 'parameters/general'

export const MainContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	color: #fff;
	@media ${devices.laptop} {
		padding-top: 40px;
	}
	gap: 40px;
`
export const SingleEmployerContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: start;
	align-items: center;
	color: #000;
	width: 26%;
	gap: 16px;
	letter-spacing: 4px;
	text-align: center;
	min-height: 460px;

	@media ${devices.laptop} {
		width: 100%;
	}

	h3 {
		font-size: 35px;
		@media ${devices.laptop} {
			font-size: 30px;
		}
	}

	p {
		font-size: 15px;
		color: #bfbfbf;
	}

	span {
		font-size: 16px;
		color: #5e5a5a;
	}
`
