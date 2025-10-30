'use client'

import { Accordion } from 'components/accordion/Accordion'
import { ReferenceCard } from './ReferenceCard'
import { AccordionContainer, Grid, MainAccordionContainer, Section, SectionWrapper, Title } from './ReferencesSection.style'
import { reference, sveZnacajneReference } from './data'
import { Referenca } from 'types/types'

export const ReferencesSection = () => {
	return (
		<Section>
			<SectionWrapper>
				<Grid>
					{reference.map((data: Referenca) => (
						<ReferenceCard key={data?.id} data={data} />
					))}
				</Grid>
			</SectionWrapper>
			<MainAccordionContainer>
				<AccordionContainer>
					<Title>Sve značajne reference:</Title>
					<Accordion title="Prikaži više" content={sveZnacajneReference} />
				</AccordionContainer>
			</MainAccordionContainer>
		</Section>
	)
}
