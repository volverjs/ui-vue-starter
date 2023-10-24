import { z as Zod } from 'zod'
import { makeZodI18nMap } from '@volverjs/zod-vue-i18n'

const zDate = Zod.string()
	.regex(/(\d{4})-\d{2}-(\d{2})/)
	.transform((value) => value.substring(0, 10))

const zPercentage = Zod.number().min(0).max(100).default(0)
const zPlate = Zod.string().max(7)
const zChassis = Zod.string().transform((value) => {
	const toReturn = '0000000' + value
	return toReturn.substring(toReturn.length - 7, toReturn.length)
})
const zNotes = Zod.string().max(1200).optional()

export { Zod, zDate, zPercentage, zPlate, zNotes, zChassis, makeZodI18nMap }
