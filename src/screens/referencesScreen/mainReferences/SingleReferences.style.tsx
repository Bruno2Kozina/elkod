import styled from '@emotion/styled'
import { devices } from 'parameters/general'

export const SingleReferenceContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	min-height: 360px;
	height: 100%;
	background-color: rgb(249, 250, 250);
	text-align: center;

	&:hover {
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); /* Example of box-shadow */
		transition: box-shadow 0.1s ease-in-out; /* Smooth transition */
		cursor: pointer;
	}

	@media ${devices.laptop} {
		width: 100%;
	}
`

export const ImageContainer = styled.div`
	overflow: hidden; /* Ensures image stays within container */
	position: relative;
	width: 100%;
	height: 200px;
	img {
		transition: transform 0.3s ease; /* Smooth transition for zoom effect */
		object-fit: cover; /* Ensures image stays within bounds of container */
		width: 100%;
		height: 100%;
	}

	&:hover img {
		transform: scale(1.1); /* Zoom effect inside the container */
	}
`

export const InfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 16px 24px 24px;
	gap: 24px;
	min-height: 160px;
	width: 100%;

	p {
		font-size: 12px;
		font-weight: 400;
		color: #3f444b;
	}
`

export const InfoWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	min-height: 80px;
	gap: 16px;

	h4 {
		font-size: 20px;
		font-weight: 400;
		color: #3f444b;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
		text-overflow: ellipsis;
		word-break: break-word;
	}

	span {
		font-size: 16px;
		font-weight: 400;
		color: #3f444b;
	}

	p {
		font-size: 12px;
		font-weight: 400;
		color: #3f444b;
	}
`
