 var child_process = require('child_process');

child_process.exec('node -v', function (err, stdout, stderr){
    if (err) {
        console.log("err: " + err.code);
    }
    console.log(stdout);
});