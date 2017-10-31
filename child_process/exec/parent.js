 var child_process = require('child_process');

child_process.exec('node child.js', 
    { "env": {"specialNumber" : 13} }, 
    function (err, stdout, stderr) {
        if (err) {
            throw err;
        }
        console.log(stdout);
    }
);