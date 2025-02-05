<script setup lang="ts">
	const { t } = useI18n()
</script>

<template>
	<div class="flex flex-col flex-1 mx-auto px-lg min-w-full bg-surface-1">
		<div class="flex flex-col items-center justify-center py-lg my-auto">
			<a href="https://volverjs.github.io/style" target="_blank">
				<img src="/volverjs.svg" class="logo" alt="Volverjs logo" />
			</a>
			<div class="text-center mb-lg">
				<h1 class="vv-text vv-text--size-1 font-serif font-bold">
					{{ $t('pj.title') }}
				</h1>
				<h2 class="vv-text vv-text--size-4 text-word-3 mb-lg">
					{{ $t('pj.description') }}
				</h2>
				<PjCodeBlock
					:code="[
						'npx degit volverjs/ui-vue-starter my-app',
						'cd my-app',
						'pnpm i',
					]" />
			</div>
			<VvButtonGroup>
				<VvButton
					:to="{
						name: 'Docs',
					}"
					modifiers="primary rounded">
					{{ t('gettingStarted') }}
				</VvButton>
				<VvButton
					modifiers="secondary rounded"
					target="_blank"
					href="https://github.com/volverjs/ui-vue">
					{{ t('uiVue') }}
				</VvButton>
			</VvButtonGroup>
		</div>
		<PjFooter />
	</div>
</template>

<i18n lang="json">
{
	"en": {
		"gettingStarted": "Getting Started",
		"uiVue": "UI Vue"
	}
}
</i18n>
