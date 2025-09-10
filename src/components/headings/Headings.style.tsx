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
