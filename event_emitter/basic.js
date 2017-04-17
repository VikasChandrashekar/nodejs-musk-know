var events = require('events');
var eventEmitter = new events.EventEmitter();

eventEmitter.on('doorOpen', ()=> console.log(' ring bell ....'));
eventEmitter.on('doorOpen', ()=> console.log(' opened ....'));
eventEmitter.on('talk', ()=> console.log(' talking ....'));

eventEmitter.emit('doorOpen');
eventEmitter.emit('talk');