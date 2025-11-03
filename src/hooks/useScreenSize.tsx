'use client'

import { useState, useEffect } from 'react'

interface ScreenSize {
	width: number | undefined
	height: number | undefined
}

export const useScreenSize = () => {
	const [screenSize, setScreenSize] = useState<ScreenSize>({
		width: undefined,
		height: undefined
	})

	useEffect(() => {
		const handleResize = () => {
			setScreenSize({
				width: window.innerWidth,
				height: window.innerHeight
			})
		}

		// Check if window object is available (i.e., if code is running in the browser)
		if (typeof window !== 'undefined') {
			// Add event listener only if window object is available
			window.addEventListener('resize', handleResize)

			// Initial screen size
			setScreenSize({
				width: window.innerWidth,
				height: window.innerHeight
			})

			// Clean up the event listener when the component unmounts
			return () => {
				window.removeEventListener('resize', handleResize)
			}
		}
	}, [])

	return screenSize
}

export default useScreenSize
