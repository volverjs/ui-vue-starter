const hslToRgb = (h: number, s: number, l: number) => {
	l /= 100
	const a = (s * Math.min(l, 1 - l)) / 100
	const f = (n: number) => {
		const k = (n + h / 30) % 12
		const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1)
		return Math.round(255 * color)
			.toString(16)
			.padStart(2, '0')
	}
	return `#${f(0)}${f(8)}${f(4)}`
}

export function useColor(name: string) {
	const color = useCssVar(`--color-${name}`)
	const colorHex = computed(() => {
		if (!color.value) {
			throw new Error(`The color variable --color-${name} is not defined`)
		}
		const [h, s, l] = color.value
			.replace(/hsla\(|\/1|\)|deg|%/g, '')
			.trim()
			.replace(/\s\s+/g, ' ')
			.split(' ')
			.map((n: string) => Number(n))
		return hslToRgb(h, s, l)
	})
	return { color, colorHex }
}
