import styled from '@emotion/styled'
import { devices } from 'parameters/general'

export const HeroContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	color: #fff;
	background-image: url('/images/bgImage.png');
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	position: relative;
	padding-top: 180px;
	@media ${devices.laptop} {
		padding-top: 100px;
	}
`

export const HeroContent = styled.div`
	width: 100%;
	padding: 40px 164px 100px;
	display: flex;
	justify-content: center;
	align-items: center;
	max-width: 1440px;
	@media ${devices.laptop} {
		padding: 16px 32px 40px;
	}
`

export const MainContainer = styled.div`
	background-color: #f0f0f6;
	display: flex;
	justify-content: center;
`

export const ContentContainer = styled.div`
	width: 100%;
	max-width: 1112px;
	padding: 80px 164px;

	@media ${devices.laptop} {
		padding: 56px 24px;
	}

	color: rgb(72, 76, 81);
	line-height: 1.8;
	font-size: 1rem;
	letter-spacing: 0.3px;

	h2 {
		color: #000f2b;
		font-size: 24px;
		font-weight: 600;
		letter-spacing: 1px;
		margin: 40px 0 16px;
	}

	h2:first-of-type {
		margin-top: 0;
	}

	p {
		margin-bottom: 16px;
	}

	ul {
		margin: 0 0 16px 20px;
		display: flex;
		flex-direction: column;
		gap: 8px;
	}

	a {
		color: #196b7b;
		text-decoration: underline;
		word-break: break-word;
	}

	.updated {
		font-size: 13px;
		color: #7a7a7a;
		margin-bottom: 40px;
	}
`
