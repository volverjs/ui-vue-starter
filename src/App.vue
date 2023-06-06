<script setup lang="ts">
	import '~/composables/useTheme'
	import { useAlert } from '@volverjs/ui-vue/composables'

	const { removeAlert, alerts } = useAlert()

	const { colorHex } = useColor('brand')

	useHead({
		title: 'Volver Vue Starter',
		meta: [
			{
				name: 'description',
				content: 'A Volverjs Template (Vite + Vue) inspired by Vitesse',
			},
			{
				name: 'theme-color',
				content: colorHex,
			},
			{
				name: 'msapplication-TileColor',
				content: colorHex,
			},
		],
	})
</script>

<template>
	<RouterView />
	<VvAlertGroup
		name="alerts"
		:items="alerts"
		inline="middle"
		block="bottom"
		position="fixed"
		@close="removeAlert" />
</template>
