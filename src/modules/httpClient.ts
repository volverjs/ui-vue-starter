import { httpClient } from '~/common/HttpClient'
import type { AppModule } from '~/types'

/*
 * Setup @volverjs/data HttpClient
 * https://github.com/volverjs/data
 */
export const install: AppModule = ({ app }) => {
	app.use(httpClient)
}
