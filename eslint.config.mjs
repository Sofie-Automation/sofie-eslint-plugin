import { generateEslintConfig } from '@sofie-automation/code-standard-preset/eslint/main.mjs'
import eslintPlugin from 'eslint-plugin-eslint-plugin'

const extendedRules = await generateEslintConfig({
	ignores: ['dist'],
})

extendedRules.push({
	files: ['src/**/*'],
	plugins: {
		'eslint-plugin': eslintPlugin,
	},
	rules: {
		'eslint-plugin/require-meta-docs-description': 'error',
		'n/no-missing-import': 'off',
	},
})

export default extendedRules
