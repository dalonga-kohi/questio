module.exports = {
	globDirectory: 'dist/',
	globPatterns: [
		'**/*.{css,js,png,html,json}'
	],
	swDest: 'dist/worker.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};