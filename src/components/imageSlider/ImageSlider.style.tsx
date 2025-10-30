import styled from '@emotion/styled'
import { devices } from 'parameters/general'

export const SliderContainer = styled.div`
	max-width: 1200px;
	width: 100%;

	.slick-prev::before,
	.slick-next::before {
		display: none !important;
	}
`

export const ArrowBase = styled.button`
	position: absolute;
	border: none;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	transition: 0.3s ease-in-out;
	z-index: 2;
	font-size: 40px;

	svg {
		width: 24px;
		height: 24px;
		fill: black; /* Change arrow color */
	}

	@media ${devices.laptop} {
		display: none !important;
	}
`

export const CustomPrevArrow = styled(ArrowBase)`
	left: 10px;
`
export const SliderImage = styled.img`
	width: 100%;
	object-fit: cover;
`
export const CustomNextArrow = styled(ArrowBase)`
	right: 10px;
`
