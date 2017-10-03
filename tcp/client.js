
/* Or use this example tcp client written in node.js.  (Originated with 
example code from 
http://www.hacksparrow.com/tcp-socket-programming-in-node-js.html.) */

var net = require('net');
var fs = require('fs');
var FILEPATH = './tcp/img.jpg';

var hostname = '127.0.0.1';
var port = 1337;
console.log(`connecting to ${hostname}:${port}:`)

var client = new net.Socket();
client.connect(port, hostname, function() {
	
	console.log('	1. Connected');
	
	fileToBuffer(FILEPATH).then(
		data => {
			client.write(data, () => {
				client.end()
			})
		}
	)
});

client.on('data', function(data) {
	console.log('	2. Received: ' + data.length + 'bytes');
});

client.on('close', function() {
	console.log('	3. Connection closed');
});




/**********************************************/
/****************  file to buffer   ***********/
/**********************************************/

const fileToBuffer = (_path) =>  new Promise( (resolve, reject)=> {

	fs.readFile(_path, function (err, data ) {
		return (err)? reject(err) :resolve(data)
	})
})

	
	// console.log(' -------1 ')
    // var fileStream = fs.createReadStream(_path);
    // fileStream.on('error', function(err){
	// 	console.log(' -------2 ')
    //     console.log(err);
    // })
    // fileStream.on('open',function() {
	// 	console.log(' -------3 ')
    //     fileStream.pipe(_client);
    // });
