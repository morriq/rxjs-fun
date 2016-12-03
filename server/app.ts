import * as path from 'path';
import * as http from 'http';

import * as process from 'process';
import * as express from 'express';

process.chdir('server');

const socket 				= require('socket.io');

const app 					= express();
const server 				= http.createServer(app);
server.listen(3000);

global.__base = path.join(__dirname, '..');

require('./middlewares').registerMiddlewares(app);
require('./routes').registerRoutes(app);
require('./sockets').registerSocket(socket(server));
