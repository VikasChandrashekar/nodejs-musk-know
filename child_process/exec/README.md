# chile process

 - Node is designed for efficient I/O processes
 - Sometimes applications require more CPU intensive work, which may block the event-loop. 
 -  Node.js externalize these CPU-intensive processes, thus freeing the event-loop.


 #### To use

This module contains an exec function, which can execute commands, and return the result in a callback:

```js
exec(command, callback)
```

 ```js
 var child_process = require('child_process');

child_process.exec('ls', function (err, stdout, stderr){
    console.log(stdout);
});
 ```


### Options for Child Process

 1. cwd — forcibly change the current working directory
 2. encoding — expected encoding for output; defaults to ‘uft8’ for UTF-8 encoding. Node supports ‘ascii’, ‘utf8’, ‘ucs2’ and ‘base64’
 3. timeout — number of milliseconds to wait for the child process to finish executing
 4. maxBuffer — specify the maximum size of the std output stream
 5. killSignal — define which signal is sent to the child process if timeout is exceeded (default is SIGTERM, but there are dozens of UNIX signals that I will not copy down here)
 6. env — defaults to null, specifies environment variables for the child process to inherit, aside from those in the parent environment

 7. The exec() function, however, provides no communication between the parent and the child

#### Env as options

```js
child_process.exec('ls', { env: envJson}, callback);
```


 [Tutorial by Graeme](https://medium.com/@graeme_boy/how-to-optimize-cpu-intensive-work-in-node-js-cdc09099ed41)