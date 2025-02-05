import type { App } from 'vue'
import type { Router } from 'vue-router'
import type { Pinia } from 'pinia'

interface AppContext<HasRouter extends boolean = true> {
	app: App<Element>
	router: HasRouter extends true ? Router : undefined
	store: Pinia
}

export type AppModule = (ctx: AppContext) => void
