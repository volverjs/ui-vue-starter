import { VolverPlugin, VvButton } from '@volverjs/ui-vue'
import icons from '@volverjs/ui-vue/icons'
import { UserModule } from '~/types'

// Setup Volver: https://volver.github.io/ui-vue/
export const install: UserModule = ({ app }) => {
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
