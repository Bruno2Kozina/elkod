import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import './globals.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Navbar from 'components/navbar/Navbar'
import Footer from 'components/footer/Footer'

const SpaceGrotesk = Space_Grotesk({
	subsets: ['latin'],
	weight: ['400', '700']
})

export const metadata: Metadata = {
	metadataBase: new URL('https://elkod.net'),
	title: 'ELKOD - Limitatori buke | Ugradnja i servis u Hrvatskoj',
	description:
		'ELKOD je specijaliziran za ugradnju i servis limitatora buke u ugostiteljskim objektima, klubovima i restoranima diljem Hrvatske. Profesionalna rješenja za kontrolu razine zvuka.',
	keywords: [
		'limitatori buke',
		'ugradnja limitatora buke',
		'kontrola razine zvuka',
		'ograničenje buke',
		'zvučni limitatori',
		'elektronika za klubove',
		'limitatori za ugostiteljske objekte',
		'ELKOD',
		'limitatori buke Split',
		'limitatori buke Hrvatska',
		'servis limitatora buke',
		'postavljanje limitatora',
		'elkod.net',
		'Damir Kozina'
	],
	authors: [{ name: 'ELKOD', url: 'https://elkod.net' }],
	openGraph: {
		title: 'ELKOD - Limitatori nivoa zvuka',
		description: 'Postavljanje limitatora nivoa zvuka za ugostiteljske objekte',
		url: 'https://elkod.net',
		siteName: 'ELKOD',
		locale: 'hr_HR',
		type: 'website',
		images: [
			{
				url: 'https://elkod.net/LogoSlika.png',
				width: 1200,
				height: 630,
				alt: 'ELKOD limitatori buke'
			}
		]
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true
		}
	},
	icons: {
		icon: '/favicon.ico'
	}
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en" className={SpaceGrotesk.className}>
			<head>
				<title>ELKOD</title>
				<link rel="icon" href="/favicon.ico" /> {/* Dodat favicon umjesto fa TODO !!!! */}
				{/* Place GTM container snippet directly in the head */}
			</head>
			<body>
				<Navbar />
				<div>{children}</div>
				<Footer />
			</body>
		</html>
	)
}
