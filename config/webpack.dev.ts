import {commonConfig} from './webpack.common';
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');

module.exports = webpackMerge(commonConfig, {
  entry: [
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000'
  ],
  devtool: 'source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
});
