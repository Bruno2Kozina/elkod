import { useState, useEffect } from 'react'
import { H1 } from 'components/headings'
import {
	ContentContainer,
	HeroDesc,
	LeftContainer,
	MainContainer,
	TitleDescContainer,
	BottomContainer,
	BottomRightContainer,
	SingleService,
	LeftWrapper,
	RightWrapper
} from './HeroSection.style'
import { ArrowRightIcon, CircleArrowBottom } from 'icons'
import { useScreenSize } from 'hooks'

const services = [
	{
		name: 'User acquisition',
		number: '01'
	},
	{
		name: 'Lead generation',
		number: '05'
	},
	{
		name: 'Product analytics',
		number: '02'
	},
	{
		name: 'Lead nurturing',
		number: '06'
	},
	{
		name: 'User engagement',
		number: '03'
	},
	{
		name: 'Account management',
		number: '07'
	},
	{
		name: 'UX research',
		number: '04'
	}
]

export const HeroSection = () => {
	const { width, height } = useScreenSize()

	const handleServiceClick = (number: any) => {
		const element = document.getElementById(number)
		if (element) {
			const offset = height && element.offsetTop - height / 3.65 // Offset by 200 pixels
			window.scrollTo({ top: offset, behavior: 'smooth' })
		}
	}

	return (
		<MainContainer>
			<ContentContainer>
				<LeftContainer>
					<TitleDescContainer>
						{width && width >= 1024 && (
							<H1>
								Driving scalable growth for <br /> businesses is what we excel at.
							</H1>
						)}
						{width && width < 1024 && <H1>Driving scalable growth for businesses is what we excel at.</H1>}
						<HeroDesc>Here is a glimpse of our work.</HeroDesc>
					</TitleDescContainer>
				</LeftContainer>
				{width && width >= 1024 && (
					<BottomContainer>
						<div onClick={() => handleServiceClick('01')} style={{ cursor: 'pointer' }}>
							<CircleArrowBottom />
						</div>
						<BottomRightContainer>
							{services.map(service => (
								<SingleService key={service.number} onClick={() => handleServiceClick(service.number)}>
									<LeftWrapper>{service.number}</LeftWrapper>
									<RightWrapper>
										<span>{service.name}</span>
										<ArrowRightIcon />
									</RightWrapper>
								</SingleService>
							))}
						</BottomRightContainer>
					</BottomContainer>
				)}
			</ContentContainer>
		</MainContainer>
	)
}
