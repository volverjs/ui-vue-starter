import { VolverPlugin } from '@volverjs/ui-vue'
import { VvButton } from '@volverjs/ui-vue/components'
import icons from '@volverjs/ui-vue/icons'
import { AppModule } from '~/types'

// Setup Volver: https://volver.github.io/ui-vue/
export const install: AppModule = ({ app }) => {
	app.use(VolverPlugin, {
		// Add your own icons
		iconsCollections: icons,
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
