import { NextResponse } from 'next/server'
import { createClient } from 'contentful'
import { TypeAllProjects } from 'contentful/types'

// Initialize Contentful client
const client = createClient({
	space: process.env.CONTENTFUL_SPACE_ID!,
	accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!
})

// Define the GET request handler
export async function GET() {
	try {
		const entries = await client.getEntries<TypeAllProjects<any> & { contentTypeId: string }>({
			content_type: 'allProjects' // Replace with your Contentful model's content type ID
		})

		// Map over the fetched entries to get the relevant data
		const projects = entries.items.map(entry => {
			const allProjects = entry.fields

			return {
				glavniProjekti: allProjects.glavniProjekti,
				idejniProjekti: allProjects.idejniProjekti,
				nadzorniProjekti: allProjects.nadzorniProjekti
			}
		})

		return NextResponse.json(projects) // Return the references data as JSON
	} catch (error) {
		console.error('Error fetching references from Contentful:', error)
		return NextResponse.json({ message: 'Failed to fetch references' }, { status: 500 })
	}
}
