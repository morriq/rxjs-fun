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
  // devtool: 'source-map',
  devtool: false,
  cache: true,
  module: {
    loaders: [
      {
        test: /\.ts$/,
        exclude: /(node_modules)/,
        loaders: [
          'awesome-typescript-loader',
          'angular2-template-loader',
          'angular2-router-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: (module) => {
        let userRequest = module.userRequest;

        if (typeof userRequest !== 'string') {
          return false;
        }

        return userRequest.indexOf('bower_components') >= 0 ||
          userRequest.indexOf('node_modules') >= 0;
      }
    }),
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