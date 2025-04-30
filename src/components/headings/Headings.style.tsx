import styled from '@emotion/styled'
import { devices } from 'parameters/general'

export const H1 = styled.h1`
	font-size: 48px;
	font-weight: 400;
	line-height: 120%;
	@media ${devices.laptop} {
		font-size: 28px;
	}
`

export const P = styled.p`
	font-size: 16px;
	line-height: 160%;
	color: #625f5f;
	font-weight: 600;
	font-variation-settings: 'wght' 550;
`
