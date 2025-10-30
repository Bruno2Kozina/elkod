import styled from '@emotion/styled'
import { Swiper } from 'swiper/react'

interface SwipperProps {
	zIndex?: number
}

export const CarouselWrapper = styled.div`
	width: 100%;
	padding: 20px 0;
`

export const StyledSwiper = styled(Swiper)`
	width: 100%;
	padding: 0 10px;
`

export const SwiperSlideWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 250px;
	position: relative;
`

export const SwipperImageWrapper = styled.div<SwipperProps>`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	overflow: hidden;
	border-radius: 8px;
	z-index: ${props => props.zIndex || 1};
`

export const SwiperSlide = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
`
