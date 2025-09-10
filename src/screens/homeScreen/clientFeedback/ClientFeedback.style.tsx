import styled from '@emotion/styled'
import { devices } from 'parameters/general'

export const MainContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: #e2ddd5;
`

export const ContentContainer = styled.div`
	width: 100%;
	display: flex;
	padding-bottom: 164px;
	flex-direction: column;
	gap: 56px;
	@media ${devices.laptop} {
		padding: 32px 24px;
	}
`

export const TitleContainer = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	padding: 120px 164px 56px;
	max-width: 1440px;
	@media ${devices.laptop} {
		padding: 32px 24px 8px;
	}
`

export const Title = styled.span`
	font-size: 40px;
	@media ${devices.laptop} {
		font-size: 32px;
	}
`

export const BottomContainer = styled.div`
	display: flex;
	gap: 20px;
	overflow: scroll;
	@media ${devices.laptop} {
		flex-direction: column;
	}
`

export const ClutchBox = styled.div`
	cursor: pointer;
	background-color: #4c1ee8;
	display: flex;
	flex-direction: column;
	padding: 40px;
	color: white;
	font-size: 40px;
	gap: 32px;
	max-width: 448px;
	min-width: 448px;

	@media ${devices.laptop} {
		padding: 24px 16px;
		gap: 24px;
		max-width: 100%;
		min-width: unset;
	}
`

export const LogoWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
	img {
		width: 70px;
		height: 20px;
	}
`

export const ClutchText = styled.span`
	font-size: 12px;
	line-height: 18px;
	@media ${devices.laptop} {
		font-size: 14px;
	}
`

export const ReviewsContainer = styled.div`
	display: flex;
	gap: 20px;
	margin-right: -132px;
	@media ${devices.laptop} {
		margin-right: 0;
		overflow: scroll;
	}
`

export const ClutchRating = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
	@media ${devices.laptop} {
		gap: 0px;
		svg {
			width: 16px;
			height: 16px;
		}
	}
	span {
		font-size: 64px;
		@media ${devices.laptop} {
			font-size: 40px;
		}
	}
`

export const StarsContainer = styled.div`
	display: flex;
`

export const SingleFeedbackContainer = styled.div`
	padding: 40px;
	display: flex;
	flex-direction: column;
	gap: 24px;
	min-width: 340px;
	max-width: 340px;
	font-size: 14px;
	line-height: 22.4px;
	border: 1px solid #141313;

	@media ${devices.laptop} {
		padding: 24px 16px;
		min-width: 244px;
		max-width: 244px;
	}
`

export const ClientData = styled.div`
	display: flex;
	margin-top: 24px;
	gap: 8px;
`
export const ClientNameAndJob = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
`
export const ClientName = styled.span`
	font-size: 14px;
	line-height: 16px;
	@media ${devices.laptop} {
		font-size: 12px;
	}
`

export const ParagraphWrapper = styled.div`
	height: 120px;
`

export const ClientJob = styled.span`
	font-size: 12px;
	line-height: 16px;
	text-transform: uppercase;
	@media ${devices.laptop} {
		font-size: 10px;
	}
`
export const Button = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 24px;
	width: 210px;
	height: 48px;
	font-size: 14px;
	font-weight: 600;
	cursor: pointer;
	border: 1px solid #141313;
	line-height: 24px;
	background-color: transparent;
	color: #141313;
	transition: 0.3s ease-in-out;
	&:hover {
		background-color: #4c1ee8;
		color: white;
		border: 1px solid #4c1ee8;
	}
`
