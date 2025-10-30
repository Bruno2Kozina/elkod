import styled from '@emotion/styled'
import { devices } from 'parameters/general'

export const Section = styled.section`
	width: 100%;
	padding: 60px 20px;
	background-color: #f0f0f6;
	display: flex;
	flex-direction: column;
	gap: 80px;
`

export const SectionWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`

export const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
	gap: 40px;
	width: 100%;
	max-width: 1200px;
`

export const Card = styled.div`
	position: relative;
	border-radius: 16px;
	overflow: hidden;
	box-shadow: 0 8px 25px rgba(0, 0, 0, 0.05);
	transition: transform 0.3s ease, box-shadow 0.3s ease;

	&:hover {
		transform: translateY(-6px);
		box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);
	}

	&:hover .overlay {
		opacity: 1;
	}
`

export const TextContainer = styled.div`
	color: #fff;
	h3 {
		font-size: 1.2rem;
		font-weight: 600;
		margin: 0 0 4px 0;
	}
	p {
		font-size: 0.95rem;
		opacity: 0.9;
		margin: 0;
	}
`

export const ImageWrapper = styled.div`
	position: relative;
	width: 100%;
	height: 260px;
	border-radius: 16px 16px 0 0;
	overflow: hidden;
`

export const Overlay = styled.div`
	position: absolute;
	inset: 0;
	background: linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.2));
	display: flex;
	align-items: flex-end;
	padding: 16px;
`

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
