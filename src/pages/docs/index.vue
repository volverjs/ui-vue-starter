<template>
	<PjHeader section="Getting started" title="Try it now!" class="mb-lg">
		Generate a repo from this template on GitHub or clone it locally.
	</PjHeader>

	<div class="preflight">
		<div class="mb-lg">
			<h3>Github Template</h3>
			<p>Create a repo from this template on GitHub.</p>
			<VvButton
				href="https://github.com/volverjs/ui-vue-starter/generate"
				icon="akar-icons:github-fill"
				modifiers="secondary"
				target="_blank"
				label="Generate Repo" />
		</div>
		<div>
			<h3>Clone Locally</h3>
			<p>Clone the repo locally and install the dependencies.</p>
			<PjCodeBlock
				:code="[
					'npx degit volverjs/ui-vue-starter my-app',
					'cd my-app',
					'pnpm i',
				]" />
		</div>
	</div>
</template>
