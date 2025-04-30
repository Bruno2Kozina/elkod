import { useState } from 'react'
import { Container, Content, LI, Title } from './Accordion.style'
import { PlusIcon } from 'icons/PlusIcon'
import { MinusIcon } from 'icons/MinusIcon'
import { ListDotIcon } from 'icons/ListDotIcon'

interface Props {
	title: string
	content?: string[]
}
export const Accordion = ({ title, content }: Props) => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<Container>
			<Title onClick={() => setIsOpen(!isOpen)}>
				{isOpen ? <MinusIcon /> : <PlusIcon />} {title}
			</Title>
			<Content isOpen={isOpen}>
				{content?.map(value => (
					<LI key={value}>
						<span>
							<ListDotIcon />
						</span>
						{value}
					</LI>
				))}
			</Content>
		</Container>
	)
}
