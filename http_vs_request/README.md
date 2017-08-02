# http vs request

#### HTTP message headers
 are represented by an object like this:
 - Keys are lowercased. Values are not modified.
```js
{ 'content-length': '123',
  'content-type': 'text/plain',
  'connection': 'keep-alive',
  'host': 'mysite.com',
  'accept': '*/*' }
```

#### request.end([data][, encoding][, callback])#
 - data <string> | <Buffer>
 - encoding <string>
 - callback <Function>

 - If the request is chunked, this will send the terminating '0\r\n\r\n'.
 - If data is specified, it is equivalent to calling response.write(data, encoding) followed by request.end(callback).

#### request.write(chunk[, encoding][, callback])#

 - chunk <string> | <Buffer>
 - encoding <string>
 - callback <Function>

 - Sends a chunk of the body. __By calling this method many times__, a request body can be sent to a server--in that case it is suggested to use the ['Transfer-Encoding', 'chunked'] header line when creating the request.
 - The encoding argument is optional and only applies when chunk is a string. Defaults to 'utf8'.


#### Class: http.Agent
An Agent is responsible for managing connection persistence and reuse for HTTP clients.


## Remark
#### Response object is a WritableStrea
Writing a response body out to the client is just a matter of using the usual stream methods.

```js
response.write('<html>');
response.write('<body>');
response.write('<h1>Hello, World!</h1>');
response.write('</body>');
response.write('</html>');
response.end();
```


Reference: 
[https://nodejs.org/api/http.html#http_http](https://nodejs.org/api/http.html#http_http)