<script setup lang="ts">
	// get route parameters
	const attrs = useAttrs() as { all: string[] }
	const routeParameters = computed(() => {
		return attrs?.all?.join('/')
	})

	const { t } = useI18n()
</script>

<template>
	<div class="flex flex-col items-center m-auto">
		<h1 class="vv-text vv-text--size-1 font-serif font-bold text-center">
			{{ t('title') }}
		</h1>
		<i18n-t
			tag="p"
			keypath="description"
			class="vv-text vv-text--size-4 text-word-3 text-center mb-lg text-balance">
			<em class="italic">'{{ routeParameters }}'</em>
		</i18n-t>
		<VvButton
			:to="{ name: 'Root' }"
			modifiers="full-bleed"
			class="w-max"
			:label="$t('pj.action.backToHome')" />
	</div>
</template>

<i18n lang="json">
{
	"en": {
		"title": "404 Error",
		"description": "The page {0} that you are looking for, may have been removed, deleted or possibly never existed."
	}
}
</i18n>
