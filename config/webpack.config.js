const path = require('path');
const webpack = require('webpack');

const config = {
	entry: {
		app: path.join(__base, 'src', 'main.ts')
	},
	output: {
		path: path.join(__base, 'dist'),
		filename: 'main.js'
	},
	resolve: {
		extensions: ['.ts', '.js', '.json'],
		modules: ['.', 'node_modules']
	},
	devtool: 'source-map',
	module: {
		loaders: [
			{
				test: /\.ts$/,
				loaders: [
					'awesome-typescript-loader',
					'angular2-template-loader',
					'angular2-router-loader'
				]
			}
		]
	},
	plugins: [
		new webpack.ContextReplacementPlugin(
			/angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
			__dirname
		)
	]
};

module.exports = config;