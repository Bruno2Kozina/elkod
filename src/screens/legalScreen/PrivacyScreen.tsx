import { LegalLayout } from './LegalLayout'

export const PrivacyScreen = () => {
	return (
		<LegalLayout title="Politika privatnosti">
			<p className="updated">Zadnje ažuriranje: lipanj 2025.</p>

			<p>
				Ova Politika privatnosti objašnjava na koji način obrt ELKOD prikuplja, koristi i štiti osobne podatke posjetitelja ove internetske
				stranice, u skladu s Uredbom (EU) 2016/679 (Opća uredba o zaštiti podataka — GDPR) te Zakonom o provedbi Opće uredbe o zaštiti podataka.
			</p>

			<h2>1. Voditelj obrade podataka</h2>
			<p>
				ELKOD — obrt za elektroniku
				<br />
				Ulica Sv. Mihovila 28, 21240 Trilj, Hrvatska
				<br />
				OIB: 05532514124
				<br />
				Vlasnik: Damir Kozina, dipl. ing.
				<br />
				E-mail: <a href="mailto:damir.kozina@st.t-com.hr">damir.kozina@st.t-com.hr</a>
				<br />
				Telefon: <a href="tel:+385955863015">+385 95 586 3015</a>
			</p>

			<h2>2. Koje podatke prikupljamo</h2>
			<p>
				Ova stranica nema kontakt obrazac niti korisničke račune i ne prikuplja osobne podatke putem obrazaca. Osobne podatke obrađujemo samo ako
				nam se sami obratite:
			</p>
			<ul>
				<li>
					<strong>Podaci iz vaše komunikacije</strong> — ako nas kontaktirate e-mailom ili telefonom, obrađujemo podatke koje nam pri tome
					dostavite (ime, kontakt podaci, sadržaj upita).
				</li>
				<li>
					<strong>Tehnički podaci</strong> — pri posjetu stranici poslužitelj može privremeno bilježiti tehničke podatke (IP adresa, vrsta
					preglednika) nužne za sigurnost i ispravan rad stranice.
				</li>
				<li>
					<strong>Podaci trećih strana</strong> — na stranici Kontakt, uz vašu privolu, prikazuje se Google Maps karta koja može prikupljati
					podatke kako je opisano u <a href="/kolacici">Politici kolačića</a>.
				</li>
			</ul>

			<h2>3. Svrhe i pravna osnova obrade</h2>
			<ul>
				<li>Odgovaranje na upite i poslovna komunikacija — pravna osnova: poduzimanje radnji na vaš zahtjev / legitimni interes.</li>
				<li>Osiguravanje sigurnosti i ispravnog rada stranice — pravna osnova: legitimni interes (čl. 6. st. 1. t. f GDPR-a).</li>
				<li>Učitavanje sadržaja trećih strana (karta) — pravna osnova: vaša privola (čl. 6. st. 1. t. a GDPR-a).</li>
			</ul>

			<h2>4. Razdoblje čuvanja</h2>
			<p>
				Osobne podatke čuvamo samo onoliko dugo koliko je potrebno za ostvarenje navedenih svrha ili koliko zahtijevaju zakonski propisi, nakon
				čega ih brišemo ili anonimiziramo.
			</p>

			<h2>5. Primatelji podataka</h2>
			<p>
				Vaše podatke ne prodajemo. Podaci se mogu dijeliti s pružateljima tehničkih usluga (npr. usluga hostinga, Google Maps) isključivo u
				mjeri nužnoj za pružanje usluge te s nadležnim tijelima kada to nalaže zakon.
			</p>

			<h2>6. Vaša prava</h2>
			<p>U skladu s GDPR-om imate pravo na:</p>
			<ul>
				<li>pristup svojim podacima;</li>
				<li>ispravak netočnih podataka;</li>
				<li>brisanje podataka („pravo na zaborav”);</li>
				<li>ograničenje obrade;</li>
				<li>prijenos podataka;</li>
				<li>prigovor na obradu;</li>
				<li>povlačenje privole u svakom trenutku, bez utjecaja na zakonitost prethodne obrade.</li>
			</ul>
			<p>
				Za ostvarivanje prava obratite se na <a href="mailto:damir.kozina@st.t-com.hr">damir.kozina@st.t-com.hr</a>. Također imate pravo podnijeti
				pritužbu nadzornom tijelu — Agenciji za zaštitu osobnih podataka (AZOP), <a href="https://azop.hr" target="_blank" rel="noopener noreferrer">azop.hr</a>.
			</p>

			<h2>7. Kolačići</h2>
			<p>
				Stranica koristi kolačiće na način opisan u <a href="/kolacici">Politici kolačića</a>.
			</p>

			<h2>8. Izmjene Politike privatnosti</h2>
			<p>
				Zadržavamo pravo izmjene ove Politike privatnosti. Sve izmjene objavljujemo na ovoj stranici uz naznaku datuma posljednjeg ažuriranja.
			</p>
		</LegalLayout>
	)
}
