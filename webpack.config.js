const path = require('path');
const webpack = require('webpack');

const config = {
	entry: {
		app: path.join(__dirname, 'src', 'main.ts')
	},
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'main.js'
	},
	resolve: {
		extensions: ['.ts', '.js', '.json']
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