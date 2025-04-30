import { NextResponse } from 'next/server'
import { createClient } from 'contentful'

const client = createClient({
	space: process.env.CONTENTFUL_SPACE_ID!,
	accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!
})

export async function GET() {
	try {
		const entries = await client.getEntries()
		return NextResponse.json(entries)
	} catch (error) {
		console.error(' Error fetching data from Contentful:', error)
		return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 })
	}
}
