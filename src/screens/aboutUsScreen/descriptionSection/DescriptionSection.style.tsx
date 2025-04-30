import styled from '@emotion/styled'
import { devices } from 'parameters/general'

export const MainContainer = styled.div`
	background-color: #fff;
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

export const DescriptionContainer = styled.div<{ isReverseFlex: boolean }>`
	display: flex;
	align-items: center;
	text-align: center;
	border-bottom: 6px dotted #877e7f;
	padding-bottom: 20px;
`
