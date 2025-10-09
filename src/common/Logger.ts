export const logger = {
	log: (message: string) => {
		if (!import.meta.env.PROD) {
			// eslint-disable-next-line no-console
			console.log(message)
		}
	},
	error: (error: Error | null | undefined) => {
		if (!import.meta.env.PROD && error) {
			// eslint-disable-next-line no-console
			console.error(error)
		}
	},
	info: (message: string) => {
		if (!import.meta.env.PROD && message) {
			// eslint-disable-next-line no-console
			console.info(message)
		}
	},
}
