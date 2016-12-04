import {Application} from 'express-serve-static-core';
import {configuration} from '../config/environment/index';

const bodyParser = require('body-parser');

const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpack = require('webpack');

const webpackConfig = require('./../config/webpack.config.ts');

const compiler = webpack(webpackConfig);

export function registerMiddlewares(app: Application): void {
// to support JSON-encoded bodies
  app.use(bodyParser.json());
// to support URL-encoded bodies
  app.use(bodyParser.urlencoded({
    extended: true
  }));

  if (configuration === 'production') {
    return;
  }
  app
    .use(webpackDevMiddleware(compiler, {
      watchOptions: {
        poll: true
      }
    }));
  app.use(webpackHotMiddleware(compiler, {
    log: console.log,
    path: '/__webpack_hmr',
    heartbeat: 10 * 1000
  }));
}
