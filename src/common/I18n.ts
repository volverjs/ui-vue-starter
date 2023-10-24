import { createI18n } from 'vue-i18n'
import Zod from 'zod'
import { makeZodI18nMap } from '@volverjs/zod-vue-i18n'
import en from '@volverjs/zod-vue-i18n/locales/en.json'
import it from '@volverjs/zod-vue-i18n/locales/it.json'

// Import i18n resources
// https://vitejs.dev/guide/features.html#glob-import
const messages = Object.fromEntries(
	Object.entries(
		import.meta.glob<{ default: { [locale: string]: object } }>(
			'../locales/*.y(a)?ml',
			{
				eager: true,
			},
		),
	).map(([key, value]) => {
		const yaml = key.endsWith('.yaml')
		return [key.slice(11, yaml ? -5 : -4), value.default]
	}),
)

/*
 * Setup i18n
 * https://vue-i18n.intlify.dev/
 */
export const i18n = createI18n({
	legacy: false,
	globalInjection: true,
	fallbackWarn: false,
	locale: import.meta.env.VITE_I18N_DEFAULT_LOCALE,
	messages,
	numberFormats: {
		it: {
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
		it: {
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

Zod.setErrorMap(makeZodI18nMap(i18n))

i18n.global.mergeLocaleMessage('en', {
	errors: en,
})

i18n.global.mergeLocaleMessage('it', {
	errors: it,
})
