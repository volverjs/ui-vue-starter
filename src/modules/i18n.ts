import { i18n } from '~/common/I18n'
import type { AppModule } from '~/types'

export const install: AppModule = ({ app }) => {
	app.use(i18n)
}
