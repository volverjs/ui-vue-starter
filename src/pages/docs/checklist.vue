<script setup lang="ts">
	const { t } = useI18n()

	const options = [
		t('license'),
		t('package'),
		t('appVue'),
		t('favicon'),
		t('readme'),
	]
</script>

<template>
	<PjHeader
		:section="$t('pj.section.gettingStarted')"
		:title="t('title')"
		class="mb-lg">
		{{ t('description') }}
	</PjHeader>

	<div class="preflight flex flex-col gap-lg">
		<VvCheckboxGroup name="check-list" vertical :options />
	</div>
</template>

<i18n lang="json">
{
	"en": {
		"title": "Checklist",
		"description": "When you use this template, try follow the checklist to update your info properly.",
		"license": "Change the author name in LICENSE",
		"package": "Update package.json with your info",
		"appVue": "Change the title in App.vue",
		"favicon": "Change the favicon in public folder",
		"readme": "Clean up the .README file"
	}
}
</i18n>
