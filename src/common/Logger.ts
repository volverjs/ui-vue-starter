export const logger = {
	log: (message: string) => {
		if (!import.meta.env.PROD) {
			console.log(message)
		}
	},
	error: (error: Error | null | undefined) => {
		if (!import.meta.env.PROD && error) {
			console.error(error)
		}
	},
	info: (message: string) => {
		if (!import.meta.env.PROD && message) {
			console.info(message)
		}
	},
}
