import * as path from 'path';
import * as http from 'http';

import * as express from 'express';

const socket 				= require('socket.io');

const app 					= express();
const server 				= http.createServer(app);

global.appRoot = path.join(__dirname, '..');

require('./middlewares').registerMiddlewares(app);
require('./routes').registerRoutes(app);
require('./sockets').registerSocket(socket(server));

server.listen(3000);
