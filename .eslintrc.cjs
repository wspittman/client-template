module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	plugins: [
		'react',
		'@typescript-eslint',
	],
	extends: [
    'standard-with-typescript',
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'plugin:react-hooks/recommended',
	],
	rules: {
		'@typescript-eslint/no-unused-vars': ['error', { 'ignoreRestSiblings': true }],
		'@typescript-eslint/space-before-function-paren': ['error', 'never']
	},
	parserOptions: {
		'project': './tsconfig.json'
	},
	settings: {
		react: {
			version: 'detect'
		}
	}
};
