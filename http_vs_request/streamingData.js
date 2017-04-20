const http = require('http');

var options = {
    host: 'localhost',
    port: 8000,
    path: '/',
    method: 'GET',
    headers: {
        accept: 'application/json'
    }
};

console.log("Start");
var x = http.request(options,function(res){
    console.log("Connected");
    res.on('data',function(data){
        console.log(data);
    });
});

x.end();