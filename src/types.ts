import { App } from 'vue'
import { Router, RouteRecordRaw } from 'vue-router/auto'
import { HeadClient } from '@vueuse/head'
import { Pinia } from 'pinia'

interface AppContext<HasRouter extends boolean = true> {
	app: App<Element>
	router: HasRouter extends true ? Router : undefined
	routes: HasRouter extends true ? RouteRecordRaw[] : undefined
	head: HeadClient | undefined
	store: Pinia
}

export type AppModule = (ctx: AppContext) => void
