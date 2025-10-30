import limitatorEl10_4_1 from 'public/images/EL10-4/limitatorEL10-4-1.jpg'
import limitatorEl10_4_2 from 'public/images/EL10-4/limitatorEL10-4-2.jpg'
import limitatorEl10_4_3 from 'public/images/EL10-4/limitatorEL10-4-3.jpg'
import limitatorEl10_4_4 from 'public/images/EL10-4/limitatorEL10-4-4.jpg'
import limitatorEl10_4_5 from 'public/images/EL10-4/limitatorEL10-4-5.jpg'
import limitatorEl10_20_1 from 'public/images/EL10-20/limitatorEL10-20-1.jpg'
import limitatorEl10_20_2 from 'public/images/EL10-20/limitatorEL10-20-2.jpg'
import limitatorEl10_20_3 from 'public/images/EL10-20/limitatorEL10-20-3.jpg'
import limitatorEl10_20_4 from 'public/images/EL10-20/limitatorEL10-20-4.jpg'
import limitatorEl10_20_5 from 'public/images/EL10-20/limitatorEL10-20-5.jpg'
import limitatorEl18_1 from 'public/images/EL18/limitatorEL18-1.jpg'
import limitatorEl18_2 from 'public/images/EL18/limitatorEL18-2.jpg'
import limitatorEl18_3 from 'public/images/EL18/limitatorEL18-3.jpg'
import limitatorEl18_4 from 'public/images/EL18/limitatorEL18-4.jpg'
import limitatorEl18_5 from 'public/images/EL18/limitatorEL18-5.jpg'
import limitatorEl18T_1 from 'public/images/EL18T/limitatorEL18T-1.jpg'
import limitatorEl18T_2 from 'public/images/EL18T/limitatorEL18T-2.jpg'
import limitatorEl18T_3 from 'public/images/EL18T/limitatorEL18T-3.jpg'
import limitatorEl18T_4 from 'public/images/EL18T/limitatorEL18T-4.jpg'
import limitatorEl18T_5 from 'public/images/EL18T/limitatorEL18T-5.jpg'
import { Limitator } from 'types/types'

