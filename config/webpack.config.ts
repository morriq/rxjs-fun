const path = require('path');
const webpack = require('webpack');

const config = {
  entry: [
    path.join(global.__base, 'src', 'app.ts'),
    // only dev:
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000'
  ],
  output: {
    path: path.join(global.__base, 'dist'),
    filename: 'app.js'
  },
  resolve: {
    extensions: ['.ts', '.js', '.json'],
    modules: ['.', 'node_modules']
  },
  // only dev
  // devtool: 'source-map',
  devtool: false,
  cache: true,
  module: {
    loaders: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loaders: [
          'awesome-typescript-loader',
          'angular2-template-loader',
          'angular2-router-loader'
        ]
      }
    ]
  },
  plugins: [
    // only dev
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.js',
      minChunks: (module: any) => {
        let userRequest = module.userRequest;

        if (typeof userRequest !== 'string') {
          return false;
        }

        return userRequest.indexOf('node_modules') >= 0;
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