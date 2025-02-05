<script setup lang="ts">
	const { t } = useI18n()
	const { t: $t } = useI18n({
		useScope: 'global',
	})

	const menuItems = [
		{
			title: $t('pj.section.gettingStarted'),
			children: [
				{
					label: t('tryItNow'),
					to: {
						name: 'Docs',
					},
				},
				{
					label: t('checklist'),
					to: {
						name: 'DocsChecklist',
					},
				},
				{
					label: t('usage'),
					to: {
						name: 'DocsUsage',
					},
				},
			],
		},
		{
			title: $t('pj.section.examples'),
			children: [
				{
					label: t('forms'),
					to: {
						name: 'DocsForms',
					},
				},
			],
		},
	]
</script>

<template>
	<div class="flex flex-col min-h-full">
		<PjNavbar />
		<div class="flex flex-1">
			<PjSidebar :menu-items />
			<main class="flex flex-1 flex-col bg-surface-1">
				<div
					class="w-full lg:w-10/12 xl:w-9/12 xxl:w-7/12 pr-3/12 p-lg mx-auto flex-1">
					<RouterView />
				</div>
				<PjFooter />
			</main>
		</div>
	</div>
</template>

<i18n lang="json">
{
	"en": {
		"tryItNow": "Try it now",
		"checklist": "Checklist",
		"usage": "Usage",
		"forms": "Forms"
	}
}
</i18n>
