<script setup lang="ts">
	import '~/composables/useTheme'
	import { useAlert } from '@volverjs/ui-vue/composables'

	const { removeAlert, alerts } = useAlert()

	const { colorHex } = useColor('brand')
	const { t: $t } = useI18n({
		useScope: 'global',
	})

	useHead({
		title: $t('pj.title'),
		meta: [
			{
				name: 'description',
				content: $t('pj.description'),
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
		inline="end"
		block="top"
		position="fixed"
		@close="removeAlert" />
</template>
