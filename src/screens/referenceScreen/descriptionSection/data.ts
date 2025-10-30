import VanillaClub from 'public/images/reference/vanillaClub.jpg'
import KlubTristoPet from 'public/images/reference/305.jpg'
import HulaHula from 'public/images/reference/hulahula.jpg'
import Laganini from 'public/images/reference/laganini.jpg'
import Kauri from 'public/images/reference/kauri.jpg'
import Antique from 'public/images/reference/antique.jpg'
import OliveTree from 'public/images/reference/olivetree.jpg'
import Roof from 'public/images/reference/roof68.jpg'
import HotelPresident from 'public/images/reference/hotelPresident.jpg'
import HotelPark from 'public/images/reference/hotelPark.jpg'
import GumaBar from 'public/images/reference/gumaBar.jpg'
import DvaJedanDvaBar from 'public/images/reference/212bar.jpg'
import { Referenca } from 'types/types'

export const reference: Referenca[] = [
	{
		id: 1,
		title: 'Vanilla Club',
		type: 'Noćni klub',
		image: VanillaClub,
		imageAlt: 'Vanilla Club',
		location: 'Split, Croatia'
	},
	{
		id: 2,
		title: 'Disco Club 305 A.D.',
		type: 'Noćni klub',
		image: KlubTristoPet,
		imageAlt: '305 A.D.',
		location: 'Split, Croatia'
	},
	{
		id: 3,
		title: 'Hula-Hula Beach Bar',
		type: 'Beach club',
		image: HulaHula,
		imageAlt: 'Hula-Hula',
		location: 'Hvar, Croatia'
	},
	{
		id: 4,
		title: 'Laganini beach club',
		type: 'Beach club',
		image: Laganini,
		imageAlt: 'Laganini',
		location: 'Ciovo, Croatia'
	},
	{
		id: 5,
		title: 'KAURI',
		type: 'Noćni klub i kafić',
		image: Kauri,
		imageAlt: 'KAURI',
		location: 'Split, Croatia'
	},
	{
		id: 6,
		title: 'Antique Bar',
		type: 'Kafić',
		image: Antique,
		imageAlt: 'Antique',
		location: 'Split, Croatia'
	},
	{
		id: 7,
		title: 'OliveTree',
		type: 'Kafić',
		image: OliveTree,
		imageAlt: 'OliveTree',
		location: 'Split, Croatia'
	},
	{
		id: 8,
		title: 'ROOF68',
		type: 'Kafić',
		image: Roof,
		imageAlt: 'ROOF68',
		location: 'Split, Croatia'
	},
	{
		id: 9,
		title: 'Hotel President',
		type: 'Hotel',
		image: HotelPresident,
		imageAlt: 'hotel president',
		location: 'Split, Croatia'
	},
	{
		id: 10,
		title: 'Hotel Park',
		type: 'Hotel',
		image: HotelPark,
		imageAlt: 'hotel park',
		location: 'Split, Croatia'
	},
	{
		id: 11,
		title: 'Guma Bar',
		type: 'Kafić',
		image: GumaBar,
		imageAlt: 'guma bar',
		location: 'Zadar, Croatia'
	},
	{
		id: 12,
		title: '212 Bar',
		type: 'Kafić',
		image: DvaJedanDvaBar,
		imageAlt: '212 bar',
		location: 'Omiš, Croatia'
	}
]
export const sveZnacajneReference: string[] = [
	'Vanilla Club',
	'Disco Club 305 A.D.',
	'Hula hula',
	'Laganini beach bar',
	'Kauri',
	'Antique',
	'Olive tree',
	'Roof 68',
	'Guma bar zadar',
	'Fabrique',
	'Hotel president',
	'Hotel park',
	'212 bar omis',
	'Eol bar',
	'Mind split'
]
