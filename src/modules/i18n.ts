import z from 'zod'
import type { AppModule } from '~/types'
import { createI18n } from 'vue-i18n'
import { makeZodI18nMap } from '@volverjs/zod-vue-i18n'
import en from '@volverjs/zod-vue-i18n/locales/en.json'
import messages from '@intlify/unplugin-vue-i18n/messages'

/*
 * Setup i18n
 * https://vue-i18n.intlify.dev/
 */
export const i18n = createI18n({
	legacy: false,
	globalInjection: true,
	fallbackWarn: false,
	messages: {
		en: {
			...en,
			// @ts-expect-error - missing types
			...messages.en,
		},
	},
	numberFormats: {
		en: {
			currency: {
				style: 'currency',
				currency: 'EUR',
				notation: 'standard',
			},
			decimal: {
				style: 'decimal',
				minimumFractionDigits: 2,
				maximumFractionDigits: 2,
			},
		},
	},
	datetimeFormats: {
		en: {
			short: {
				dateStyle: 'short',
			},
			'date-time': {
				dateStyle: 'short',
				timeStyle: 'short',
			},
			time: {
				timeStyle: 'short',
			},
		},
	},
})

const locale = useStorage('locale', import.meta.env.VITE_I18N_DEFAULT_LOCALE)
i18n.global.locale.value = locale.value

watch(i18n.global.locale, (newValue) => {
	locale.value = newValue
})

// eslint-disable-next-line
// @ts-ignore
z.setErrorMap(makeZodI18nMap(i18n))

export const install: AppModule = ({ app }) => {
	app.use(i18n)
}
