import { defineConfig } from 'vite'
import path from 'path'
import Vue from '@vitejs/plugin-vue'
import ESLint from 'vite-plugin-eslint'
import Stylelint from 'vite-plugin-stylelint'
import VueRouter from 'unplugin-vue-router/vite'
import { getPascalCaseRouteName } from 'unplugin-vue-router'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import VueI18n from '@intlify/unplugin-vue-i18n/vite'
import { VitePWA } from 'vite-plugin-pwa'
import { VolverResolver } from '@volverjs/ui-vue/resolvers/unplugin'
import WebfontDownload from 'vite-plugin-webfont-dl'

export default defineConfig({
	resolve: {
		alias: {
			'~/': `${path.resolve(__dirname, 'src')}/`,
		},
	},

	plugins: [
		// https://github.com/vitejs/vite-plugin-vue
		Vue({
			include: [/\.vue$/],
		}),

		// https://github.com/vuejs/eslint-plugin-vue
		ESLint(),

		// https://github.com/ModyQyW/vite-plugin-stylelint
		Stylelint(),

		// https://github.com/posva/unplugin-vue-router
		VueRouter({
			getRouteName: (routeNode) => getPascalCaseRouteName(routeNode),
		}),

		// https://github.com/antfu/unplugin-vue-components
		Components({
			extensions: ['vue'],
			// allow auto import and register components
			include: [/\.vue$/, /\.vue\?vue/],
			dts: 'src/components.d.ts',
			exclude: [
				/[\\/]ui-vue[\\/]/,
				/[\\/]\.git[\\/]/,
				/[\\/]\.nuxt[\\/]/,
			],
			resolvers: [
				VolverResolver({
					importStyle: 'scss',
					directives: true,
					cherryPick: true,
				}),
			],
		}),

		// https://github.com/antfu/unplugin-auto-import
		AutoImport({
			imports: [
				'vue',
				'vue-router',
				'vue-i18n',
				'@vueuse/head',
				'@vueuse/core',
				'pinia',
			],
			dts: 'src/auto-imports.d.ts',
			dirs: ['src/composables', 'src/constants'],
			vueTemplate: true,
			eslintrc: {
				enabled: true,
			},
		}),

		// https://github.com/intlify/bundle-tools/tree/main/packages/unplugin-vue-i18n
		VueI18n({
			include: [path.resolve(__dirname, './src/locales/**')],
		}),

		// https://github.com/antfu/vite-plugin-pwa
		VitePWA({
			registerType: 'autoUpdate',
			includeAssets: ['favicon.svg', 'safari-pinned-tab.svg'],
			manifest: {
				name: 'Volver Startup Template',
				short_name: 'Volver',
				theme_color: '#ffffff',
				icons: [
					{
						src: '/pwa-192x192.png',
						sizes: '192x192',
						type: 'image/png',
					},
					{
						src: '/pwa-512x512.png',
						sizes: '512x512',
						type: 'image/png',
					},
					{
						src: '/pwa-512x512.png',
						sizes: '512x512',
						type: 'image/png',
						purpose: 'any maskable',
					},
				],
			},
		}),

		// https://github.com/feat-agency/vite-plugin-webfont-dl
		WebfontDownload([
			'https://fonts.googleapis.com/css2?family=Zilla+Slab:wght@400;700&display=swap',
		]),
	],

	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@use "~/assets/scss/settings" as *;`,
				api: 'modern',
			},
		},
	},
})
