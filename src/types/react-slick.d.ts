declare module 'react-slick' {
	import { ComponentType } from 'react'

	export type Settings = {
		dots?: boolean
		infinite?: boolean
		speed?: number
		slidesToShow?: number
		slidesToScroll?: number
		autoplay?: boolean
		autoplaySpeed?: number
		nextArrow?: JSX.Element
		prevArrow?: JSX.Element
		[key: string]: any
	}

	export interface SliderRef {
		slickNext: () => void
		slickPrev: () => void
		innerSlider?: any
	}

	const Slider: ComponentType<Settings & { ref?: Ref<SliderRef> }>
	export type { Settings }
	export default Slider
}
