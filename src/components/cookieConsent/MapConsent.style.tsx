import styled from '@emotion/styled'

export const MapContainer = styled.div`
	position: relative;
	width: 100%;
	margin: 0px auto -6px;
	overflow: hidden;

	iframe {
		filter: grayscale(100%) contrast(100%);
		transition: filter 0.3s ease;
		display: block;
	}

	:hover iframe {
		filter: grayscale(0%) contrast(100%);
	}
`

export const Placeholder = styled.div`
	width: 100%;
	height: 400px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 16px;
	text-align: center;
	padding: 24px;
	background-color: #f0f0f6;
	color: rgb(72, 76, 81);

	p {
		max-width: 480px;
		line-height: 1.7;
		font-size: 14px;
		letter-spacing: 0.5px;
	}
`

export const Button = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 12px;
	letter-spacing: 2px;
	text-transform: uppercase;
	cursor: pointer;
	padding: 14px 32px;
	transition: 0.2s ease-in-out;
	color: #fff;
	background-color: #196b7b;
	border: 2px solid #196b7b;

	&:hover {
		color: #196b7b;
		background-color: transparent;
	}
`
