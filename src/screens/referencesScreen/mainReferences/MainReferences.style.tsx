import styled from '@emotion/styled'
import { devices } from 'parameters/general'

export const MainReferencesContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`

export const MainReferencesWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr); /* 3 columns per row */
	gap: 20px;
	padding: 40px 120px 164px;
	width: 100%;
	max-width: 1440px;

	@media ${devices.tablet} {
		padding: 40px 24px 164px;
		grid-template-columns: repeat(2, 1fr); /* 1 column per row */
	}
	@media ${devices.mobileL} {
		padding: 40px 24px 164px;
		grid-template-columns: repeat(1, 1fr); /* 1 column per row */
	}
`

export const TabsContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`

export const Tabs = styled.div`
	display: flex;
	justify-content: start;
	align-items: center;
	padding: 40px 120px 0px;
	width: 1440px;
	gap: 20px;
	@media ${devices.laptop} {
		padding: 40px 24px 0px;
	}
`

export const Tab = styled.button<{ active: boolean }>`
	position: relative;
	padding: 10px 0;
	color: ${({ active }) => (active ? '#3262D0' : '#333')};
	cursor: pointer;
	border: none;
	background: transparent;
	font-size: 16px;
	font-weight: 500;
	overflow: hidden;
	display: flex;
	align-items: center;
	justify-content: center;

	@media ${devices.laptop} {
		font-size: 12px;
	}

	&::after {
		content: '';
		position: absolute;
		bottom: 4px;
		left: 50%;
		width: 100%;
		height: 2px;
		background-color: #3262d0;
		transform: translateX(-50%) scaleX(${({ active }) => (active ? 1 : 0)});
		transform-origin: center;
		transition: transform 0.2s ease-in-out;
	}

	&:hover {
		color: #3262d0;
	}
`
