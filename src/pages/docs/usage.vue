<template>
	<div class="preflight">
		<h1 class="border-b border-surface-3">Usage</h1>
		<h3>Development</h3>
		<div class="mb-md">Just run and visit http://localhost:8080</div>
		<PjCodeBlock :code="['pnpm dev']" />
		<h3>Build</h3>
		<div class="mb-md">To build the App, run</div>
		<PjCodeBlock :code="['pnpm build']" />
		<div class="my-md">
			And you will see the generated file in `dist` that ready to be
			served.
		</div>
	</div>
</template>
