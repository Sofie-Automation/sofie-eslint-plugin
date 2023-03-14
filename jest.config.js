/** @typedef {import('ts-jest/dist/types')} */
module.exports = {
	moduleFileExtensions: ['js', 'ts'],
	transform: {
		'^.+\\.(ts|tsx)$': [
			'ts-jest',
			{
				tsconfig: 'tsconfig.json',
			},
		],
	},
	testMatch: ['**/__tests__/**/*.spec.(ts|js)'],
	testPathIgnorePatterns: ['integrationTests'],
	testEnvironment: 'node',
	coverageThreshold: {
		global: {
			branches: 0,
			functions: 0,
			lines: 0,
			statements: 0,
		},
	},
	coverageDirectory: './coverage/',
	collectCoverage: false,
	collectCoverageFrom: [
		'**/src/**',
		'!**/src/copy/**',
		'!**/__tests__/**',
		'!**/__mocks__/**',
		'!**/node_modules/**',
		'!**/dist/**',
	],
	preset: 'ts-jest',
}
