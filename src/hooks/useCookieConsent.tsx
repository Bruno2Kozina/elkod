'use client'

import { useState, useEffect, useCallback } from 'react'

export type ConsentValue = 'accepted' | 'rejected' | null

const STORAGE_KEY = 'elkod-cookie-consent'
const EVENT_NAME = 'elkod-cookie-consent-changed'

export const getStoredConsent = (): ConsentValue => {
	if (typeof window === 'undefined') return null
	const value = window.localStorage.getItem(STORAGE_KEY)
	if (value === 'accepted' || value === 'rejected') return value
	return null
}

export const setStoredConsent = (value: Exclude<ConsentValue, null>) => {
	if (typeof window === 'undefined') return
	window.localStorage.setItem(STORAGE_KEY, value)
	window.dispatchEvent(new CustomEvent(EVENT_NAME, { detail: value }))
}

export const useCookieConsent = () => {
	// `undefined` = nije još učitano (izbjegava SSR/hydration skok)
	const [consent, setConsent] = useState<ConsentValue | undefined>(undefined)

	useEffect(() => {
		setConsent(getStoredConsent())

		const handleChange = () => setConsent(getStoredConsent())
		window.addEventListener(EVENT_NAME, handleChange)
		window.addEventListener('storage', handleChange)
		return () => {
			window.removeEventListener(EVENT_NAME, handleChange)
			window.removeEventListener('storage', handleChange)
		}
	}, [])

	const accept = useCallback(() => setStoredConsent('accepted'), [])
	const reject = useCallback(() => setStoredConsent('rejected'), [])

	return { consent, accept, reject }
}

export default useCookieConsent
