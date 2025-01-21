import requireTypedObjectValuesAndEntries from './rules/require-typed-object-values-and-entries'
import type { FlatConfig } from '@typescript-eslint/utils/ts-eslint'

export = {
	rules: {
		'require-typed-object-values-and-entries': requireTypedObjectValuesAndEntries,
	},
	configs: {
		all: {
			rules: {
				'@sofie-automation/require-typed-object-values-and-entries': 'error',
			},
		},
	} satisfies Record<string, FlatConfig.Config>,
}
