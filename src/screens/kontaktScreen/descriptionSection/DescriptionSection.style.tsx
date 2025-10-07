import styled from '@emotion/styled'
import { devices } from 'parameters/general'

export const MainContainer = styled.div`
	background-color: #fff;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #f0f0f6;
`

export const ContentContainer = styled.div`
	max-width: 1440px;
	padding: 100px 40px 60px;
	display: flex;
	flex-direction: column;
	@media ${devices.laptop} {
		padding: 40px 24px;
		gap: 40px;
	}
`

export const DescriptionContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 40px;
	@media ${devices.laptop} {
		flex-direction: column;
	}
`

export const SingleData = styled.div`
	display: flex;
	height: 180px;
	flex-direction: column;
	justify-content: flex-start;
	gap: 16px;

	h3 {
		color: #000f2b
		font-size: 22px;
		margin-bottom: 20px;
		letter-spacing: 2px;
	}

	@media ${devices.laptop} {
		height: 120px;
		gap: 8px;
		width: 100%;
	}
`

export const ContactSingleInfo = styled.div`
	display: flex;
	align-items: center;
	gap: 12px;

	span {
		color: #7a7a7a;
		font-size: 16px;
	}
`
