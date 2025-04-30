'use client'

import { useQuery } from '@tanstack/react-query'
import { HeroSection } from './heroSection'
import MainReferences from './mainReferences/MainReferences'
import { AllProjects, Reference } from 'contentful/types/CustomTypes'
import { fetchAllProjects, fetchReferences } from 'services/api'
import { Accordion } from 'components/accordion/Accordion'
import styled from '@emotion/styled'
import { devices } from 'parameters/general'

export const ReferencesScreen = () => {
	const {
		data: projects,
		error: projectsError,
		isLoading: projectsLoading
	} = useQuery<AllProjects[], Error>({
		queryKey: ['projects'],
		queryFn: fetchAllProjects
	})

	const {
		data: references,
		error: referencesError,
		isLoading: referencesLoading
	} = useQuery<Reference[], Error>({
		queryKey: ['references'],
		queryFn: fetchReferences
	})
	if (referencesError instanceof Error) {
		return <p>{referencesError.message}</p>
	}

	if (projectsError instanceof Error) {
		return <p>{projectsError.message}</p>
	}
	return (
		<>
			<HeroSection />
			<MainReferences references={references || []} isLoading={referencesLoading} />
			<MainAccordionContainer>
				<AccordionContainer>
					<Title>Svi značajni projekti:</Title>
					<Accordion title="GLAVNI I IZVEDBENI PROJEKTI" content={projects && projects[0]?.glavniProjekti} />
					<Accordion title="IDEJNA RJEŠENJA I IDEJNI PROJEKTI" content={projects && projects[0]?.idejniProjekti} />
					<Accordion title="NADZOR NAD GRAĐENJEM" content={projects && projects[0]?.nadzorniProjekti} />
				</AccordionContainer>
			</MainAccordionContainer>
		</>
	)
}

export const Title = styled.span`
	font-size: 26px;
	line-height: 1.3em;
	letter-spacing: 2.5px;
	font-weight: 500;
	margin-bottom: 16px;
`

export const MainAccordionContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`

export const AccordionContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 12px;
	color: #7a7a7a;
	padding-left: 120px;
	width: 100%;
	max-width: 1440px;
	@media ${devices.tablet} {
		padding-left: 24px;
	}
`
