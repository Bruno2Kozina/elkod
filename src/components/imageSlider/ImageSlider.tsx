'use client'

import { useState } from 'react'
import { SliderContainer } from './ImageSlider.style'
import { StaticImageData } from 'next/image'

// CHECK GLOBAL STYLES FOR SLICK-PREV AND SLICK-NEXT
const CustomPrevArrow = (props: any) => {
	const [hover, setHover] = useState(false)
	return (
		<button
			{...props}
			className="slick-next"
			style={{
				left: '20px',
				zIndex: 2,
				background: 'none',
				border: 'none',
				transform: hover ? 'scale(1.1)' : 'scale(1)',
				transition: 'transform 0.3s ease'
			}}
			onMouseEnter={() => setHover(true)} // Add hover styles
			onMouseLeave={() => setHover(false)} // Remove hover styles
		>
			<svg width="40" height="40" viewBox="0 0 24 24" fill="none">
				<path d="M16 4 L8 12 L16 20" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
			</svg>
		</button>
	)
}

const CustomNextArrow = (props: any) => {
	const [hover, setHover] = useState(false)
	return (
		<button
			{...props}
			className="slick-next"
			style={{
				right: '40px',
				zIndex: 2,
				background: 'none',
				border: 'none',
				transform: hover ? 'scale(1.1)' : 'scale(1)',
				transition: 'transform 0.3s ease'
			}}
			onMouseEnter={() => setHover(true)} // Add hover styles
			onMouseLeave={() => setHover(false)} // Remove hover styles
		>
			<svg width="40" height="40" viewBox="0 0 24 24" fill="none">
				<path d="M8 4 L16 12 L8 20" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
			</svg>
		</button>
	)
}
interface Props {
	images: StaticImageData[]
	imagesAlt: string[]
}
const ImageSlider = ({ images, imagesAlt }: Props) => {
	return <SliderContainer></SliderContainer>
}
export default ImageSlider
