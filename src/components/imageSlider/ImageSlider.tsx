import { useState } from 'react'
import { SliderContainer, SliderImage } from './ImageSlider.style'
import Slider from 'react-slick'

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
				<path d="M16 4 L8 12 L16 20" stroke="#EAFDFC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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
				<path d="M8 4 L16 12 L8 20" stroke="#EAFDFC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
			</svg>
		</button>
	)
}
interface Props {
	images: string[]
}
const ImageSlider = ({ images }: Props) => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: false,
		autoplaySpeed: 3000,
		prevArrow: <CustomPrevArrow />, // Custom left arrow
		nextArrow: <CustomNextArrow /> // Custom right arrow
	}

	// Array of images for the slider

	return (
		<SliderContainer>
			<Slider {...settings} prevArrow={<CustomPrevArrow />} nextArrow={<CustomNextArrow />}>
				{images.map((src, index) => (
					<div key={index}>
						<SliderImage src={src} alt={`Project Image ${index + 1}`} />
					</div>
				))}
			</Slider>
		</SliderContainer>
	)
}

export default ImageSlider
