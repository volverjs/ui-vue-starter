module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: [
		'./.eslintrc-auto-import.json',
		'eslint:recommended',
		'plugin:vue/vue3-recommended',
		'@vue/typescript/recommended',
		'prettier',
	],
	rules: {
		// 'no-console': process.env.NODE_ENV === 'development' ? 'off' : 'error',
		'no-debugger': process.env.NODE_ENV === 'development' ? 'off' : 'error',
		'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
		'vue/multi-word-component-names': 'off',
		'no-unused-vars': 'off',
		'sort-imports': 'off',
		// for shims Window interface
		'@typescript-eslint/no-empty-interface': 'off',
	},
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
}
