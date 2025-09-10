import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import { devices } from 'parameters/general'

export const MainContainer = styled.div`
	background-color: #ebe7e0;
	display: flex;
	justify-content: center;
`

export const ContentContainer = styled.div`
	display: flex;
	padding: 120px 164px;
	@media ${devices.laptop} {
		padding: 40px 24px;
	}
	flex-direction: column;
	gap: 64px;
	max-width: 1440px;
`

export const Title = styled.span`
	font-size: 40px;
	@media ${devices.laptop} {
		font-size: 32px;
	}
`

export const SingleCategory = styled.div`
	display: flex;
	flex-direction: column;
	gap: 24px;
`

export const CategoryTitle = styled.div`
	font-size: 16px;
	font-weight: 700;
	line-height: 24px;
	letter-spacing: 1.6px;
	text-transform: uppercase;
	@media ${devices.laptop} {
		font-size: 14px;
	}
`

export const Services = styled.div`
	display: flex;
	gap: 24px;

	@media ${devices.laptop} {
		flex-direction: column;
	}
`

export const SingleService = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;
	border: 1px solid var(--Black, #141313);
	gap: 24px;
	padding: 40px 30px;

	@media ${devices.laptop} {
		gap: 12px;
		padding: 24px 16px;
		svg {
			width: 16px;
			height: 16px;
		}
	}

	:hover {
		background-color: #4c1ee8;
		color: #fff;
		svg {
			stroke {
				fill: #fff;
			}
		}
	}
	img {
		path {
			fill: #fff;
			stroke: #fff;
		}
	}
`

export const SingleServiceData = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
	@media ${devices.laptop} {
		gap: 4px;
	}
`

export const SingleServiceDataTitle = styled.span`
	font-size: 24px;
	font-weight: 700;
	@media ${devices.laptop} {
		font-size: 14px;
	}
`

export const SingleServiceDataDesc = styled.span`
	font-size: 16px;
	line-height: 24px;
	@media ${devices.laptop} {
		font-size: 12px;
	}
`
const slideFromTop = keyframes`
  from {
    background-position: top center;
  }
  to {
    background-position: bottom center;
  }
`

const slideToTop = keyframes`
  from {
    background-position: bottom center;
  }
  to {
    background-position: top center;
  }
`

export const ViewServices = styled.div`
	display: flex;
	padding: 26px 36px;
	justify-content: space-between;
	align-items: center;
	height: 68px;
	width: 100%;
	background: linear-gradient(to bottom, #4c1ee8 50%, #141313 50%);
	background-size: 100% 200%;
	background-position: bottom center;
	color: #fff;
	font-size: 14px;
	font-weight: 700;
	cursor: pointer;
	animation-duration: 0.2s;
	animation-timing-function: linear;
	animation-fill-mode: forwards;

	@media ${devices.laptop} {
		padding: 16px 24px;
		font-size: 16px;
		background: unset;
		background-color: #141313;
		height: 64px;
	}

	&:hover {
		animation-name: ${slideToTop}; /* Slide background from top to bottom */
	}

	&:not(:hover) {
		animation-name: ${slideFromTop}; /* Slide background back from bottom to top when not hovered */
	}
`
