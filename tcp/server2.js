var net = require('net');

/**********************************************/
/**************    init tcp server   **********/
/**********************************************/
var server = net.createServer(function(socket) {
    console.log('get connection ...')
	socket.write('Echo server\r\n');
	socket.pipe(socket);
});


server.listen(1337, function() {  
  console.log('server listening to %j', server.address());
  server.on('connection', (conn) => {  
    var remoteAddress = conn.remoteAddress + ':' + conn.remotePort;
    console.log('new client connection from %s', remoteAddress);
  
    conn.on('data', onConnData);
    conn.once('close', onConnClose);
    conn.on('error', onConnError);
  
    function onConnData(d) {
      console.log(`   1. Recived Data from ${remoteAddress}: ${d.length} bytes`);
      console.log(`   `, d)
    //   conn.write('doneMES');
    }
  
    function onConnClose() {
      console.log(`   2. Closed connention : ${remoteAddress}`, );
    }
  
    function onConnError(err) {
      console.log('Connection %s error: %s', remoteAddress, err.message);
    }
  });
});



/**********************************************/
/****************  event handle   *************/
/**********************************************/

