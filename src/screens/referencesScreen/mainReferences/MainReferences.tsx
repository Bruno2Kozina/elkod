import React, { useEffect, useState } from 'react'
import { SingleReference } from './SingleReference'
import { MainReferencesContainer, MainReferencesWrapper, Tab, Tabs, TabsContainer } from './MainReferences.style'
import ReferenceModal from 'components/referenceModal/ReferenceModal'
import { Reference } from 'contentful/types/CustomTypes'

const TABS = [
	{ key: 'projektiranje', label: 'Projektiranje' },
	{ key: 'strucni-nadzor', label: 'Stručni nadzor' }
]

const MainReferences = ({ references, isLoading }: { references: Reference[]; isLoading: boolean }) => {
	const [selectedProject, setSelectedProject] = useState<Reference | null>(null)
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
	const [activeTab, setActiveTab] = useState<string>('projektiranje')

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

	const openModal = (project: Reference) => {
		setSelectedProject(project)
		setIsModalOpen(true)
	}

	const closeModal = () => {
		setIsModalOpen(false)
		setSelectedProject(null)
	}

	const filteredReferences = references
		.filter(reference => reference.projectType === activeTab)
		.slice() // kopija arraya
		.sort((a, b) => Number(a.id) - Number(b.id))
	return (
		<div>
			<TabsContainer>
				<Tabs>
					{TABS.map(tab => (
						<Tab key={tab.key} active={activeTab === tab.key} onClick={() => setActiveTab(tab.key)}>
							{tab.label}
						</Tab>
					))}
				</Tabs>
			</TabsContainer>
			<MainReferencesContainer>
				<MainReferencesWrapper>
					{isLoading && <p>Loading...</p>}
					{filteredReferences.map((reference: Reference) => (
						<SingleReference data={reference} onClick={() => openModal(reference)} key={reference.id} />
					))}
				</MainReferencesWrapper>
				<ReferenceModal isOpen={isModalOpen} onClose={closeModal} project={selectedProject} />
			</MainReferencesContainer>
		</div>
	)
}

export default MainReferences
