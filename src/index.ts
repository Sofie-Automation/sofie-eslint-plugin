import requireTypedObjectValuesAndEntries from './rules/require-typed-object-values-and-entries'

export = {
	rules: {
		'require-typed-object-values-and-entries': requireTypedObjectValuesAndEntries,
	},
	configs: {
		all: {
			plugins: ['@sofie-automation'],
			rules: {
				'@sofie-automation/require-typed-object-values-and-entries': 'error',
			},
		},
	},
}
