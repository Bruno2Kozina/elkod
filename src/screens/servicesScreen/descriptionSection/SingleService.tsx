// SingleService.tsx
import {
	Description,
	RightSingleServiceSection,
	SingleServiceContainer,
	SingleServiceWrapper,
	SingleStep,
	StepsSection,
	Title
} from './DescriptionSection.style'

interface Props {
	service: {
		number: string
		title: string
		description: string
		steps: string[]
	}
	isMiddle: boolean
}

export const SingleService = ({ service, isMiddle }: Props) => {
	return (
		<SingleServiceWrapper bgColor={isMiddle ? '#4C1EE8' : '#f2efe9'} color={isMiddle ? '#f2efe9' : '#141313'} id={service.number}>
			<SingleServiceContainer>
				<Title>{service.title}</Title>
				<RightSingleServiceSection>
					<Description>{service.description}</Description>
					<StepsSection>
						{service.steps.map(step => (
							<SingleStep borderColor={isMiddle ? '#fff' : '#141313'} key={step}>
								{step}
							</SingleStep>
						))}
					</StepsSection>
				</RightSingleServiceSection>
			</SingleServiceContainer>
		</SingleServiceWrapper>
	)
}
