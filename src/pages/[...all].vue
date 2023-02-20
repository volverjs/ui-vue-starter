<template>
	<div class="flex flex-col items-center m-auto">
		<h1 class="vv-text vv-text--size-1 font-serif font-bold text-center">
			404 Error
		</h1>
		<p class="vv-text vv-text--size-4 text-word-3 text-center mb-lg">
			The page <em class="italic">'{{ routeParameters }}'</em> that you
			are looking for, may have been removed, deleted or possibly never
			existed.
		</p>
		<VvButton :to="{ name: 'index' }" modifiers="full-bleed" class="w-max">
			Back to home
		</VvButton>
	</div>
</template>

<script setup lang="ts">
	import { useAttrs } from 'vue'

	// get route parameters
	const attrs = useAttrs() as { all: string[] }
	const routeParameters = computed(() => {
		return attrs?.all?.join('/')
	})
</script>
