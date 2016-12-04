const path = require('path');
const webpack = require('webpack');

const config = {
  entry: {
    app: path.join(global.__base, 'src', 'app.ts')
  },
  output: {
    path: path.join(global.__base, 'dist'),
    filename: 'app.js'
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
    ),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    })
  ]
};

module.exports = config;