export const limitatori: Limitator[] = [
	{
		id: 1,
		title: 'EL10-2',
		shortDescription:
			'Model EL10-2 limitator nivoa zvuka namijenjen ograničavanju razine zvuka u ugostiteljskim i drugim objektima koje za ozvučenje koriste pojačala ili muzičku liniju sa dva izlaza za zvučnike.',
		longDescription:
			'Model EL10-2 limitator nivoa zvuka namijenjen ograničavanju razine zvuka u ugostiteljskim i drugim objektima koje za ozvučenje koriste pojačala ili muzičku liniju sa dva izlaza za zvučnike. Uređaj ima indikator nivoa zvuka, a nakon prelaska u nedozvoljeni nivo (65dB) uređaj stišava nivo zvuka za 6dB i održava razinu zvuka ispod ograničenog nivoa. Limitator ima dva kabela koji se spajaju na izlaz pojačala ili muzičke linije, a zvučnici se spajaju u kutiju limitatora nivoa zvuka, nakon čega se kutija zatvori i zaštiti sigurnosnom naljepnicom.',
		images: [limitatorEl10_4_1, limitatorEl10_4_2, limitatorEl10_4_3, limitatorEl10_4_4, limitatorEl10_4_5],
		imagesAlt: ['limitatorEl10_4_1', 'limitatorEl10_4_2', 'limitatorEl10_4_3', 'limitatorEl10_4_4', 'limitatorEl10_4_5'],
		specifikacije: [
			'Nazivni napon: 180-240V',
			'Potrošnja: 1W',
			'Podešavanje limitiranja: 40-95dB',
			'Vrijeme reakcije: 2-4s',
			'Dimenzije: 5cmx11cmx14cm'
		]
	},
	{
		id: 2,
		title: 'EL10-4',
		shortDescription:
			'Model EL10-4 limitator nivoa zvuka namijenjen ograničavanju razine zvuka u ugostiteljskim i drugim objektima koji za ozvučenje koriste pojačalo ili muzičku liniju sa četiri izlaza za zvučnike.',
		longDescription:
			'Model EL10-4 limitator nivoa zvuka namijenjen ograničavanju razine zvuka u ugostiteljskim i drugim objektima koji za ozvučenje koriste pojačalo ili muzičku liniju sa četiri izlaza za zvučnike. Uređaj ima indikator nivoa zvuka, a nakon prelaska u nedozvoljeni nivo (65dB) uređaj utišava nivo zvuka za 6dB i održava razinu zvuka ispod ograničenog nivoa. Limitator ima četiri kabela koji se spajaju na izlaz pojačala ili muzičke linije, a zvučnici se spajaju u kutiju limitatora nivoa zvuka, nakon čega se kutija zatvori i zaštiti sigurnosnom naljepnicom.',
		images: [limitatorEl10_20_1, limitatorEl10_20_2, limitatorEl10_20_3, limitatorEl10_20_4, limitatorEl10_20_5],
		imagesAlt: ['limitator EL10-20_1, limitator EL10-20_2, limitator EL10-20_3, limitator EL10-20_4, limitator EL10-20_5'],
		specifikacije: [
			'Nazivni napon: 180-240V',
			'Potrošnja: 1,5W',
			'Podešavanje limitiranja: 40-90dB',
			'Vrijeme reakcije: 2-4s',
			'Dimenzije: 5,5cmx14,5cmx15,5cm'
		]
	},

	{
		id: 3,
		title: 'EL18',
		shortDescription:
			'Model EL18 limitator nivoa zvuka namijenjen ograničavanju razine zvuka u ugostiteljskim i drugim objektima koji za ozvučenje koriste kompliciranije razglasne sisteme. Odnosno više pojačala, aktivne zvučnike ili pak kombinaciju aktivnih i pasivnih zvučnika. ',
		longDescription:
			'Model EL18 limitator nivoa zvuka namijenjen ograničavanju razine zvuka u ugostiteljskim i drugim objektima koji za ozvučenje koriste kompliciranije razglasne sisteme. Odnosno više pojačala, aktivne zvučnike ili pak kombinaciju aktivnih i pasivnih zvučnika. Ovaj model spaja se na linijski izlaz mixete koji ide prema pojačalima, te se spaja preko XLR-a na pojačala ili  distributere zvuka. Limitator konstantno prati nivo signala koji ide iz mixete prema pojačalima. U slučaju prekoračenja dozvoljenog nivoa zvuka (threshold) automatski smanjuje nivo signala (2s-10s), te nivo signala dovodi u dozvoljene granice.',
		images: [limitatorEl18_1, limitatorEl18_2, limitatorEl18_3, limitatorEl18_4, limitatorEl18_5],
		imagesAlt: ['limitator EL18_1, limitator EL18_2, limitator EL18_3, limitator EL18_4, limitator EL18_5'],
		specifikacije: [
			'Nazivni napon: 180-240V',
			'Potrošnja: 1.5W',
			'Podešavanje limitiranja: 40-100dB',
			'Vrijeme reakcije (attack time): 2-10s',
			'vrijeme otpuštanja (release time): 10-180s',
			'XLR Balanced Input/Output'
		]
	},

	{
		id: 4,
		title: 'EL18T',
		shortDescription:
			'Model EL18T limitator nivoa zvuka namijenjen ograničavanju razine zvuka u ugostiteljskim i drugim objektima koji za ozvučenje koriste kompliciranije razglasne sisteme. Odnosno više pojačala, aktivne zvučnike ili pak kombinaciju aktivnih i pasivnih zvučnika. Nadogradjena verzija 18 sa integriranim timerom.',
		longDescription:
			'Model EL18T limitator nivoa zvuka namijenjen ograničavanju razine zvuka u ugostiteljskim i drugim objektima koji za ozvučenje koriste kompliciranije razglasne sisteme. Odnosno više pojačala, aktivne zvučnike ili pak kombinaciju aktivnih i pasivnih zvučnika. Ovaj model spaja se na linijski izlaz mixete koji ide prema pojačalima, te se spaja preko XLR-a na pojačala ili  distributere zvuka. Limitator konstantno prati nivo signala koji ide iz mixete prema pojačalima. U slučaju prekoračenja dozvoljenog nivoa zvuka (threshold) automatski smanjuje nivo signala (2s-10s), te nivo signala dovodi u dozvoljene granice. EL18T ima integriran elektronski vremenski prekidač koji omogućava dva režima rada. Idealan za ugostiteljske objekte koji rade kao caffe bar-ovi (65dB), te se u određeno vrijeme prebacuju u noćni klub (90dB).',
		images: [limitatorEl18T_1, limitatorEl18T_2, limitatorEl18T_3, limitatorEl18T_4, limitatorEl18T_5],
		imagesAlt: ['limitator EL18T_1, limitator EL18T_2, limitator EL18T_3, limitator EL18T_4, limitator EL18T_5'],
		specifikacije: [
			'Nazivni napon: 180-240V',
			'Potrošnja: 1,5W',
			'Podešavanje limitiranja: 40-100dB',
			'Vrijeme reakcije (attack time): 2-10s',
			'Vrijeme otpuštanja (release time): 10-180s',
			'XLR Balanced Input/Output'
		]
	}
]
