import {Application} from 'express-serve-static-core';

const bodyParser 						= require('body-parser');

const webpackDevMiddleware 	= require('webpack-dev-middleware');
const webpack 							= require('webpack');

const webpackConfig 				= require('./../webpack.config.js');

const compiler 			= webpack(webpackConfig);

export function registerMiddlewares(app: Application) {
  app
    .use(webpackDevMiddleware(compiler, {
      // lazy: true
    }));

// to support JSON-encoded bodies
  app.use(bodyParser.json());
// to support URL-encoded bodies
  app.use(bodyParser.urlencoded({
    extended: true
  }));
}