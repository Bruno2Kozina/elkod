import type { Metadata } from 'next'
import { CookiesScreen } from 'screens/legalScreen/CookiesScreen'

export const metadata: Metadata = {
	title: 'Politika kolačića | ELKOD',
	description: 'Politika kolačića obrta ELKOD — koje kolačiće koristimo i kako upravljati privolom.',
	robots: { index: true, follow: true }
}

export default function Kolacici() {
	return <CookiesScreen />
}
