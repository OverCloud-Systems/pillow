import { Server } from './bare/Server.mjs';
import { readFileSync } from 'fs';
import http from 'http';
import nodeStatic from 'node-static';

const bare =  new Server('/bare/', '');
const serve = new nodeStatic.Server('public/');

const server = http.createServer();

server.on('request', (request, response) => {
    if (bare.route_request(request, response)) return true;
    serve.serve(request, response);
});

server.on('upgrade', (req, socket, head) => {
	if(bare.route_upgrade(req, socket, head)) return;
	socket.end();
});

server.listen(process.env.PORT || 8080);

console.log('Server started!')

function antiShutdown() {
    console.log(''.concat('Server is running and handling requests. ', Math.floor(Math.random() * 1000)));

    setTimeout(() => {
        antiShutdown();
    }, 15000);
}

antiShutdown();