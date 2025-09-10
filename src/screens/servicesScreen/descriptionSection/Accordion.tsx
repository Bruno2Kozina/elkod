import { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { ArrowRightIcon } from 'icons'

const AccordionContainer = styled.div<{ isOpen: boolean }>`
	padding: 32px 0px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	border-bottom: 1px solid black;
	svg {
		transform: ${({ isOpen }) => (isOpen ? 'rotate(-90deg)' : '0')};
		transition: 0.2s ease-in-out;
	}
`
const AccordionMainContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	padding: 0 24px;
`

const AccordionContent = styled.div<{ isOpen: boolean }>`
	padding: ${({ isOpen }) => (isOpen ? '40px 0 40px 13%' : '0')};
	overflow: hidden;
	max-height: ${({ isOpen }) => (isOpen ? 'auto' : '0')};
	transition: 0.1s ease-in-out;
`

interface AccordionProps {
	title: string
	children: React.ReactNode
	number: number
}

export const Accordion: React.FC<AccordionProps> = ({ title, children, number }) => {
	const [isOpen, setIsOpen] = useState(false)

	useEffect(() => {
		number === 1 && setIsOpen(true)
	}, [])

	const toggleAccordion = () => {
		setIsOpen(!isOpen)
	}

	return (
		<AccordionMainContainer>
			<AccordionContainer isOpen={isOpen} onClick={toggleAccordion}>
				<span>{number}</span>
				<span style={{ width: '70%' }}>{title}</span>
				<ArrowRightIcon />
			</AccordionContainer>
			<AccordionContent isOpen={isOpen}>{children}</AccordionContent>
		</AccordionMainContainer>
	)
}
