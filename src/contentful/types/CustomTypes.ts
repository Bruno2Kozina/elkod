type Investor = {
	fields: {
		name: string
		image: string // Define a proper type for the investor image
	}
}

export interface Reference {
	id: number
	images: string[]
	projectName: string
	projectLocation: string
	projectLongName: string
	projectStages: string[]
	partners?: string[]
	leadEngineer: string
	longDescription: any
	investors?: Investor[]
	projectType: 'projektiranje' | 'strucni-nadzor'
	date?: string
}

export interface AllProjects {
	glavniProjekti: string[]
	idejniProjekti: string[]
	nadzorniProjekti: string[]
}
