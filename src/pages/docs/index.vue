<script setup lang="ts">
	const { t } = useI18n()
</script>

<template>
	<PjHeader
		:section="$t('pj.section.gettingStarted')"
		:title="t('title')"
		class="mb-lg">
		{{ t('description') }}
	</PjHeader>

	<div class="preflight flex flex-col gap-lg">
		<section>
			<h3>{{ t('firstSectionTitle') }}</h3>
			<p>{{ t('firstSectionDescription') }}</p>
			<VvButton
				href="https://github.com/volverjs/ui-vue-starter/generate"
				icon="akar-icons:github-fill"
				modifiers="secondary"
				target="_blank"
				:label="t('generateRepo')" />
		</section>
		<section>
			<h3>{{ t('secondSectionTitle') }}</h3>
			<p>{{ t('secondSectionDescription') }}</p>
			<PjCodeBlock
				:code="[
					'npx degit volverjs/ui-vue-starter my-app',
					'cd my-app',
					'pnpm i',
				]" />
		</section>
	</div>
</template>

<i18n lang="json">
{
	"en": {
		"title": "Try it now!",
		"description": "Generate a repo from this template on GitHub or clone it locally.",
		"firstSectionTitle": "Github Template",
		"firstSectionDescription": "Create a repo from this template on GitHub.",
		"secondSectionTitle": "Clone Locally",
		"secondSectionDescription": "Clone the repo locally and install the dependencies.",
		"generateRepo": "Generate Repo"
	}
}
</i18n>
