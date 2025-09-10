import styled from '@emotion/styled'
import { devices } from 'parameters/general'

export const MainContainer = styled.div`
	background-color: #f2efe9;
	display: flex;
	align-items: center;
	justify-content: center;
`

export const ContentContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
`

export const SingleServiceWrapper = styled.div<{ bgColor: string; color: string }>`
	background-color: ${({ bgColor }) => bgColor};
	color: ${({ color }) => color};
	display: flex;
	transition: 0.3s ease-in-out;
	justify-content: center;
`

export const SingleServiceContainer = styled.div`
	max-width: 1440px;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	gap: 20px;
	padding: 74px 164px;
	:first-of-type {
		padding-top: 100px;
	}
`

export const RightSingleServiceSection = styled.div`
	display: flex;
	flex-direction: column;
	gap: 32px;
	max-width: 640px;
`

export const StepsSection = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 20px;

	@media ${devices.laptop} {
		flex-direction: column;
		margin-top: 40px;
	}
`

export const SingleStep = styled.div<{ borderColor: string }>`
	font-size: 14px;
	font-weight: 700;
	line-height: 24px;
	border-bottom: ${({ borderColor }) => `1px solid ${borderColor}`};
	padding-bottom: 8px;
	width: 40%;
	@media ${devices.laptop} {
		width: 100%;
		padding-bottom: 16px;
	}
`

export const Title = styled.span`
	font-size: 32px;
	font-weight: 700;
	width: 50%;
`

export const Description = styled.span`
	font-size: 16px;
	line-height: 24px;
`

export const MobileServicesContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	padding: 24px 0 64px;
`
