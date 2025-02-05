import type { AppModule } from '~/types'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createHead } from '@vueuse/head'
import { createPinia } from 'pinia'
import { routes } from 'vue-router/auto-routes'
import App from '~/App.vue'

// install all modules under `modules/`
const app = createApp(App)

// setup pages with layouts
const router = createRouter({
	history: createWebHistory(),
	routes,
	linkActiveClass: 'selected',
	linkExactActiveClass: 'current',
})
app.use(router)

// setup head
const head = createHead()
app.use(head)

// setup stores
const store = createPinia()
app.use(store)

Object.values(
	import.meta.glob<{ install: AppModule }>('./modules/*.ts', {
		eager: true,
	}),
).forEach((i) => i.install?.({ app, router, store }))

app.mount('#app')
