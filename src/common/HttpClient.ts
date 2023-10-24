import { createHttpClient } from '@volverjs/data/vue'

export const httpClient = createHttpClient({
	prefixUrl: import.meta.env.VITE_API_DOMAIN,
	retry: 2,
	hooks: {
		beforeRetry: [
			({ request, retryCount }) => {
				request.headers.set('x-retry-count', retryCount.toString())
			},
		],
	},
})
