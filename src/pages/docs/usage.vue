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
			<h3>Development</h3>
			<p>
				Just run and visit
				<code class="text-smaller">http://localhost:8080</code>
			</p>
			<PjCodeBlock :code="['pnpm dev']" />
		</section>
		<section>
			<h3>Build</h3>
			<p>To build the App, run</p>
			<PjCodeBlock :code="['pnpm build']" />
			<p>
				And you will see the generated file in
				<code class="text-smaller">dist</code> that ready to be served.
			</p>
		</section>
	</div>
</template>

<i18n lang="json">
{
	"en": {
		"title": "Usage",
		"description": "How to use this template."
	}
}
</i18n>
