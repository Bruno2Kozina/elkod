export const sizes = {
	mobileS: 320,
	mobileM: 375,
	mobileL: 425,
	tablet: 768,
	laptop: 1024,
	laptopM: 1180,
	laptopL: 1440,
	desktop: 2560
}

export const devices = {
	mobileS: `(max-width: ${sizes.mobileS}px)`,
	mobileM: `(max-width: ${sizes.mobileM}px)`,
	mobileL: `(max-width: ${sizes.mobileL}px)`,
	tablet: `(max-width: ${sizes.tablet}px)`,
	laptop: `(max-width: ${sizes.laptop}px)`,
	laptopM: `(max-width: ${sizes.laptopM}px)`,
	laptopL: `(max-width: ${sizes.laptopL}px)`,
	desktop: `(max-width: ${sizes.desktop}px)`
}
