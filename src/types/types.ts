import { StaticImageData } from 'next/image'

export interface Limitator {
	id: number
	title: string
	shortDescription: string
	longDescription: string
	images: StaticImageData[]
	imagesAlt: string[]
	specifikacije: string[]
}

export interface Referenca {
	id: number
	title: string
	type: string
	image: StaticImageData
	imageAlt: string
	location: string
}
