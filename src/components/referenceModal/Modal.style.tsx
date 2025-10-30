import styled from '@emotion/styled'
import { devices } from 'parameters/general'

export const ModalOverlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 1001;
	animation: fadeIn 0.3s ease-in-out;
`

export const ModalContent = styled.div`
	background-color: white;
	border-radius: 8px;
	width: 80%;
	max-width: 722px;
	max-height: 96vh;
	overflow-y: auto;
	position: relative;
	box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
	animation: slideIn 0.3s ease-in-out;

	h2 {
		font-size: 24px;
		margin-bottom: 15px;
	}

	p {
		font-size: 16px;
		margin: 10px 0;
	}

	ul {
		list-style-type: none;
		padding-left: 0;

		li {
			margin-bottom: 8px;
			font-size: 16px;
		}
	}

	.modal-close {
		position: absolute;
		top: 20px;
		right: 20px;
		background-color: transparent;

		border: none;
		font-size: 20px;
		cursor: pointer;
		color: #fff;
		transition: color 0.1s ease;
		&:hover {
			color: #196b7b;
		}
	}

	@keyframes fadeIn {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}

	@keyframes slideIn {
		0% {
			transform: translateY(-50px);
		}
		100% {
			transform: translateY(0);
		}
	}
`

export const Title = styled.span`
	font-weight: 600;
	font-size: 20px;
`

export const ModalTitleDescContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	text-align: center;
	gap: 12px;
	width: 100%;
	border-bottom: 1px solid black;
	color: #625f5f;
	font-weight: 500;
	padding: 12px 0;
`

export const BottomSection = styled.div`
	padding: 20px;
	display: flex;
	flex-direction: column;
	gap: 24px;
`

export const BottomTitle = styled.span`
	font-weight: 600;
	font-size: 20px;
	text-decoration: underline;
`

export const BottomSectionContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 24px;
`

export const BottomGroup = styled.div`
	display: flex;
	flex-direction: column;
	gap: 12px;
	color: #625f5f;
`

export const Description = styled.span`
	font-size: 16px;
	padding-left: 20px;
`

export const Spec = styled.div`
	font-size: 16px;
	color: #615f5f;
	padding-left: 10px;
	display: flex;
	flex-direction: column;
	gap: 6px;
`
