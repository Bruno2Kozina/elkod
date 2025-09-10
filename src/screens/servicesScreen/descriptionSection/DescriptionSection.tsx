import { useScreenSize } from 'hooks'
import { ContentContainer, Description, MainContainer, MobileServicesContainer, SingleStep, StepsSection } from './DescriptionSection.style'
import { ServicesData } from './data'
import { Accordion } from './Accordion'
import { SingleService } from './SingleService'
import { useEffect, useState } from 'react'

export const DescriptionSection = () => {
	const { width } = useScreenSize()
	const [middleService, setMiddleService] = useState<string | null>(null)

	useEffect(() => {
		const handleScroll = () => {
			const servicePositions = ServicesData.map(service => {
				const element = document.getElementById(service.number)
				if (element) {
					const rect = element.getBoundingClientRect()
					return {
						number: service.number,
						top: rect.top,
						bottom: rect.bottom,
						middle: (rect.top + rect.bottom) / 2
					}
				}
				return null
			}).filter(Boolean)

			// Calculate the middle of the viewport
			const viewportMiddle = window.innerHeight / 2

			// Find the service that is touching the middle of the viewport vertically
			const middleService = servicePositions.find((servicePosition: any) => {
				return servicePosition.top <= viewportMiddle && servicePosition.bottom >= viewportMiddle
			})

			setMiddleService(middleService ? middleService.number : null)
		}

		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return (
		<MainContainer id="glimpseHref">
			{width && width >= 1024 && (
				<ContentContainer>
					{ServicesData.map(service => (
						<SingleService key={service.number} service={service} isMiddle={middleService === service.number} />
					))}
				</ContentContainer>
			)}
			{width && width < 1024 && (
				<MobileServicesContainer>
					{ServicesData.map((service, idx) => (
						<Accordion title={service.title} key={service.number} number={idx + 1}>
							<Description>{service.description}</Description>
							<StepsSection>
								{service.steps.map(step => (
									<SingleStep borderColor="#141313" key={step}>
										{step}
									</SingleStep>
								))}
							</StepsSection>
						</Accordion>
					))}
				</MobileServicesContainer>
			)}
		</MainContainer>
	)
}
