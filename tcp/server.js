/*
In the node.js intro tutorial (http://nodejs.org/), they show a basic tcp 
server, but for some reason omit a client connecting to it.  I added an 
example at the bottom.
Save the following server in example.js:
*/

var net = require('net');

var server = net.createServer(function(socket) {
    console.log('get connection ...')
	socket.write('Echo server\r\n');
	socket.pipe(socket);
});

var hostname = '127.0.0.1';
var port = 1337;
console.log(`running on ${hostname}:${port}:`)
server.listen(port, 1337);