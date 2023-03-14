'use strict'

module.exports = {
	extends: ['./node_modules/@sofie-automation/code-standard-preset/eslint/main', 'plugin:eslint-plugin/recommended'],
	overrides: [
		{
			files: ['*'],
			rules: {
				'eslint-plugin/require-meta-docs-description': 'error',
			},
		},
	],
}
