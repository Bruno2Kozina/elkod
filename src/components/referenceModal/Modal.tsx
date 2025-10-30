import ImageSlider2 from 'components/imageSlider/ImageSlider2'
import {
	ModalOverlay,
	ModalContent,
	BottomSection,
	ModalTitleDescContainer,
	Title,
	BottomSectionContainer,
	Description,
	Spec,
	BottomGroup,
	BottomTitle
} from './Modal.style'
import { Limitator } from 'types/types'

interface ModalProps {
	isOpen: boolean
	onClose: () => void
	data: Limitator | null
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, data }) => {
	if (!isOpen || !data) return null
	return (
		<ModalOverlay onClick={onClose}>
			<ModalContent onClick={e => e.stopPropagation()}>
				<ImageSlider2 images={data.images} imagesAlt={data.imagesAlt} />
				<BottomSection>
					<button className="modal-close" onClick={onClose}>
						X
					</button>
					<ModalTitleDescContainer>
						<Title>{data.title}</Title>
					</ModalTitleDescContainer>
					<BottomSectionContainer>
						<BottomGroup>
							<BottomTitle>Opis:</BottomTitle>
							<Description>{data.longDescription}</Description>
						</BottomGroup>
						<BottomGroup>
							<BottomTitle>Specifikacije:</BottomTitle>
							<Spec>
								{data.specifikacije.map(spec => (
									<span key={spec}>- {spec}</span>
								))}
							</Spec>
						</BottomGroup>
					</BottomSectionContainer>
				</BottomSection>
			</ModalContent>
		</ModalOverlay>
	)
}

export default Modal
