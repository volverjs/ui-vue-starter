<script lang="ts" setup>
	defineProps({
		section: {
			type: String,
			default: '',
		},
		title: {
			type: String,
			default: '',
		},
	})
</script>

<template>
	<header>
		<span
			v-if="section"
			class="vv-text vv-text--size-4 font-serif text-brand">
			{{ section }}
		</span>
		<h1 v-if="title" class="vv-text vv-text--size-1 font-semibold mb-sm">
			{{ title }}
		</h1>
		<p class="vv-text text-word-2 max-w-prose">
			<slot />
		</p>
	</header>
</template>
