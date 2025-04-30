import { AllProjects, Reference } from 'contentful/types/CustomTypes'

export const fetchReferences = async (): Promise<Reference[]> => {
	const response = await fetch('/api/references')
	if (!response.ok) {
		throw new Error('Failed to fetch references')
	}
	const data = await response.json()
	return data
}

export const fetchAllProjects = async (): Promise<AllProjects[]> => {
	const response = await fetch('/api/allProjects')
	if (!response.ok) {
		throw new Error('Failed to fetch references')
	}
	const data = await response.json()
	return data
}
