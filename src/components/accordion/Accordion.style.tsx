import styled from '@emotion/styled'

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	cursor: pointer;
	padding-left: 12px;
	gap: 16px;
`

export const Title = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
	font-weight: 500;
`

export const Content = styled.ul<{ isOpen: boolean }>`
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

export const LI = styled.li`
	display: flex;
	gap: 10px;
	padding-left: 24px;
`
