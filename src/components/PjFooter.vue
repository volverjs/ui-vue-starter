<script setup lang="ts">
	const { t } = useI18n()
</script>

<template>
	<footer
		class="border-t border-alpha-1 border-solid text-word-3 text-14 p-16 text-center mt-32">
		{{ t('footer') }}
		<VvAction
			href="https://8wave.it"
			target="_blank"
			class="font-semibold"
			rel="noopener noreferrer">
			8 wave
		</VvAction>
	</footer>
</template>

<i18n lang="json">
{
	"en": {
		"footer": "Maintained with ♥️ by"
	}
}
</i18n>
