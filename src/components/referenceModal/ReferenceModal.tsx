import {
	ModalOverlay,
	ModalContent,
	BottomSection,
	ModalTitleDescContainer,
	Title,
	Desc,
	BottomSectionContainer,
	BottomSectionContainerLeft,
	BottomSectionContainerRight,
	DataTitle,
	DataValue,
	SingleDataWrapper,
	LongDescContainer,
	LongDescContent,
	LongDescTitle
} from './ReferenceModal.style'
import { Reference } from 'contentful/types/CustomTypes'
import ImageSlider from 'components/imageSlider/ImageSlider'
import { RichText } from 'components/richText/RichText'
import { useState } from 'react'
import { MinusIcon } from 'icons/MinusIcon'
import { PlusIcon } from 'icons/PlusIcon'

interface ModalProps {
	isOpen: boolean
	onClose: () => void
	project: Reference | null
}

const ReferenceModal: React.FC<ModalProps> = ({ isOpen, onClose, project }) => {
	const [isOpenAccordion, setIsOpenAccordion] = useState(false)
	if (!isOpen || !project) return null
	return (
		<ModalOverlay onClick={onClose}>
			<ModalContent onClick={e => e.stopPropagation()}>
				<ImageSlider images={project.images} />
				<BottomSection>
					<button className="modal-close" onClick={onClose}>
						X
					</button>
					<ModalTitleDescContainer>
						<Title>{project.projectLongName}</Title>
						<Desc>
							{project.projectStages.map((stage, index) => (
								<span key={stage}>
									{stage}
									{index !== project.projectStages.length - 1 && ' - '}
								</span>
							))}
						</Desc>
					</ModalTitleDescContainer>
					<BottomSectionContainer>
						<BottomSectionContainerLeft>
							<SingleDataWrapper>
								<DataTitle>Investitor:</DataTitle>
								<DataValue>{project?.investors && project?.investors.map(investor => investor.fields.name).join(', ')}</DataValue>
							</SingleDataWrapper>
							<SingleDataWrapper>
								<DataTitle>Lokacija:</DataTitle>
								<DataValue>{project.projectLocation}</DataValue>
							</SingleDataWrapper>
							<SingleDataWrapper>
								<DataTitle>Vrijeme izrade projekta:</DataTitle>
								<DataValue>{project.date ? project.date : ''}</DataValue>
							</SingleDataWrapper>
						</BottomSectionContainerLeft>
						<BottomSectionContainerRight>
							<SingleDataWrapper>
								<DataTitle>Partneri:</DataTitle>
								{project.partners && project.partners.map(partner => <DataValue key={partner}>{partner}</DataValue>)}
							</SingleDataWrapper>
							<SingleDataWrapper>
								<DataTitle>{project.projectType === 'projektiranje' ? 'Glavni projektant:' : 'Nadzorni inženjeri'}</DataTitle>
								<DataValue>{project.leadEngineer}</DataValue>
							</SingleDataWrapper>
						</BottomSectionContainerRight>
					</BottomSectionContainer>
					<LongDescContainer>
						<LongDescTitle onClick={() => setIsOpenAccordion(!isOpenAccordion)}>
							{isOpenAccordion ? <MinusIcon /> : <PlusIcon />} <span>O PROJEKTU</span>
						</LongDescTitle>
						<LongDescContent isOpen={isOpenAccordion}>
							<RichText content={project.longDescription} />
						</LongDescContent>
					</LongDescContainer>
				</BottomSection>
			</ModalContent>
		</ModalOverlay>
	)
}

export default ReferenceModal
