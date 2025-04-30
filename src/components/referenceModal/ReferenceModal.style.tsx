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
`

export const Title = styled.span`
	font-weight: 600;
	font-size: 20px;
`

export const Desc = styled.p`
	font-size: 16px;
`

export const BottomSection = styled.div`
	padding: 20px;
`

export const BottomSectionContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	padding-top: 40px;
`

export const BottomSectionContainerLeft = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 40%;
	gap: 24px;
`

export const BottomSectionContainerRight = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 40%;
	gap: 24px;
	text-align: right;
`

export const DataTitle = styled.span`
	font-size: 16px;
	color: #625f5f;
	font-weight: 600;
	text-decoration: underline;
`

export const DataValue = styled.span`
	font-size: 16px;
	color: #615f5f;
	font-weight: 300;
`

export const SingleDataWrapper = styled.span`
	display: flex;
	flex-direction: column;
	gap: 4px;
`

export const LongDescContent = styled.ul<{ isOpen: boolean }>`
	display: flex;
	flex-direction: column;
	overflow: hidden;
	gap: 12px;
	max-height: ${({ isOpen }) => (isOpen ? '10000vh' : '0px')};
	opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
	transition:
		max-height 0.5s ease-in-out,
		opacity 0.3s ease-in-out;
	list-style-type: disc;
`

export const LongDescContainer = styled.div`
	display: flex;
	flex-direction: column;
	cursor: pointer;
`

export const LongDescTitle = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
	margin-top: 12px;

	span {
		color: #625f5f;
		font-size: 16px;
		font-weight: 500;

		:hover {
			color: #1a6c7a;
	}
`
