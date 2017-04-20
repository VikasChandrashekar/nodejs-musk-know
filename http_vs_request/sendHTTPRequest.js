const http = require('http');
const port = 8000;

http.get({ 'content-length': '123',
  'content-type': 'text/plain',
  'connection': 'keep-alive',
  'host': 'localhost',
  'port': 8000,
  'accept': '*/*' }, (res) => {
  // Do stuff with response
  console.log(res.text)
});