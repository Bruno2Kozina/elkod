import { NextResponse } from 'next/server'
import { createClient } from 'contentful'
import { TypeReferences } from 'contentful/types'

// Initialize Contentful client
const client = createClient({
	space: process.env.CONTENTFUL_SPACE_ID!,
	accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!
})

// Define the GET request handler
export async function GET() {
	try {
		const entries = await client.getEntries<TypeReferences<any> & { contentTypeId: string }>({
			content_type: 'references' // Replace with your Contentful model's content type ID
		})

		// Map over the fetched entries to get the relevant data
		const references = entries.items.map(entry => {
			const reference = entry.fields

			return {
				id: reference.id,
				images: Array.isArray(reference.images) ? (reference.images as any[]).map(image => image.fields.file.url) : [], // Adjust as needed for your image data
				projectName: reference.projectName,
				projectLocation: reference.projectLocation,
				projectLongName: reference.projectLongName,
				projectStages: reference.projectStages,
				partners: reference.partners || [],
				leadEngineer: reference.leadEngineer,
				longDescription: reference.longDescription,
				investors: reference.investors || [],
				projectType: reference.projectType || [],
				date: reference.date || []
			}
		})

		return NextResponse.json(references) // Return the references data as JSON
	} catch (error) {
		console.error('Error fetching references from Contentful:', error)
		return NextResponse.json({ message: 'Failed to fetch references' }, { status: 500 })
	}
}
