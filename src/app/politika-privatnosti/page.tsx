import type { Metadata } from 'next'
import { PrivacyScreen } from 'screens/legalScreen/PrivacyScreen'

export const metadata: Metadata = {
	title: 'Politika privatnosti | ELKOD',
	description: 'Politika privatnosti obrta ELKOD — kako prikupljamo, koristimo i štitimo osobne podatke u skladu s GDPR-om.',
	robots: { index: true, follow: true }
}

export default function PolitikaPrivatnosti() {
	return <PrivacyScreen />
}
