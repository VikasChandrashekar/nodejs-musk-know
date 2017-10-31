
console.log('\n process.argv: ', process.argv[2])


// Listen for incoming data:
process.stdin.on('data', function (data) {
    console.log('Child: Received data: ' + data);

    var returnJson = {
      id : 1,
      name: 'peter'
    }
    process.stdout.write(JSON.stringify(returnJson));

});