<script lang="ts" setup>
	const props = withDefaults(
		defineProps<{
			code: string | string[]
		}>(),
		{
			code: '',
		},
	)

	const code = computed(() => {
		if (Array.isArray(props.code)) {
			return props.code.join('\n')
		}
		return props.code
	})
</script>

<template>
	<code
		class="font-mono p-lg bg-surface text-left block rounded-lg shadow-md overflow-auto">
		<pre class="whitespace-pre">{{ code }}</pre>
	</code>
</template>
