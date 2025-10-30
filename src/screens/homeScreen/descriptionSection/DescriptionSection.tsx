import {
	ImageContainer,
	TextWrapper,
	DescSectionTitle,
	DescSectionDesc,
	ContentContainer,
	MainContainer,
	ImageWrapper,
	ReverseImageContainer,
	MainContentContainer,
	MainDescription
} from './DescriptionSection.style'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Limitator } from '../../../types/types'
import { limitatori } from '../data'
import Modal from 'components/referenceModal/Modal'

interface Props {
	scrollRef: React.RefObject<HTMLDivElement>
}
export const DescriptionSection = ({ scrollRef }: Props) => {
	const [selectedLimitator, setSelectedLimitator] = useState<Limitator | null>(null)

	const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

	useEffect(() => {
		if (isModalOpen) {
			document.body.style.overflow = 'hidden' // Disable scroll
		} else {
			document.body.style.overflow = 'auto' // Enable scroll
		}

		return () => {
			document.body.style.overflow = 'auto' // Cleanup when component unmounts
		}
	}, [isModalOpen])

	const openModal = (limitator: Limitator) => {
		setSelectedLimitator(limitator)
		setIsModalOpen(true)
	}

	const closeModal = () => {
		setIsModalOpen(false)
		setSelectedLimitator(null)
	}

	return (
		<MainContainer>
			<MainDescription ref={scrollRef}>
				<DescSectionTitle>O Limitatorima</DescSectionTitle>
				<p>
					Nakon dugogodišnjeg iskustva u području elektronike, ELKOD je razvio i započeo vlastitu proizvodnju limitatora nivoa zvuka, uređaja koji su
					nastali kao odgovor na zahtjeve i potrebe za ispunjavanjem minimalnih tehničkih uvjeta u ugostiteljskim objektima. Naši limitatori izrađeni
					su u skladu s važećim CE normama i tehničkim propisima, te udovoljavaju svim zahtjevima vezanim uz kontrolu i ograničenje razine zvuka u
					skladu s propisanim granicama. Zahvaljujući vlastitom razvoju i proizvodnji, ELKODovi limitatori odlikuju se pouzdanom funkcionalnošću,
					jednostavnom instalacijom i dugotrajnim radom. Uređaji su konstruirani tako da osiguraju stabilnu i točnu regulaciju razine zvuka, bez
					narušavanja kvalitete audio signala. Limitatori su namijenjeni za restorane, hotele, barove, noćne klubove, kao i za koncertne prostore te
					druge objekte u kojima je potrebno kontrolirati razinu buke. U ponudi su tri modela limitatora, prilagođena različitim tipovima prostora i
					tehničkim zahtjevima korisnika. Zahvaljujući kvaliteti izrade i pouzdanosti u radu, ELKODovi limitatori nivoa zvuka uspješno se izvoze i u
					susjedne države, gdje su prepoznati kao praktično i učinkovito rješenje za nadzor i ograničenje razine zvuka u ugostiteljstvu i zabavnoj
					industriji.
				</p>
			</MainDescription>
			<MainContentContainer>
				<ContentContainer>
					<ImageContainer onClick={() => openModal(limitatori[0])}>
						<ImageWrapper>
							<Image src={limitatori[0].images[0]} alt={limitatori[0].imagesAlt[0]} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
						</ImageWrapper>
						<TextWrapper>
							<DescSectionTitle>{limitatori[0].title}</DescSectionTitle>
							<DescSectionDesc>{limitatori[0].shortDescription}</DescSectionDesc>
						</TextWrapper>
					</ImageContainer>
					<ReverseImageContainer onClick={() => openModal(limitatori[1])}>
						<TextWrapper>
							<DescSectionTitle>{limitatori[1].title}</DescSectionTitle>
							<DescSectionDesc>{limitatori[1].shortDescription}</DescSectionDesc>
						</TextWrapper>
						<ImageWrapper>
							<Image src={limitatori[1].images[0]} alt={limitatori[1].imagesAlt[0]} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
						</ImageWrapper>
					</ReverseImageContainer>
					<ImageContainer onClick={() => openModal(limitatori[2])}>
						<ImageWrapper>
							<Image src={limitatori[2].images[0]} alt={limitatori[2].imagesAlt[0]} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
						</ImageWrapper>
						<TextWrapper>
							<DescSectionTitle>{limitatori[2].title}</DescSectionTitle>
							<DescSectionDesc>{limitatori[2].shortDescription}</DescSectionDesc>
						</TextWrapper>
					</ImageContainer>
					<ReverseImageContainer onClick={() => openModal(limitatori[3])}>
						<TextWrapper>
							<DescSectionTitle>{limitatori[3].title}</DescSectionTitle>
							<DescSectionDesc>{limitatori[3].shortDescription}</DescSectionDesc>
						</TextWrapper>
						<ImageWrapper>
							<Image src={limitatori[3].images[0]} alt={limitatori[3].imagesAlt[0]} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
						</ImageWrapper>
					</ReverseImageContainer>
					<Modal isOpen={isModalOpen} onClose={closeModal} data={selectedLimitator} />
				</ContentContainer>
			</MainContentContainer>
		</MainContainer>
	)
}
