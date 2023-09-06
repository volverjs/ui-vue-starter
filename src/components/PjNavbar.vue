<script lang="ts" setup>
	const { isDark, toggleDark } = useTheme()
</script>
<template>
	<nav class="flex border-b border-surface-3 p-16 items-center">
		<VvAction
			:to="{ name: 'Root' }"
			class="flex items-center"
			title="Go to home">
			<img src="/volverjs.svg" alt="Volver" class="w-26 block mr-10" />
			<span class="text-18 font-semibold">Volverjs</span>
		</VvAction>
		<div class="vv-button-group ml-auto">
			<!-- @see modules/volver.ts for component aliases -->
			<MyActionQuiet
				:icon="isDark ? 'akar-icons:moon-fill' : 'akar-icons:sun-fill'"
				@click="toggleDark()" />
			<MyActionQuiet
				href="https://github.com/volverjs/ui-vue-starter"
				icon="akar-icons:github-fill"
				target="_blank" />
		</div>
	</nav>
</template>
