<script lang="ts" setup>
	const sidebarMenuItems = [
		{
			title: 'Getting Started',
			children: [
				{
					label: 'Try it now!',
					to: {
						name: 'docs',
					},
				},
				{
					label: 'Checklist',
					to: {
						name: 'docs-checklist',
					},
				},
				{
					label: 'Usage',
					to: {
						name: 'docs-usage',
					},
				},
			],
		},
		{
			title: 'Examples',
			children: [
				{
					label: 'Forms',
					to: {
						name: 'docs-forms',
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
			<div class="px-lg py-md">
				<PjSidebar v-bind="{ menuItems: sidebarMenuItems }" />
			</div>
			<main class="flex flex-1 bg-surface-1">
				<div
					class="w-full lg:w-10/12 xl:w-9/12 xxl:w-7/12 pr-3/12 p-lg mx-auto">
					<RouterView />
				</div>
			</main>
		</div>
	</div>
</template>
