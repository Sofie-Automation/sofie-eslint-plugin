import { ESLintUtils } from '@typescript-eslint/utils'
import rule from '../require-typed-object-values-and-entries'

const ruleTester = new ESLintUtils.RuleTester({
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: '../../../tsconfig.json',
		tsconfigRootDir: __dirname,
	},
})

ruleTester.run('object-things-require-generic', rule, {
	valid: [
		{
			code: 'const a = Object.values<string>(b)',
			options: [],
		},
		{
			code: 'const a = Object.keys(b)',
			options: [],
		},
		{
			code: 'const a = Object.entries<string>(b)',
			options: [],
		},
	],
	invalid: [
		{
			code: 'const a = Object.values(b)',
			errors: [{ messageId: 'useGenericValues' }],
		},
		{
			code: 'const a = Object.entries(b)',
			errors: [{ messageId: 'useGenericEntries' }],
		},
	],
})
