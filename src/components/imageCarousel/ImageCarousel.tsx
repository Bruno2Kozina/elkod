'use client'

import { StyledSwiper, SwiperSlideWrapper, SwipperImageWrapper, CarouselWrapper } from './ImageCarousel.style'
import { SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import vanilla1 from 'public/images/vanilla1.jpeg'
import vanilla2 from 'public/images/vanilla2.jpeg'
import vanilla3 from 'public/images/vanilla3.jpeg'
import Image from 'next/image'

const images = [
	{ src: vanilla1, alt: 'Vanilla 1' },
	{ src: vanilla2, alt: 'Vanilla 2' },
	{ src: vanilla3, alt: 'Vanilla 3' },
	{ src: vanilla1, alt: 'Vanilla 1' },
	{ src: vanilla2, alt: 'Vanilla 2' },
	{ src: vanilla3, alt: 'Vanilla 3' }
]

const ImageCarousel = () => {
	return (
		<CarouselWrapper>
			<StyledSwiper
				modules={[Navigation, Pagination, Autoplay]}
				spaceBetween={20}
				slidesPerView={3}
				loop
				navigation
				pagination={{ clickable: true }}
				autoplay={{ delay: 3000 }}
				breakpoints={{
					640: { slidesPerView: 1 },
					768: { slidesPerView: 2 },
					1024: { slidesPerView: 3 }
				}}>
				{images.map((img, i) => (
					<SwiperSlide key={i}>
						<SwiperSlideWrapper>
							<SwipperImageWrapper zIndex={i + 1}>
								<Image src={img.src} alt={img.alt} fill style={{ objectFit: 'cover' }} />
							</SwipperImageWrapper>
						</SwiperSlideWrapper>
					</SwiperSlide>
				))}
			</StyledSwiper>
		</CarouselWrapper>
	)
}

export default ImageCarousel
