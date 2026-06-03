'use client'

import { ReactNode } from 'react'
import { H1 } from 'components/headings/Headings.style'
import { HeroContainer, HeroContent, MainContainer, ContentContainer } from './LegalLayout.style'

interface LegalLayoutProps {
	title: string
	children: ReactNode
}

export const LegalLayout = ({ title, children }: LegalLayoutProps) => {
	return (
		<>
			<HeroContainer>
				<HeroContent>
					<H1>{title}</H1>
				</HeroContent>
			</HeroContainer>
			<MainContainer>
				<ContentContainer>{children}</ContentContainer>
			</MainContainer>
		</>
	)
}
