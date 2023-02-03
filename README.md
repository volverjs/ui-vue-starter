<div align="center">

[![volverjs](public/volverjs.svg)](https://volverjs.github.io/style)

## @volverjs/ui-vue-starter

Inspired by [Vitesse](https://github.com/antfu/vitesse) ❤

`vue` `volverjs` `ui` `vue3` `vite` `template` `starter`\
`components` `component-library`

<br>

#### proudly powered by

<br>

[![24/Consulting](public/24consulting.svg)](https://24consulting.it)

<br>

</div>

## Features

-   ⚡️ [Vue 3](https://github.com/vuejs/core), [Vite](https://github.com/vitejs/vite), [pnpm](https://pnpm.io/), [esbuild](https://github.com/evanw/esbuild) - born with fastness

-   🗂 [File based routing](./src/pages)

-   📦 [Components auto importing](./src/components)

-   🍍 [State Management via Pinia](https://pinia.vuejs.org/)

-   📲 [PWA](https://github.com/antfu/vite-plugin-pwa)

-   🎨 [@volverjs/ui-vue](https://github.com/volverjs/ui-vue)

-   🌍 [I18n ready](./locales)

-   🔥 Use the [new `<script setup>` syntax](https://github.com/vuejs/rfcs/pull/227)

-   📥 [APIs auto importing](https://github.com/antfu/unplugin-auto-import) - use Composition API and others directly

-   🦾 TypeScript, of course

<br>

## Pre-packed

### Volverjs UI Vue

-   [@volverjs/ui-vue](https://github.com/volverjs/ui-vue) - The lightweight Vue 3 component library

### Plugins

-   [Vue Router](https://github.com/vuejs/router)
    -   [`vite-plugin-pages`](https://github.com/hannoeru/vite-plugin-pages) - File system based routing
-   [Pinia](https://pinia.vuejs.org) - Intuitive, type safe, light and flexible Store for Vue using the composition api
-   [`unplugin-vue-components`](https://github.com/antfu/unplugin-vue-components) - Components auto import
-   [`unplugin-auto-import`](https://github.com/antfu/unplugin-auto-import) - Directly use Vue Composition API and others without importing
-   [`vite-plugin-pwa`](https://github.com/antfu/vite-plugin-pwa) - PWA
-   [Vue I18n](https://github.com/intlify/vue-i18n-next) - Internationalization
    -   [`unplugin-vue-i18n`](https://github.com/intlify/bundle-tools/tree/main/packages/unplugin-vue-i18n) - Unplugin for Vue I18n
-   [VueUse](https://github.com/antfu/vueuse) - Collection of useful composition APIs
-   [`@vueuse/head`](https://github.com/vueuse/head) - Manipulate document head reactively

### Coding Style

-   Use Composition API with [`<script setup>` SFC syntax](https://github.com/vuejs/rfcs/pull/227)
-   [ESLint](https://eslint.org/) with typescript and vue3 recommended
-   [Stylelint](https://stylelint.io/) with recommended rules
-   [Prettier](https://prettier.io/) with single quotes, no semi, trailing comma and four spaces of tab width

### Dev tools

-   [TypeScript](https://www.typescriptlang.org/)
-   [pnpm](https://pnpm.js.org/) - Fast, disk space efficient package manager
-   [VS Code Extensions](./.vscode/extensions.json)
    -   [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) - Vue 3 `<script setup>` IDE support
    -   [Iconify IntelliSense](https://marketplace.visualstudio.com/items?itemName=antfu.iconify) - Icon inline display and autocomplete
    -   [i18n Ally](https://marketplace.visualstudio.com/items?itemName=lokalise.i18n-ally) - All in one i18n support
    -   [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
    -   [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
    -   [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)

## Try it now!

> @volverjs/ui-vue-starter requires Node >=14.18

### GitHub Template

[Create a repo from this template on GitHub](https://github.com/volverjs/ui-vue-starter/generate).

### Clone to local

If you prefer to do it manually with the cleaner git history

```bash
npx degit volverjs/ui-vue-starter my-app
cd my-app
pnpm i # If you don't have pnpm installed, run: npm install -g pnpm
```

## Checklist

When you use this template, try follow the checklist to update your info properly

-   [ ] Change the author name in `LICENSE`
-   [ ] Update `package.json` with your info
-   [ ] Change the title in `App.vue`
-   [ ] Change the favicon in `public`
-   [ ] Clean up the READMEs and remove routes

And, enjoy :)

## Usage

### Development

Just run and visit http://localhost:8080

```bash
pnpm dev
```

### Build

To build the App, run

```bash
pnpm build
```

And you will see the generated file in `dist` that ready to be served.

## Acknoledgements

This repo is inspired by 🏕 [antfu/vitesse](https://github.com/antfu/vitesse)

## License

[MIT](http://opensource.org/licenses/MIT)
