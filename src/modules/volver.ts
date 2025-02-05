import type { AppModule } from '~/types'
import { VolverPlugin } from '@volverjs/ui-vue'
import VvButton from '@volverjs/ui-vue/vv-button'

// Import default icons from Volver
// import icons from '@volverjs/ui-vue/icons'

// Setup Volver: https://volver.github.io/ui-vue/
export const install: AppModule = ({ app }) => {
	app.use(VolverPlugin, {
		// Add icon packages
		// iconsCollections: icons,

		// Add your own components through aliases
		aliases: {
			MyActionQuiet: VvButton,
		},

		// Set default props for your aliases
		defaults: {
			MyActionQuiet: {
				modifiers: 'action-quiet',
			},
		},
	})
}
