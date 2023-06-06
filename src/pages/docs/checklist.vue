<script setup lang="ts">
	const checkListOptions = [
		'Change the author name in LICENSE',
		'Update package.json with your info',
		'Change the title in App.vue',
		'Change the favicon in public',
		'Clean up the .README and remove routes',
	]
</script>

<template>
	<VvCheckboxGroup
		name="check-list"
		label="When you use this template, try follow the checklist to update your info
		properly:"
		:vertical="true"
		:options="checkListOptions" />

	<div class="text-28">And, enjoy :)</div>
</template>
