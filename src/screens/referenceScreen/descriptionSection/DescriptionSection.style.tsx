import styled from '@emotion/styled'
import { devices } from 'parameters/general'

export const MainContainer = styled.div`
	background-color: #f0f0f6;
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
	gap: 122px;
	@media ${devices.laptop} {
		flex-direction: ${({ isReverseFlex }) => (isReverseFlex ? 'column-reverse' : 'column')};
		position: unset;
		gap: 24px;
	}
`

export const TextWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 24px;
	width: 60%;
	@media ${devices.laptop} {
		width: 100%;
	}
`

export const AnimationWrapper = styled.div`
	width: 40%;
	@media ${devices.laptop} {
		width: 100%;
		padding: 32px 0;
	}
`

export const TitlesContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
`

export const DescSectionMainTitle = styled.span`
	font-size: 16px;
	letter-spacing: 1.6px;
	text-transform: uppercase;
`

export const DescSectionTitle = styled.span`
	font-size: 24px;
	font-weight: bold;
	line-height: 120%;
	@media ${devices.laptop} {
		font-size: 24px;
	}
`

export const DescSectionDesc = styled.span`
	font-size: 16px;
	font-weight: 300;
	line-height: 150%;
`
