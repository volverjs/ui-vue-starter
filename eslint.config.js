import pluginJs from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import {
	defineConfigWithVueTs,
	vueTsConfigs,
} from '@vue/eslint-config-typescript'
import pluginVueI18n from '@intlify/eslint-plugin-vue-i18n'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import languageOptions from './.eslintrc-auto-import.json' with { type: 'json' }

export default defineConfigWithVueTs(
	{
		ignores: [
			'**/dist/*',
			'**/node_modules/**',
			'**/@volverjs/**',
			'**/volver/**',
			'**/*.cjs',
			'**/*.mjs',
			'**/*.json',
			'**/*.yaml',
			'**/*.svg',
		],
	},
	pluginJs.configs.recommended,
	...pluginVue.configs['flat/recommended'],
	vueTsConfigs.recommended,
	...pluginVueI18n.configs['flat/recommended'],
	{
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
		},
		rules: {
			'no-console': 'warn',
			'no-debugger': 'warn',
			'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
			'vue/multi-word-component-names': 'off',
			'vue/no-v-html': 'off',
			'no-unused-vars': 'off',
			'sort-imports': 'off',
			// for shims Window interface
			'@typescript-eslint/no-empty-interface': 'off',
			// enable _ for unused vars
			'@typescript-eslint/no-unused-vars': [
				'error',
				{
					args: 'all',
					argsIgnorePattern: '^_',
					caughtErrors: 'all',
					caughtErrorsIgnorePattern: '^_',
					destructuredArrayIgnorePattern: '^_',
					varsIgnorePattern: '^_',
					ignoreRestSiblings: true,
				},
			],
			'@intlify/vue-i18n/no-raw-text': 'off',
		},
		settings: {
			'vue-i18n': {
				localeDir: './src/locales/*.{json,json5,yaml,yml}',
				messageSyntaxVersion: '^9.0.0',
			},
		},
	},
	{
		files: ['src/**/*'],
		languageOptions,
	},
	eslintPluginPrettierRecommended,
)
