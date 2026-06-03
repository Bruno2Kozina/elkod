'use client'

import Link from 'next/link'
import { useCookieConsent } from 'hooks'
import { Banner, Inner, TextWrapper, Actions, Button } from './CookieConsent.style'

export default function CookieConsent() {
	const { consent, accept, reject } = useCookieConsent()

	// Ne prikazuj dok se ne učita stanje ili ako je korisnik već odlučio
	if (consent === undefined || consent !== null) return null

	return (
		<Banner role="dialog" aria-live="polite" aria-label="Obavijest o kolačićima">
			<Inner>
				<TextWrapper>
					Ova stranica koristi nužne kolačiće za ispravan rad te, uz vašu privolu, kolačiće trećih strana (Google Maps) za prikaz karte na
					stranici Kontakt. Više u <Link href="/kolacici">Politici kolačića</Link> i <Link href="/politika-privatnosti">Politici privatnosti</Link>.
				</TextWrapper>
				<Actions>
					<Button onClick={reject}>Odbij</Button>
					<Button primary onClick={accept}>
						Prihvati
					</Button>
				</Actions>
			</Inner>
		</Banner>
	)
}
