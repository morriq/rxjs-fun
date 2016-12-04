import * as path from 'path';
import * as http from 'http';

import * as express from 'express';
import * as socket from 'socket.io';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
global.__base = path.join(__dirname, '..');
process.chdir('server');

import {configuration} from '../config/environment/index';

const app     = express();
const server 	= http.createServer(app);
server.listen(configuration.port);

require('./middlewares').registerMiddlewares(app);
require('./routes').registerRoutes(app);
require('./sockets').registerSocket(socket(server));
require('./mongoose').registerMongoose();
