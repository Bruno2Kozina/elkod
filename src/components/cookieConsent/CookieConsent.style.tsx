import styled from '@emotion/styled'
import { devices } from 'parameters/general'

export const Banner = styled.div`
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	z-index: 1000;
	display: flex;
	justify-content: center;
	padding: 16px;
`

export const Inner = styled.div`
	width: 100%;
	max-width: 1112px;
	background-color: #fff;
	border: 1px solid #dae8ea;
	border-radius: 8px;
	box-shadow: 0 8px 32px rgba(25, 107, 123, 0.15);
	padding: 24px 32px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 32px;

	@media ${devices.laptop} {
		flex-direction: column;
		align-items: flex-start;
		gap: 20px;
		padding: 20px;
	}
`

export const TextWrapper = styled.div`
	font-size: 14px;
	line-height: 1.7;
	color: rgb(72, 76, 81);
	letter-spacing: 0.5px;

	a {
		color: #196b7b;
		text-decoration: underline;
	}
`

export const Actions = styled.div`
	display: flex;
	gap: 12px;
	flex-shrink: 0;

	@media ${devices.mobileL} {
		width: 100%;
		flex-direction: column;
	}
`

export const Button = styled.button<{ primary?: boolean }>`
	display: flex;
	align-items: center;
	justify-content: center;
	white-space: nowrap;
	font-size: 12px;
	letter-spacing: 2px;
	text-transform: uppercase;
	cursor: pointer;
	padding: 14px 28px;
	transition: 0.2s ease-in-out;
	color: ${({ primary }) => (primary ? '#fff' : '#196b7b')};
	background-color: ${({ primary }) => (primary ? '#196b7b' : 'transparent')};
	border: 2px solid #196b7b;

	&:hover {
		color: #fff;
		background-color: #196b7b;
	}
`
