import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createHead } from '@vueuse/head'
import routes from 'virtual:generated-pages'
import App from '~/App.vue'
import { UserModule } from '~/types'

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

Object.values(
	import.meta.glob<{ install: UserModule }>('./modules/*.ts', {
		eager: true,
	}),
).map((i) => i.install?.({ app, router, routes, head }))

app.mount('#app')
