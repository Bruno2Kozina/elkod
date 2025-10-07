import styled from '@emotion/styled'
import { devices } from 'parameters/general'

export const MainContainer = styled.div`
	display: flex;
	justify-content: center;
	background-color: #fff;
`

export const ContentContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 40px;
	background-color: #fff;
	max-width: 1440px;
	@media ${devices.laptop} {
		gap: unset;
	}
`

export const Container = styled.footer`
	padding: 80px 164px 0;

	@media ${devices.laptop} {
		padding: 56px 24px;
	}
`

export const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;

	@media ${devices.laptop} {
		flex-direction: column;
		gap: 32px;
	}
`

export const LeftSection = styled.div`
	width: 50%;
`
export const RightSection = styled.div`
	display: flex;
	gap: 64px;
	@media ${devices.laptop} {
		flex-direction: column;
		gap: 32px;
	}
`
export const RightBox = styled.div`
	display: flex;
	flex-direction: column;
	gap: 24px;
	@media ${devices.laptop} {
		gap: 16px;
	}
`

export const ContactSingleInfo = styled.div`
	display: flex;
	align-items: center;
	gap: 8px;
`

export const BoxWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
`

export const Separator = styled.span`
	height: 1px;
	background-color: black;
`

export const BottomFooter = styled.div`
	display: flex;
	padding: 0 164px 40px;
	@media ${devices.laptop} {
		padding: 40px 24px 64px;
	}
`

export const SocialIcons = styled.div`
	display: flex;
	gap: 12px;
`
