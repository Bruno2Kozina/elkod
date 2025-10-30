import styled from '@emotion/styled'
import { devices } from 'parameters/general'

export const MainContainer = styled.div`
	background-color: #f0f0f6;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

export const MainContentContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`

export const MainDescription = styled.div`
	max-width: 1440px;
	display: flex;
	flex-direction: column;
	gap: 24px;
	padding: 80px 164px 0;

	p {
		line-height: 1.8;
		font-size: 1.05rem;
		color: rgb(72, 76, 81);
	}

	@media ${devices.laptop} {
		p {
			font-size: 1.1rem;
		}
		padding: 80px 40px;
	}
`

export const ContentContainer = styled.div`
	max-width: 1440px;
	padding: 120px 164px;
	display: flex;
	gap: 160px;
	flex-direction: column;
	@media ${devices.laptop} {
		padding: 40px 24px;
		gap: 80px;
	}
`

export const ImageContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 100px;
	cursor: pointer;
	@media ${devices.laptop} {
		flex-direction: column;
		position: unset;
		gap: 24px;
	}
`
export const ReverseImageContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 100px;
	cursor: pointer;

	@media ${devices.laptop} {
		flex-direction: column-reverse;
		position: unset;
		gap: 24px;
	}
`

export const TextWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 40px;
	width: 50%;
	a {
		text-decoration: none;
	}
	@media ${devices.laptop} {
		width: 100%;
	}
`

export const DescSectionTitle = styled.span`
	font-size: 32px;
	line-height: 120%;
	@media ${devices.laptop} {
		font-size: 24px;
	}
`

export const DescSectionDesc = styled.span`
	font-size: 20px;
	font-weight: 300;
	line-height: 150%;
	@media ${devices.laptop} {
		font-size: 16px;
		b {
			color: #4c1ee8;
		}
	}
`

export const ImageWrapper = styled.div`
	overflow: hidden; /* Ensures image stays within container */
	width: 40%;
	cursor: pointer;
	box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); /* Example of box-shadow */
	@media ${devices.laptop} {
		width: 100%;
		height: 100%;
	}

	img {
		transition: transform 0.3s ease; /* Smooth transition for zoom effect */
		object-fit: cover; /* Ensures image stays within bounds of container */
		width: 100%;
		height: 100%;
	}

	&:hover img {
		transform: scale(1.1); /* Zoom effect inside the container */
	}

	&:hover {
		box-shadow: 0 18px 28px rgba(0, 0, 0, 0.1); /* Example of box-shadow */
		transition: box-shadow 0.1s ease-in-out; /* Smooth transition */
		cursor: pointer;
	}

	&:not(:hover) {
		transition: box-shadow 0.1s ease-in-out; /* Smooth transition */
	}
`
