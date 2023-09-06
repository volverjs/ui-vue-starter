import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router/auto'
import { routes } from 'vue-router/auto/routes'
import { createHead } from '@vueuse/head'
import App from '~/App.vue'
import { AppModule } from '~/types'
import { logger } from './common/Logger'

// install all modules under `modules/`
const app = createApp(App)

// setup pages with layouts
const router = createRouter({
	history: createWebHistory(),
	linkActiveClass: 'selected',
	linkExactActiveClass: 'current',
})
app.use(router)

// setup head
const head = createHead()
app.use(head)

// setup store (auto-imported from pinia)
const store = createPinia()
app.use(store)

// install all modules under `modules/`
Promise.all(
	Object.values(
		import.meta.glob<{ install: AppModule }>('./modules/*.ts', {
			eager: true,
		}),
	).map((i) =>
		Promise.resolve(i.install?.({ app, router, routes, head, store })),
	),
)
	.then(() => {
		logger.log('All modules installed')
	})
	.catch((e) => {
		logger.error(e)
	})

app.mount('#app')
