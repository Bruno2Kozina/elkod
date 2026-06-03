import { LegalLayout } from './LegalLayout'

export const CookiesScreen = () => {
	return (
		<LegalLayout title="Politika kolačića">
			<p className="updated">Zadnje ažuriranje: lipanj 2025.</p>

			<p>
				Kolačići (engl. „cookies”) male su tekstualne datoteke koje se pohranjuju na vašem uređaju prilikom posjeta internetskoj stranici. Ova
				Politika objašnjava koje kolačiće koristimo i kako možete upravljati svojim odabirom, u skladu sa Zakonom o elektroničkim komunikacijama i
				GDPR-om.
			</p>

			<h2>1. Vrste kolačića koje koristimo</h2>
			<p>
				<strong>Nužni kolačići</strong> — potrebni su za ispravan rad stranice i pamćenje vašeg odabira o kolačićima. Za njih nije potrebna privola.
				Među njima je i lokalna pohrana vašeg izbora privole (<em>elkod-cookie-consent</em>).
			</p>
			<p>
				<strong>Kolačići trećih strana (uz privolu)</strong> — učitavaju se tek nakon što date privolu:
			</p>
			<ul>
				<li>
					<strong>Google Maps</strong> — na stranici Kontakt prikazuje se interaktivna karta. Učitavanjem karte Google može postaviti kolačiće i
					obraditi vašu IP adresu. Više informacija:{' '}
					<a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
						policies.google.com/privacy
					</a>
					.
				</li>
			</ul>
			<p>Stranica ne koristi analitičke ni marketinške kolačiće (npr. Google Analytics, Facebook Pixel).</p>

			<h2>2. Upravljanje privolom</h2>
			<p>
				Pri prvom posjetu prikazuje se obavijest o kolačićima na kojoj možete prihvatiti ili odbiti kolačiće trećih strana. Ako odbijete, karta se
				neće učitati dok je ručno ne odobrite. Svoj izbor možete promijeniti u bilo kojem trenutku brisanjem podataka stranice u svom pregledniku,
				nakon čega će se obavijest ponovno prikazati.
			</p>

			<h2>3. Upravljanje kolačićima u pregledniku</h2>
			<p>
				Kolačiće možete blokirati ili izbrisati i putem postavki svog internetskog preglednika. Imajte na umu da onemogućavanje pojedinih kolačića
				može utjecati na funkcionalnost stranice.
			</p>

			<h2>4. Izmjene</h2>
			<p>Ovu Politiku kolačića možemo povremeno ažurirati. Datum posljednje izmjene naveden je na vrhu stranice.</p>

			<h2>5. Kontakt</h2>
			<p>
				Za pitanja o kolačićima i zaštiti podataka obratite se na <a href="mailto:damir.kozina@st.t-com.hr">damir.kozina@st.t-com.hr</a>. Vidi i{' '}
				<a href="/politika-privatnosti">Politiku privatnosti</a>.
			</p>
		</LegalLayout>
	)
}
