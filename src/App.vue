<script setup lang="ts">
	import '~/composables/useTheme'
	import { useRegisterSW } from 'virtual:pwa-register/vue'
	import { useDialog } from './composables/dialog'
	import { useAlertStore } from './store/alert'

	const { colorHex } = useColor('brand')
	const { t, locale } = useI18n()

	useHead({
		title: 'Volver Vue Starter',
		htmlAttrs: { lang: locale },
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

	// pwa
	const { offlineReady, needRefresh, updateServiceWorker } = useRegisterSW()
	const onPwaCancel = () => {
		offlineReady.value = false
		needRefresh.value = false
	}

	// alerts
	const { getAlertGroup } = useAlertStore()
	const alertGroupProps = getAlertGroup()

	// dialog
	const { getDialog } = useDialog()
	const PjGlobalDialog = getDialog()
</script>

<template>
	<RouterView />
	<!-- #region PWA -->
	<VvAlertGroup inline="end" block="bottom" position="fixed" name="pwa">
		<VvAlert
			v-if="offlineReady || needRefresh"
			role="alertdialog"
			modifiers="notification">
			{{ t('pwaText') }}
			<small class="block text-smaller mt-4">
				{{ t('pwaInfo') }}
			</small>
			<template #footer>
				<VvButtonGroup class="ml-auto">
					<VvButton
						modifiers="action"
						label="Aggiorna"
						@click="updateServiceWorker" />
					<VvButton
						modifiers="action-quiet"
						label="Annulla"
						@click="onPwaCancel" />
				</VvButtonGroup>
			</template>
		</VvAlert>
	</VvAlertGroup>
	<!-- #endregion -->

	<!-- #region global alerts -->
	<VvAlertGroup
		v-bind="alertGroupProps"
		inline="middle"
		block="bottom"
		stack
		reverse
		position="fixed"
		name="default" />
	<!-- #endregion -->

	<!-- #region global dialogs -->
	<PjGlobalDialog />
	<!-- #endregion -->
</template>

<i18n lang="yaml">
en:
    pwaText: A new update is available. Do you want to proceed with the installation?
    pwaInfo: The browser will be reloaded automatically.
</i18n>
