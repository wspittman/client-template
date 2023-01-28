module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	plugins: [
		'react',
		'@typescript-eslint',
	],
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'plugin:react-hooks/recommended',
		'plugin:prettier/recommended',
		'plugin:import/recommended',
		'plugin:import/typescript',
	],
	rules: {
		'@typescript-eslint/no-unused-vars': ['error', { 'ignoreRestSiblings': true }],
		'@typescript-eslint/space-before-function-paren': ['error', 'never'],
		'import/no-default-export': 'error',
	},
	parserOptions: {
		'project': './tsconfig.json'
	},
	settings: {
		react: {
			version: 'detect'
		},
	  'import/resolver': {
			typescript: true,
			node: true,
		}
	}
};
