const path 					= require('path');
const http 					= require('http');

const express 				= require('express');
const bodyParser 			= require('body-parser');
const socket 				= require('socket.io');

const webpackDevMiddleware 	= require('webpack-dev-middleware');
const webpack 				= require('webpack');
const webpackConfig 		= require('./../webpack.config.js');

const app 					= express();
const compiler 				= webpack(webpackConfig);
const server 				= http.createServer(app);
const io 					= socket(server);

global.appRoot = path.join(__dirname, '..');

app
	.use(webpackDevMiddleware(compiler, {
		// lazy: true
	}));

app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
	extended: true
}));

app.use('/users', require('./api/users'));

app.get('/*', (req, res) => {
	res.sendFile(path.join(appRoot, 'src', 'index.html'));
});

server.listen(3000);

io.on('connect', socket => {
	socket.on('dd', () => {
		console.log(3);
	})
});