'use client'

import Link from 'next/link'
import { useCookieConsent } from 'hooks'
import { MapContainer, Placeholder, Button } from './MapConsent.style'

export default function MapConsent() {
	const { consent, accept } = useCookieConsent()

	if (consent === 'accepted') {
		return (
			<MapContainer>
				<iframe
					width="100%"
					height="400"
					style={{ border: 0 }}
					loading="lazy"
					allowFullScreen
					referrerPolicy="no-referrer-when-downgrade"
					title="Lokacija ELKOD, Trilj"
					src="https://www.google.com/maps?q=Svetog+Mihovila+28,+Trilj&z=15&output=embed"></iframe>
			</MapContainer>
		)
	}

	return (
		<Placeholder>
			<p>
				Karta se učitava preko Google Maps usluge koja postavlja kolačiće trećih strana. Za prikaz karte potrebna je vaša privola. Više u{' '}
				<Link href="/kolacici">Politici kolačića</Link>.
			</p>
			<Button onClick={accept}>Prikaži kartu</Button>
		</Placeholder>
	)
}
