<script lang="ts" setup>
	import type { PropType } from 'vue'

	const props = defineProps({
		code: {
			type: [String, Array] as PropType<string | string[]>,
			default: '',
		},
	})
	const code = computed(() => {
		if (typeof props.code === 'string') {
			return props.code
		}
		return props.code.join('\n')
	})
</script>

<template>
	<code
		class="font-mono p-lg bg-surface text-left block rounded-lg shadow-md overflow-auto">
		<pre class="whitespace-pre">{{ code }}</pre>
	</code>
</template>
